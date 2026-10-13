import React, { useState } from 'react';
import {
  Sparkles,
  HelpCircle,
  HardDrive,
  Trash2,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { faqList } from '../data/faq';
import { useProgress } from '../context/ProgressContext';

interface AboutPageProps {
  navigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const {
    totalCompletedCount,
    juniorBest,
    seniorBest,
    juniorCompletedCount,
    seniorCompletedCount,
    clearProgress
  } = useProgress();

  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearedNotice, setClearedNotice] = useState(false);

  const handleConfirmClear = () => {
    clearProgress();
    setShowClearConfirm(false);
    setClearedNotice(true);
    setTimeout(() => setClearedNotice(false), 5000);
  };

  return (
    <div className="about-page-view py-main">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav mb-4" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">About & FAQ</span>
        </nav>

        <div className="page-header">
          <span className="badge badge-junior">Platform Purpose</span>
          <h1 className="page-title">About OrbitLearn & Frequently Asked Questions</h1>
          <p className="page-subtitle">
            OrbitLearn is an independent self-study web platform created to help school students prepare with clarity and confidence for introductory astronomy competitions.
          </p>
        </div>

        {clearedNotice && (
          <div className="alert-box alert-success mt-4">
            <CheckCircle size={20} />
            <span>All local browser progress, scores, and completed unit marks have been successfully reset.</span>
          </div>
        )}

        {/* Educational Mission Callout */}
        <div className="card card-dark independence-callout mt-6">
          <div className="callout-header">
            <Sparkles size={24} className="text-cyan" />
            <h2 className="callout-title text-white">Our Educational Mission</h2>
          </div>
          <p className="callout-body text-slate">
            OrbitLearn empowers school students to master core astronomy concepts, explore celestial physics with confidence, and excel in Olympiad competitions. With structured syllabus guides, interactive diagrams, formula panels, and auto-marking quizzes, students can explore the universe at their own pace.
          </p>
        </div>

        {/* Frequently Asked Questions */}
        <div className="faq-section mt-8">
          <h2 className="section-title mb-6">Frequently Asked Questions</h2>
          <div className="faq-list-stack">
            {faqList.map((item, idx) => (
              <details key={idx} className="faq-details-item card" name="faq-group">
                <summary className="faq-summary">
                  <span className="faq-question-text">{item.question}</span>
                  <HelpCircle size={18} className="faq-icon text-cyan" />
                </summary>
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Privacy & Local Storage Settings */}
        <div className="privacy-settings-section card mt-8">
          <div className="settings-header-row">
            <div className="settings-icon-box">
              <HardDrive size={22} className="text-cyan" />
            </div>
            <div>
              <h2 className="settings-title">Data Storage & Device Progress</h2>
              <p className="settings-desc">
                OrbitLearn does not collect names, email addresses, phone numbers, school names, or personal accounts. No backend database or tracking analytics are used.
              </p>
            </div>
          </div>

          <div className="storage-summary-box card card-soft-sky mt-4">
            <h3 className="storage-title">Progress stored in this browser on this device:</h3>
            <ul className="storage-stats-list">
              <li>
                <strong>Completed Units:</strong> {totalCompletedCount} of 16 ({juniorCompletedCount} Junior, {seniorCompletedCount} Senior)
              </li>
              <li>
                <strong>Junior Exam Best Score:</strong>{' '}
                {juniorBest ? `${juniorBest.score} / ${juniorBest.total} (${juniorBest.percentage}%)` : 'Not yet attempted'}
              </li>
              <li>
                <strong>Senior Exam Best Score:</strong>{' '}
                {seniorBest ? `${seniorBest.score} / ${seniorBest.total} (${seniorBest.percentage}%)` : 'Not yet attempted'}
              </li>
            </ul>
          </div>

          <div className="clear-data-action mt-6">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => setShowClearConfirm(true)}
            >
              <Trash2 size={16} /> Clear my local progress
            </button>
            <span className="clear-hint">
              Removes saved quiz scores and completed unit checkmarks from this browser.
            </span>
          </div>
        </div>

        {/* Clear Data Confirmation Modal */}
        {showClearConfirm && (
          <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-content confirm-modal-card">
              <div className="modal-header-icon text-warning">
                <AlertTriangle size={36} />
              </div>
              <h3 className="modal-title">Confirm Reset Local Progress?</h3>
              <p className="modal-body-text">
                This will delete your recorded best quiz scores and marked completed units from this browser. This action cannot be undone.
              </p>
              <div className="modal-actions-row mt-6">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowClearConfirm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-danger"
                  onClick={handleConfirmClear}
                >
                  Yes, Reset Progress
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
