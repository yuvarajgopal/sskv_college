import Hero from '../../components/shared/Hero';
import FeedbackForm from '../../components/feedback/FeedbackForm';

/* YES / NO OPTIONS */
const yesNo = ['YES', 'NO'];

const fields = [
  // ── Faculty Details ──
  { label: 'Faculty Details', type: 'sectionTitle' },
  { name: 'email',       label: 'Email',               type: 'email', required: true },
  { name: 'facultyName', label: 'Name of the Faculty',  type: 'text',  required: true },
  { name: 'department',  label: 'Department',            type: 'text',  required: true },

  // ── Teaching & Professional Development ──
  { label: 'Teaching & Professional Development', type: 'sectionTitle' },
  { name: 'q_updateSkills',  label: 'Do you regularly update yourself to improve your teaching skills?',                       type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_useLibrary',    label: 'Do you make use of the college library for academic or research purpose?',                type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_followPlan',    label: 'Do you follow the prescribed teaching plan and syllabus schedule?',                      type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_useICT',        label: 'Do you effectively use teaching tools such as ICT, PPT, smart boards, etc.?',            type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_fdp',           label: 'Have you attended any Faculty Development Programs (FDP) during this academic year?',     type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_seminars',      label: 'Have you participated in any seminars or conferences this year?',                        type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_research',      label: 'Have you published any research papers during this academic year?',                      type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_resourceTalks', label: 'Have you delivered any resource talks/expert talks in other institutions?',              type: 'radio', required: true, options: ['Yes', 'No'] },

  // ── Student Support ──
  { label: 'Student Support', type: 'sectionTitle' },
  { name: 'q_slowLearners',     label: 'Do you conduct special classes for slow learners?',              type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_remedialClasses',  label: 'Do you take remedial classes for academically weak students?',   type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_completeSyllabus', label: 'Do you complete the syllabus within the allotted time?',         type: 'radio', required: true, options: ['Yes', 'No'] },

  // ── Department & College Responsibilities ──
  { label: 'Department & College Responsibilities', type: 'sectionTitle' },
  { name: 'q_deptResponsibility',     label: 'Are you involved in any department level responsibilities?',                          type: 'radio',    required: true, options: ['Yes', 'No'] },
  { name: 'deptResponsibilityDesc',   label: 'Briefly describe the responsibility you are taking charge of in the department',       type: 'textarea', required: true, rows: 3 },
  { name: 'q_collegeResponsibility',  label: 'Are you involved in any college level responsibilities?',                             type: 'radio',    options: ['Yes', 'No'] },
  { name: 'collegeResponsibilityDesc',label: 'Briefly describe the responsibility you are taking charge of in the college',          type: 'textarea', rows: 3 },

  // ── Discipline & Records ──
  { label: 'Discipline & Records', type: 'sectionTitle' },
  { name: 'q_discipline',      label: 'Do you maintain discipline and punctuality in the classroom?',     type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_academicRecords', label: 'Do you regularly maintain academic records and documents?',         type: 'radio', required: true, options: ['Yes', 'No'] },

  // ── Teaching Methodologies & Support ──
  { label: 'Teaching Methodologies & Support', type: 'sectionTitle' },
  { name: 'teachingMethodologies', label: 'Mention the teaching methodologies you commonly use',                                type: 'textarea', required: true, rows: 3 },
  { name: 'supportLearners',      label: 'Briefly describe how you support slow learners and advanced learners',                type: 'textarea', required: true, rows: 3 },
  { name: 'specialClasses',       label: 'How many special classes have you handled this semester?',                            type: 'textarea', required: true, rows: 2 },
  { name: 'remedialClasses',      label: 'How many remedial classes have you conducted for slow learners?',                     type: 'textarea', required: true, rows: 2 },
  { name: 'subjectsAllotted',     label: 'Mention the subjects allotted to you along with the total hours allotted for a week', type: 'textarea', required: true, rows: 3 },

  // ── Attendance & Leave ──
  { label: 'Attendance & Leave', type: 'sectionTitle' },
  { name: 'casualLeaves',    label: 'How many casual leaves have you taken this academic year?',  type: 'textarea', required: true, rows: 2 },
  { name: 'q_permission',    label: 'Have you availed the permitted permission in a month?',      type: 'radio',    required: true, options: ['Yes', 'No'] },
  { name: 'odDays',          label: 'How many days of On Duty (OD) have you availed?',            type: 'textarea', required: true, rows: 2 },
  { name: 'lateAttendance',  label: 'How many late attendance have been recorded?',                type: 'textarea', required: true, rows: 2 },

  // ── Department Strength ──
  { label: 'Department Strength', type: 'sectionTitle' },
  { name: 'q_fullComplement',    label: 'Did you get full complement of students in your department this year?',             type: 'radio',    required: true, options: ['Yes', 'No'] },
  { name: 'measuresToIncrease',  label: 'What kind of measures have you taken to increase the strength of your department',  type: 'textarea', required: true, rows: 3 },

  // ── Self-Rating ──
  { label: 'Self-Rating', type: 'sectionTitle' },
  { name: 'rateTeaching',          label: 'Rate your overall teaching methodology',                          type: 'scale', required: true, min: 1, max: 5, minLabel: 'Poor', maxLabel: 'Excellent' },
  { name: 'rateICT',               label: 'Rate your effectiveness in using teaching tools/ICT resources',   type: 'scale', required: true, min: 1, max: 5, minLabel: 'Poor', maxLabel: 'Excellent' },
  { name: 'rateDeptCommitment',    label: 'Rate your Commitment to your department',                         type: 'scale', required: true, min: 1, max: 5, minLabel: 'Poor', maxLabel: 'Excellent' },
  { name: 'rateCollegeCommitment', label: 'Rate your Commitment to the college as a whole',                  type: 'scale', required: true, min: 1, max: 5, minLabel: 'Poor', maxLabel: 'Excellent' },

  // ── Management Support ──
  { label: 'Management Support', type: 'sectionTitle' },
  { name: 'q_grievancesAddressed', label: 'Are your grievances on the academic part addressed by the Management?',          type: 'radio',    required: true, options: ['Yes', 'No'] },
  { name: 'q_infrastructure',     label: 'Are you comfortable with the infrastructure provided to you by the Management?',  type: 'radio',    required: true, options: ['Yes', 'No'] },
  { name: 'academicSupport',      label: 'What kind of academic support do you expect from the Management?',                type: 'textarea', required: true, rows: 3 },
  { name: 'otherSupport',         label: 'What kind of support do you need (other than the academic support) from the Management?', type: 'textarea', required: true, rows: 3 },
];

export default function ParentsFeedbackPage() {
  return (
    <>
      <Hero
        title="Faculty Self Appraisal & Feedback"
        subtitle="Help us build a better workplace — your input drives positive change"
        height="medium"
        breadcrumb="Feedback › Parent’s Feedback"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          
          <FeedbackForm
            heading="Faculty Self Appraisal and Feedback Form"
            intro="SSKV College values the voice of every faculty member. Please share your honest self-appraisal and feedback on teaching, responsibilities, and institutional support."
            fields={fields}
            subject="Faculty Self Appraisal & Feedback — SSKV College Website"
          />

        </div>
      </section>
    </>
  );
}