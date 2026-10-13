import React, { useState } from 'react';
import { Compass, BookOpen, CheckSquare, Search, Menu, X, Orbit, Sparkles } from 'lucide-react';

interface SiteHeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
  openSearch: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ currentRoute, navigate, openSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Learn', route: '/learn', icon: BookOpen },
    { label: 'Practice Quiz', route: '/practice', icon: CheckSquare },
    { label: 'The Competition', route: '/competition', icon: Sparkles },
    { label: 'Resources', route: '/resources', icon: Compass },
    { label: 'About & FAQ', route: '/about', icon: null }
  ];

  const handleNavClick = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  // Prevent background scroll when mobile drawer is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo & Wordmark */}
        <button
          className="brand-logo-btn"
          onClick={() => handleNavClick('/')}
          aria-label="OrbitLearn Home"
        >
          <div className="logo-icon-wrap">
            <Orbit className="orbit-icon" size={22} />
          </div>
          <div className="brand-text-block">
            <span className="brand-title">OrbitLearn</span>
            <span className="brand-subtitle">Astronomy preparation</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive =
                currentRoute === item.route ||
                (item.route !== '/' && currentRoute.startsWith(item.route));
              return (
                <li key={item.route}>
                  <button
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={() => handleNavClick(item.route)}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Action Buttons */}
        <div className="header-actions">
          <button
            className="search-trigger-btn"
            onClick={openSearch}
            aria-label="Search lessons and topics"
            title="Search topics, formulas & resources"
          >
            <Search size={18} />
            <span className="search-hint">Search topics...</span>
            <kbd className="kbd-shortcut">Ctrl+K</kbd>
          </button>

          <button
            className="btn btn-primary btn-sm start-btn"
            onClick={() => handleNavClick('/learn')}
          >
            Start learning
          </button>

          {/* Mobile Menu Hamburger (44x44px minimum touch target) */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="container mobile-drawer-inner">
              <div className="mobile-drawer-header">
                <span className="mobile-drawer-brand">Menu</span>
                <button
                  className="mobile-drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <ul className="mobile-nav-list">
                {navItems.map((item) => {
                  const isActive =
                    currentRoute === item.route ||
                    (item.route !== '/' && currentRoute.startsWith(item.route));
                  const IconComponent = item.icon;
                  return (
                    <li key={item.route}>
                      <button
                        className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                        onClick={() => handleNavClick(item.route)}
                      >
                        {IconComponent && <IconComponent size={20} />}
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="mobile-drawer-footer">
                <button
                  className="btn btn-cyan btn-full btn-lg"
                  onClick={() => handleNavClick('/learn')}
                >
                  <BookOpen size={18} /> Start learning
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
