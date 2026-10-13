import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { juniorUnits } from '../data/juniorUnits';
import { seniorUnits } from '../data/seniorUnits';
import { useProgress } from '../context/ProgressContext';

interface LearnOverviewPageProps {
  navigate: (route: string) => void;
}

export const LearnOverviewPage: React.FC<LearnOverviewPageProps> = ({ navigate }) => {
  const { juniorCompletedCount, seniorCompletedCount, isUnitComplete } = useProgress();

  const juniorPercent = Math.round((juniorCompletedCount / juniorUnits.length) * 100);
  const seniorPercent = Math.round((seniorCompletedCount / seniorUnits.length) * 100);

  return (
    <div className="learn-overview-view py-main">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Learn</span>
        </nav>

        <div className="page-header">
          <span className="badge badge-junior">Curriculum Overview</span>
          <h1 className="page-title">Syllabus & Learning Tracks</h1>
          <p className="page-subtitle">
            OrbitLearn provides structured, topic-by-topic study guidance divided into Junior and Senior preparation tracks. Choose a track below to explore lessons or track your progress.
          </p>
        </div>

        {/* Track Selection Cards */}
        <div className="learn-tracks-grid mt-6">
          {/* Junior Track */}
          <div className="learn-track-panel card">
            <div className="track-panel-top">
              <span className="badge badge-junior">Track 1</span>
              <span className="unit-stat-pill">6 Units Total</span>
            </div>
            <h2 className="track-panel-title">Junior Astronomy</h2>
            <p className="track-panel-desc">
              Designed for younger students or beginners starting astronomy. Covers foundational understanding of Earth, the Moon and Sun, our planetary neighbours, why stars twinkle, comets and satellites, galaxies, and light intensity ratios.
            </p>

            {/* Progress meter */}
            <div className="track-progress-block">
              <div className="progress-labels">
                <span>Your Progress:</span>
                <strong>{juniorCompletedCount} of {juniorUnits.length} completed ({juniorPercent}%)</strong>
              </div>
              <div className="progress-bar-track">
                <div className="progress-bar-fill fill-cyan" style={{ width: `${juniorPercent}%` }} />
              </div>
            </div>

            <div className="units-accordion-preview">
              <h3 className="preview-heading">Units in this Track:</h3>
              <ul className="unit-mini-list">
                {juniorUnits.map((u) => {
                  const done = isUnitComplete(u.id);
                  return (
                    <li key={u.id} className="unit-mini-item">
                      <button
                        onClick={() => navigate(`/learn/junior/${u.slug}`)}
                        className="unit-mini-btn"
                      >
                        <span className="unit-mini-num">Unit {u.unitNumber}</span>
                        <span className="unit-mini-name">{u.title}</span>
                        {done ? (
                          <CheckCircle size={16} className="text-success check-icon" />
                        ) : (
                          <ArrowRight size={14} className="arrow-icon" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="track-panel-actions">
              <button
                className="btn btn-primary btn-full"
                onClick={() => navigate('/learn/junior')}
              >
                Open Junior Syllabus <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Senior Track */}
          <div className="learn-track-panel card">
            <div className="track-panel-top">
              <span className="badge badge-senior">Track 2</span>
              <span className="unit-stat-pill">10 Units Total</span>
            </div>
            <h2 className="track-panel-title">Senior Astronomy</h2>
            <p className="track-panel-desc">
              Designed for older students ready for introductory quantitative and conceptual astrophysics. Covers Kepler’s Third Law, stellar flux and parallax, Wien’s law, mass-luminosity scaling, redshift, exoplanet transit depth, telescopes, remnants, and dark matter.
            </p>

            {/* Progress meter */}
            <div className="track-progress-block">
              <div className="progress-labels">
                <span>Your Progress:</span>
                <strong>{seniorCompletedCount} of {seniorUnits.length} completed ({seniorPercent}%)</strong>
              </div>
              <div className="progress-bar-track">
                <div className="progress-bar-fill fill-blue" style={{ width: `${seniorPercent}%` }} />
              </div>
            </div>

            <div className="units-accordion-preview">
              <h3 className="preview-heading">Units in this Track:</h3>
              <ul className="unit-mini-list">
                {seniorUnits.map((u) => {
                  const done = isUnitComplete(u.id);
                  return (
                    <li key={u.id} className="unit-mini-item">
                      <button
                        onClick={() => navigate(`/learn/senior/${u.slug}`)}
                        className="unit-mini-btn"
                      >
                        <span className="unit-mini-num">Unit {u.unitNumber}</span>
                        <span className="unit-mini-name">{u.title}</span>
                        {done ? (
                          <CheckCircle size={16} className="text-success check-icon" />
                        ) : (
                          <ArrowRight size={14} className="arrow-icon" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="track-panel-actions">
              <button
                className="btn btn-primary btn-full"
                onClick={() => navigate('/learn/senior')}
              >
                Open Senior Syllabus <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
