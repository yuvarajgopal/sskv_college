import { useEffect } from 'react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdl9YZl8mXx6L5F99t_RfoRSwv-FuJR-GdTm3i8FS3BrDKtkg/viewform';

export default function ParentsFeedbackPage() {
  useEffect(() => {
    window.open(GOOGLE_FORM_URL, '_blank');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 md:p-12 text-center max-w-md">
        <h2 className="font-heading font-bold text-primary-800 text-2xl mb-4">
          Parent's Feedback Form
        </h2>
        <p className="text-neutral-600 mb-6">
          The feedback form should have opened in a new tab. If it didn't, click the button below.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-400 text-primary-900 text-sm font-bold rounded-lg hover:bg-accent-300 transition-colors"
        >
          Open Feedback Form
        </a>
      </div>
    </div>
  );
}
