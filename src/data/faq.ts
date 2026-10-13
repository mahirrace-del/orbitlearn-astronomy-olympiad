export interface FAQItem {
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    question: 'What is OrbitLearn?',
    answer:
      'OrbitLearn is a dedicated astronomy learning platform created to help school students build a solid foundation in astronomy and celestial physics. It features structured topic-by-topic lessons, visual diagrams, formula guides, and instant-marking practice exams.'
  },
  {
    question: 'Who can use OrbitLearn?',
    answer:
      'OrbitLearn is designed for students in Classes 6 through 12 from both Bangla-Medium and English-Medium schools, as well as teachers, workshop mentors, and science enthusiasts who want to explore the universe.'
  },
  {
    question: 'What is covered in the Junior and Senior tracks?',
    answer:
      'The Junior Track focuses on essential concepts: our Solar System, planetary science, Earth-Moon-Sun dynamics, seasons, lunar phases, and starlight. The Senior Track covers mathematical and physical astronomy: Kepler’s laws of orbits (T² = a³), stellar luminosity & parallax, Wien’s displacement law, cosmological redshift, exoplanet transits, and stellar remnants.'
  },
  {
    question: 'How do the practice examinations work?',
    answer:
      'Each practice exam contains 15 multiple-choice questions (1 mark each, 15 marks total). After submitting, you get your score instantly along with a topic-by-topic performance breakdown, detailed answer explanations, and direct links to review the relevant lesson units.'
  },
  {
    question: 'How is my study progress saved?',
    answer:
      'Your completed lessons, latest exam scores, and personal best results are saved automatically in your browser on your current device. You do not need to create an account or provide any personal information.'
  },
  {
    question: 'Can teachers use OrbitLearn for classroom workshops?',
    answer:
      'Yes! OrbitLearn is completely free and requires no login or installation. Teachers and astronomy club coordinators can freely use its lesson units, formula panels, and quizzes for school workshops and Olympiad preparation sessions.'
  }
];
