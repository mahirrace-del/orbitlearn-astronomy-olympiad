import { CheckSquare, ShieldCheck } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface PracticeOverviewPageProps {
  navigate: (route: string) => void;
}

export const PracticeOverviewPage: React.FC<PracticeOverviewPageProps> = ({ navigate }) => {
  const { juniorLatest, juniorBest, seniorLatest, seniorBest } = useProgress();

  return (
    <div className="practice-overview-view py-main">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Practice Center</span>
        </nav>

        <div className="page-header">
          <span className="badge badge-junior">Self-Assessment Center</span>
          <h1 className="page-title">Practice Examination Center</h1>
          <p className="page-subtitle">
            Simulate competition conditions with auto-marking 15-question multiple-choice papers. Review detailed answer keys, identify knowledge gaps, and track your progress over time.
          </p>
        </div>

        {/* Practice Notice */}
        <div className="alert-box alert-info mt-6">
          <ShieldCheck size={20} className="text-cyan" />
          <div>
            <strong>Independent Practice Format:</strong>
            <p>
              Each practice paper contains 15 single-select MCQs (1 mark each, 15 marks total, no negative marking on this platform). A suggested 20-minute countdown timer is provided, but you may submit at any time. Correct answers and explanations are revealed immediately after submission.
            </p>
          </div>
        </div>

        {/* 2 Quiz Choice Cards */}
        <div className="practice-cards-grid mt-6">
          {/* Junior Quiz Card */}
          <div className="practice-exam-card card">
            <div className="exam-card-top">
              <span className="badge badge-junior">Junior Category</span>
              <span className="exam-pill">15 Questions • 20 Min</span>
            </div>

            <h2 className="exam-title">Junior Astronomy Practice Exam</h2>
            <p className="exam-desc">
              Comprehensive test covering the Sun and eight planets, lunar phases, seasons tilt, starlight & twinkling, comets and satellites, the Milky Way, and basic light intensity.
            </p>

            <div className="exam-specs-list">
              <div className="spec-row">
                <span className="spec-label">Format:</span>
                <span className="spec-val">15 Multiple-Choice Questions</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Marking:</span>
                <span className="spec-val">1 mark per correct answer (Max 15)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Negative Marking:</span>
                <span className="spec-val">None (OrbitLearn practice format)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Suggested Timer:</span>
                <span className="spec-val">20:00 minutes (auto-submits at 0)</span>
              </div>
            </div>

            {/* Past score badge */}
            {(juniorLatest || juniorBest) && (
              <div className="exam-history-card">
                <div className="history-item">
                  <span>Best Score:</span>
                  <strong>{juniorBest?.score} / {juniorBest?.total} ({juniorBest?.percentage}%)</strong>
                </div>
                {juniorLatest && (
                  <div className="history-item">
                    <span>Latest Attempt:</span>
                    <span>{juniorLatest.score} / {juniorLatest.total} ({juniorLatest.percentage}%) on {juniorLatest.date}</span>
                  </div>
                )}
              </div>
            )}

            <div className="exam-card-actions mt-6">
              <button
                className="btn btn-primary btn-full btn-lg"
                onClick={() => navigate('/practice/junior')}
              >
                <CheckSquare size={18} /> Start Junior Exam
              </button>
            </div>
          </div>

          {/* Senior Quiz Card */}
          <div className="practice-exam-card card">
            <div className="exam-card-top">
              <span className="badge badge-senior">Senior Category</span>
              <span className="exam-pill">15 Questions • 20 Min</span>
            </div>

            <h2 className="exam-title">Senior Astronomy Practice Exam</h2>
            <p className="exam-desc">
              Rigorous test covering Kepler’s Third Law calculations, stellar parallax & flux ratios, Wien’s displacement law, fusion and lifetimes, cosmological redshift, exoplanet transits, telescopes, and dark matter.
            </p>

            <div className="exam-specs-list">
              <div className="spec-row">
                <span className="spec-label">Format:</span>
                <span className="spec-val">15 Multiple-Choice Questions</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Marking:</span>
                <span className="spec-val">1 mark per correct answer (Max 15)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Negative Marking:</span>
                <span className="spec-val">None (OrbitLearn practice format)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Suggested Timer:</span>
                <span className="spec-val">20:00 minutes (auto-submits at 0)</span>
              </div>
            </div>

            {/* Past score badge */}
            {(seniorLatest || seniorBest) && (
              <div className="exam-history-card">
                <div className="history-item">
                  <span>Best Score:</span>
                  <strong>{seniorBest?.score} / {seniorBest?.total} ({seniorBest?.percentage}%)</strong>
                </div>
                {seniorLatest && (
                  <div className="history-item">
                    <span>Latest Attempt:</span>
                    <span>{seniorLatest.score} / {seniorLatest.total} ({seniorLatest.percentage}%) on {seniorLatest.date}</span>
                  </div>
                )}
              </div>
            )}

            <div className="exam-card-actions mt-6">
              <button
                className="btn btn-primary btn-full btn-lg"
                onClick={() => navigate('/practice/senior')}
              >
                <CheckSquare size={18} /> Start Senior Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
