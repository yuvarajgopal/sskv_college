import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { COLLEGE_INFO } from '../../utils/constants';

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
 *  type ∈ 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea'
 *  options is required when type === 'select' (array of strings)
 */
export default function FeedbackForm({ heading, intro, fields, subject }) {
  const initialState = fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {});
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build an email body from all field values
    const bodyLines = [
      `${heading}`,
      `Submitted from: ${COLLEGE_INFO.website}`,
      `Date: ${new Date().toLocaleString()}`,
      '',
      '---------------------------------------',
      '',
      ...fields.map((f) => `${f.label}: ${formData[f.name] || '—'}`),
      '',
      '---------------------------------------',
    ];

    const body = bodyLines.join('\n');
    const recipients = COLLEGE_INFO.email.join(',');
    const mailto =
      `mailto:${recipients}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Opens the user's default email client with everything pre-filled
    window.location.href = mailto;
    setSubmitted(true);
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
          Your email client has been opened with the feedback details. Please press
          <span className="font-semibold"> Send </span>
          to deliver it to the college. We appreciate you taking the time to share your thoughts.
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
              field.type === 'textarea' ? 'md:col-span-2' : '';

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

        <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-neutral-500">
            Fields marked <span className="text-accent-500">*</span> are required.
            On submit, your email client opens with the details pre-filled to
            <span className="font-semibold"> {COLLEGE_INFO.email[0]}</span>.
          </p>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-400 text-primary-900 text-sm font-bold rounded-lg hover:bg-accent-300 transition-colors font-body whitespace-nowrap"
          >
            <FaPaperPlane className="text-xs" />
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
}
