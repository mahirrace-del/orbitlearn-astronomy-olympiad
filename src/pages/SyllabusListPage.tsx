import { CheckCircle2, Clock, ArrowRight, CheckSquare } from 'lucide-react';
import { juniorUnits } from '../data/juniorUnits';
import { seniorUnits } from '../data/seniorUnits';
import { useProgress } from '../context/ProgressContext';
import { Track } from '../types';

interface SyllabusListPageProps {
  track: Track;
  navigate: (route: string) => void;
}

export const SyllabusListPage: React.FC<SyllabusListPageProps> = ({ track, navigate }) => {
  const units = track === 'junior' ? juniorUnits : seniorUnits;
  const { isUnitComplete, juniorCompletedCount, seniorCompletedCount } = useProgress();

  const completedCount = track === 'junior' ? juniorCompletedCount : seniorCompletedCount;
  const percent = Math.round((completedCount / units.length) * 100);

  const trackTitle = track === 'junior' ? 'Junior Astronomy Syllabus' : 'Senior Astronomy Syllabus';
  const trackSubtitle =
    track === 'junior'
      ? 'Foundational, concept-first units on our Solar System, Earth-Moon-Sun geometry, starlight, space exploration tech, and the wider universe.'
      : 'In-depth units featuring gravitational mechanics, Kepler’s Third Law, stellar flux & parallax, spectroscopy, expanding universe, and compact remnants.';

  return (
    <div className="syllabus-list-view py-main">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-sep">/</span>
          <button onClick={() => navigate('/learn')} className="breadcrumb-link">Learn</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{track === 'junior' ? 'Junior' : 'Senior'}</span>
        </nav>

        {/* Header */}
        <div className="syllabus-header-card card card-dark mb-6">
          <div className="header-badge-row">
            <span className={`badge ${track === 'junior' ? 'badge-junior' : 'badge-senior'}`}>
              {track === 'junior' ? 'Junior Track' : 'Senior Track'}
            </span>
            <span className="units-total-pill">{units.length} Units</span>
          </div>

          <h1 className="syllabus-main-title text-white">{trackTitle}</h1>
          <p className="syllabus-main-desc text-slate">{trackSubtitle}</p>

          <div className="syllabus-progress-container mt-4">
            <div className="progress-labels text-slate">
              <span>Track Completion:</span>
              <strong className="text-white">{completedCount} of {units.length} units ({percent}%)</strong>
            </div>
            <div className="progress-bar-track">
              <div
                className={`progress-bar-fill ${track === 'junior' ? 'fill-cyan' : 'fill-blue'}`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Units Grid */}
        <div className="units-directory-grid">
          {units.map((unit) => {
            const completed = isUnitComplete(unit.id);
            return (
              <div key={unit.id} className={`unit-card-large card ${completed ? 'card-completed' : ''}`}>
                <div className="unit-card-large-top">
                  <div className="unit-number-tag">
                    Unit {unit.unitNumber}
                  </div>
                  <div className="unit-meta-items">
                    <span className="meta-time">
                      <Clock size={14} /> {unit.estimatedTime}
                    </span>
                    {completed && (
                      <span className="badge badge-success">
                        <CheckCircle2 size={13} /> Completed
                      </span>
                    )}
                  </div>
                </div>

                <h2 className="unit-large-title">{unit.title}</h2>
                <p className="unit-large-intro">{unit.introduction}</p>

                <div className="unit-goals-preview">
                  <h3 className="goals-heading">Learning Focus:</h3>
                  <ul className="goals-mini-list">
                    {unit.learningGoals.slice(0, 3).map((g, idx) => (
                      <li key={idx}>{g}</li>
                    ))}
                  </ul>
                </div>

                <div className="unit-card-actions mt-4">
                  <button
                    className={`btn ${completed ? 'btn-secondary' : 'btn-primary'} btn-full`}
                    onClick={() => navigate(`/learn/${track}/${unit.slug}`)}
                  >
                    {completed ? 'Review Lesson' : 'Start Lesson'} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practice Quiz Banner */}
        <div className="practice-cta-banner card mt-8">
          <div className="banner-text-col">
            <h2 className="banner-title">Ready for the {track === 'junior' ? 'Junior' : 'Senior'} Practice Exam?</h2>
            <p className="banner-desc">
              Test all topics with the official 15-question auto-marked practice paper. Includes a 20-minute timer and full step-by-step explanations.
            </p>
          </div>
          <button
            className="btn btn-cyan btn-lg"
            onClick={() => navigate(`/practice/${track}`)}
          >
            <CheckSquare size={18} /> Take {track === 'junior' ? 'Junior' : 'Senior'} Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
