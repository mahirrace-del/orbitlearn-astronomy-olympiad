import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Award,
  ChevronRight,
  Filter,
  CheckSquare
} from 'lucide-react';
import { juniorPracticeQuestions, seniorPracticeQuestions } from '../data/practiceQuizzes';
import { useProgress } from '../context/ProgressContext';
import { Track, PracticeQuestion } from '../types';

interface PracticeExamPageProps {
  track: Track;
  navigate: (route: string) => void;
}

export const PracticeExamPage: React.FC<PracticeExamPageProps> = ({ track, navigate }) => {
  const questions: PracticeQuestion[] =
    track === 'junior' ? juniorPracticeQuestions : seniorPracticeQuestions;

  const { saveQuizScore } = useProgress();

  // Quiz state machine: 'intro' | 'active' | 'results'
  const [quizState, setQuizState] = useState<'intro' | 'active' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  
  // Timer state: 20 minutes (1200 seconds)
  const [secondsRemaining, setSecondsRemaining] = useState<number>(20 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // Unanswered confirmation dialog modal state
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  // Review mode filter: 'all' | 'incorrect-only'
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect'>('all');

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && quizState === 'active') {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, quizState]);

  // Format timer into MM:SS
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartQuiz = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setSecondsRemaining(20 * 60);
    setQuizState('active');
    setTimerRunning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (optionIndex: number) => {
    const q = questions[currentIndex];
    setSelectedAnswers((prev) => ({
      ...prev,
      [q.id]: optionIndex
    }));
  };

  const handleAutoSubmit = () => {
    finishExam();
  };

  const handleCheckBeforeSubmit = () => {
    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount < questions.length) {
      setShowConfirmModal(true);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    setTimerRunning(false);
    setShowConfirmModal(false);
    setQuizState('results');

    // Calculate score
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });

    // Save to localStorage
    saveQuizScore(track, score, questions.length, selectedAnswers);

    // Trigger confetti on good score (>= 11/15)
    if (score >= 11) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Confetti fallback
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => {
    handleStartQuiz();
  };

  const currentQ = questions[currentIndex];
  const answeredTotal = Object.keys(selectedAnswers).length;

  // Topic breakdown calculations for results
  const calculateTopicBreakdown = () => {
    const map: {
      [tag: string]: {
        name: string;
        slug: string;
        total: number;
        correct: number;
      };
    } = {};

    questions.forEach((q) => {
      if (!map[q.unitTag]) {
        map[q.unitTag] = {
          name: q.unitName,
          slug: q.unitSlug,
          total: 0,
          correct: 0
        };
      }
      map[q.unitTag].total += 1;
      if (selectedAnswers[q.id] === q.correctIndex) {
        map[q.unitTag].correct += 1;
      }
    });

    return Object.values(map);
  };

  const scoreTotal = questions.filter((q) => selectedAnswers[q.id] === q.correctIndex).length;
  const scorePercent = Math.round((scoreTotal / questions.length) * 100);

  // Friendly feedback text tied strictly to score
  const getFeedbackMessage = (score: number) => {
    if (score === 15) {
      return 'Outstanding perfect score! You have demonstrated exceptional mastery across all syllabus topics.';
    }
    if (score >= 12) {
      return 'Excellent performance! You have a solid grasp of both conceptual foundations and key details.';
    }
    if (score >= 8) {
      return 'Good foundation! Review the flagged topics below to reinforce specific formulas and concepts before retrying.';
    }
    return 'Great practice effort! We recommend studying the highlighted lesson units again to build your core confidence.';
  };

  return (
    <div className="practice-exam-view py-main">
      <div className="container exam-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav mb-4" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-sep">/</span>
          <button onClick={() => navigate('/practice')} className="breadcrumb-link">Practice Center</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{track === 'junior' ? 'Junior Exam' : 'Senior Exam'}</span>
        </nav>

        {/* ============================================================== */}
        {/* VIEW 1: INTRO SCREEN                                            */}
        {/* ============================================================== */}
        {quizState === 'intro' && (
          <div className="exam-intro-card card">
            <div className="intro-badge-row">
              <span className={`badge ${track === 'junior' ? 'badge-junior' : 'badge-senior'}`}>
                {track === 'junior' ? 'Junior Astronomy Paper' : 'Senior Astronomy Paper'}
              </span>
              <span className="spec-badge">15 Questions • Max 15 Marks</span>
            </div>

            <h1 className="intro-title">
              {track === 'junior' ? 'Junior Practice Examination' : 'Senior Practice Examination'}
            </h1>
            <p className="intro-description">
              This practice exam is an independent preparation test designed to evaluate your knowledge across the {track === 'junior' ? 'Junior' : 'Senior'} syllabus.
            </p>

            <div className="intro-rules-box card card-soft-sky mt-4">
              <h3 className="rules-heading">Exam Instructions & Format:</h3>
              <ul className="rules-list">
                <li><strong>Questions:</strong> Exactly 15 single-select multiple-choice questions.</li>
                <li><strong>Scoring:</strong> 1 mark per correct answer (Total: 15 marks).</li>
                <li><strong>Negative Marking:</strong> None on this platform. An unanswered or incorrect question receives 0 marks.</li>
                <li><strong>Suggested Timer:</strong> 20:00 minutes. You may submit at any time once you are ready.</li>
                <li><strong>Review Mode:</strong> You will see complete answer keys, explanations, and direct syllabus links immediately after submission.</li>
              </ul>
            </div>

            <div className="intro-actions-row mt-6">
              <button
                className="btn btn-cyan btn-lg start-exam-btn"
                onClick={handleStartQuiz}
              >
                <CheckSquare size={18} /> Start Practice Quiz
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => navigate('/practice')}
              >
                Back to Practice Center
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: ACTIVE EXAM (ONE QUESTION AT A TIME)                   */}
        {/* ============================================================== */}
        {quizState === 'active' && (
          <div className="active-exam-container">
            {/* Top Toolbar: Progress & Timer */}
            <div className="exam-toolbar card">
              <div className="toolbar-left">
                <span className="q-progress-text">
                  Question <strong>{currentIndex + 1}</strong> of {questions.length}
                </span>
                <span className="answered-status">
                  ({answeredTotal} of {questions.length} answered)
                </span>
              </div>

              {/* Progress Bar */}
              <div className="toolbar-center">
                <div className="exam-progress-bar">
                  <div
                    className="exam-progress-fill"
                    style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Timer */}
              <div className={`toolbar-timer ${secondsRemaining <= 180 ? 'timer-warning' : ''}`}>
                <Clock size={16} />
                <span className="timer-text">{formatTime(secondsRemaining)}</span>
              </div>
            </div>

            {/* Question Navigator (Collapsible on mobile) */}
            <div className="question-nav-strip card mt-4">
              <span className="nav-strip-label">Question Navigator:</span>
              <div className="question-num-buttons-row">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  return (
                    <button
                      key={q.id}
                      type="button"
                      className={`q-num-btn ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''}`}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to question ${idx + 1} (${isAnswered ? 'answered' : 'unanswered'})`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Question Card */}
            <div className="active-question-card card mt-4">
              <div className="q-unit-tag-row">
                <span className="badge badge-senior">{currentQ.unitTag}</span>
                <span className="mark-weight">1 Mark</span>
              </div>

              <h2 className="exam-question-text">{currentQ.question}</h2>

              {/* Radio Options (Single select only, correctness hidden until submit) */}
              <div className="exam-options-stack" role="radiogroup" aria-label={`Question ${currentIndex + 1} options`}>
                {currentQ.options.map((opt, optIdx) => {
                  const isChecked = selectedAnswers[currentQ.id] === optIdx;
                  return (
                    <label
                      key={optIdx}
                      className={`exam-option-card ${isChecked ? 'selected' : ''}`}
                      onClick={() => handleSelectOption(optIdx)}
                    >
                      <input
                        type="radio"
                        name={`exam-q-${currentQ.id}`}
                        value={optIdx}
                        checked={isChecked}
                        onChange={() => handleSelectOption(optIdx)}
                      />
                      <span className="opt-letter-circle">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="exam-opt-text">{opt}</span>
                    </label>
                  );
                })}
              </div>

              {/* Bottom Nav Buttons */}
              <div className="exam-navigation-controls mt-6">
                <button
                  type="button"
                  className="btn btn-secondary"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => prev - 1)}
                >
                  <ArrowLeft size={16} /> Previous Question
                </button>

                {currentIndex < questions.length - 1 ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                  >
                    Next Question <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-cyan submit-btn"
                    onClick={handleCheckBeforeSubmit}
                  >
                    Submit Practice Exam <CheckSquare size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Floating early submit button */}
            <div className="early-submit-bar mt-4">
              <button
                type="button"
                className="btn btn-outline early-sub-btn"
                onClick={handleCheckBeforeSubmit}
              >
                Submit Exam Early ({answeredTotal}/{questions.length} answered)
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: RESULTS MODE                                           */}
        {/* ============================================================== */}
        {quizState === 'results' && (
          <div className="exam-results-container">
            {/* Score Summary Card */}
            <div className="results-summary-card card card-dark">
              <div className="score-badge-row">
                <span className={`badge ${track === 'junior' ? 'badge-junior' : 'badge-senior'}`}>
                  {track === 'junior' ? 'Junior Category' : 'Senior Category'}
                </span>
                <span className="exam-completed-time">Time Used: {formatTime(20 * 60 - secondsRemaining)}</span>
              </div>

              <div className="score-hero-display">
                <div className="score-big-number">
                  <span className="numerator text-cyan">{scoreTotal}</span>
                  <span className="slash">/</span>
                  <span className="denominator">{questions.length}</span>
                </div>
                <div className="score-percentage-pill">
                  {scorePercent}%
                </div>
              </div>

              <h2 className="results-headline text-white">Exam Completed!</h2>
              <p className="results-feedback-msg text-slate">
                {getFeedbackMessage(scoreTotal)}
              </p>

              <div className="results-top-actions mt-4">
                <button className="btn btn-cyan" onClick={handleRetry}>
                  <RotateCcw size={16} /> Retry Quiz
                </button>
                <button
                  className="btn btn-outline-white"
                  onClick={() => navigate(`/learn/${track}`)}
                >
                  Back to {track === 'junior' ? 'Junior' : 'Senior'} Syllabus
                </button>
              </div>
            </div>

            {/* Topic Breakdown Card */}
            <div className="topic-breakdown-card card mt-6">
              <h3 className="breakdown-title">
                <Award size={18} className="text-cyan" /> Syllabus Topic Breakdown
              </h3>
              <p className="breakdown-subtitle">
                Identify which areas you mastered and which units need further revision.
              </p>

              <div className="topics-breakdown-grid mt-4">
                {calculateTopicBreakdown().map((t, idx) => {
                  const tPercent = Math.round((t.correct / t.total) * 100);
                  const isFull = t.correct === t.total;
                  return (
                    <div key={idx} className="topic-result-item card">
                      <div className="topic-result-header">
                        <strong className="topic-name">{t.name}</strong>
                        <span className={`topic-score-badge ${isFull ? 'score-full' : 'score-partial'}`}>
                          {t.correct} / {t.total} ({tPercent}%)
                        </span>
                      </div>
                      <div className="progress-bar-track">
                        <div
                          className={`progress-bar-fill ${isFull ? 'fill-green' : 'fill-blue'}`}
                          style={{ width: `${tPercent}%` }}
                        />
                      </div>
                      <button
                        className="review-unit-link mt-2"
                        onClick={() => navigate(`/learn/${track}/${t.slug}`)}
                      >
                        Study this unit <ChevronRight size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Question Review Section */}
            <div className="questions-review-section mt-8">
              <div className="review-header-bar">
                <div>
                  <h3 className="review-section-title">Detailed Question Review</h3>
                  <p className="review-sub">Review explanations and verify your choices for every question.</p>
                </div>

                {/* Filter toggle: All vs Incorrect Only */}
                <div className="filter-button-group">
                  <button
                    className={`btn btn-sm ${reviewFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setReviewFilter('all')}
                  >
                    Show All (15)
                  </button>
                  <button
                    className={`btn btn-sm ${reviewFilter === 'incorrect' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setReviewFilter('incorrect')}
                  >
                    <Filter size={14} /> Review Incorrect Only ({questions.length - scoreTotal})
                  </button>
                </div>
              </div>

              <div className="review-questions-list mt-4">
                {questions
                  .filter((q) => {
                    if (reviewFilter === 'incorrect') {
                      return selectedAnswers[q.id] !== q.correctIndex;
                    }
                    return true;
                  })
                  .map((q) => {
                    const userChoice = selectedAnswers[q.id];
                    const isCorrect = userChoice === q.correctIndex;
                    const originalIndex = questions.findIndex((item) => item.id === q.id);

                    return (
                      <div
                        key={q.id}
                        className={`review-question-card card ${isCorrect ? 'rev-correct' : 'rev-incorrect'}`}
                      >
                        <div className="rev-card-top">
                          <span className="rev-num">Question {originalIndex + 1} ({q.id})</span>
                          <span className={`rev-result-badge ${isCorrect ? 'badge-correct' : 'badge-incorrect'}`}>
                            {isCorrect ? (
                              <>
                                <CheckCircle2 size={15} /> Correct (+1 mark)
                              </>
                            ) : (
                              <>
                                <XCircle size={15} /> Incorrect (0 marks)
                              </>
                            )}
                          </span>
                        </div>

                        <h4 className="rev-question-text">{q.question}</h4>

                        {/* Options display */}
                        <div className="rev-options-list">
                          {q.options.map((opt, optIdx) => {
                            const wasSelected = userChoice === optIdx;
                            const isAnswerKey = optIdx === q.correctIndex;

                            let optCls = 'rev-opt-item';
                            if (isAnswerKey) optCls += ' is-correct-answer';
                            if (wasSelected && !isCorrect) optCls += ' is-user-wrong';

                            return (
                              <div key={optIdx} className={optCls}>
                                <span className="rev-opt-letter">{String.fromCharCode(65 + optIdx)}.</span>
                                <span className="rev-opt-text">{opt}</span>
                                {isAnswerKey && (
                                  <span className="rev-tag-correct">✓ Correct Answer</span>
                                )}
                                {wasSelected && !isCorrect && (
                                  <span className="rev-tag-wrong">Your Choice</span>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Explanation & Unit Link */}
                        <div className="rev-explanation-box mt-4">
                          <p className="rev-expl-text">
                            <strong>Explanation:</strong> {q.explanation}
                          </p>
                          <div className="rev-unit-link-row mt-2">
                            <span className="rev-unit-tag">Syllabus Topic: {q.unitName}</span>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => navigate(`/learn/${track}/${q.unitSlug}`)}
                            >
                              <BookOpen size={14} /> Study This Unit <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="results-bottom-bar card mt-8">
              <button className="btn btn-primary btn-lg" onClick={handleRetry}>
                <RotateCcw size={18} /> Retake Practice Exam
              </button>
              <button
                className="btn btn-secondary btn-lg"
                onClick={() => navigate('/practice')}
              >
                Return to Practice Center
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Modal if Unanswered Questions Exist */}
        {showConfirmModal && (
          <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-content confirm-modal-card">
              <div className="modal-header-icon text-warning">
                <AlertCircle size={36} />
              </div>
              <h3 className="modal-title">Unanswered Questions Remaining</h3>
              <p className="modal-body-text">
                You have answered <strong>{answeredTotal}</strong> of <strong>{questions.length}</strong> questions.
                There are <strong>{questions.length - answeredTotal}</strong> unanswered questions.
              </p>
              <p className="modal-sub-text">
                Unanswered questions receive 0 marks. Are you sure you wish to submit now?
              </p>
              <div className="modal-actions-row mt-6">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowConfirmModal(false)}
                >
                  Return to Questions
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={finishExam}
                >
                  Submit Anyway
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
