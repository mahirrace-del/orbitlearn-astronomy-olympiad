import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Award,
  Phone,
  Globe,
  ExternalLink,
  ChevronDown,
  BookOpen,
  CheckSquare,
  Sparkles,
  Compass,
  ArrowRight
} from 'lucide-react';
import { competitionInfo } from '../data/competitionInfo';
import { FacebookIcon } from '../components/FacebookIcon';

interface CompetitionPageProps {
  navigate: (route: string) => void;
}

export const CompetitionPage: React.FC<CompetitionPageProps> = ({ navigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(competitionInfo.faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="competition-page-view py-main">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb-nav mb-4" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="breadcrumb-link">
            Home
          </button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">The Competition</span>
        </nav>

        {/* Hero Section */}
        <div className="comp-hero-card card">
          <div className="comp-hero-badge-row">
            <span className="badge badge-senior">National & International Event</span>
            <span className="comp-date-pill">
              <Calendar size={14} /> Bangladesh Round: {competitionInfo.competitionDate}
            </span>
          </div>

          <h1 className="comp-hero-title">{competitionInfo.competitionName}</h1>
          <p className="comp-hero-tagline">
            Organised by <strong>{competitionInfo.organiserName}</strong> • Venue Host: <strong>{competitionInfo.schoolName}</strong>
          </p>

          <p className="comp-hero-desc">
            An inspiring nationwide astronomy competition designed for school and college students in Bangladesh (Classes 6 to 12).
            Top winners earn the prestigious opportunity to attend the week-long <strong>NASA Experience Camp</strong> in the USA (January 2027),
            featuring hands-on workshops and academic visits. Every participant receives an internationally recognized certificate.
          </p>

          <div className="comp-hero-actions">
            {competitionInfo.registrationUrl ? (
              <a
                href={competitionInfo.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cyan btn-lg"
              >
                <Sparkles size={18} /> Official Registration Form <ExternalLink size={15} />
              </a>
            ) : (
              <a
                href={`tel:${competitionInfo.registrationHotline}`}
                className="btn btn-cyan btn-lg"
              >
                <Phone size={18} /> Call for Registration: {competitionInfo.registrationHotline}
              </a>
            )}

            <button
              onClick={() => navigate('/learn')}
              className="btn btn-primary btn-lg"
            >
              <BookOpen size={18} /> Start Preparing on OrbitLearn
            </button>
          </div>

          <div className="comp-disclaimer-note mt-6">
            <Sparkles size={16} className="text-cyan flex-shrink-0" />
            <p>
              <strong>Study Companion:</strong> OrbitLearn provides comprehensive topic guides, worked formula examples, and auto-marking practice exams to support students preparing for the competition.
            </p>
          </div>
        </div>

        {/* Section B: Important Information Cards Grid */}
        <div className="comp-section mt-8">
          <div className="section-header-compact">
            <h2 className="section-title">Key Event Details at a Glance</h2>
            <p className="section-subtitle">
              Crucial dates, registration guidelines, and venue specifications for all candidates.
            </p>
          </div>

          <div className="comp-info-cards-grid mt-4">
            {/* 1. Competition Date */}
            <div className="comp-spec-card card">
              <div className="spec-card-icon-wrap bg-blue-glow">
                <Calendar size={22} className="text-cyan" />
              </div>
              <span className="spec-card-label">Competition Date</span>
              <strong className="spec-card-value">{competitionInfo.competitionDate}</strong>
              <span className="spec-card-sub">Bangladesh Round</span>
            </div>

            {/* 2. Registration Deadline */}
            <div className="comp-spec-card card">
              <div className="spec-card-icon-wrap bg-orange-glow">
                <Clock size={22} className="text-orange" />
              </div>
              <span className="spec-card-label">Registration Deadline</span>
              <strong className="spec-card-value">{competitionInfo.registrationDeadline}</strong>
              <span className="spec-card-sub">Submit before closing</span>
            </div>

            {/* 3. Registration Fee */}
            <div className="comp-spec-card card">
              <div className="spec-card-icon-wrap bg-cyan-glow">
                <Award size={22} className="text-cyan" />
              </div>
              <span className="spec-card-label">Registration Fee</span>
              <strong className="spec-card-value">{competitionInfo.formattedFee}</strong>
              <span className="spec-card-sub">For Bangladesh Round</span>
            </div>

            {/* 4. Examination Venue */}
            <div className="comp-spec-card card">
              <div className="spec-card-icon-wrap bg-blue-glow">
                <MapPin size={22} className="text-cyan" />
              </div>
              <span className="spec-card-label">Examination Venue</span>
              <strong className="spec-card-value">{competitionInfo.venueName}</strong>
              <span className="spec-card-sub">{competitionInfo.venueCity}</span>
            </div>

            {/* 5. Eligible Classes */}
            <div className="comp-spec-card card">
              <div className="spec-card-icon-wrap bg-green-glow">
                <GraduationCap size={22} className="text-emerald" />
              </div>
              <span className="spec-card-label">Eligible Classes</span>
              <strong className="spec-card-value">Class 06 to 12</strong>
              <span className="spec-card-sub">Bangla & English Medium</span>
            </div>

            {/* 6. Examination Format */}
            <div className="comp-spec-card card">
              <div className="spec-card-icon-wrap bg-blue-glow">
                <CheckSquare size={22} className="text-cyan" />
              </div>
              <span className="spec-card-label">Examination Format</span>
              <strong className="spec-card-value">MCQ Assessment</strong>
              <span className="spec-card-sub">Objective Evaluation</span>
            </div>
          </div>
        </div>

        {/* Section C: Eligibility and Categories */}
        <div className="comp-section mt-10">
          <div className="section-header-compact">
            <h2 className="section-title">Participation Categories & Eligibility</h2>
            <p className="section-subtitle">
              Select the category corresponding to your current academic class level.
            </p>
          </div>

          <div className="comp-categories-grid mt-4">
            {competitionInfo.categories.map((cat) => (
              <div key={cat.id} className="comp-category-card card">
                <div className="cat-card-header">
                  <span className={`badge ${cat.recommendedTrack === 'junior' ? 'badge-junior' : 'badge-senior'}`}>
                    Category Code: {cat.code}
                  </span>
                  <span className="cat-classes-tag">{cat.classes}</span>
                </div>

                <h3 className="cat-card-title">{cat.name}</h3>
                <p className="cat-card-desc">{cat.description}</p>

                <div className="cat-card-highlights">
                  <div className="cat-hl-item">
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span>Eligible for Class {cat.classes.replace('Class ', '')} students</span>
                  </div>
                  <div className="cat-hl-item">
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span>Open to both Bangla and English Medium curriculum</span>
                  </div>
                  <div className="cat-hl-item">
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span>Full syllabus available on OrbitLearn</span>
                  </div>
                </div>

                <div className="cat-card-actions mt-6">
                  <button
                    onClick={() => navigate(cat.trackPath)}
                    className="btn btn-primary btn-full"
                  >
                    Start {cat.name} Preparation <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => navigate(`/practice/${cat.recommendedTrack}`)}
                    className="btn btn-secondary btn-full mt-2"
                  >
                    Take {cat.recommendedTrack === 'junior' ? 'Junior' : 'Senior'} Practice Exam
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section D: Registration Instructions */}
        <div className="comp-section mt-10">
          <div className="section-header-compact">
            <h2 className="section-title">How to Register for the Competition</h2>
            <p className="section-subtitle">
              Follow these simple steps to complete your registration before the deadline.
            </p>
          </div>

          <div className="registration-steps-card card mt-4">
            <div className="reg-steps-list">
              <div className="reg-step-item">
                <div className="step-circle">1</div>
                <div className="step-body">
                  <h4 className="step-title">Verify Your Eligibility</h4>
                  <p className="step-text">
                    Ensure you are currently studying in Class 06 to Class 12 (including HSC examinees) in either Bangla or English Medium.
                  </p>
                </div>
              </div>

              <div className="reg-step-item">
                <div className="step-circle">2</div>
                <div className="step-body">
                  <h4 className="step-title">Confirm Your Category</h4>
                  <p className="step-text">
                    Choose <strong>Junior Explorer (JE)</strong> for Classes 6–9, or <strong>Teen Explorer (TE)</strong> for Classes 10–12.
                  </p>
                </div>
              </div>

              <div className="reg-step-item">
                <div className="step-circle">3</div>
                <div className="step-body">
                  <h4 className="step-title">Contact Registration Hotline or Open Form</h4>
                  <p className="step-text">
                    Call the official registration desk at <strong>{competitionInfo.registrationHotline}</strong> or <strong>{competitionInfo.organiserAlternativePhone}</strong>, or fill out the official form if provided by the organisers.
                  </p>
                </div>
              </div>

              <div className="reg-step-item">
                <div className="step-circle">4</div>
                <div className="step-body">
                  <h4 className="step-title">Provide Student & School Details</h4>
                  <p className="step-text">
                    Complete your candidate name, school name, class, contact mobile number, and parent guardian details accurately.
                  </p>
                </div>
              </div>

              <div className="reg-step-item">
                <div className="step-circle">5</div>
                <div className="step-body">
                  <h4 className="step-title">Complete Official Registration Fee Payment</h4>
                  <p className="step-text">
                    Pay the official fee of <strong>{competitionInfo.formattedFee}</strong> per candidate following the organiser's confirmed payment procedures.
                  </p>
                </div>
              </div>

              <div className="reg-step-item">
                <div className="step-circle">6</div>
                <div className="step-body">
                  <h4 className="step-title">Retain Your Registration Confirmation</h4>
                  <p className="step-text">
                    Safely keep your payment confirmation receipt, roll token, or admit card for verification on examination day.
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Action Banner */}
            <div className="reg-action-banner mt-6">
              <div className="reg-action-text">
                <h4 className="banner-sub">Registration Helpline: {competitionInfo.registrationHotline}</h4>
                <p className="banner-sub-text">
                  Deadline: <strong>{competitionInfo.registrationDeadline}</strong>. Early registration is recommended as seats may be limited per venue.
                </p>
              </div>

              <div className="reg-action-buttons">
                {competitionInfo.registrationUrl ? (
                  <a
                    href={competitionInfo.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-cyan btn-lg"
                  >
                    Open Official Registration Form <ExternalLink size={16} />
                  </a>
                ) : (
                  <a
                    href={`tel:${competitionInfo.registrationHotline}`}
                    className="btn btn-cyan btn-lg"
                  >
                    <Phone size={18} /> Call Registration Helpline
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section E: Venue & Location */}
        <div className="comp-section mt-10">
          <div className="section-header-compact">
            <h2 className="section-title">Examination Venue & Location</h2>
            <p className="section-subtitle">
              Official testing centre information for the Bangladesh Round.
            </p>
          </div>

          <div className="venue-card card mt-4">
            <div className="venue-card-content">
              <div className="venue-logo-block">
                <img
                  src={competitionInfo.schoolLogoUrl}
                  alt={`${competitionInfo.schoolName} Official Logo`}
                  className="venue-school-logo"
                  width="64"
                  height="64"
                />
                <div>
                  <h3 className="venue-name">{competitionInfo.venueName}</h3>
                  <p className="venue-address-line">
                    <MapPin size={16} className="text-cyan inline-icon" />
                    {competitionInfo.venueAddress}, {competitionInfo.venueCity}
                  </p>
                </div>
              </div>

              <p className="venue-description mt-3">
                Heritage School is proud to host the Bangladesh Round of the {competitionInfo.competitionName}.
                Candidates should arrive at least 30 minutes before the announced reporting time with their admit slips and photo ID.
              </p>

              <div className="venue-actions mt-4">
                <a
                  href={competitionInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MapPin size={16} /> Get Directions on Google Maps <ExternalLink size={14} />
                </a>

                {competitionInfo.schoolWebsiteUrl && (
                  <a
                    href={competitionInfo.schoolWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FacebookIcon size={16} /> Visit Heritage School Facebook <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section G: Certificates & NASA Experience Camp */}
        <div className="comp-section mt-10">
          <div className="section-header-compact">
            <h2 className="section-title">Certificates & NASA Experience Camp Opportunities</h2>
            <p className="section-subtitle">
              Recognition and international learning opportunities confirmed by the organisers.
            </p>
          </div>

          <div className="awards-grid mt-4">
            <div className="award-card card">
              <div className="award-icon-box bg-cyan-glow">
                <Award size={26} className="text-cyan" />
              </div>
              <h3 className="award-title">International Certificate for Every Participant</h3>
              <p className="award-desc">{competitionInfo.certificateInformation}</p>
              <ul className="award-bullets">
                <li>Globally verified credential recognizing astronomy aptitude</li>
                <li>Results announced and published internationally from the USA</li>
                <li>Valuable enrichment milestone for school and college portfolios</li>
              </ul>
            </div>

            <div className="award-card card">
              <div className="award-icon-box bg-blue-glow">
                <Sparkles size={26} className="text-cyan" />
              </div>
              <h3 className="award-title">NASA Experience Camp (USA, January 2027)</h3>
              <p className="award-desc">
                Winners of the competition qualify for an unforgettable week-long educational expedition to NASA in the United States!
              </p>
              <ul className="award-bullets">
                <li>3-Day immersive NASA workshop exploring space technology & rocket science</li>
                <li>Hands-on interactive science and astronomy laboratory activities</li>
                <li>Exclusive guided visits to world-renowned academic and research institutions</li>
              </ul>
              <p className="award-qualification-note">
                * Note: International travel and camp participation are subject to final selection rankings based on competition performance and official qualification criteria.
              </p>
            </div>
          </div>
        </div>

        {/* Section F: Official Contacts & Coordination Team */}
        <div className="comp-section mt-10">
          <div className="section-header-compact">
            <h2 className="section-title">Official Contacts & Coordination Team</h2>
            <p className="section-subtitle">
              Get in touch directly with our coordination team for registration, payment, or schedule inquiries.
            </p>
          </div>

          {/* Coordination Team Box (As published in official event notices) */}
          <div className="coordination-team-card card mt-4">
            <div className="coord-header">
              <div className="spec-card-icon-wrap bg-blue-glow mb-0">
                <Phone size={22} className="text-cyan" />
              </div>
              <div>
                <h3 className="coord-title">Contact Our Coordination Team:</h3>
                <p className="coord-subtitle">
                  Direct phone lines for Heritage School candidates and Olympiad registration inquiries
                </p>
              </div>
            </div>

            <div className="coord-contacts-grid mt-4">
              <div className="coord-person-box">
                <div className="coord-person-info">
                  <strong className="coord-name">Mostakim Rahman Mahir</strong>
                  <span className="coord-role">Coordination Team</span>
                </div>
                <a href="tel:01902821018" className="coord-phone-link">
                  <Phone size={16} /> 01902821018
                </a>
              </div>

              <div className="coord-divider-circle">
                <span>Or</span>
              </div>

              <div className="coord-person-box">
                <div className="coord-person-info">
                  <strong className="coord-name">Jayed Molla</strong>
                  <span className="coord-role">Coordination Team</span>
                </div>
                <a href="tel:01898868494" className="coord-phone-link">
                  <Phone size={16} /> 01898868494
                </a>
              </div>
            </div>
          </div>

          <div className="contact-box card mt-4">
            <div className="contact-row">
              <div className="contact-item">
                <span className="contact-label">Organising Institution:</span>
                <strong className="contact-val">{competitionInfo.organiserName}</strong>
              </div>

              <div className="contact-item">
                <span className="contact-label">Official Website:</span>
                <a
                  href={competitionInfo.officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Globe size={15} /> www.boacademia.com <ExternalLink size={13} />
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Host Venue:</span>
                <strong className="contact-val">{competitionInfo.schoolName}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Connect to OrbitLearn Learning Platform */}
        <div className="comp-section mt-10">
          <div className="comp-prep-banner card">
            <div className="prep-banner-content">
              <span className="badge badge-junior">Prepare with OrbitLearn</span>
              <h2 className="prep-banner-title">Start Your Astronomy Preparation Today</h2>
              <p className="prep-banner-desc">
                OrbitLearn provides complete, structured, plain-language lessons and auto-marking practice exams aligned with the Junior Explorer and Teen Explorer syllabus topics. No account or fees required—begin studying right now.
              </p>

              <div className="prep-banner-buttons">
                <button
                  onClick={() => navigate('/learn/junior')}
                  className="btn btn-cyan btn-lg"
                >
                  <BookOpen size={18} /> Start Junior Preparation (JE)
                </button>
                <button
                  onClick={() => navigate('/learn/senior')}
                  className="btn btn-primary btn-lg"
                >
                  <BookOpen size={18} /> Start Senior Preparation (TE)
                </button>
                <button
                  onClick={() => navigate('/practice')}
                  className="btn btn-secondary btn-lg"
                >
                  <CheckSquare size={18} /> Take a Practice Exam
                </button>
                <button
                  onClick={() => navigate('/resources')}
                  className="btn btn-secondary btn-lg"
                >
                  <Compass size={18} /> Explore Curated Resources
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section H: Frequently Asked Questions (FAQ) */}
        <div className="comp-section mt-10">
          <div className="section-header-compact">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers to common questions regarding eligibility, categories, exam format, and preparation.
            </p>
          </div>

          <div className="faq-accordion-list mt-4">
            {competitionInfo.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="faq-accordion-item card">
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${faq.id}`}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      className="faq-answer-box"
                    >
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
