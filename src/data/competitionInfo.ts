export interface CompetitionCategory {
  id: string;
  name: string;
  code: string;
  classes: string;
  description: string;
  recommendedTrack: 'junior' | 'senior';
  trackPath: string;
}

export interface CompetitionFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CoordinatorContact {
  name: string;
  phone: string;
  role?: string;
}

export interface CompetitionInfo {
  competitionName: string;
  shortName: string;
  tagline: string;
  organiserName: string;
  competitionDate: string;
  competitionTime: string;
  registrationDeadline: string;
  registrationFee: number | null;
  formattedFee: string;
  currency: string;
  eligibility: string[];
  categories: CompetitionCategory[];
  examinationFormat: string;
  venueName: string;
  venueAddress: string;
  venueCity: string;
  googleMapsUrl: string;
  registrationUrl: string;
  registrationHotline: string;
  organiserPhone: string;
  organiserAlternativePhone: string;
  coordinationTeam: CoordinatorContact[];
  organiserEmail: string;
  officialWebsiteUrl: string;
  certificateInformation: string;
  travelOrCampInformation: string;
  campDate: string;
  facebookProfileUrl: string;
  schoolName: string;
  schoolAddress: string;
  schoolWebsiteUrl: string;
  schoolLogoUrl: string;
  schoolAffiliationStatement: string;
  faqs: CompetitionFAQ[];
}

