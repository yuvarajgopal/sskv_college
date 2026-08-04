export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const COLLEGE_INFO = {
  name: 'SSKV College of Arts & Science for Women',
  shortName: 'SSKV College',
  location: 'Kilambi, Kanchipuram',
  affiliation: 'University of Madras',
  phone: ['044-27277880', '044-27277900', '+91-8680023003', '+91-7904428316'],
  phoneList: [
    { label: 'Landline', display: '044-27277880', tel: '04427277880' },
    { label: 'Landline', display: '044-27277900', tel: '04427277900' },
    { label: 'Mobile',   display: '+91-8680023003', tel: '+918680023003' },
    { label: 'Mobile',   display: '+91-7904428316', tel: '+917904428316' },
  ],
  email: ['sskvcollege@yahoo.com', 'sskvcollege2007@gmail.com'],
  instagram: 'https://www.instagram.com/sskv_college/',
  youtube: 'https://www.youtube.com/@SSKVCOLLEGE-',
  website: 'https://www.sskvcollege.com',
};
