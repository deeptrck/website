Careers system — Setup and testing

Environment variables (required):

- `SMTP_HOST` — SMTP host (e.g., smtp.sendgrid.net)
- `SMTP_PORT` — SMTP port (usually 587 or 465)
- `SMTP_USER` — SMTP username
- `SMTP_PASS` — SMTP password
- `SMTP_FROM` — optional From address (defaults to SMTP_USER)
- `HR_EMAIL` — email address that receives application notifications
- `BRAND_NAME` — optional brand used in confirmation emails

How to test locally (example curl):

```bash
curl -i -X POST "http://localhost:3000/api/careers/apply" \
  -F "jobSlug=senior-software-engineer" \
  -F "jobTitle=Senior Software Engineer" \
  -F "firstName=Test" \
  -F "lastName=Candidate" \
  -F "email=test@example.com" \
  -F "phone=+1234567890" \
  -F "links=https://linkedin.example" \
  -F "cover=I am excited to apply..." \
  -F "cv=@./sample-cv.pdf;type=application/pdf"
```

Notes
- The API accepts PDF, DOC, DOCX and enforces a 5MB limit.
- Ensure `nodemailer` is installed (already present in `package.json`).
- For production, use a reliable transactional email provider and secure env vars.
