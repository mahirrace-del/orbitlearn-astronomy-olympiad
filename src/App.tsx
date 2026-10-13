import React, { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { LearnOverviewPage } from './pages/LearnOverviewPage';
import { SyllabusListPage } from './pages/SyllabusListPage';
import { LessonPage } from './pages/LessonPage';
import { PracticeOverviewPage } from './pages/PracticeOverviewPage';
import { PracticeExamPage } from './pages/PracticeExamPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { CompetitionPage } from './pages/CompetitionPage';

export const App: React.FC = () => {
  // Read initial route from hash, defaulting to '/'
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash && hash.startsWith('/') ? hash : '/';
  });

  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // Sync route on hashchange (enables browser Back/Forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setCurrentRoute(hash && hash.startsWith('/') ? hash : '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global keyboard shortcut: Ctrl+K or / to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (route: string) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching logic
  const renderCurrentView = () => {
    if (currentRoute === '/') {
      return <HomePage navigate={navigate} />;
    }
    if (currentRoute === '/learn') {
      return <LearnOverviewPage navigate={navigate} />;
    }
    if (currentRoute === '/learn/junior') {
      return <SyllabusListPage track="junior" navigate={navigate} />;
    }
    if (currentRoute === '/learn/senior') {
      return <SyllabusListPage track="senior" navigate={navigate} />;
    }
    if (currentRoute.startsWith('/learn/junior/')) {
      const slug = currentRoute.replace('/learn/junior/', '');
      return <LessonPage track="junior" unitSlug={slug} navigate={navigate} />;
    }
    if (currentRoute.startsWith('/learn/senior/')) {
      const slug = currentRoute.replace('/learn/senior/', '');
      return <LessonPage track="senior" unitSlug={slug} navigate={navigate} />;
    }
    if (currentRoute === '/practice') {
      return <PracticeOverviewPage navigate={navigate} />;
    }
    if (currentRoute === '/practice/junior') {
      return <PracticeExamPage track="junior" navigate={navigate} />;
    }
    if (currentRoute === '/practice/senior') {
      return <PracticeExamPage track="senior" navigate={navigate} />;
    }
    if (currentRoute === '/resources') {
      return <ResourcesPage navigate={navigate} />;
    }
    if (currentRoute === '/about') {
      return <AboutPage navigate={navigate} />;
    }
    if (currentRoute === '/competition') {
      return <CompetitionPage navigate={navigate} />;
    }

    // Fallback default
    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="app-layout">
      <SiteHeader
        currentRoute={currentRoute}
        navigate={navigate}
        openSearch={() => setSearchOpen(true)}
      />

      <div className="main-content-wrapper">
        {renderCurrentView()}
      </div>

      <SiteFooter navigate={navigate} />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        navigate={navigate}
      />
    </div>
  );
};