export const competitionInfo: CompetitionInfo = {
  competitionName: 'NASA Astronomy Olympiad 2026',
  shortName: 'Astronomy Olympiad 2026',
  tagline: 'Join the Journey, Discover the Universe',
  organiserName: 'Bangladesh Olympiad Academy',
  competitionDate: '14 November 2026',
  competitionTime: 'To be announced by organisers',
  registrationDeadline: '5 November 2026',
  registrationFee: 3000,
  formattedFee: '৳3,000',
  currency: 'BDT',

  eligibility: [
    'Students of Class 06 to Class 12 (including HSC examinees)',
    'Students from both Bangla-Medium and English-Medium schools',
    'Open to aspiring astronomy and space science learners across Bangladesh'
  ],

  categories: [
    {
      id: 'junior-explorer',
      name: 'Junior Explorer',
      code: 'JE',
      classes: 'Class 06 to 09',
      description: 'Focuses on conceptual astronomy, the Solar System, Earth-Moon-Sun dynamics, planetary characteristics, starlight, and space observation technology.',
      recommendedTrack: 'junior',
      trackPath: '/learn/junior'
    },
    {
      id: 'teen-explorer',
      name: 'Teen Explorer',
      code: 'TE',
      classes: 'Class 10 to 12',
      description: 'Covers celestial mechanics, Kepler’s Third Law, stellar luminosity & parallax, Wien’s law, cosmological redshift, exoplanet transits, and stellar remnants.',
      recommendedTrack: 'senior',
      trackPath: '/learn/senior'
    }
  ],

  examinationFormat: 'Multiple-Choice Question (MCQ) format testing conceptual understanding and introductory astronomy problem-solving. Duration and marking details announced by event organisers.',

  venueName: 'Heritage School',
  venueAddress: '343 North Chashara, Khapur (Chanmari)',
  venueCity: 'Narayanganj, Bangladesh',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Heritage+School+343+North+Chashara+Khapur+Chanmari+Narayanganj',

  // Configurable registration URL (falls back to calling hotline if empty/pending)
  registrationUrl: '',
  registrationHotline: '01898868494',
  organiserPhone: '01898868494',
  organiserAlternativePhone: '01902821018',

  coordinationTeam: [
    {
      name: 'Mostakim Rahman Mahir',
      phone: '01902821018',
      role: 'Coordination Team'
    },
    {
      name: 'Jayed Molla',
      phone: '01898868494',
      role: 'Coordination Team'
    }
  ],

  organiserEmail: '', // Awaiting official email confirmation
  officialWebsiteUrl: 'https://www.boacademia.com',

  certificateInformation: 'Internationally and globally recognised certificate provided from the USA for every participating student.',

  travelOrCampInformation: 'Winners will qualify for the week-long NASA Experience Camp held at NASA USA in January 2027. The camp includes a 3-day NASA workshop, interactive hands-on activities, and visits to prestigious academic institutions. Results will be published internationally from the USA. (Note: Travel and camp participation are subject to official qualification rules and competition performance.)',
  campDate: 'January 2027',

  // Designer Facebook link (Mostakim Rahman Mahir)
  facebookProfileUrl: 'https://www.facebook.com/mahir.14.10/',

  // School Identity
  schoolName: 'Heritage School',
  schoolAddress: '343 North Chashara, Khapur (Chanmari), Narayanganj',
  schoolWebsiteUrl: 'https://www.facebook.com/Heritageschool.edu',
  schoolLogoUrl: '/heritage-school-logo.svg',
  schoolAffiliationStatement: 'OrbitLearn is designed as an educational self-study tool provided for students of Heritage School and aspiring participants across Bangladesh. Heritage School serves as the announced venue for the Bangladesh Round.',

  faqs: [
    {
      id: 'faq-who',
      question: 'Who can participate in the competition?',
      answer: 'Students currently enrolled in Class 6 through Class 12 (including HSC students) from both Bangla-Medium and English-Medium schools across Bangladesh are eligible to participate.'
    },
    {
      id: 'faq-categories',
      question: 'Which category should I choose?',
      answer: 'There are two categories based on class level: "Junior Explorer (JE)" for students in Classes 6 to 9, and "Teen Explorer (TE)" for students in Classes 10 to 12. Make sure to select the category that matches your enrolled class.'
    },
    {
      id: 'faq-syllabus',
      question: 'What should I study to prepare?',
      answer: 'You should study the core syllabus topics including our Solar System, planetary science, Earth-Moon-Sun geometry, stars and nuclear fusion, Kepler’s orbital laws, light intensity, stellar brightness, telescopes, redshift, and exoplanets. OrbitLearn has full, structured lessons for both the Junior and Senior tracks covering each of these areas.'
    },
    {
      id: 'faq-prior-knowledge',
      question: 'Is previous astronomy knowledge required?',
      answer: 'No advanced background is required! The Junior track begins with clear, intuitive foundational concepts (planets, seasons, eclipses, starlight). The Senior track introduces introductory formulas with fully worked step-by-step examples.'
    },
    {
      id: 'faq-registration',
      question: 'How do I register for the event?',
      answer: 'Review the eligibility requirements and select your category (Junior Explorer or Teen Explorer). To register, contact the official registration helpline at 01898868494 or 01998866494, or follow the official registration link when released. Follow the confirmed payment procedure and save your receipt safely.'
    },
    {
      id: 'faq-fee',
      question: 'How much is the registration fee and how do I pay?',
      answer: 'The official registration fee for the Bangladesh Round is ৳3,000 (3000 BDT). Payment instructions are provided directly by the organiser (Bangladesh Olympiad Academy) upon contacting their registration helpline.'
    },
    {
      id: 'faq-venue',
      question: 'Where will the examination take place?',
      answer: 'The announced venue is Heritage School, located at 343 North Chashara, Khapur (Chanmari), Narayanganj. Please verify the official reporting time with the event organisers prior to exam day.'
    },
    {
      id: 'faq-items',
      question: 'What should I bring on examination day?',
      answer: 'Students should bring their school ID card or student verification document, registration confirmation token/receipt, and standard exam stationery (ballpoint pens, pencils, eraser). Organisers will confirm whether calculators are permitted for specific categories.'
    },
    {
      id: 'faq-certificate',
      question: 'Will participants receive certificates?',
      answer: 'Yes. Every participant will receive an internationally and globally recognised certificate provided from the USA as confirmed by the competition organisers.'
    },
    {
      id: 'faq-study-materials',
      question: 'Where can students find study materials and practice tests?',
      answer: 'OrbitLearn provides free, comprehensive lessons and instant-marking practice exams right here on this website. You can also explore curated external learning links from NASA Science, NASA Space Place, IOAA syllabus, and astronomy references on our Resources page.'
    },
    {
      id: 'faq-contact',
      question: 'Whom should students contact for official registration or schedule questions?',
      answer: 'For official event, registration, or payment inquiries, contact Bangladesh Olympiad Academy directly at 01898868494 / 01998866494 or visit www.boacademia.com.'
    }
  ]
};
