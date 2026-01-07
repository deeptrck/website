const nodemailer = require('nodemailer');

async function main() {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });

  const html = `
    <div>
      <h2>New application: Deepfakes & Synthetic Media Research Intern</h2>
      <p><strong>Candidate:</strong> Test User</p>
      <p><strong>Email:</strong> ianngari01@gmail.com</p>
      <p><strong>GitHub:</strong> https://github.com/test</p>
      <h3>Cover letter</h3>
      <div>This is a test cover.</div>
    </div>
  `;

  const info = await transporter.sendMail({
    from: 'no-reply@example.com',
    to: 'ianngari02@gmail.com',
    subject: 'New application — Deepfakes & Synthetic Media Research Intern — Test User',
    html,
  });

  console.log('MessageId:', info.messageId);
  console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
