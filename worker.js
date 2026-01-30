export default {
  async fetch(request, env, ctx) {
    // 1. Handle CORS Preflight and Headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://www.redbridgesolutions.io', // Lock down to your domain
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
    }

    try {
      // 2. Parse and Validate Data
      const data = await request.json();
      const { firstName, lastName, email, phone, address, details } = data;

      if (!firstName || !lastName || !email) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // 3. Get Zoho Access Token (Canada Endpoint)
      const tokenResponse = await fetch('https://accounts.zohocloud.ca/oauth/v2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          refresh_token: env.ZOHO_REFRESH_TOKEN,
          client_id: env.ZOHO_CLIENT_ID,
          client_secret: env.ZOHO_CLIENT_SECRET,
          grant_type: 'refresh_token',
        }),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenData.access_token) {
        console.error('Zoho Auth Error:', tokenData);
        throw new Error('Failed to authenticate with Zoho');
      }

      // 4. Construct Email Content
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
      // Using /accounts/self/messages to send from the authenticated account
      const mailResponse = await fetch('https://mail.zohoapis.ca/api/accounts/self/messages', {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${tokenData.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromAddress: env.ZOHO_ACCOUNT_EMAIL,
          toAddress: env.ZOHO_ACCOUNT_EMAIL, // Sending to yourself
          subject: `New Consultation Request - ${firstName} ${lastName}`,
          content: emailContent,
          askReceipt: "yes"
        }),
      });

      const mailData = await mailResponse.json();

      if (mailData.status && mailData.status.code !== 200 && mailData.data?.code !== 'SUCCESS') {
        console.error('Zoho Mail API Error:', mailData);
        throw new Error('Failed to send email via Zoho');
      }

      // 6. Return Success
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } catch (error) {
      console.error('Worker Error:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};