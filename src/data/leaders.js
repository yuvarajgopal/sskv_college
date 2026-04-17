export const leaders = [
  {
    id: 'president',
    name: 'Dr. Nanditha Krishna',
    designation: 'President',
    org: 'Conjeevaram Hindu Educational Society',
    photo: '/images/leadership/president.jpg',
    website: 'https://www.nandithakrishna.in/',
    bio: [
      'Dr. Nanditha Krishna is a distinguished historian, environmentalist, and author based in Chennai. She is the great-granddaughter of Sir Sri C.P. Ramaswami Aiyar and holds a Ph.D. in Ancient Indian Culture from Bombay University, where she was a Heras Scholar.',
      'She serves as President of The C.P. Ramaswami Aiyar Foundation and Honorary Director of the C.P.R. Institute of Indological Research, a position she has held since 1981. She is also the Founder of several institutions including the C.P. Art Centre, the C.P.R. Environmental Education Centre, and The Grove School, Chennai.',
      'Dr. Krishna is the author of over 22 published books on Indian history, culture, religion, environment, and art, and is the Editor of ECONEWS, Indian Journal of Environmental Education, Heritage Online, and the Journal of Indian History and Culture.',
      'Under her visionary leadership, SSKV College continues to empower women through quality education, upholding the values of academic excellence, ethical integrity, and holistic development.',
    ],
    message: 'Education is the most powerful tool for the empowerment of women and the transformation of society. At SSKV, we are committed to nurturing young women into confident, skilled, and ethically grounded leaders who will shape the future of our nation.',
  },
  {
    id: 'vice-president',
    name: 'Smt. Uma Devi',
    designation: 'Vice-President',
    org: 'Conjeevaram Hindu Educational Society',
    photo: '/images/leadership/vice-president.jpg',
    bio: [
      'Smt. Uma Devi serves as Vice-President of the Conjeevaram Hindu Educational Society, overseeing the SSKV Group of Institutions. Her dedicated involvement with the society has been instrumental in shaping the institution\'s journey from its early days.',
      'She has been a guiding force in the establishment of SSKV College of Arts and Science for Women in 2007, ensuring that quality higher education reaches women in Kanchipuram and surrounding regions.',
      'Her commitment to women\'s empowerment through education has translated into sustained institutional growth, improved infrastructure, and a nurturing academic environment for over a thousand students.',
    ],
    message: 'At SSKV, we believe every woman deserves access to quality education. Our goal is to create an environment where talent thrives, dreams are nurtured, and young women are prepared to excel in every walk of life.',
  },
  {
    id: 'secretary',
    name: 'Dr. C. K. Raman',
    designation: 'Secretary',
    org: 'Conjeevaram Hindu Educational Society',
    photo: '/images/leadership/secretary.jpg',
    bio: [
      'Dr. C. K. Raman serves as the Secretary of the Conjeevaram Hindu Educational Society, bringing extensive administrative acumen and a deep commitment to institutional excellence to his role.',
      'He plays a pivotal role in the governance and strategic direction of the SSKV Group of Institutions, ensuring that administrative processes align with the society\'s educational mission.',
      'Under his stewardship, the institution has witnessed significant growth in academic programs, infrastructure development, and student welfare initiatives, reinforcing SSKV\'s reputation as a premier institution for women\'s education in Kanchipuram.',
    ],
    message: 'Our mission is to build an institution that stands as a beacon of academic integrity and social responsibility. Through diligent administration and a forward-looking approach, we strive to provide every student with the resources and opportunities she needs to succeed.',
  },
  {
    id: 'joint-secretary',
    name: 'Dr. Sumanth C. Raman',
    designation: 'Joint Secretary',
    org: 'Conjeevaram Hindu Educational Society',
    photo: '/images/leadership/joint-secretary.jpg',
    website: 'https://www.sumanthraman.com/',
    bio: [
      'Dr. Sumanth C. Raman is a media personality, political analyst, anchor, and sports commentator. He is a regular contributor to prominent publications including the New Indian Express and Moneycontrol, and has hosted the BSNL Sports Quiz on Doordarshan\'s Podhigai TV channel.',
      'As Joint Secretary of the Conjeevaram Hindu Educational Society, he brings a contemporary perspective and dynamic leadership to the SSKV Group of Institutions.',
      'His wide exposure to media, society, and public affairs enriches the institution\'s engagement with current events and reinforces its commitment to producing graduates who are not only academically accomplished but also socially aware and communicatively confident.',
    ],
    message: 'SSKV is more than a college — it is a community dedicated to the all-round development of women. We encourage our students to develop their critical thinking, communication skills, and social awareness alongside their academic pursuits, preparing them to make a real impact in the world.',
  },
  {
    id: 'principal',
    name: 'Dr. K. Thirumamagal',
    designation: 'Principal',
    org: '',
    photo: '/images/leadership/principal.jpg',
    bio: [
      'I transitioned to college in 2010 and eventually rose to the position of Principal in 2021.  SSKV, a pioneer and forerunner in the field of womens education since 1904, started a college in the year 2007. A teacher is always a learner.',
      'We, as a college, provide an environment that encourages experimentation, collaboration and professional development to foster innovation and creativity among faculty members.  Our aim is to strive to give holistic education.  We believe that education extends beyond the classroom and we strive to provide opportunities that inspire our students to become confident, capable leaders in their chosen fields.',
      'We give opportunities to students to engage in community services, allowing them to develop a sense of social responsibility.  We promote self-confidence and assertiveness in girls by encouraging them to speak up, take risks and pursue their passions without fear of judgment or discrimination. Today, employability has become a key factor in higher education.  Communicative competence ensures easy employability.',
      'We are making efforts to improve the communicative competence of the students in three years time. Our vision is to empower students to realize their fullest potential, and we impart life lessons to them beyond academics.',
    ],
    message: ' I am the eldest daughter of visionary parents who prioritized education for all their three daughters.  I am proud to be the first woman in my family to graduate.  My journey with SSKV began in 2006 when I joined the school.',
  },
];

export function getLeaderById(id) {
  return leaders.find((l) => l.id === id);
}
