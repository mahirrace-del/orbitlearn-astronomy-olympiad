import React from 'react';
import { Orbit, ExternalLink, HardDrive } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { competitionInfo } from '../data/competitionInfo';
import { FacebookIcon } from './FacebookIcon';

interface SiteFooterProps {
  navigate: (route: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ navigate }) => {
  const { totalCompletedCount } = useProgress();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand & Mission */}
          <div className="footer-brand-col">
            <div className="brand-logo-btn" onClick={() => navigate('/')}>
              <div className="logo-icon-wrap">
                <Orbit className="orbit-icon" size={22} />
              </div>
              <div className="brand-text-block">
                <span className="brand-title text-white">OrbitLearn</span>
                <span className="brand-subtitle text-slate">Astronomy preparation</span>
              </div>
            </div>
            <p className="footer-mission">
              Empowering students to independently understand astronomy and celestial physics through plain-language units, trusted scientific references, and instant-marking practice exams.
            </p>
            <div className="footer-storage-badge">
              <HardDrive size={14} />
              <span>{totalCompletedCount} of 16 syllabus units completed on this device</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => navigate('/learn')} className="footer-link">
                  Study Tracks & Syllabus
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/learn/junior')} className="footer-link">
                  Junior Astronomy Units
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/learn/senior')} className="footer-link">
                  Senior Astronomy Units
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/practice')} className="footer-link">
                  Practice Exam Center
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/competition')} className="footer-link footer-link-highlight">
                  The Competition (2026)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/resources')} className="footer-link">
                  Curated Reference Library
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="footer-link">
                  About, FAQ & Reset Progress
                </button>
              </li>
            </ul>
          </div>

          {/* School & Educational Disclosure */}
          <div className="footer-notice-col">
            <h4 className="footer-col-title">Host School & Disclosure</h4>

            {/* Heritage School Identity Card */}
            <div className="footer-school-card">
              <div className="footer-school-header">
                <img
                  src={competitionInfo.schoolLogoUrl}
                  alt={`${competitionInfo.schoolName} Logo`}
                  className="footer-school-logo"
                  width="24"
                  height="24"
                />
                <div>
                  <span className="footer-school-name">{competitionInfo.schoolName}</span>
                  <span className="footer-school-sub">343 North Chashara, Narayanganj</span>
                </div>
              </div>
              <p className="footer-school-note">
                Self-study tool provided for students of Heritage School and nationwide Olympiad candidates.
              </p>
              {competitionInfo.schoolWebsiteUrl && (
                <a
                  href={competitionInfo.schoolWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-school-link"
                >
                  <FacebookIcon size={12} /> School Facebook Page <ExternalLink size={11} />
                </a>
              )}
            </div>

            {/* External Reference Note */}
            <div className="footer-ref-note mt-3">
              <ExternalLink size={13} />
              <span>Learning links open external educational sources in new tabs.</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Designer Credit */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copyright">
              © {new Date().getFullYear()} OrbitLearn. Designed for independent student preparation. No account or backend database required.
            </p>
            {/* Designer Credit */}
            <div className="footer-designer-credit">
              <span className="designer-text">Designed &amp; Developed by Mostakim Rahman Mahir</span>
              {competitionInfo.facebookProfileUrl && (
                <a
                  href={competitionInfo.facebookProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="designer-fb-link"
                  aria-label="Mostakim Rahman Mahir on Facebook"
                  title="Visit Mostakim Rahman Mahir on Facebook"
                >
                  <FacebookIcon size={13} />
                  <span>Facebook Profile</span>
                  <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>

          <div className="footer-bottom-links">
            <button onClick={() => navigate('/competition')} className="footer-legal-link">
              Competition Information
            </button>
            <button onClick={() => navigate('/about')} className="footer-legal-link">
              Usage Disclaimer &amp; FAQ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

