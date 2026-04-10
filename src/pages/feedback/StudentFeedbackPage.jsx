import Hero from '../../components/shared/Hero';
import FeedbackForm from '../../components/feedback/FeedbackForm';

const fields = [
  // ── Student Details ──
  { label: 'Student Details', type: 'sectionTitle' },
  { name: 'email',      label: 'Email',          type: 'email', required: true },
  { name: 'name',       label: 'Name',           type: 'text',  required: true },
  { name: 'registerNo', label: 'Register No',    type: 'text',  required: true },
  { name: 'dob',        label: 'Date of Birth',  type: 'date',  required: true },
  { name: 'mobile',     label: 'Mobile Number',  type: 'tel',   required: true },
  { name: 'class',      label: 'Class',          type: 'select', required: true,
    options: [
      'III BA TAMIL', 'III BA ENGLISH', 'III BSC MATHS',
      'III BSC (CS)', 'III BCA', 'III B COM(G)',
      'III B COM(A&F)', 'III B COM(CS)', 'III BBA',
      'II M COM', 'II MA TAMIL', 'II MA ENGLISH',
    ] },
  { name: 'yearOfStudy', label: 'Year of Study', type: 'select', required: true,
    options: ['2023-26 (UG)', '2024-26 (PG)'] },

  // ── Teacher Availability & Support ──
  { label: 'Teacher Availability & Support', type: 'sectionTitle' },
  { name: 'q_teacherAvailable',  label: 'Are your teachers available when you approach them during college working hours?',                                                                          type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_studyMaterial',     label: 'Do your teachers provide you with additional study material/notes and other learning inputs for clarity and understanding of the subject?',                  type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_substituteTeacher', label: 'When a regular teacher is absent does a substitute teacher handle your class?',                                                                             type: 'radio', required: true, options: ['Yes', 'No'] },

  // ── Sports & Activities ──
  { label: 'Sports & Activities', type: 'sectionTitle' },
  { name: 'q_sportsActivity',    label: 'Do you take part in any of the Sports Activity?',                                                                                                          type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'sportsSpecify',       label: 'If yes, specify the activity (game)',                                                                                                                      type: 'text',  placeholder: 'e.g. Volleyball, Kabaddi…' },
  { name: 'q_sportsEquipment',   label: 'Are you satisfied with the equipment, amenities, and assistance available and provided for your practice and training sessions for these activities?',       type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_clubParticipation', label: 'Do you participate in activities of YRC, NSS, Quiz Club, EVS Club organized in the college campus?',                                                       type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_organizingTeam',    label: 'Have you been a part of the Organizing team of any of these activities and their events?',                                                                  type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'q_wonPrizes',         label: 'Have you won prizes and awards for winning competitions organized under the Cultural Events and other activities?',                                         type: 'radio', required: true, options: ['Yes', 'No'] },

  // ── Teaching and Learning Experience (Rate 1–4) ──
  { label: 'Teaching and Learning Experience (Rate 1–4)', type: 'sectionTitle' },
  { name: 'rate_syllabiCovered',      label: 'Extent of syllabi covered in the class',                                                                   type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_internalAssessment',  label: 'Overall experience with internal assessment',                                                              type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_theoryPractical',     label: 'Integration of theory and Practical classes (wherever applicable)',                                         type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_beyondClassroom',     label: 'Opportunity to participate in activities beyond the classroom (Workshops/Projects/Fieldwork)',               type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_studentTeacher',      label: 'Student Teacher Interaction',                                                                              type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_teamwork',           label: 'Opportunities to work in a team',                                                                           type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_learningEnvironment', label: 'Overall learning environment',                                                                             type: 'scale', required: true, min: 1, max: 4 },

  // ── College and Administrative Infrastructure and Support (Rate 1–4) ──
  { label: 'College and Administrative Infrastructure and Support (Rate 1–4)', type: 'sectionTitle' },
  { name: 'rate_libraryInfra',         label: 'Physical infrastructure of the college Library',                                                          type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_libraryCollection',    label: 'Collection of books, journals and reading material of the college Library',                               type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_libraryStaff',         label: 'Support and assistance of the library Staff',                                                            type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_computerLabInfra',     label: 'Infrastructure of the college Computer Laboratory',                                                      type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_computerLabStaff',     label: 'Support and assistance of Staff at the college Computer Laboratory',                                     type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_labInfra',            label: 'Infrastructure of the Laboratory',                                                                        type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_sportsGround',        label: 'Amenities and Assistance provided at the college Sports ground',                                          type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_labStaff',            label: 'Support and assistance of the Staff in the Lab',                                                          type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_officeStaff',         label: 'Support and assistance of the college Office Staff',                                                      type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_complaintRedressal',  label: 'Fulfilling the duties and responsibilities of Complaint Redressal Committees in the college',              type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_disciplineCommittee', label: 'Fulfilling the duties and responsibilities of Discipline Committee of college',                            type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_canteen',             label: 'Canteen facilities: 1. Food quality 2. Ambience 3. Support Staff',                                        type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_wifi',                label: 'Wi-Fi and Internet facility',                                                                             type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_website',             label: 'College Website',                                                                                         type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_classroom',           label: 'Classroom Infrastructure',                                                                                type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_commonRoom',          label: 'Girls common room (only for female students)',                                                             type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_drinkingWater',       label: 'Drinking water facility',                                                                                 type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_washroom',            label: 'Washroom cleanliness and maintenance',                                                                    type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_greenery',            label: 'Greenery in the college campus',                                                                          type: 'scale', required: true, min: 1, max: 4 },
  { name: 'rate_cleanliness',         label: 'Cleanliness and maintenance of college premises',                                                         type: 'scale', required: true, min: 1, max: 4 },

  // ── Extracurricular Activities ──
  { label: 'Extracurricular Activities', type: 'sectionTitle' },
  { name: 'q_eca',           label: 'Do you take part in any Extra Curricular Activities (ECA) in the College?', type: 'radio', required: true, options: ['Yes', 'No'] },
  { name: 'ecaActivities',  label: 'If yes, specify the activity (Extra Curricular Activities)',                 type: 'checkboxGroup',
    options: ['Fine Arts', 'Dance', 'Dramatics/Street Play', 'Debate', 'Music', 'Photography'] },
  { name: 'ecaOther',       label: 'If you have participated in other extra curricular activity in the college, please specify', type: 'text', placeholder: 'Other activities…' },
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
