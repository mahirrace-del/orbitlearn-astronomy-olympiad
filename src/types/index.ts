export type Track = 'junior' | 'senior';

export interface UnitCheckQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ResourceLink {
  title: string;
  url: string;
  source: string;
  type: 'official' | 'wikipedia' | 'search';
  description?: string;
}

export interface FormulaDetails {
  formula: string;
  description: string;
  variables: { symbol: string; meaning: string; unit: string }[];
  workedExample: {
    problem: string;
    stepByStep: string[];
    result: string;
  };
  unitsReminder: string;
}

export interface LessonUnit {
  id: string;
  slug: string;
  track: Track;
  unitNumber: number;
  title: string;
  introduction: string;
  estimatedTime: string;
  learningGoals: string[];
  sections: {
    heading: string;
    content: string[];
    analogy?: string;
  }[];
  diagram: {
    type: 'solar-system' | 'seasons-tilt' | 'star-fusion' | 'comet-tail' | 'galaxy-types' | 'inverse-square' | 'kepler-orbit' | 'flux-distance' | 'wien-spectrum' | 'redshift-wave' | 'exoplanet-transit' | 'telescope-spectrum' | 'stellar-remnants' | 'dark-matter-curve';
    caption: string;
    altText: string;
  };
  keyIdeas: string[];
  keyTerms: { term: string; definition: string }[];
  formula?: FormulaDetails;
  commonMistakes: string[];
  checkQuestions: UnitCheckQuestion[];
  externalLinks: ResourceLink[];
}

export interface PracticeQuestion {
  id: string;
  unitTag: string;
  unitName: string;
  unitSlug: string;
  track: Track;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizScore {
  score: number;
  total: number;
  percentage: number;
  date: string;
  answers: { [questionId: string]: number };
}

export interface CuratedResource {
  id: string;
  title: string;
  description: string;
  source: string;
  url: string;
  category: 'Junior' | 'Senior' | 'Both';
  topics: string[];
}
