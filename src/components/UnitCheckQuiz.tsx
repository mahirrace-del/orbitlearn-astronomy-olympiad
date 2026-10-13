import React, { useState } from 'react';
import { UnitCheckQuestion } from '../types';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface UnitCheckQuizProps {
  questions: UnitCheckQuestion[];
  unitTitle: string;
}

export const UnitCheckQuiz: React.FC<UnitCheckQuizProps> = ({ questions, unitTitle }) => {
  // Store selected option index per question id
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  // Store whether each question has been checked
  const [submitted, setSubmitted] = useState<{ [qId: string]: boolean }>({});

  const handleSelect = (qId: string, optionIndex: number) => {
    if (submitted[qId]) return; // locked once checked until retry
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  const handleCheck = (qId: string) => {
    if (selectedAnswers[qId] === undefined) return;
    setSubmitted((prev) => ({ ...prev, [qId]: true }));
  };

  const handleRetry = (qId: string) => {
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
    setSubmitted((prev) => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
  };

  return (
    <div className="unit-check-container">
      <div className="unit-check-header">
        <h3 className="unit-check-title">Check Your Understanding</h3>
        <p className="unit-check-desc">
          Test your key takeaways for <em>{unitTitle}</em> with these quick practice questions.
        </p>
      </div>

      <div className="unit-check-list">
        {questions.map((q, idx) => {
          const isSelected = selectedAnswers[q.id] !== undefined;
          const isDone = submitted[q.id];
          const chosen = selectedAnswers[q.id];
          const isCorrect = isDone && chosen === q.correctIndex;

          return (
            <div key={q.id} className="unit-check-item card">
              <div className="question-header">
                <span className="question-number">Question {idx + 1} of {questions.length}</span>
                {isDone && (
                  <span className={`result-tag ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? (
                      <>
                        <CheckCircle2 size={16} /> Correct!
                      </>
                    ) : (
                      <>
                        <XCircle size={16} /> Not quite
                      </>
                    )}
                  </span>
                )}
              </div>

              <h4 className="question-text">{q.question}</h4>

              <div className="options-group" role="radiogroup" aria-label={`Question ${idx + 1} options`}>
                {q.options.map((opt, optIdx) => {
                  let optClass = 'option-label';
                  if (chosen === optIdx) optClass += ' selected';
                  if (isDone) {
                    if (optIdx === q.correctIndex) optClass += ' option-correct';
                    else if (chosen === optIdx && !isCorrect) optClass += ' option-incorrect';
                  }

                  return (
                    <label
                      key={optIdx}
                      className={optClass}
                      onClick={() => handleSelect(q.id, optIdx)}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={optIdx}
                        checked={chosen === optIdx}
                        disabled={isDone}
                        onChange={() => handleSelect(q.id, optIdx)}
                        aria-label={opt}
                      />
                      <span className="option-radio-custom" />
                      <span className="option-text">{opt}</span>
                    </label>
                  );
                })}
              </div>

              {!isDone ? (
                <div className="question-actions">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    disabled={!isSelected}
                    onClick={() => handleCheck(q.id)}
                  >
                    Check Answer
                  </button>
                </div>
              ) : (
                <div className={`explanation-panel ${isCorrect ? 'panel-correct' : 'panel-incorrect'}`}>
                  <p className="explanation-text">{q.explanation}</p>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm retry-btn"
                    onClick={() => handleRetry(q.id)}
                  >
                    <RotateCcw size={14} /> Try Again
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
