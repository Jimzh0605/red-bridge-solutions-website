export async function onRequestPost(context) {
  const { request, env } = context;

  // Standard headers including CORS for your specific domain
  const responseHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://www.redbridgesolutions.io',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // 1. Parse Data
    const formData = await request.json();
    const { firstName, lastName, email, phone, address, details } = formData;

    // 2. Validation
    if (!firstName || !lastName || !email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }), 
        { status: 400, headers: responseHeaders }
      );
    }

    // 3. Get Zoho Access Token (Canada Endpoint)
    // Note: Use context.env to access environment variables in Pages Functions
    const tokenUrl = 'https://accounts.zohocloud.ca/oauth/v2/token';
    const tokenParams = new URLSearchParams({
      refresh_token: env.ZOHO_REFRESH_TOKEN,
      client_id: env.ZOHO_CLIENT_ID,
      client_secret: env.ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token',
    });

    const tokenResponse = await fetch(tokenUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenParams,
    });

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      console.error('Zoho Auth Error:', JSON.stringify(tokenData));
      throw new Error('Failed to authenticate with Zoho');
    }

    // 4. Construct Email
    const emailContent = `
New Consultation Request
------------------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'N/A'}
Address: ${address || 'N/A'}

Project Details:
${details || 'No details provided.'}
    `;

    // 5. Send Email via Zoho Mail API (Canada Endpoint)
    const mailUrl = 'https://mail.zohoapis.ca/api/accounts/self/messages';
    
    const mailResponse = await fetch(mailUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fromAddress: env.ZOHO_ACCOUNT_EMAIL,
        toAddress: env.ZOHO_ACCOUNT_EMAIL,
        subject: `New Consultation Request - ${firstName} ${lastName}`,
        content: emailContent,
        askReceipt: "yes"
      }),
    });

    const mailData = await mailResponse.json();

    // Check Zoho specific success codes
    if (mailData.status && mailData.status.code !== 200 && mailData.data?.code !== 'SUCCESS') {
      console.error('Zoho Mail API Error:', JSON.stringify(mailData));
      throw new Error('Failed to send email via Zoho');
    }

    // 6. Success Response
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }), 
      { status: 200, headers: responseHeaders }
    );

  } catch (error) {
    console.error('Function Error:', error.message);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }), 
      { status: 500, headers: responseHeaders }
    );
  }
}