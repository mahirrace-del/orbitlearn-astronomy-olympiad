import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  BookOpen,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Lightbulb,
  BookmarkCheck
} from 'lucide-react';
import { juniorUnits } from '../data/juniorUnits';
import { seniorUnits } from '../data/seniorUnits';
import { LessonDiagram } from '../components/LessonDiagram';
import { FormulaPanel } from '../components/FormulaPanel';
import { UnitCheckQuiz } from '../components/UnitCheckQuiz';
import { useProgress } from '../context/ProgressContext';
import { Track } from '../types';

interface LessonPageProps {
  track: Track;
  unitSlug: string;
  navigate: (route: string) => void;
}

export const LessonPage: React.FC<LessonPageProps> = ({ track, unitSlug, navigate }) => {
  const units = track === 'junior' ? juniorUnits : seniorUnits;
  const currentUnitIndex = units.findIndex((u) => u.slug === unitSlug);
  const currentUnit = units[currentUnitIndex] || units[0];

  const { isUnitComplete, toggleUnitComplete } = useProgress();
  const completed = isUnitComplete(currentUnit.id);
  const [mobileUnitsOpen, setMobileUnitsOpen] = useState(false);

  // Scroll to top on unit change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [unitSlug]);

  const prevUnit = currentUnitIndex > 0 ? units[currentUnitIndex - 1] : null;
  const nextUnit = currentUnitIndex < units.length - 1 ? units[currentUnitIndex + 1] : null;

  return (
    <div className="lesson-page-view py-main">
      <div className="container lesson-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav mb-4" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="breadcrumb-link">Home</button>
          <span className="breadcrumb-sep">/</span>
          <button onClick={() => navigate('/learn')} className="breadcrumb-link">Learn</button>
          <span className="breadcrumb-sep">/</span>
          <button onClick={() => navigate(`/learn/${track}`)} className="breadcrumb-link">
            {track === 'junior' ? 'Junior' : 'Senior'}
          </button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Unit {currentUnit.unitNumber}</span>
        </nav>

        {/* 12-Column Responsive Layout: Sidebar on Left, Content on Right */}
        <div className="lesson-grid-layout">
          {/* Left Learning Sidebar */}
          <aside className="lesson-sidebar" aria-label="Course syllabus navigation">
            <div className="sidebar-sticky card">
              <div className="sidebar-track-header">
                <span className={`badge ${track === 'junior' ? 'badge-junior' : 'badge-senior'}`}>
                  {track === 'junior' ? 'Junior Track' : 'Senior Track'}
                </span >
                <span className="sidebar-unit-count">Unit {currentUnit.unitNumber} of {units.length}</span>
              </div>
              <h3 className="sidebar-title">Track Syllabus</h3>

              <nav className="sidebar-nav-list">
                {units.map((u) => {
                  const isActive = u.slug === currentUnit.slug;
                  const isDone = isUnitComplete(u.id);
                  return (
                    <button
                      key={u.id}
                      className={`sidebar-nav-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                      onClick={() => navigate(`/learn/${track}/${u.slug}`)}
                    >
                      <span className="sidebar-item-num">{u.unitNumber}</span>
                      <span className="sidebar-item-name">{u.title}</span>
                      {isDone && <CheckCircle2 size={14} className="sidebar-done-icon text-success" />}
                    </button>
                  );
                })}
              </nav>

              <div className="sidebar-storage-note mt-4">
                <small>Progress is saved locally in this browser on this device.</small>
              </div>
            </div>
          </aside>

          {/* Main Reading Area */}
          <main className="lesson-main-content">
            {/* Mobile-First Unit Quick-Switcher (Visible on mobile/tablet viewports) */}
            <div className="mobile-unit-switcher-bar mb-4">
              <button
                type="button"
                className="mobile-unit-switcher-btn"
                onClick={() => setMobileUnitsOpen(!mobileUnitsOpen)}
                aria-expanded={mobileUnitsOpen}
                aria-label="Toggle syllabus units menu"
              >
                <div className="unit-switch-info">
                  <span className="unit-switch-badge">Unit {currentUnit.unitNumber} of {units.length}</span>
                  <span className="unit-switch-title">{currentUnit.title}</span>
                </div>
                <div className="unit-switch-action">
                  <span>{mobileUnitsOpen ? 'Close' : 'Switch Unit'}</span>
                  <ChevronDown size={18} className={`chevron-icon ${mobileUnitsOpen ? 'chevron-rotated' : ''}`} />
                </div>
              </button>

              {mobileUnitsOpen && (
                <div className="mobile-unit-dropdown card mt-2" role="menu">
                  <div className="dropdown-header">
                    <strong>{track === 'junior' ? 'Junior Track Syllabus' : 'Senior Track Syllabus'}</strong>
                    <span className="dropdown-count">{units.length} Units</span>
                  </div>
                  <div className="mobile-unit-list">
                    {units.map((u) => {
                      const isActive = u.slug === currentUnit.slug;
                      const isDone = isUnitComplete(u.id);
                      return (
                        <button
                          key={u.id}
                          className={`mobile-unit-item ${isActive ? 'active' : ''}`}
                          onClick={() => {
                            navigate(`/learn/${track}/${u.slug}`);
                            setMobileUnitsOpen(false);
                          }}
                        >
                          <span className="mobile-unit-num">{u.unitNumber}</span>
                          <span className="mobile-unit-name">{u.title}</span>
                          {isDone && <CheckCircle2 size={16} className="text-success ms-auto" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Unit Header Card */}
            <header className="lesson-header-card card">
              <div className="header-meta-row">
                <span className={`badge ${track === 'junior' ? 'badge-junior' : 'badge-senior'}`}>
                  {track === 'junior' ? 'Junior Category' : 'Senior Category'}
                </span>
                <span className="meta-time">
                  <Clock size={15} /> Estimated study time: {currentUnit.estimatedTime}
                </span>
              </div>

              <h1 className="lesson-title">Unit {currentUnit.unitNumber}: {currentUnit.title}</h1>
              <p className="lesson-intro-lead">{currentUnit.introduction}</p>

              {/* Completion Toggle */}
              <div className="unit-complete-banner">
                <button
                  type="button"
                  className={`btn ${completed ? 'btn-success' : 'btn-secondary'} btn-sm toggle-complete-btn`}
                  onClick={() => toggleUnitComplete(currentUnit.id)}
                >
                  <BookmarkCheck size={16} />
                  {completed ? 'Unit marked complete (Click to undo)' : 'Mark unit complete'}
                </button>
                <span className="complete-hint">
                  {completed ? '✓ Saved to your local progress' : 'Saves your progress on this device'}
                </span>
              </div>
            </header>

            {/* Learning Goals Panel */}
            <section className="learning-goals-card card card-soft-sky mt-6" aria-labelledby="goals-heading">
              <h2 id="goals-heading" className="section-card-title">
                <BookOpen size={18} className="text-blue" /> Learning Goals
              </h2>
              <ul className="learning-goals-list">
                {currentUnit.learningGoals.map((goal, i) => (
                  <li key={i} className="goal-item">
                    <span className="goal-bullet" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Scientific Illustration / Diagram */}
            <section className="lesson-diagram-section mt-6" aria-label="Unit visual diagram">
              <LessonDiagram
                type={currentUnit.diagram.type}
                caption={currentUnit.diagram.caption}
                altText={currentUnit.diagram.altText}
              />
            </section>

            {/* Learn the Concept Sections */}
            <section className="lesson-concepts-section mt-6">
              <h2 className="section-main-heading">Learn the Concept</h2>
              <div className="concept-sections-stack">
                {currentUnit.sections.map((sec, idx) => (
                  <article key={idx} className="concept-article card">
                    <h3 className="concept-heading">{sec.heading}</h3>
                    <div className="concept-paragraphs">
                      {sec.content.map((p, pIdx) => (
                        <p key={pIdx} className="concept-p">{p}</p>
                      ))}
                    </div>

                    {/* Analogies clearly labeled as analogies */}
                    {sec.analogy && (
                      <aside className="analogy-callout" aria-label="Conceptual analogy">
                        <div className="analogy-header">
                          <Lightbulb size={16} className="text-warning" />
                          <strong className="analogy-label">Conceptual Analogy</strong>
                        </div>
                        <p className="analogy-body">{sec.analogy}</p>
                      </aside>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* Senior Formula Panel (if formula exists) */}
            {currentUnit.formula && (
              <section className="mt-6" aria-label="Mathematical formula & worked example">
                <FormulaPanel formula={currentUnit.formula} />
              </section>
            )}

            {/* Key Ideas to Remember Panel */}
            <section className="key-ideas-card card card-dark mt-6" aria-labelledby="key-ideas-heading">
              <h2 id="key-ideas-heading" className="key-ideas-title text-cyan">
                Key Ideas to Remember
              </h2>
              <ul className="key-ideas-list">
                {currentUnit.keyIdeas.map((idea, i) => (
                  <li key={i} className="key-idea-item">
                    <CheckCircle2 size={16} className="text-cyan key-icon" />
                    <span className="text-white">{idea}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Terms Glossary */}
            <section className="key-terms-card card mt-6" aria-labelledby="glossary-heading">
              <h2 id="glossary-heading" className="section-card-title">
                <BookOpen size={18} /> Key Terms & Glossary
              </h2>
              <dl className="terms-definition-list">
                {currentUnit.keyTerms.map((t, i) => (
                  <div key={i} className="term-item">
                    <dt className="term-title">{t.term}</dt>
                    <dd className="term-def">{t.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Common Mistakes Panel */}
            <section className="common-mistakes-card card mt-6" aria-labelledby="mistakes-heading">
              <h2 id="mistakes-heading" className="mistakes-title">
                <AlertCircle size={18} className="text-error" /> Common Mistakes & Misconceptions
              </h2>
              <ul className="mistakes-list">
                {currentUnit.commonMistakes.map((m, i) => (
                  <li key={i} className="mistake-item">
                    <span className="mistake-cross">✕</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Check Your Understanding (3 low-stakes interactive MCQs) */}
            <section className="mt-8" aria-label="Interactive unit quiz check">
              <UnitCheckQuiz
                questions={currentUnit.checkQuestions}
                unitTitle={`Unit ${currentUnit.unitNumber}: ${currentUnit.title}`}
              />
            </section>

            {/* Explore Further: Official Reference, Wikipedia, Google Search */}
            <section className="explore-further-card card mt-8" aria-labelledby="explore-heading">
              <h2 id="explore-heading" className="section-card-title">
                <ExternalLink size={18} /> Explore Further & Trusted Reading
              </h2>
              <p className="explore-subtitle">
                Expand your knowledge with these direct scientific references and research links:
              </p>

              <div className="external-links-grid">
                {currentUnit.externalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link-card"
                  >
                    <div className="ext-card-top">
                      <span className={`link-type-tag tag-${link.type}`}>
                        {link.type === 'official' ? 'Official / Educational Reference' : link.type === 'wikipedia' ? 'Wikipedia Overview' : 'Search Topic'}
                      </span>
                      <ExternalLink size={14} className="ext-icon" />
                    </div>
                    <strong className="link-title">{link.title}</strong>
                    {link.description && <p className="link-desc">{link.description}</p>}
                    <span className="link-domain">{link.source}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Navigation Bottom Footer: Mark Complete, Prev, Next */}
            <nav className="lesson-footer-nav card mt-8" aria-label="Lesson navigation controls">
              <div className="nav-btn-col">
                {prevUnit ? (
                  <button
                    className="btn btn-secondary btn-nav"
                    onClick={() => navigate(`/learn/${track}/${prevUnit.slug}`)}
                  >
                    <ChevronLeft size={16} /> Unit {prevUnit.unitNumber}: {prevUnit.title}
                  </button>
                ) : (
                  <button
                    className="btn btn-secondary btn-nav"
                    onClick={() => navigate(`/learn/${track}`)}
                  >
                    <ChevronLeft size={16} /> Syllabus Overview
                  </button>
                )}
              </div>

              <div className="nav-center-action">
                <button
                  className={`btn ${completed ? 'btn-success' : 'btn-primary'}`}
                  onClick={() => toggleUnitComplete(currentUnit.id)}
                >
                  <CheckCircle2 size={16} />
                  {completed ? 'Unit Completed ✓' : 'Mark Unit Complete'}
                </button>
              </div>

              <div className="nav-btn-col text-right">
                {nextUnit ? (
                  <button
                    className="btn btn-primary btn-nav"
                    onClick={() => navigate(`/learn/${track}/${nextUnit.slug}`)}
                  >
                    Unit {nextUnit.unitNumber}: {nextUnit.title} <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    className="btn btn-cyan btn-nav"
                    onClick={() => navigate(`/practice/${track}`)}
                  >
                    Take {track === 'junior' ? 'Junior' : 'Senior'} Practice Quiz <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
};
