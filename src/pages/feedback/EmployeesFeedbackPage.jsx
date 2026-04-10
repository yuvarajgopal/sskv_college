import Hero from '../../components/shared/Hero';
import FeedbackForm from '../../components/feedback/FeedbackForm';

const fields = [
  { name: 'name',          label: 'Full Name',           type: 'text',  required: true },
  { name: 'employeeId',    label: 'Employee ID',         type: 'text' },
  { name: 'designation',   label: 'Designation',         type: 'text',  required: true },
  { name: 'department',    label: 'Department / Office', type: 'text',  required: true },
  { name: 'employeeType',  label: 'Employee Type',       type: 'select', required: true,
    options: ['Teaching Faculty', 'Non-Teaching Staff', 'Administrative', 'Support Staff'] },
  { name: 'yearsOfService',label: 'Years of Service',    type: 'text',  placeholder: 'e.g. 3 years' },
  { name: 'email',         label: 'Email Address',       type: 'email', required: true },
  { name: 'phone',         label: 'Phone Number',        type: 'tel' },
  { name: 'category',      label: 'Feedback Category',   type: 'select', required: true,
    options: [
      'Work Environment',
      'Management & Leadership',
      'Infrastructure & Resources',
      'Training & Development',
      'Welfare & Benefits',
      'Communication',
      'Policies & Procedures',
      'Other',
    ] },
  { name: 'rating',        label: 'Overall Satisfaction',type: 'select', required: true,
    options: ['5 — Excellent', '4 — Very Good', '3 — Good', '2 — Fair', '1 — Needs Improvement'] },
  { name: 'comments',      label: 'Your Feedback / Suggestions', type: 'textarea', required: true,
    rows: 6, placeholder: 'Share your views, suggestions and any concerns about your work environment…' },
];

export default function EmployeesFeedbackPage() {
  return (
    <>
      <Hero
        title="Employees Feedback"
        subtitle="Help us build a better workplace — your input drives positive change"
        height="medium"
        breadcrumb="Feedback › Employees Feedback"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <FeedbackForm
            heading="Employees Feedback Form"
            intro="SSKV College values the voice of every faculty member and staff. Please share your honest feedback on work culture, resources, management and welfare — your responses remain confidential."
            fields={fields}
            subject="Employees Feedback — SSKV College Website"
          />
        </div>
      </section>
    </>
  );
}
