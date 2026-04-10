import Hero from '../../components/shared/Hero';
import FeedbackForm from '../../components/feedback/FeedbackForm';

const fields = [
  { name: 'parentName',   label: 'Parent / Guardian Name', type: 'text',  required: true },
  { name: 'relationship', label: 'Relationship',           type: 'select', required: true,
    options: ['Father', 'Mother', 'Guardian'] },
  { name: 'studentName',  label: "Student's Name",         type: 'text',  required: true },
  { name: 'studentDept',  label: "Student's Department / Programme", type: 'text', required: true },
  { name: 'studentYear',  label: "Student's Year",         type: 'select',
    options: ['I Year', 'II Year', 'III Year', 'IV Year', 'Post Graduate'] },
  { name: 'email',        label: 'Email Address',          type: 'email', required: true },
  { name: 'phone',        label: 'Phone Number',           type: 'tel' },
  { name: 'category',     label: 'Feedback Category',      type: 'select', required: true,
    options: [
      'Academic Quality',
      'Communication with Parents',
      'Campus Safety',
      'Infrastructure & Facilities',
      'Co-curricular Activities',
      'Administration',
      'Other',
    ] },
  { name: 'rating',       label: 'Overall Satisfaction',   type: 'select', required: true,
    options: ['5 — Excellent', '4 — Very Good', '3 — Good', '2 — Fair', '1 — Needs Improvement'] },
  { name: 'comments',     label: 'Your Feedback / Suggestions', type: 'textarea', required: true,
    rows: 6, placeholder: 'Share your observations, suggestions or concerns about the college…' },
];

export default function ParentFeedbackPage() {
  return (
    <>
      <Hero
        title="Parent Feedback"
        subtitle="Your observations help us serve our students better — we welcome your perspective"
        height="medium"
        breadcrumb="Feedback › Parent Feedback"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <FeedbackForm
            heading="Parent Feedback Form"
            intro="As partners in your child's education, your views matter deeply to us. Please share your feedback on the college's academic environment, communication and facilities."
            fields={fields}
            subject="Parent Feedback — SSKV College Website"
          />
        </div>
      </section>
    </>
  );
}
