import Hero from '../../components/shared/Hero';
import FeedbackForm from '../../components/feedback/FeedbackForm';

const fields = [
  // ── Student Details ──
  { label: 'Student Details', type: 'sectionTitle' },
  { name: 'email',          label: 'Email',                          type: 'email', required: true },
  { name: 'daughterName',   label: 'Name of your Daughter',          type: 'text',  required: true },
  { name: 'registerNumber', label: 'Register Number',                type: 'text',  required: true },
  { name: 'dob',            label: 'Date of Birth',                  type: 'date',  required: true },
  { name: 'department',     label: 'Department',                     type: 'select', required: true,
    options: [
      'B.A.(TAMIL)', 'B.A.(ENGLISH)', 'B.Sc(Maths)', 'B.C.A',
      'B.SC (Computer Science)', 'B.COM(G)', 'B.COM(A&F)',
      'B.COM(Corporate Secretaryship)', 'B.B.A',
      'B.Sc.(Artificial Intelligence)', 'B.Sc.(CCJS)',
      'M.A.(Tamil)', 'M.Com', 'M.A.(English)',
    ] },
  { name: 'year',           label: 'Year',                           type: 'select', required: true,
    options: ['I', 'II', 'III'] },
  { name: 'shift',          label: 'Shift',                          type: 'select',
    options: ['I', 'II'] },
  { name: 'studentMobile',  label: 'Mobile Number of the Student',   type: 'tel',   required: true },
  { name: 'batch',          label: 'Batch',                          type: 'radio', required: true,
    options: ['2020-23', '2021-24', '2022-25'] },

  // ── Parent Details ──
  { label: 'Parent Details', type: 'sectionTitle' },
  { name: 'parentName',     label: 'Name of the Parent who is filling the form', type: 'text', required: true },
  { name: 'parentMobile',   label: 'Mobile Number of the Parent',    type: 'tel',   required: true },

  // ── Infrastructure ──
  { label: 'Infrastructure', type: 'sectionTitle' },
  { name: 'q_infrastructure',  label: 'Are you satisfied with the overall infrastructure of the college?', type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_classroom',       label: 'Is the classroom environment clean and well maintained?',           type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_laboratory',      label: 'Are the laboratory facilities adequate and functioning properly?',  type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_library',         label: 'Is the college library providing sufficient learning resources to students?', type: 'radio', required: true, options: ['YES', 'NO'] },

  // ── Transport & Canteen ──
  { label: 'Transport & Canteen', type: 'sectionTitle' },
  { name: 'q_transport',       label: 'Are you satisfied with the transport facilities provided by the college?', type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_transportSafe',   label: 'Is the transport facility safe and punctual for your ward?',               type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_canteen',         label: 'Are the canteen facilities hygienic and well maintained?',                  type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_foodQuality',     label: 'Is the food quality in the canteen satisfactory?',                         type: 'radio', required: true, options: ['YES', 'NO'] },

  // ── Teaching & Academic ──
  { label: 'Teaching & Academic', type: 'sectionTitle' },
  { name: 'q_teachingQuality', label: 'Are you satisfied with the overall teaching quality in the college?',   type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_communication',   label: 'Do teachers communicate clearly and effectively with students?',        type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_approachable',    label: 'Are teachers approachable for academic support?',                       type: 'radio', required: true, options: ['YES', 'NO'] },

  // ── Extracurricular Activities ──
  { label: 'Extracurricular Activities', type: 'sectionTitle' },
  { name: 'q_extracurricular', label: 'Does the college provide enough extracurricular activities for students?',             type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_sportsCultural',  label: 'Are you satisfied with the opportunities provided for sports and cultural activities?', type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_competitions',    label: 'Does the college encourage student participation in competitions and events?',          type: 'radio', required: true, options: ['YES', 'NO'] },

  // ── Parent-Teacher Relations & Administration ──
  { label: 'Parent-Teacher Relations & Administration', type: 'sectionTitle' },
  { name: 'q_parentTeacher',   label: 'Is the relationship between parents and teachers cooperative and positive?',  type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_ptInteractions',  label: 'Are you satisfied with the frequency of parent-teacher interactions?',        type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_safety',          label: 'Do you feel the college ensures the safety and security of students?',        type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_adminSupport',    label: 'Are you satisfied with the administrative support provided by the college?',  type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_grievances',      label: 'Does the college address student concerns and grievances promptly?',          type: 'radio', required: true, options: ['YES', 'NO'] },
  { name: 'q_improvements',    label: 'Do you think any improvements are needed in the college\'s overall functioning?', type: 'radio', required: true, options: ['YES', 'NO'] },

  // ── Suggestions ──
  { label: 'Suggestions', type: 'sectionTitle' },
  { name: 'suggestions',  label: 'Your suggestions on the improvements in the College overall functioning', type: 'textarea', required: true, rows: 5,
    placeholder: 'Please share your suggestions for improving the college…' },

  // ── Assurance ──
  { name: 'assurance', label: 'I assure that the questions are personally gone through by me and answered the questions in the form', type: 'checkbox', required: true, checkLabel: 'YES' },
];

export default function ParentFeedbackPage() {
  return (
    <>
      <Hero
        title="Parent's Feedback"
        subtitle="Your observations help us serve our students better — we welcome your perspective"
        height="medium"
        breadcrumb="Feedback › Parent's Feedback"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <FeedbackForm
            heading="Parent's Feedback Form"
            intro="As partners in your daughter's education, your views matter deeply to us. Please take a moment to share your feedback on the college's infrastructure, teaching, and overall functioning."
            fields={fields}
            subject="Parent's Feedback — SSKV College Website"
          />
        </div>
      </section>
    </>
  );
}
