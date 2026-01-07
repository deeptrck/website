import { sendHRNotification, sendApplicantConfirmation } from '@/lib/email';
import fs from 'fs';
import path from 'path';

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
    const github = form.get('github')?.toString() || '';
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

    // Default recipient for applications. Can be overridden with HR_EMAIL env var.
    // Reverted to company HR email for production/testing.
    const hrEmail = process.env.HR_EMAIL || 'people@deeptrack.io';

    // Log received application details (sanitized) for debugging.
    console.log('Received application', {
      jobSlug: safeText(jobSlug),
      jobTitle: safeText(jobTitle),
      applicant: `${safeText(firstName)} ${safeText(lastName)}`,
      email: safeText(email),
      phone: safeText(phone),
      links: safeText(links),
      github: safeText(github),
      cvName: cv?.name || null,
      cvSize: cv ? cv.size : null,
    });

    // Save CV to public/uploads so Apps Script can access it (note: ephemeral on some hosts)
    let cvUrl: string | null = null;
    try {
      const uploadsDir = path.join(process.cwd(), 'public', 'files', 'uploads');
      if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
      const safeName = `${Date.now()}-${cv.name.replace(/[^a-zA-Z0-9._-]/g, '-')}`;
      const outPath = path.join(uploadsDir, safeName);
      fs.writeFileSync(outPath, buffer);
      const base = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      cvUrl = `${base.replace(/\/$/, '')}/files/uploads/${safeName}`;
      console.log('Saved CV to', outPath, 'cvUrl=', cvUrl);
    } catch (e) {
      console.error('Failed to save CV to disk', e);
    }

    // POST to Apps Script webhook (sheet + email) and rely on it for notifications
    try {
      const appsUrl = process.env.APPS_SCRIPT_URL;
      if (!appsUrl) {
        console.warn('APPS_SCRIPT_URL not configured — skipping Apps Script POST');
      } else {
        const res = await fetch(appsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jobSlug,
            jobTitle,
            firstName,
            lastName,
            email,
            phone,
            links,
            github,
            cover,
            cvUrl,
          }),
        });
        console.log('Posted application to Apps Script', appsUrl, 'status', res.status);
      }
    } catch (e) {
      console.error('Failed to POST to Apps Script', e);
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error('Application error', err);
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), { status: 500 });
  }
}
