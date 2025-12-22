import { sendHRNotification, sendApplicantConfirmation } from '@/lib/email';

function safeText(s: any) {
  return String(s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const jobSlug = form.get('jobSlug')?.toString() || '';
    const jobTitle = form.get('jobTitle')?.toString() || '';
    const firstName = form.get('firstName')?.toString() || '';
    const lastName = form.get('lastName')?.toString() || '';
    const email = form.get('email')?.toString() || '';
    const phone = form.get('phone')?.toString() || '';
    const links = form.get('links')?.toString() || '';
    const cover = form.get('cover')?.toString() || '';
    const cv = form.get('cv') as File | null;

    if (!firstName || !lastName || !email || !cover || !cv) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const MAX_SIZE = 5 * 1024 * 1024;
    if (cv.size > MAX_SIZE) {
      return new Response(JSON.stringify({ error: 'CV exceeds maximum size of 5MB' }), { status: 400 });
    }


    const buffer = Buffer.from(await cv.arrayBuffer());

    const hrEmail = process.env.HR_EMAIL || 'careers@deeptrack.io';

    // Always attempt to notify the company HR email (falls back to careers@deeptrack.io).
    await sendHRNotification({
      hrEmail,
      jobTitle,
      jobSlug,
      firstName,
      lastName,
      email,
      phone,
      links,
      cover,
      cv: { filename: cv.name || 'cv', content: buffer, contentType: cv.type },
    });

    try {
      await sendApplicantConfirmation({ to: email, firstName, jobTitle });
    } catch (e) {
      // If applicant email fails (no SMTP), just log and continue — don't fail the submission
      // eslint-disable-next-line no-console
      console.warn('Applicant confirmation skipped/failed', e);
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error('Application error', err);
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), { status: 500 });
  }
}
