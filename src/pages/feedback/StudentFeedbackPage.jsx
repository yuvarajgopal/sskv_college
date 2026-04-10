import Hero from '../../components/shared/Hero';
import FeedbackForm from '../../components/feedback/FeedbackForm';

const fields = [
  { name: 'name',           label: 'Full Name',           type: 'text',  required: true },
  { name: 'registerNumber', label: 'Register Number',     type: 'text',  required: true },
  { name: 'department',     label: 'Department / Programme', type: 'text', required: true },
  { name: 'year',           label: 'Year / Semester',     type: 'select', required: true,
    options: ['I Year', 'II Year', 'III Year', 'IV Year', 'Post Graduate'] },
  { name: 'email',          label: 'Email Address',       type: 'email', required: true },
  { name: 'phone',          label: 'Phone Number',        type: 'tel' },
  { name: 'category',       label: 'Feedback Category',   type: 'select', required: true,
    options: [
      'Teaching Quality',
      'Curriculum',
      'Library',
      'Laboratory & Infrastructure',
      'Sports & Cultural Activities',
      'Canteen & Hostel',
      'Administration',
      'Other',
    ] },
  { name: 'rating',         label: 'Overall Satisfaction',type: 'select', required: true,
    options: ['5 — Excellent', '4 — Very Good', '3 — Good', '2 — Fair', '1 — Needs Improvement'] },
  { name: 'comments',       label: 'Your Feedback / Suggestions', type: 'textarea', required: true,
    rows: 6, placeholder: 'Share your thoughts, suggestions or concerns…' },
];

export default function StudentFeedbackPage() {
  return (
    <>
      <Hero
        title="Student Feedback"
        subtitle="Your voice shapes our campus — share your experience with us"
        height="medium"
        breadcrumb="Feedback › Student Feedback"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <FeedbackForm
            heading="Student Feedback Form"
            intro="We value your honest feedback on academics, facilities and overall campus life. Your responses help us improve the learning experience at SSKV College."
            fields={fields}
            subject="Student Feedback — SSKV College Website"
          />
        </div>
      </section>
    </>
  );
}
