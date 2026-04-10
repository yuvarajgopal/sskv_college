import Hero from '../../components/shared/Hero';
import FeedbackForm from '../../components/feedback/FeedbackForm';

/* YES / NO OPTIONS */
const yesNo = ['YES', 'NO'];

const fields = [
  /* BASIC DETAILS */
  { name: 'email', label: 'Email', type: 'email', required: true },

  { name: 'studentName', label: "Name of your Daughter", type: 'text', required: true },
  { name: 'registerNumber', label: 'Register Number', type: 'text', required: true },
  { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
  { name: 'date', label: 'Date', type: 'date' },

  { name: 'department', label: 'Department', type: 'text', required: true },
  { name: 'year', label: 'Year', type: 'select', required: true,
    options: ['I Year', 'II Year', 'III Year'] },

  { name: 'shift', label: 'Shift', type: 'select', required: true,
    options: ['Shift I', 'Shift II'] },

  { name: 'studentMobile', label: 'Mobile Number of the Student', type: 'tel', required: true },

  { name: 'batch', label: 'Batch', type: 'select', required: true,
    options: ['2020-23', '2021-24', '2022-25'] },

  { name: 'parentName', label: 'Name of the Parent', type: 'text', required: true },
  { name: 'parentMobile', label: 'Mobile Number of the Parent', type: 'tel', required: true },

  /* QUESTIONS */
  { name: 'q1', label: '1. Are you satisfied with the overall infrastructure of the college?', type: 'radio', required: true, options: yesNo },
  { name: 'q2', label: '2. Is the classroom environment clean and well maintained?', type: 'radio', required: true, options: yesNo },
  { name: 'q3', label: '3. Are the laboratory facilities adequate and functioning properly?', type: 'radio', required: true, options: yesNo },
  { name: 'q4', label: '4. Is the college library providing sufficient learning resources?', type: 'radio', required: true, options: yesNo },
  { name: 'q5', label: '5. Are you satisfied with the transport facilities?', type: 'radio', required: true, options: yesNo },
  { name: 'q6', label: '6. Is the transport facility safe and punctual?', type: 'radio', required: true, options: yesNo },
  { name: 'q7', label: '7. Are the canteen facilities hygienic?', type: 'radio', required: true, options: yesNo },
  { name: 'q8', label: '8. Is the food quality satisfactory?', type: 'radio', required: true, options: yesNo },
  { name: 'q9', label: '9. Are you satisfied with teaching quality?', type: 'radio', required: true, options: yesNo },
  { name: 'q10', label: '10. Do teachers communicate clearly?', type: 'radio', required: true, options: yesNo },
  { name: 'q11', label: '11. Are teachers approachable?', type: 'radio', required: true, options: yesNo },
  { name: 'q12', label: '12. Are extracurricular activities sufficient?', type: 'radio', required: true, options: yesNo },
  { name: 'q13', label: '13. Are sports and cultural opportunities good?', type: 'radio', required: true, options: yesNo },
  { name: 'q14', label: '14. Does the college encourage competitions?', type: 'radio', required: true, options: yesNo },
  { name: 'q15', label: '15. Is parent-teacher relationship positive?', type: 'radio', required: true, options: yesNo },
  { name: 'q16', label: '16. Are parent-teacher meetings sufficient?', type: 'radio', required: true, options: yesNo },
  { name: 'q17', label: '17. Is student safety ensured?', type: 'radio', required: true, options: yesNo },
  { name: 'q18', label: '18. Is administrative support satisfactory?', type: 'radio', required: true, options: yesNo },
  { name: 'q19', label: '19. Are grievances handled promptly?', type: 'radio', required: true, options: yesNo },
  { name: 'q20', label: '20. Are improvements needed?', type: 'radio', required: true, options: yesNo },

  /* TEXT AREA */
  {
    name: 'suggestions',
    label: '21. Your suggestions for improvement',
    type: 'textarea',
    required: true,
    rows: 4
  },

  /* DECLARATION */
  {
    name: 'declaration',
    label: '22. I confirm that I have personally answered all questions',
    type: 'radio',
    required: true,
    options: ['YES']
  }
];

export default function ParentsFeedbackPage() {
  return (
    <>
      <Hero
        title="Parent’s Feedback"
        subtitle="SSKV College of Arts & Science for Women"
        height="medium"
        breadcrumb="Feedback › Parent’s Feedback"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          
          <FeedbackForm
            heading="Parent’s Feedback Form"
            intro="We value your feedback. Please provide your honest opinion about infrastructure, teaching quality, facilities, and overall development."
            fields={fields}
            subject="Parent Feedback — SSKV College"
            submitText="Submit Feedback"
            clearText="Clear Form"
            toEmail="senyuv@gmail.com"
          />

        </div>
      </section>
    </>
  );
}