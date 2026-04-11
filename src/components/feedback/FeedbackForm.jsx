import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const FEEDBACK_EMAIL = import.meta.env.VITE_FEEDBACK_EMAIL || 'sskvcollege2007@gmail.com';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Reusable feedback form.
 *
 * Props:
 *  - heading:   string shown at the top of the card
 *  - intro:     short description under the heading
 *  - fields:    array of field definitions (see below)
 *  - subject:   email subject line for the mailto submission
 *
 * Field definition shape:
 *  { name, label, type, required?, options?, placeholder?, rows? }
 *
 *  type ∈ 'text' | 'email' | 'tel' | 'number' | 'date' | 'select' | 'radio' | 'checkbox' | 'checkboxGroup' | 'scale' | 'textarea' | 'sectionTitle'
 *  options is required when type === 'select', 'radio', or 'checkboxGroup' (array of strings)
 *  scale requires { min, max } (integers) and optional { minLabel, maxLabel }
 *  sectionTitle renders a heading divider (no form input)
 */
export default function FeedbackForm({ heading, intro, fields, subject }) {
  const initialState = fields.reduce((acc, f) => {
    if (f.type === 'sectionTitle') return acc;
    if (f.type === 'checkbox') return { ...acc, [f.name]: false };
    if (f.type === 'checkboxGroup') return { ...acc, [f.name]: [] };
    return { ...acc, [f.name]: '' };
  }, {});
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Build an email body from all field values
    const bodyLines = [
      `${heading}`,
      `Date: ${new Date().toLocaleString()}`,
      '',
      '---------------------------------------',
      '',
      ...fields.map((f) => {
        if (f.type === 'sectionTitle') return `\n--- ${f.label} ---`;
        if (f.type === 'checkbox') return `${f.label}: ${formData[f.name] ? 'YES' : 'NO'}`;
        if (f.type === 'checkboxGroup') return `${f.label}: ${formData[f.name]?.length ? formData[f.name].join(', ') : '—'}`;
        if (f.type === 'scale') return `${f.label}: ${formData[f.name] || '—'} / ${f.max}`;
        return `${f.label}: ${formData[f.name] || '—'}`;
      }),
      '',
      '---------------------------------------',
    ];

    const body = bodyLines.join('\n');

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        to_email: FEEDBACK_EMAIL,
        from_email: formData.email || '',
        subject,
        message: body,
      }, PUBLIC_KEY);
      setSubmitted(true);
    } catch (err) {
      console.error('Feedback email error:', err);
      setError('Failed to send feedback. Please try again.');
    }
    setLoading(false);
  };

  const handleReset = () => {
    setFormData(initialState);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 md:p-12 text-center">
        <FaCheckCircle className="text-accent-400 text-5xl mx-auto mb-4" />
        <h3 className="font-heading font-bold text-primary-800 text-2xl mb-2">
          Thank you for your feedback!
        </h3>
        <p className="text-neutral-600 mb-6 max-w-md mx-auto">
          Your feedback has been submitted successfully. We appreciate you taking the time to share your thoughts.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex px-6 py-2.5 bg-primary-800 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors font-body"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 md:p-10">
      <h2 className="font-heading font-bold text-primary-800 text-2xl md:text-3xl mb-2">
        {heading}
      </h2>
      {intro && <p className="text-neutral-600 mb-6">{intro}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fields.map((field) => {
            // Section title — decorative divider, no input
            if (field.type === 'sectionTitle') {
              return (
                <div key={field.label} className="md:col-span-2 pt-4 pb-1 border-b border-neutral-200">
                  <h3 className="font-heading font-bold text-primary-800 text-lg">
                    {field.label}
                  </h3>
                </div>
              );
            }

            const commonProps = {
              id: field.name,
              name: field.name,
              value: formData[field.name],
              required: field.required,
              placeholder: field.placeholder || '',
              className:
                'w-full px-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-colors',
            };

            const wrapperClass =
              field.type === 'textarea' || field.type === 'radio' || field.type === 'checkbox' || field.type === 'checkboxGroup' || field.type === 'scale'
                ? 'md:col-span-2'
                : '';

            return (
              <div key={field.name} className={wrapperClass}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-semibold text-primary-800 mb-1.5"
                >
                  {field.label}
                  {field.required && <span className="text-accent-500 ml-0.5">*</span>}
                </label>

                {field.type === 'select' ? (
                  <select
                    {...commonProps}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  >
                    <option value="">Select {field.label.toLowerCase()}</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'radio' ? (
                  <div className="flex flex-wrap gap-4 mt-1">
                    {field.options.map((opt) => (
                      <label key={opt} className="inline-flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                        <input
                          type="radio"
                          name={field.name}
                          value={opt}
                          checked={formData[field.name] === opt}
                          required={field.required}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          className="accent-accent-400"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : field.type === 'checkbox' ? (
                  <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-neutral-700 mt-1">
                    <input
                      type="checkbox"
                      name={field.name}
                      checked={formData[field.name] || false}
                      required={field.required}
                      onChange={(e) => handleChange(field.name, e.target.checked)}
                      className="accent-accent-400 w-4 h-4"
                    />
                    {field.checkLabel || 'YES'}
                  </label>
                ) : field.type === 'checkboxGroup' ? (
                  <div className="flex flex-wrap gap-4 mt-1">
                    {field.options.map((opt) => (
                      <label key={opt} className="inline-flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                        <input
                          type="checkbox"
                          name={field.name}
                          value={opt}
                          checked={(formData[field.name] || []).includes(opt)}
                          onChange={(e) => {
                            const current = formData[field.name] || [];
                            const updated = e.target.checked
                              ? [...current, opt]
                              : current.filter((v) => v !== opt);
                            handleChange(field.name, updated);
                          }}
                          className="accent-accent-400 w-4 h-4"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : field.type === 'scale' ? (
                  <div className="flex items-center gap-6 mt-1">
                    {field.minLabel && <span className="text-xs text-neutral-500 mr-1">{field.minLabel}</span>}
                    {Array.from({ length: (field.max || 5) - (field.min || 1) + 1 }, (_, i) => (field.min || 1) + i).map((n) => (
                      <label key={n} className="flex flex-col items-center cursor-pointer min-w-[2rem]">
                        <input
                          type="radio"
                          name={field.name}
                          value={n}
                          checked={formData[field.name] === String(n)}
                          required={field.required}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          className="accent-accent-400"
                        />
                        <span className="text-xs text-neutral-600 mt-0.5">{n}</span>
                      </label>
                    ))}
                    {field.maxLabel && <span className="text-xs text-neutral-500 ml-2">{field.maxLabel}</span>}
                  </div>
                ) : field.type === 'textarea' ? (
                  <textarea
                    {...commonProps}
                    rows={field.rows || 5}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                ) : (
                  <input
                    {...commonProps}
                    type={field.type || 'text'}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}
              </div>
            );
          })}
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-neutral-500">
            Fields marked <span className="text-accent-500">*</span> are required.
            Your feedback will be sent to
            <span className="font-semibold"> {FEEDBACK_EMAIL}</span>.
          </p>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-400 text-primary-900 text-sm font-bold rounded-lg hover:bg-accent-300 transition-colors font-body whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <FaSpinner className="text-xs animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="text-xs" />
                Submit Feedback
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
