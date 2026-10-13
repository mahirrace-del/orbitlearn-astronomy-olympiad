import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { juniorUnits } from '../data/juniorUnits';
import { seniorUnits } from '../data/seniorUnits';
import { curatedResources } from '../data/resources';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (route: string) => void;
}

interface SearchResult {
  type: 'junior-lesson' | 'senior-lesson' | 'glossary' | 'resource' | 'competition';
  title: string;
  subtitle: string;
  route?: string;
  url?: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, navigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search logic across lessons, learning goals, key terms, and resources
  const cleanQ = query.trim().toLowerCase();
  const results: SearchResult[] = [];

  if (cleanQ.length > 1) {
    // 0. The Competition (NASA Astronomy Olympiad 2026 at Heritage School)
    const compMatches = ['competition', 'olympiad', 'heritage', 'nasa', 'registration', 'deadline', 'fee', 'venue', 'narayanganj', 'camp', 'bangladesh round', 'explorer'];
    if (compMatches.some((k) => cleanQ.includes(k) || k.includes(cleanQ))) {
      results.push({
        type: 'competition',
        title: 'The Competition: NASA Astronomy Olympiad 2026',
        subtitle: 'Venue: Heritage School, Narayanganj • Reg Deadline: 5 Nov • Exam: 14 Nov',
        route: '/competition'
      });
    }

    // 1. Junior Units
    juniorUnits.forEach((u) => {
      const matchTitle = u.title.toLowerCase().includes(cleanQ);
      const matchIntro = u.introduction.toLowerCase().includes(cleanQ);
      const matchGoal = u.learningGoals.some((g) => g.toLowerCase().includes(cleanQ));
      if (matchTitle || matchIntro || matchGoal) {
        results.push({
          type: 'junior-lesson',
          title: `Junior Unit ${u.unitNumber}: ${u.title}`,
          subtitle: u.introduction.slice(0, 110) + '...',
          route: `/learn/junior/${u.slug}`
        });
      }

      // Check key terms
      u.keyTerms.forEach((kt) => {
        if (kt.term.toLowerCase().includes(cleanQ) || kt.definition.toLowerCase().includes(cleanQ)) {
          results.push({
            type: 'glossary',
            title: `Glossary: ${kt.term}`,
            subtitle: `${kt.definition} (Junior Unit ${u.unitNumber})`,
            route: `/learn/junior/${u.slug}`
          });
        }
      });
    });

    // 2. Senior Units
    seniorUnits.forEach((u) => {
      const matchTitle = u.title.toLowerCase().includes(cleanQ);
      const matchIntro = u.introduction.toLowerCase().includes(cleanQ);
      const matchFormula = u.formula?.formula.toLowerCase().includes(cleanQ);
      if (matchTitle || matchIntro || matchFormula) {
        results.push({
          type: 'senior-lesson',
          title: `Senior Unit ${u.unitNumber}: ${u.title}`,
          subtitle: u.introduction.slice(0, 110) + '...',
          route: `/learn/senior/${u.slug}`
        });
      }

      // Check key terms
      u.keyTerms.forEach((kt) => {
        if (kt.term.toLowerCase().includes(cleanQ) || kt.definition.toLowerCase().includes(cleanQ)) {
          results.push({
            type: 'glossary',
            title: `Glossary: ${kt.term}`,
            subtitle: `${kt.definition} (Senior Unit ${u.unitNumber})`,
            route: `/learn/senior/${u.slug}`
          });
        }
      });
    });

    // 3. Curated Resources
    curatedResources.forEach((res) => {
      const matchTitle = res.title.toLowerCase().includes(cleanQ);
      const matchDesc = res.description.toLowerCase().includes(cleanQ);
      const matchTopic = res.topics.some((t) => t.toLowerCase().includes(cleanQ));
      if (matchTitle || matchDesc || matchTopic) {
        results.push({
          type: 'resource',
          title: res.title,
          subtitle: `${res.source} • ${res.description.slice(0, 100)}...`,
          url: res.url
        });
      }
    });
  }

  const handleSelectResult = (res: SearchResult) => {
    onClose();
    if (res.route) {
      navigate(res.route);
    } else if (res.url) {
      window.open(res.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search OrbitLearn">
      <div className="modal-content search-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-header">
          <Search size={20} className="search-input-icon" />
          <input
            ref={inputRef}
            type="search"
            className="search-main-input"
            placeholder="Search planets, Kepler's laws, parallax, fusion, resources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search all lessons, terms, and resources"
          />
          <button className="search-close-btn" onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>

        <div className="search-results-container">
          {cleanQ.length <= 1 ? (
            <div className="search-hint-state">
              <p className="hint-title">Quick Topics to Explore:</p>
              <div className="quick-tags-wrap">
                {['Solar System', 'Kepler’s Third Law', 'Parallax', 'Nuclear Fusion', 'Redshift', 'Transit Method', 'Dark Matter'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="quick-tag-chip"
                    onClick={() => setQuery(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="search-empty-state">
              <p>No matches found for &ldquo;{query}&rdquo;.</p>
              <span className="empty-sub">Try searching for &quot;Kepler&quot;, &quot;seasons&quot;, &quot;telescope&quot;, or &quot;flux&quot;.</span>
            </div>
          ) : (
            <div className="search-results-list">
              <div className="results-count-label">{results.length} result{results.length > 1 ? 's' : ''} found:</div>
              {results.slice(0, 15).map((res, i) => (
                <button
                  key={i}
                  className="search-result-item"
                  onClick={() => handleSelectResult(res)}
                >
                  <div className="result-type-icon">
                    {res.type === 'competition' ? (
                      <Sparkles size={18} className="text-cyan" />
                    ) : res.type === 'resource' ? (
                      <Compass size={18} />
                    ) : (
                      <BookOpen size={18} />
                    )}
                  </div>
                  <div className="result-text-col">
                    <span className="result-title">{res.title}</span>
                    <span className="result-subtitle">{res.subtitle}</span>
                  </div>
                  <ArrowRight size={16} className="result-arrow" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
