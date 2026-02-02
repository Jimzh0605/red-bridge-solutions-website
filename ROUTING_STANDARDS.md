# URL Routing Standards

## PROHIBITED
- Hash routing (#/)
- HashRouter, createWebHashHistory, or any hash-based routing

## REQUIRED
- Clean path routing: `/about`, `/case-studies`
- BrowserRouter (React) / createWebHistory (Vue) / History mode (Angular)

## Active Routes
- `/` - Home
- `/about` - About page
- `/case-studies` - Case studies
- `/faq` - FAQ
- `/consultation` - Consultation
- `/portal` - Portal

## For Future Changes
1. All new routes must use clean paths
2. Test direct URL access before merging
3. Update this file when adding routes
4. If you see #/ in URLs → immediate bug fix required

## Deployment
- Platform: Cloudflare Pages
- Configuration: `_redirects` file handles SPA routing
- Workflow: Feature branch → Main (triggers auto-deploy)
