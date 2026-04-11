# Security Policy

## Security Measures Implemented

This portfolio website has the following security measures in place:

### 1. Environment Variables Protection
- `.env` files are **gitignored** and never committed
- Sensitive data (phone numbers, emails, API endpoints) stored in environment variables
- `.env.example` provided for template purposes

### 2. Security Headers
The following HTTP security headers are configured in `next.config.js`:

| Header | Purpose |
|--------|---------|
| `X-Frame-Options: SAMEORIGIN` | Prevents clickjacking attacks |
| `X-Content-Type-Options: nosniff` | Prevents MIME type sniffing |
| `X-XSS-Protection: 1; mode=block` | Enables browser XSS filter |
| `Strict-Transport-Security` | Forces HTTPS connections |
| `Referrer-Policy` | Controls referrer information leakage |
| `Permissions-Policy` | Disables unnecessary browser features |
| `Content-Security-Policy` | Restricts resource loading to trusted sources |

### 3. Input Validation & Sanitization
- **Contact Form**: Email, phone, and name validation
- **XSS Prevention**: HTML entity encoding for special characters
- **WhatsApp Number**: Phone number format validation and sanitization

### 4. External Link Security
- All external links use `rel="noopener noreferrer"` to prevent reverse tabnabbing
- Links to social media are validated against known domains

### 5. Form Security
- Client-side validation before submission
- Rate limiting ready (implement on backend)
- CSRF token ready (implement on backend when endpoint is configured)

## Deployment Checklist

Before deploying to production:

1. [ ] Copy `.env.example` to `.env.local` and fill in real values
2. [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
3. [ ] Configure `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` with your backend API
4. [ ] Add Google Analytics ID if using analytics
5. [ ] Update CSP header to include your actual domain
6. [ ] Test form submission end-to-end
7. [ ] Verify all security headers are present using browser dev tools

## Reporting a Vulnerability

If you discover a security issue, please contact: omr@example.com

## Third-Party Dependencies

Run `npm audit` regularly to check for vulnerabilities in dependencies.

## Content Security Policy Details

Current CSP allows:
- Scripts: self, inline, eval (for Next.js), Google Analytics
- Styles: self, inline, Google Fonts
- Fonts: self, Google Fonts CDN
- Images: self, Unsplash, data/blob URLs
- Connections: self, WhatsApp APIs

To tighten CSP further, remove `'unsafe-inline'` and `'unsafe-eval'` when possible.
