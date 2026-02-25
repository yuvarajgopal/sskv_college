import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Setup Instructions
// ─────────────────────────────────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com/  (200 emails/month free)
// 2. Add an Email Service: Dashboard → Email Services → Add New Service
//    (connect Gmail or another SMTP provider) → copy the Service ID
// 3. Create an Email Template: Dashboard → Email Templates → Create New Template
//    Use these template variables:
//      {{applicant_name}}   — applicant's full name
//      {{application_no}}   — application number (e.g. SSKV-2026-1234)
//      {{program}}          — selected program
//      {{mobile}}           — applicant's mobile
//      {{to_email}}         — applicant's email (for "To" field in template)
//    Optionally attach the PDF: add {{pdf_attachment}} as an attachment variable
// 4. Copy your Public Key: Dashboard → Account → General → Public Key
// 5. Replace the three placeholder strings below.
// ─────────────────────────────────────────────────────────────────────────────

export const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
export const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

/**
 * Sends the application confirmation email.
 * If EmailJS is not configured (placeholder keys), logs a warning and skips silently.
 *
 * @param {object} formData - All form fields
 * @param {string} pdfBase64 - Base64 data URI of the generated PDF
 * @param {string} applicationNo - Generated application number
 */
export async function sendApplicationEmail(formData, pdfBase64, applicationNo) {
  if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
    console.warn(
      '[EmailJS] Not configured. Update EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and ' +
      'EMAILJS_PUBLIC_KEY in src/utils/emailService.js to enable email sending.'
    );
    return { skipped: true };
  }

  const templateParams = {
    applicant_name:  formData.fullName,
    application_no:  applicationNo,
    program:         formData.program,
    mobile:          formData.mobile,
    to_email:        formData.email,
    pdf_attachment:  pdfBase64,
  };

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );
}
