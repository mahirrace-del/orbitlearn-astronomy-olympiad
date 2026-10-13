import React, { createContext, useContext, useState } from 'react';
import { QuizScore } from '../types';

interface ProgressContextType {
  completedUnits: string[];
  juniorLatest: QuizScore | null;
  juniorBest: QuizScore | null;
  seniorLatest: QuizScore | null;
  seniorBest: QuizScore | null;
  toggleUnitComplete: (unitId: string) => void;
  isUnitComplete: (unitId: string) => boolean;
  saveQuizScore: (track: 'junior' | 'senior', score: number, total: number, answers: { [qId: string]: number }) => void;
  clearProgress: () => void;
  juniorCompletedCount: number;
  seniorCompletedCount: number;
  totalCompletedCount: number;
}

const STORAGE_KEYS = {
  COMPLETED: 'orbitlearn_completed_units',
  JUNIOR_LATEST: 'orbitlearn_junior_latest',
  JUNIOR_BEST: 'orbitlearn_junior_best',
  SENIOR_LATEST: 'orbitlearn_senior_latest',
  SENIOR_BEST: 'orbitlearn_senior_best',
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

function safeGetItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`Could not read ${key} from localStorage:`, err);
    return fallback;
  }
}

function safeSetItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Could not write ${key} to localStorage:`, err);
  }
}

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedUnits, setCompletedUnits] = useState<string[]>(() =>
    safeGetItem<string[]>(STORAGE_KEYS.COMPLETED, [])
  );
  const [juniorLatest, setJuniorLatest] = useState<QuizScore | null>(() =>
    safeGetItem<QuizScore | null>(STORAGE_KEYS.JUNIOR_LATEST, null)
  );
  const [juniorBest, setJuniorBest] = useState<QuizScore | null>(() =>
    safeGetItem<QuizScore | null>(STORAGE_KEYS.JUNIOR_BEST, null)
  );
  const [seniorLatest, setSeniorLatest] = useState<QuizScore | null>(() =>
    safeGetItem<QuizScore | null>(STORAGE_KEYS.SENIOR_LATEST, null)
  );
  const [seniorBest, setSeniorBest] = useState<QuizScore | null>(() =>
    safeGetItem<QuizScore | null>(STORAGE_KEYS.SENIOR_BEST, null)
  );

  const toggleUnitComplete = (unitId: string) => {
    setCompletedUnits((prev) => {
      const next = prev.includes(unitId)
        ? prev.filter((id) => id !== unitId)
        : [...prev, unitId];
      safeSetItem(STORAGE_KEYS.COMPLETED, next);
      return next;
    });
  };

  const isUnitComplete = (unitId: string) => completedUnits.includes(unitId);

  const saveQuizScore = (
    track: 'junior' | 'senior',
    score: number,
    total: number,
    answers: { [qId: string]: number }
  ) => {
    const record: QuizScore = {
      score,
      total,
      percentage: Math.round((score / total) * 100),
      date: new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      answers
    };

    if (track === 'junior') {
      setJuniorLatest(record);
      safeSetItem(STORAGE_KEYS.JUNIOR_LATEST, record);
      setJuniorBest((prevBest) => {
        if (!prevBest || record.score > prevBest.score) {
          safeSetItem(STORAGE_KEYS.JUNIOR_BEST, record);
          return record;
        }
        return prevBest;
      });
    } else {
      setSeniorLatest(record);
      safeSetItem(STORAGE_KEYS.SENIOR_LATEST, record);
      setSeniorBest((prevBest) => {
        if (!prevBest || record.score > prevBest.score) {
          safeSetItem(STORAGE_KEYS.SENIOR_BEST, record);
          return record;
        }
        return prevBest;
      });
    }
  };

  const clearProgress = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.COMPLETED);
      localStorage.removeItem(STORAGE_KEYS.JUNIOR_LATEST);
      localStorage.removeItem(STORAGE_KEYS.JUNIOR_BEST);
      localStorage.removeItem(STORAGE_KEYS.SENIOR_LATEST);
      localStorage.removeItem(STORAGE_KEYS.SENIOR_BEST);
    } catch (e) {
      console.warn('Failed clearing localStorage:', e);
    }
    setCompletedUnits([]);
    setJuniorLatest(null);
    setJuniorBest(null);
    setSeniorLatest(null);
    setSeniorBest(null);
  };

  const juniorCompletedCount = completedUnits.filter((id) => id.startsWith('j-')).length;
  const seniorCompletedCount = completedUnits.filter((id) => id.startsWith('s-')).length;
  const totalCompletedCount = completedUnits.length;

  return (
    <ProgressContext.Provider
      value={{
        completedUnits,
        juniorLatest,
        juniorBest,
        seniorLatest,
        seniorBest,
        toggleUnitComplete,
        isUnitComplete,
        saveQuizScore,
        clearProgress,
        juniorCompletedCount,
        seniorCompletedCount,
        totalCompletedCount
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
