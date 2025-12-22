import nodemailer from 'nodemailer';

type Attachment = { filename: string; content: Buffer; contentType?: string };

function safeText(s: any) {
  return String(s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendMail(opts: { to: string; subject: string; html: string; attachments?: Attachment[] }) {
  const transporter = createTransporter();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@example.com';

  if (!transporter) {
    // Development fallback: log the email instead of sending
    // This allows local testing without SMTP configured.
    // eslint-disable-next-line no-console
    console.warn('SMTP not configured — skipping real send. Mail preview: ', { to: opts.to, subject: opts.subject });
    return;
  }

  await transporter.sendMail({
    from,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
    attachments: opts.attachments?.map((a) => ({ filename: a.filename, content: a.content, contentType: a.contentType })),
  });
}

export function hrNotificationHtml({ jobTitle, jobSlug, firstName, lastName, email, phone, links, cover }: any) {
  return `
    <div style="font-family:system-ui,Arial,sans-serif;color:#111">
      <h2>New application: ${safeText(jobTitle)}</h2>
      <p><strong>Candidate:</strong> ${safeText(firstName)} ${safeText(lastName)}</p>
      <p><strong>Email:</strong> ${safeText(email)}</p>
      <p><strong>Phone:</strong> ${safeText(phone)}</p>
      <p><strong>Links:</strong> ${safeText(links)}</p>
      <h3>Cover letter</h3>
      <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px">${safeText(cover)}</div>
      <p style="font-size:12px;color:#666">Role: ${safeText(jobTitle)} (${safeText(jobSlug)})</p>
    </div>
  `;
}

export function applicantConfirmationHtml({ firstName, jobTitle }: any) {
  const brand = process.env.BRAND_NAME || 'Our Company';
  return `
    <div style="font-family:system-ui,Arial,sans-serif;color:#111">
      <h2>Thanks for applying to ${safeText(brand)}</h2>
      <p>Hi ${safeText(firstName)},</p>
      <p>We received your application for <strong>${safeText(jobTitle)}</strong>. Our hiring team will review your submission and be in touch if your background is a match.</p>
      <p>Best regards,<br/>${safeText(brand)} Recruiting</p>
    </div>
  `;
}

export async function sendHRNotification(params: {
  hrEmail: string;
  jobTitle: string;
  jobSlug: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  links?: string;
  cover: string;
  cv?: Attachment;
}) {
  const html = hrNotificationHtml(params);
  const attachments = params.cv ? [params.cv] : undefined;
  await sendMail({ to: params.hrEmail, subject: `New application — ${params.jobTitle} — ${params.firstName} ${params.lastName}`, html, attachments });
}

export async function sendApplicantConfirmation(params: { to: string; firstName: string; jobTitle: string }) {
  const html = applicantConfirmationHtml(params);
  await sendMail({ to: params.to, subject: `Application received — ${params.jobTitle}`, html });
}
