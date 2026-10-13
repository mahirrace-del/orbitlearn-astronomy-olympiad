import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Orbit,
  ArrowRight
} from 'lucide-react';
import { juniorUnits } from '../data/juniorUnits';
import { seniorUnits } from '../data/seniorUnits';
import { useProgress } from '../context/ProgressContext';

interface HomePageProps {
  navigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { juniorBest, seniorBest } = useProgress();

  // Interactive sample preview question state
  const [sampleSelected, setSampleSelected] = useState<number | null>(null);
  const [sampleSubmitted, setSampleSubmitted] = useState<boolean>(false);

  const sampleQuestion = {
    question: 'Which is the largest planet in our Solar System?',
    options: ['Earth', 'Mars', 'Saturn', 'Jupiter'],
    correctIndex: 3,
    explanation: 'Jupiter is the largest planet, possessing more mass than all other planets combined.'
  };

  return (
    <div className="home-page-view">
      {/* SECTION A: HERO */}
      <section className="hero-section starfield-bg">
        <div className="container hero-container">
          <div className="hero-content-col">
            <div className="hero-eyebrow">
              <Sparkles size={14} className="text-cyan" />
              <span>YOUR JOURNEY INTO ASTRONOMY</span>
            </div>

            <h1 className="hero-headline">
              Understand the universe. <br />
              <span className="text-cyan">Prepare with confidence.</span>
            </h1>

            <p className="hero-subheadline">
              Learn astronomy one topic at a time, explore trusted references, and test your understanding with instant-marking practice quizzes for Junior and Senior students.
            </p>

            <div className="hero-cta-group">
              <button
                className="btn btn-cyan btn-lg"
                onClick={() => navigate('/learn')}
              >
                Explore the syllabus <ArrowRight size={18} />
              </button>
              <button
                className="btn btn-outline-white btn-lg"
                onClick={() => navigate('/practice')}
              >
                Try a practice quiz
              </button>
            </div>

            <div className="hero-supporting-points">
              <span>Beginner-friendly explanations</span>
              <span className="dot-divider">•</span>
              <span>Curated references</span>
              <span className="dot-divider">•</span>
              <span>Instant quiz results</span>
            </div>
          </div>

          {/* Right Hero Space Visual Panel */}
          <div className="hero-visual-col">
            <div className="hero-space-panel">
              <svg viewBox="0 0 460 380" className="hero-celestial-svg" role="img" aria-label="Restrained celestial illustration showing planetary curvature, orbit paths, and space telescope">
                <defs>
                  <radialGradient id="planetGlow" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#1E88E5" />
                    <stop offset="60%" stopColor="#0D2344" />
                    <stop offset="100%" stopColor="#071426" />
                  </radialGradient>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#55D6E8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#163E72" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Star points */}
                <circle cx="80" cy="50" r="1.5" fill="#FFF" opacity="0.9" />
                <circle cx="160" cy="30" r="1" fill="#55D6E8" opacity="0.7" />
                <circle cx="280" cy="70" r="1.5" fill="#FFF" opacity="0.8" />
                <circle cx="390" cy="40" r="2" fill="#55D6E8" opacity="0.9" />
                <circle cx="420" cy="120" r="1" fill="#FFF" opacity="0.6" />
                <circle cx="50" cy="190" r="1.5" fill="#FFF" opacity="0.7" />
                <circle cx="340" cy="180" r="1" fill="#FFF" opacity="0.5" />

                {/* Elegant Planetary Arc / Planet Edge */}
                <path
                  d="M -40 400 A 320 320 0 0 1 380 -20 L -40 -20 Z"
                  fill="url(#planetGlow)"
                  opacity="0.85"
                />
                {/* Thin atmospheric rim glow */}
                <path
                  d="M -40 400 A 320 320 0 0 1 380 -20"
                  fill="none"
                  stroke="#55D6E8"
                  strokeWidth="2.5"
                  opacity="0.9"
                />

                {/* Subtle Orbits */}
                <ellipse cx="220" cy="200" rx="200" ry="85" fill="none" stroke="url(#ringGrad)" strokeWidth="1.5" strokeDasharray="4 4" transform="rotate(-18 220 200)" />
                <ellipse cx="220" cy="200" rx="140" ry="55" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 3" transform="rotate(10 220 200)" />

                {/* Orbiting Satellite / Telescope illustration */}
                <g transform="translate(320, 140) rotate(-25)">
                  {/* Spacecraft body */}
                  <rect x="-12" y="-7" width="24" height="14" rx="2" fill="#CFD8DC" stroke="#90A4AE" strokeWidth="1" />
                  {/* Solar panels */}
                  <rect x="-34" y="-5" width="20" height="10" rx="1" fill="#1565C0" stroke="#55D6E8" strokeWidth="0.8" />
                  <rect x="14" y="-5" width="20" height="10" rx="1" fill="#1565C0" stroke="#55D6E8" strokeWidth="0.8" />
                  {/* Aperture */}
                  <circle cx="0" cy="0" r="4" fill="#263238" />
                </g>
              </svg>

              {/* Floating mini-stats badges (only real factual stats) */}
              <div className="hero-mini-stat stat-1">
                <Orbit size={18} className="text-cyan" />
                <div>
                  <strong className="stat-value">2 Study Tracks</strong>
                  <span className="stat-label">Junior & Senior Syllabuses</span>
                </div>
              </div>

              <div className="hero-mini-stat stat-2">
                <BookOpen size={18} className="text-cyan" />
                <div>
                  <strong className="stat-value">16 Lesson Units</strong>
                  <span className="stat-label">Substantial plain-language guides</span>
                </div>
              </div>

              <div className="hero-mini-stat stat-3">
                <CheckCircle2 size={18} className="text-cyan" />
                <div>
                  <strong className="stat-value">Instant Results</strong>
                  <span className="stat-label">15-MCQ exams with full review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITION ANNOUNCEMENT CALLOUT */}
      <div className="home-competition-callout-wrap">
        <div className="container">
          <div className="home-competition-callout card">
            <div className="callout-content-col">
              <div className="callout-badges">
                <span className="badge badge-senior">Upcoming Olympiad</span>
                <span className="callout-date-pill">14 November 2026</span>
              </div>
              <h3 className="callout-title">NASA Astronomy Olympiad 2026 • Bangladesh Round</h3>
              <p className="callout-desc">
                Venue: <strong>Heritage School, Narayanganj</strong> • Open to Classes 6–12 (Junior Explorer &amp; Teen Explorer).
                Winners qualify for the week-long NASA Experience Camp in the USA (January 2027)!
              </p>
            </div>
            <div className="callout-action-col">
              <button
                className="btn btn-cyan btn-lg"
                onClick={() => navigate('/competition')}
              >
                The Competition Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION B: CHOOSE YOUR STUDY TRACK */}
      <section className="tracks-section py-section">
        <div className="container">
          <div className="section-header-center">
            <span className="badge badge-junior">Syllabus Options</span>
            <h2 className="section-title">Choose your study track</h2>
            <p className="section-subtitle">
              Start with foundational celestial concepts or dive deeper into mathematical astrophysics.
            </p>
          </div>

          <div className="track-cards-grid">
            {/* Junior Track Card */}
            <div className="track-card card">
              <div className="track-card-header">
                <span className="badge badge-junior">Junior Track</span>
                <span className="unit-count-pill">6 Core Units</span>
              </div>
              <h3 className="track-title">Junior Astronomy</h3>
              <p className="track-desc">
                Build your foundations: Earth, Moon and Sun, planets, stars, space technology, galaxies and the universe.
              </p>

              <div className="track-topics-box">
                <h4 className="topics-heading">Key Topics Covered:</h4>
                <ul className="topics-list">
                  <li>Our Solar System & 8 Planets</li>
                  <li>Earth, Moon, Sun & Seasons Tilt</li>
                  <li>Why Stars Twinkle & Nuclear Fusion</li>
                  <li>Comets, Satellites & Telescopes</li>
                  <li>The Milky Way & Galaxy Classification</li>
                  <li>Light Intensity & Inverse-Square Fractions</li>
                </ul>
              </div>

              <div className="track-card-footer">
                <button
                  className="btn btn-primary btn-full"
                  onClick={() => navigate('/learn/junior')}
                >
                  Explore Junior Syllabus <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Senior Track Card */}
            <div className="track-card card">
              <div className="track-card-header">
                <span className="badge badge-senior">Senior Track</span>
                <span className="unit-count-pill">10 In-depth Units</span>
              </div>
              <h3 className="track-title">Senior Astronomy</h3>
              <p className="track-desc">
                Go deeper: orbits, stellar brightness, spectra, fusion, redshift, exoplanets and introductory astrophysics.
              </p>

              <div className="track-topics-box">
                <h4 className="topics-heading">Key Topics Covered:</h4>
                <ul className="topics-list">
                  <li>Gravity, Orbits & Kepler’s Third Law (T² = a³)</li>
                  <li>Luminosity, Flux (F ∝ L/d²) & Parallax (d = 1/p)</li>
                  <li>Wien’s Law & Continuous Stellar Spectra</li>
                  <li>Mass-Luminosity Scaling & Supernovae</li>
                  <li>Cosmological Redshift & Hubble’s Law (v ≈ cz)</li>
                  <li>Exoplanet Transit Light Curves & Remnants</li>
                </ul>
              </div>

              <div className="track-card-footer">
                <button
                  className="btn btn-primary btn-full"
                  onClick={() => navigate('/learn/senior')}
                >
                  Explore Senior Syllabus <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: LEARN -> PRACTISE -> IMPROVE */}
      <section className="method-section bg-soft-sky py-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Learn → Practise → Improve</h2>
            <p className="section-subtitle">
              A structured self-study approach engineered for independent student success.
            </p>
          </div>

          <div className="method-steps-grid">
            <div className="method-step-card card">
              <div className="step-num-badge">1</div>
              <h3 className="step-title">Study a unit</h3>
              <p className="step-desc">
                Read a comprehensive lesson with plain-language explanations, learning goals, clear diagrams, and key terms glossary.
              </p>
            </div>

            <div className="method-step-card card">
              <div className="step-num-badge">2</div>
              <h3 className="step-title">Explore more</h3>
              <p className="step-desc">
                Deepen your understanding with vetted external links to NASA educational articles, Wikipedia overviews, and focused searches.
              </p>
            </div>

            <div className="method-step-card card">
              <div className="step-num-badge">3</div>
              <h3 className="step-title">Check understanding</h3>
              <p className="step-desc">
                Take unit check MCQs and full 15-question auto-marked practice exams with instant step-by-step review and answer explanations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: FEATURED LEARNING UNITS */}
      <section className="featured-units-section py-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="badge badge-senior">Curriculum Highlights</span>
              <h2 className="section-title">Featured Learning Units</h2>
              <p className="section-subtitle">
                Sample core topics from both the Junior and Senior preparation tracks.
              </p>
            </div>
            <button className="btn btn-secondary" onClick={() => navigate('/learn')}>
              View All 16 Units <ChevronRight size={16} />
            </button>
          </div>

          <div className="featured-units-grid">
            {/* 3 Junior Featured Units */}
            {juniorUnits.slice(0, 3).map((u) => (
              <div key={u.id} className="unit-preview-card card">
                <div className="unit-card-badge-row">
                  <span className="badge badge-junior">Junior Unit {u.unitNumber}</span>
                  <span className="time-estimate">{u.estimatedTime}</span>
                </div>
                <h3 className="unit-card-title">{u.title}</h3>
                <p className="unit-card-intro">{u.introduction.slice(0, 125)}...</p>
                <div className="unit-card-action">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => navigate(`/learn/junior/${u.slug}`)}
                  >
                    Study unit <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}

            {/* 3 Senior Featured Units */}
            {seniorUnits.slice(0, 3).map((u) => (
              <div key={u.id} className="unit-preview-card card">
                <div className="unit-card-badge-row">
                  <span className="badge badge-senior">Senior Unit {u.unitNumber}</span>
                  <span className="time-estimate">{u.estimatedTime}</span>
                </div>
                <h3 className="unit-card-title">{u.title}</h3>
                <p className="unit-card-intro">{u.introduction.slice(0, 125)}...</p>
                <div className="unit-card-action">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => navigate(`/learn/senior/${u.slug}`)}
                  >
                    Study unit <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: PRACTICE TEST PREVIEW */}
      <section className="quiz-preview-section bg-soft-sky py-section">
        <div className="container quiz-preview-container">
          <div className="quiz-preview-left">
            <span className="badge badge-junior">Exam Simulation</span>
            <h2 className="section-title">Ready to test your knowledge?</h2>
            <p className="section-subtitle">
              Each exam paper features a 15-question multiple-choice practice set. Scored at 1 mark per correct answer with no negative marking on this platform.
            </p>

            <div className="quiz-track-buttons-row">
              <button
                className="btn btn-primary"
                onClick={() => navigate('/practice/junior')}
              >
                Take Junior quiz (15 Qs)
              </button>
              <button
                className="btn btn-dark"
                onClick={() => navigate('/practice/senior')}
              >
                Take Senior quiz (15 Qs)
              </button>
            </div>

            {(juniorBest || seniorBest) && (
              <div className="best-score-summary card mt-4">
                <h4 className="best-title">Your Stored Best Attempts:</h4>
                <div className="scores-row">
                  {juniorBest && (
                    <div className="score-pill">
                      Junior Best: <strong>{juniorBest.score} / {juniorBest.total}</strong> ({juniorBest.percentage}%)
                    </div>
                  )}
                  {seniorBest && (
                    <div className="score-pill">
                      Senior Best: <strong>{seniorBest.score} / {seniorBest.total}</strong> ({seniorBest.percentage}%)
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="quiz-preview-right">
            <div className="card sample-question-card">
              <div className="sample-card-header">
                <span className="badge badge-junior">Sample MCQ Preview</span>
                <span className="sample-hint">Try interacting below:</span>
              </div>

              <h4 className="sample-question-text">{sampleQuestion.question}</h4>

              <div className="sample-options-list">
                {sampleQuestion.options.map((opt, i) => {
                  let cls = 'sample-option-btn';
                  if (sampleSelected === i) cls += ' selected';
                  if (sampleSubmitted) {
                    if (i === sampleQuestion.correctIndex) cls += ' correct';
                    else if (sampleSelected === i) cls += ' incorrect';
                  }

                  return (
                    <button
                      key={i}
                      type="button"
                      className={cls}
                      onClick={() => !sampleSubmitted && setSampleSelected(i)}
                      disabled={sampleSubmitted}
                    >
                      <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
                      <span className="opt-text">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {!sampleSubmitted ? (
                <button
                  className="btn btn-secondary btn-sm mt-3"
                  disabled={sampleSelected === null}
                  onClick={() => setSampleSubmitted(true)}
                >
                  Submit Sample Answer
                </button>
              ) : (
                <div className="sample-feedback-panel mt-3">
                  <p className="feedback-text">
                    <strong>{sampleSelected === sampleQuestion.correctIndex ? 'Correct!' : 'Incorrect.'}</strong>{' '}
                    {sampleQuestion.explanation}
                  </p>
                  <button
                    className="btn btn-outline btn-sm mt-2"
                    onClick={() => {
                      setSampleSelected(null);
                      setSampleSubmitted(false);
                    }}
                  >
                    Reset Sample
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: TRUSTED LEARNING RESOURCES */}
      <section className="trusted-resources-section py-section">
        <div className="container">
          <div className="section-header-center">
            <span className="badge badge-senior">Curated External References</span>
            <h2 className="section-title">Trusted Science Learning Sources</h2>
            <p className="section-subtitle">
              OrbitLearn links directly to verified educational pages published by world-renowned space institutions and repositories.
            </p>
          </div>

          <div className="resources-grid-preview">
            <div className="resource-card-mini card">
              <div className="res-source-domain">science.nasa.gov</div>
              <h3 className="res-title">NASA Science & Exploration</h3>
              <p className="res-desc">
                Authoritative mission science, real-time planetary observations, and astrophysics research explainers.
              </p>
              <a
                href="https://science.nasa.gov/solar-system/"
                target="_blank"
                rel="noopener noreferrer"
                className="res-link"
              >
                Visit NASA Science <ExternalLink size={14} />
              </a>
            </div>

            <div className="resource-card-mini card">
              <div className="res-source-domain">spaceplace.nasa.gov</div>
              <h3 className="res-title">NASA Space Place</h3>
              <p className="res-desc">
                Visual guides, interactive models, and student-focused explainers on celestial mechanics and Earth systems.
              </p>
              <a
                href="https://spaceplace.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="res-link"
              >
                Visit Space Place <ExternalLink size={14} />
              </a>
            </div>

            <div className="resource-card-mini card">
              <div className="res-source-domain">ioaastrophysics.org</div>
              <h3 className="res-title">IOAA Educational Resources</h3>
              <p className="res-desc">
                International Olympiad on Astronomy and Astrophysics syllabus guidelines and archive of historical problems.
              </p>
              <a
                href="https://ioaastrophysics.org/resources/problems-from-past-ioaa"
                target="_blank"
                rel="noopener noreferrer"
                className="res-link"
              >
                Visit IOAA Resources <ExternalLink size={14} />
              </a>
            </div>

            <div className="resource-card-mini card">
              <div className="res-source-domain">wikipedia.org</div>
              <h3 className="res-title">Wikipedia Astronomical Reference</h3>
              <p className="res-desc">
                Encyclopaedic overviews of physical equations, derivation histories, and astronomical classifications.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion"
                target="_blank"
                rel="noopener noreferrer"
                className="res-link"
              >
                Explore Wikipedia Astronomy <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
