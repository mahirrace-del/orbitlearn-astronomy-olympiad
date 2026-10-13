import React from 'react';

interface DiagramProps {
  type: string;
  caption: string;
  altText: string;
}

export const LessonDiagram: React.FC<DiagramProps> = ({ type, caption, altText }) => {
  const renderSvg = () => {
    switch (type) {
      case 'solar-system':
        return (
          <svg viewBox="0 0 760 260" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="760" height="260" fill="#071426" rx="12" />
            {/* Sun */}
            <circle cx="40" cy="130" r="38" fill="url(#sunGrad)" />
            <text x="40" y="195" fill="#FFEAA7" fontSize="11" textAnchor="middle" fontWeight="bold">Sun (Star)</text>
            
            {/* Orbits & Planets */}
            {/* Mercury */}
            <circle cx="120" cy="130" r="5" fill="#B0BEC5" />
            <text x="120" y="155" fill="#ECEFF1" fontSize="10" textAnchor="middle">Mercury</text>
            
            {/* Venus */}
            <circle cx="175" cy="130" r="8" fill="#FFCC80" />
            <text x="175" y="158" fill="#FFE0B2" fontSize="10" textAnchor="middle">Venus</text>
            
            {/* Earth */}
            <circle cx="235" cy="130" r="9" fill="#4FC3F7" />
            <text x="235" y="160" fill="#81D4FA" fontSize="10" textAnchor="middle">Earth</text>
            
            {/* Mars */}
            <circle cx="295" cy="130" r="7" fill="#FF7043" />
            <text x="295" y="158" fill="#FFAB91" fontSize="10" textAnchor="middle">Mars</text>
            
            {/* Asteroid Belt indicator */}
            <line x1="335" y1="30" x2="335" y2="230" stroke="#78909C" strokeDasharray="3 3" opacity="0.6" />
            <text x="335" y="25" fill="#90A4AE" fontSize="9" textAnchor="middle">Asteroid Belt</text>
            
            {/* Jupiter */}
            <circle cx="400" cy="130" r="24" fill="#FFB74D" />
            <ellipse cx="400" cy="130" rx="28" ry="4" fill="none" stroke="#FFA726" strokeWidth="2" opacity="0.7" />
            <text x="400" y="175" fill="#FFE082" fontSize="11" textAnchor="middle" fontWeight="bold">Jupiter (Largest)</text>
            
            {/* Saturn */}
            <g transform="translate(505, 130)">
              <ellipse cx="0" cy="0" rx="36" ry="10" transform="rotate(-15)" fill="none" stroke="#FFE082" strokeWidth="4" opacity="0.85" />
              <circle cx="0" cy="0" r="19" fill="#FFE082" />
              <ellipse cx="0" cy="0" rx="36" ry="10" transform="rotate(-15)" fill="none" stroke="#FFE082" strokeWidth="3" opacity="0.4" />
            </g>
            <text x="505" y="175" fill="#FFF59D" fontSize="11" textAnchor="middle">Saturn (Rings)</text>
            
            {/* Uranus */}
            <circle cx="605" cy="130" r="14" fill="#80DEEA" />
            <ellipse cx="605" cy="130" rx="4" ry="20" fill="none" stroke="#E0F7FA" strokeWidth="1.5" opacity="0.6" />
            <text x="605" y="168" fill="#B2EBF2" fontSize="10" textAnchor="middle">Uranus</text>
            
            {/* Neptune */}
            <circle cx="695" cy="130" r="13" fill="#29B6F6" />
            <text x="695" y="168" fill="#81D4FA" fontSize="10" textAnchor="middle">Neptune</text>
            
            {/* Classification Brackets */}
            <rect x="100" y="210" width="215" height="20" rx="4" fill="rgba(85, 214, 232, 0.12)" stroke="#55D6E8" strokeWidth="1" />
            <text x="207" y="224" fill="#55D6E8" fontSize="10" textAnchor="middle" fontWeight="bold">Inner Terrestrial (Rocky)</text>
            
            <rect x="360" y="210" width="370" height="20" rx="4" fill="rgba(255, 234, 167, 0.12)" stroke="#FFEAA7" strokeWidth="1" />
            <text x="545" y="224" fill="#FFEAA7" fontSize="10" textAnchor="middle" fontWeight="bold">Outer Giants (Gas & Ice Giants)</text>
            
            <defs>
              <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF9C4" />
                <stop offset="60%" stopColor="#FBC02D" />
                <stop offset="100%" stopColor="#E65100" />
              </radialGradient>
            </defs>
          </svg>
        );

      case 'seasons-tilt':
        return (
          <svg viewBox="0 0 720 280" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="720" height="280" fill="#071426" rx="12" />
            
            {/* Central Sun */}
            <circle cx="360" cy="140" r="28" fill="#FBC02D" />
            <text x="360" y="180" fill="#FFF59D" fontSize="11" textAnchor="middle" fontWeight="bold">Sun</text>
            
            {/* Orbital path */}
            <ellipse cx="360" cy="140" rx="270" ry="70" fill="none" stroke="#2C5282" strokeWidth="1.5" strokeDasharray="4 4" />
            
            {/* June Solstice (Left: North tilted toward Sun) */}
            <g transform="translate(130, 140)">
              {/* Earth Body */}
              <circle cx="0" cy="0" r="28" fill="#1E88E5" />
              {/* Tilted Axis at 23.5 deg */}
              <line x1="-12" y1="-42" x2="12" y2="42" stroke="#E2E8F0" strokeWidth="2.5" />
              <text x="-16" y="-45" fill="#E2E8F0" fontSize="10" fontWeight="bold">N</text>
              <text x="14" y="52" fill="#E2E8F0" fontSize="10" fontWeight="bold">S</text>
              {/* Equator */}
              <line x1="-26" y1="11" x2="26" y2="-11" stroke="#FFD54F" strokeWidth="1.5" strokeDasharray="2 2" />
              {/* Day/Night shading */}
              <path d="M 0 -28 A 28 28 0 0 0 0 28 Z" fill="rgba(0, 0, 0, 0.45)" />
            </g>
            <text x="130" y="215" fill="#55D6E8" fontSize="12" textAnchor="middle" fontWeight="bold">June Solstice</text>
            <text x="130" y="235" fill="#A0AEC0" fontSize="10" textAnchor="middle">Northern Summer (Direct Light)</text>
            <text x="130" y="250" fill="#A0AEC0" fontSize="10" textAnchor="middle">Southern Winter (Shallow Light)</text>
            
            {/* December Solstice (Right: North tilted away from Sun) */}
            <g transform="translate(590, 140)">
              {/* Earth Body */}
              <circle cx="0" cy="0" r="28" fill="#1E88E5" />
              {/* Tilted Axis at 23.5 deg */}
              <line x1="-12" y1="-42" x2="12" y2="42" stroke="#E2E8F0" strokeWidth="2.5" />
              <text x="-16" y="-45" fill="#E2E8F0" fontSize="10" fontWeight="bold">N</text>
              <text x="14" y="52" fill="#E2E8F0" fontSize="10" fontWeight="bold">S</text>
              {/* Equator */}
              <line x1="-26" y1="11" x2="26" y2="-11" stroke="#FFD54F" strokeWidth="1.5" strokeDasharray="2 2" />
              {/* Day/Night shading */}
              <path d="M 0 -28 A 28 28 0 0 1 0 28 Z" fill="rgba(0, 0, 0, 0.45)" />
            </g>
            <text x="590" y="215" fill="#55D6E8" fontSize="12" textAnchor="middle" fontWeight="bold">December Solstice</text>
            <text x="590" y="235" fill="#A0AEC0" fontSize="10" textAnchor="middle">Northern Winter (Shallow Light)</text>
            <text x="590" y="250" fill="#A0AEC0" fontSize="10" textAnchor="middle">Southern Summer (Direct Light)</text>
            
            {/* Equinoxes at top/bottom */}
            <text x="360" y="50" fill="#90CDF4" fontSize="11" textAnchor="middle">March Equinox (Equal Day & Night)</text>
            <text x="360" y="240" fill="#90CDF4" fontSize="11" textAnchor="middle">September Equinox (Equal Day & Night)</text>
          </svg>
        );

      case 'star-fusion':
        return (
          <svg viewBox="0 0 680 260" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="680" height="260" fill="#071426" rx="12" />
            
            {/* Hydrostatic balance cross section */}
            <circle cx="160" cy="130" r="85" fill="#1A365D" stroke="#55D6E8" strokeWidth="1.5" />
            <circle cx="160" cy="130" r="45" fill="#DD6B20" opacity="0.6" />
            <circle cx="160" cy="130" r="22" fill="#F6E05E" />
            <text x="160" y="134" fill="#744210" fontSize="9" textAnchor="middle" fontWeight="bold">Core</text>
            
            {/* Arrows: Inward Gravity vs Outward Radiation */}
            {/* Inward gravity */}
            <path d="M 160 30 L 160 55" stroke="#E53E3E" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
            <path d="M 160 230 L 160 205" stroke="#E53E3E" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
            <path d="M 60 130 L 85 130" stroke="#E53E3E" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
            <path d="M 260 130 L 235 130" stroke="#E53E3E" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
            <text x="160" y="22" fill="#FC8181" fontSize="10" textAnchor="middle" fontWeight="bold">Inward Gravity</text>
            
            {/* Outward Radiation */}
            <path d="M 160 100 L 160 75" stroke="#ECC94B" strokeWidth="2" />
            <path d="M 160 160 L 160 185" stroke="#ECC94B" strokeWidth="2" />
            <text x="160" y="90" fill="#ECC94B" fontSize="9" textAnchor="middle">Outward Pressure</text>
            
            {/* Fusion reaction equation diagram on right */}
            <g transform="translate(320, 40)">
              <rect width="320" height="180" rx="8" fill="#0D2344" stroke="#2B6CB0" strokeWidth="1" />
              <text x="160" y="30" fill="#55D6E8" fontSize="13" textAnchor="middle" fontWeight="bold">Hydrogen Core Fusion (p-p Chain)</text>
              
              {/* 4 protons */}
              <circle cx="60" cy="75" r="10" fill="#E53E3E" />
              <text x="60" y="79" fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">p⁺</text>
              <circle cx="85" cy="75" r="10" fill="#E53E3E" />
              <text x="85" y="79" fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">p⁺</text>
              <circle cx="60" cy="100" r="10" fill="#E53E3E" />
              <text x="60" y="104" fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">p⁺</text>
              <circle cx="85" cy="100" r="10" fill="#E53E3E" />
              <text x="85" y="104" fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">p⁺</text>
              <text x="72" y="130" fill="#CBD5E0" fontSize="10" textAnchor="middle">4 Protons</text>
              
              {/* Arrow */}
              <text x="150" y="93" fill="#FFEAA7" fontSize="20" textAnchor="middle">→</text>
              
              {/* Helium-4 Nucleus */}
              <g transform="translate(230, 85)">
                <circle cx="-6" cy="-6" r="8" fill="#E53E3E" />
                <circle cx="6" cy="-6" r="8" fill="#4299E1" />
                <circle cx="-6" cy="6" r="8" fill="#4299E1" />
                <circle cx="6" cy="6" r="8" fill="#E53E3E" />
              </g>
              <text x="230" y="115" fill="#CBD5E0" fontSize="10" textAnchor="middle">Helium-4 Nucleus</text>
              <text x="230" y="130" fill="#F6E05E" fontSize="10" textAnchor="middle">+ Energy (E = Δm · c²)</text>
              
              <text x="160" y="160" fill="#A0AEC0" fontSize="10" textAnchor="middle">0.7% of mass converted directly into radiant energy</text>
            </g>
          </svg>
        );

      case 'comet-tail':
        return (
          <svg viewBox="0 0 700 240" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="700" height="240" fill="#071426" rx="12" />
            {/* Sun at left */}
            <circle cx="80" cy="120" r="32" fill="#F6AD55" />
            <text x="80" y="170" fill="#FEEBC8" fontSize="12" textAnchor="middle" fontWeight="bold">Sun</text>
            
            {/* Solar Wind arrows */}
            <g stroke="#ED8936" strokeWidth="1.5" strokeDasharray="3 3">
              <line x1="120" y1="80" x2="300" y2="40" />
              <line x1="120" y1="120" x2="320" y2="120" />
              <line x1="120" y1="160" x2="300" y2="200" />
            </g>
            <text x="200" y="105" fill="#ED8936" fontSize="10">Solar Wind & Radiation Pressure</text>
            
            {/* Comet positions on orbit */}
            {/* Approaching */}
            <g transform="translate(380, 50)">
              <circle cx="0" cy="0" r="7" fill="#81E6D9" />
              {/* Tails pointing away from Sun */}
              <line x1="0" y1="0" x2="90" y2="-20" stroke="#63B3ED" strokeWidth="4" opacity="0.8" />
              <line x1="0" y1="0" x2="80" y2="-5" stroke="#E2E8F0" strokeWidth="3" opacity="0.6" />
            </g>
            
            {/* Perihelion closest */}
            <g transform="translate(320, 120)">
              <circle cx="0" cy="0" r="9" fill="#81E6D9" />
              <line x1="0" y1="0" x2="140" y2="0" stroke="#63B3ED" strokeWidth="6" opacity="0.85" />
              <line x1="0" y1="0" x2="120" y2="20" stroke="#E2E8F0" strokeWidth="4" opacity="0.6" />
              <text x="0" y="-14" fill="#81E6D9" fontSize="10" textAnchor="middle">Nucleus & Coma</text>
            </g>
            
            {/* Receding (traveling away, tail points AHEAD) */}
            <g transform="translate(380, 190)">
              <circle cx="0" cy="0" r="7" fill="#81E6D9" />
              <line x1="0" y1="0" x2="90" y2="20" stroke="#63B3ED" strokeWidth="4" opacity="0.8" />
              <line x1="0" y1="0" x2="80" y2="5" stroke="#E2E8F0" strokeWidth="3" opacity="0.6" />
            </g>
            
            {/* Labels */}
            <rect x="490" y="60" width="180" height="120" rx="8" fill="#0D2344" stroke="#2B6CB0" strokeWidth="1" />
            <text x="580" y="85" fill="#55D6E8" fontSize="11" textAnchor="middle" fontWeight="bold">Key Rule</text>
            <text x="580" y="110" fill="#E2E8F0" fontSize="10" textAnchor="middle">Tails do NOT follow</text>
            <text x="580" y="125" fill="#E2E8F0" fontSize="10" textAnchor="middle">direction of travel.</text>
            <text x="580" y="150" fill="#F6E05E" fontSize="10" textAnchor="middle" fontWeight="bold">Tails ALWAYS point</text>
            <text x="580" y="165" fill="#F6E05E" fontSize="10" textAnchor="middle" fontWeight="bold">AWAY from the Sun!</text>
          </svg>
        );

      case 'galaxy-types':
        return (
          <svg viewBox="0 0 720 220" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="720" height="220" fill="#071426" rx="12" />
            
            {/* Spiral */}
            <g transform="translate(130, 100)">
              <ellipse cx="0" cy="0" rx="45" ry="25" fill="none" stroke="#63B3ED" strokeWidth="2" strokeDasharray="6 3" transform="rotate(-20)" />
              <ellipse cx="0" cy="0" rx="70" ry="35" fill="none" stroke="#4FD1C5" strokeWidth="2" strokeDasharray="8 4" transform="rotate(30)" />
              <circle cx="0" cy="0" r="14" fill="#F6E05E" />
              <text x="0" y="70" fill="#55D6E8" fontSize="13" textAnchor="middle" fontWeight="bold">Spiral Galaxy</text>
              <text x="0" y="90" fill="#A0AEC0" fontSize="10" textAnchor="middle">Disk + Arms (Milky Way, Andromeda)</text>
            </g>
            
            {/* Elliptical */}
            <g transform="translate(360, 100)">
              <ellipse cx="0" cy="0" rx="65" ry="40" fill="#ED8936" opacity="0.35" />
              <ellipse cx="0" cy="0" rx="40" ry="25" fill="#ED8936" opacity="0.6" />
              <circle cx="0" cy="0" r="12" fill="#FBD38D" />
              <text x="0" y="70" fill="#FBD38D" fontSize="13" textAnchor="middle" fontWeight="bold">Elliptical Galaxy</text>
              <text x="0" y="90" fill="#A0AEC0" fontSize="10" textAnchor="middle">Smooth oval, older reddish stars</text>
            </g>
            
            {/* Irregular */}
            <g transform="translate(590, 100)">
              <path d="M -40 -20 Q -10 -40 25 -15 Q 50 10 30 35 Q -15 45 -35 20 Z" fill="#9F7AEA" opacity="0.4" />
              <circle cx="-15" cy="-5" r="8" fill="#B794F4" />
              <circle cx="20" cy="15" r="6" fill="#63B3ED" />
              <circle cx="5" cy="-20" r="5" fill="#F6E05E" />
              <text x="0" y="70" fill="#D6BCFA" fontSize="13" textAnchor="middle" fontWeight="bold">Irregular Galaxy</text>
              <text x="0" y="90" fill="#A0AEC0" fontSize="10" textAnchor="middle">No symmetric shape (Magellanic Clouds)</text>
            </g>
          </svg>
        );

      case 'inverse-square':
        return (
          <svg viewBox="0 0 720 250" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="720" height="250" fill="#071426" rx="12" />
            
            {/* Source */}
            <circle cx="60" cy="125" r="14" fill="#F6E05E" />
            <text x="60" y="160" fill="#FEEBC8" fontSize="11" textAnchor="middle" fontWeight="bold">Source</text>
            
            {/* Pyramidal light rays */}
            <line x1="60" y1="125" x2="650" y2="30" stroke="#ECC94B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="60" y1="125" x2="650" y2="220" stroke="#ECC94B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            
            {/* Distance 1d */}
            <g transform="translate(220, 85)">
              <rect width="40" height="80" fill="rgba(85, 214, 232, 0.25)" stroke="#55D6E8" strokeWidth="1.5" />
              <text x="20" y="45" fill="#55D6E8" fontSize="11" textAnchor="middle" fontWeight="bold">Area 1</text>
              <text x="20" y="105" fill="#CBD5E0" fontSize="11" textAnchor="middle">d</text>
              <text x="20" y="125" fill="#F6E05E" fontSize="11" textAnchor="middle" fontWeight="bold">Flux = 1</text>
            </g>
            
            {/* Distance 2d */}
            <g transform="translate(380, 55)">
              <rect width="80" height="140" fill="rgba(85, 214, 232, 0.15)" stroke="#55D6E8" strokeWidth="1.5" />
              {/* 4 sub-squares */}
              <line x1="40" y1="0" x2="40" y2="140" stroke="#55D6E8" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="0" y1="70" x2="80" y2="70" stroke="#55D6E8" strokeWidth="1" strokeDasharray="2 2" />
              <text x="40" y="75" fill="#55D6E8" fontSize="12" textAnchor="middle" fontWeight="bold">Area 4</text>
              <text x="40" y="165" fill="#CBD5E0" fontSize="11" textAnchor="middle">2d</text>
              <text x="40" y="185" fill="#F6E05E" fontSize="11" textAnchor="middle" fontWeight="bold">Flux = 1/4</text>
            </g>
            
            {/* Distance 3d */}
            <g transform="translate(560, 35)">
              <rect width="110" height="180" fill="rgba(85, 214, 232, 0.1)" stroke="#55D6E8" strokeWidth="1.5" />
              {/* 9 sub-squares grid */}
              <line x1="36.6" y1="0" x2="36.6" y2="180" stroke="#55D6E8" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="73.3" y1="0" x2="73.3" y2="180" stroke="#55D6E8" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="0" y1="60" x2="110" y2="60" stroke="#55D6E8" strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="0" y1="120" x2="110" y2="120" stroke="#55D6E8" strokeWidth="0.8" strokeDasharray="2 2" />
              <text x="55" y="95" fill="#55D6E8" fontSize="12" textAnchor="middle" fontWeight="bold">Area 9</text>
              <text x="55" y="200" fill="#CBD5E0" fontSize="11" textAnchor="middle">3d</text>
              <text x="55" y="218" fill="#F6E05E" fontSize="11" textAnchor="middle" fontWeight="bold">Flux = 1/9</text>
            </g>
          </svg>
        );

      case 'kepler-orbit':
        return (
          <svg viewBox="0 0 700 250" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="700" height="250" fill="#071426" rx="12" />
            
            {/* Ellipse */}
            <ellipse cx="330" cy="125" rx="240" ry="90" fill="none" stroke="#3182CE" strokeWidth="2" />
            
            {/* Foci */}
            {/* Sun at Focus 1 */}
            <circle cx="210" cy="125" r="16" fill="#ECC94B" />
            <text x="210" y="155" fill="#FFF" fontSize="11" textAnchor="middle" fontWeight="bold">Sun (Focus 1)</text>
            
            {/* Empty Focus 2 */}
            <circle cx="450" cy="125" r="3" fill="#718096" />
            <text x="450" y="145" fill="#718096" fontSize="9" textAnchor="middle">Focus 2</text>
            
            {/* Perihelion sector A1 */}
            <path d="M 210 125 L 90 125 A 240 90 0 0 1 110 80 Z" fill="rgba(85, 214, 232, 0.4)" stroke="#55D6E8" strokeWidth="1.5" />
            <text x="135" y="110" fill="#FFF" fontSize="10" fontWeight="bold">Area 1</text>
            <text x="80" y="140" fill="#E2E8F0" fontSize="10" textAnchor="middle" fontWeight="bold">Perihelion (Fastest)</text>
            
            {/* Aphelion sector A2 */}
            <path d="M 210 125 L 570 125 A 240 90 0 0 0 562 100 Z" fill="rgba(85, 214, 232, 0.4)" stroke="#55D6E8" strokeWidth="1.5" />
            <text x="490" y="120" fill="#FFF" fontSize="10" fontWeight="bold">Area 2</text>
            <text x="580" y="145" fill="#E2E8F0" fontSize="10" textAnchor="middle" fontWeight="bold">Aphelion (Slowest)</text>
            
            {/* Explanatory text */}
            <rect x="230" y="25" width="240" height="40" rx="6" fill="#0D2344" stroke="#2B6CB0" strokeWidth="1" />
            <text x="350" y="45" fill="#55D6E8" fontSize="11" textAnchor="middle" fontWeight="bold">Equal Times → Equal Areas</text>
            <text x="350" y="58" fill="#CBD5E0" fontSize="9" textAnchor="middle">Kepler’s 2nd Law (Conservation of Angular Momentum)</text>
          </svg>
        );

      case 'flux-distance':
        return (
          <svg viewBox="0 0 700 240" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="700" height="240" fill="#071426" rx="12" />
            
            {/* Earth Orbit baseline at bottom */}
            <g transform="translate(180, 190)">
              <ellipse cx="0" cy="0" rx="80" ry="25" fill="none" stroke="#2B6CB0" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="0" cy="0" r="10" fill="#F6E05E" />
              <text x="0" y="18" fill="#CBD5E0" fontSize="9" textAnchor="middle">Sun</text>
              
              {/* January position */}
              <circle cx="-80" cy="0" r="7" fill="#4299E1" />
              <text x="-95" y="5" fill="#63B3ED" fontSize="10" textAnchor="end">Earth (Jan)</text>
              
              {/* July position */}
              <circle cx="80" cy="0" r="7" fill="#4299E1" />
              <text x="95" y="5" fill="#63B3ED" fontSize="10" textAnchor="start">Earth (July)</text>
              
              {/* 1 AU indicator */}
              <line x1="0" y1="-8" x2="80" y2="-8" stroke="#ECC94B" strokeWidth="1.5" />
              <text x="40" y="-12" fill="#ECC94B" fontSize="9" textAnchor="middle">1 AU</text>
            </g>
            
            {/* Nearby Star */}
            <g transform="translate(180, 50)">
              <circle cx="0" cy="0" r="8" fill="#F6AD55" />
              <text x="20" y="5" fill="#FBD38D" fontSize="11" fontWeight="bold">Nearby Star</text>
              
              {/* Parallax angle lines */}
              <line x1="0" y1="0" x2="-80" y2="140" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="0" x2="80" y2="140" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="0" x2="0" y2="140" stroke="#718096" strokeWidth="1" />
              
              <text x="8" y="24" fill="#55D6E8" fontSize="11" fontWeight="bold">p</text>
            </g>
            
            {/* Parallax formula panel on right */}
            <g transform="translate(420, 40)">
              <rect width="250" height="150" rx="10" fill="#0D2344" stroke="#2B6CB0" strokeWidth="1" />
              <text x="125" y="35" fill="#55D6E8" fontSize="13" textAnchor="middle" fontWeight="bold">Stellar Parallax Formula</text>
              <text x="125" y="70" fill="#FFF" fontSize="18" textAnchor="middle" fontWeight="bold">d(pc) = 1 / p(arcsec)</text>
              
              <text x="125" y="105" fill="#CBD5E0" fontSize="11" textAnchor="middle">If p = 0.5 arcseconds:</text>
              <text x="125" y="125" fill="#F6E05E" fontSize="13" textAnchor="middle" fontWeight="bold">d = 1 / 0.5 = 2 parsecs</text>
            </g>
          </svg>
        );

      case 'wien-spectrum':
        return (
          <svg viewBox="0 0 700 240" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="700" height="240" fill="#071426" rx="12" />
            
            {/* Axes */}
            <line x1="80" y1="200" x2="620" y2="200" stroke="#A0AEC0" strokeWidth="1.5" />
            <line x1="80" y1="200" x2="80" y2="30" stroke="#A0AEC0" strokeWidth="1.5" />
            <text x="350" y="225" fill="#CBD5E0" fontSize="11" textAnchor="middle">Wavelength λ (nm)</text>
            <text x="35" y="115" fill="#CBD5E0" fontSize="11" textAnchor="middle" transform="rotate(-90 35 115)">Spectral Flux</text>
            
            {/* Curve 1: 10,000 K (Hot blue star, peaks at ~290 nm UV/blue) */}
            <path d="M 80 200 Q 150 20 220 80 T 600 195" fill="none" stroke="#63B3ED" strokeWidth="3" />
            <circle cx="160" cy="45" r="5" fill="#63B3ED" />
            <text x="210" y="45" fill="#63B3ED" fontSize="11" fontWeight="bold">10,000 K (Blue-white star)</text>
            
            {/* Curve 2: 6,000 K (Sun, peaks at ~500 nm visible) */}
            <path d="M 80 200 Q 230 75 320 120 T 600 196" fill="none" stroke="#ECC94B" strokeWidth="2.5" />
            <circle cx="265" cy="98" r="5" fill="#ECC94B" />
            <text x="315" y="98" fill="#ECC94B" fontSize="11" fontWeight="bold">6,000 K (Yellow star, Sun)</text>
            
            {/* Curve 3: 3,500 K (Cool red star, peaks at ~800 nm infrared) */}
            <path d="M 80 200 Q 350 140 450 160 T 600 198" fill="none" stroke="#F56565" strokeWidth="2" />
            <circle cx="395" cy="155" r="5" fill="#F56565" />
            <text x="445" y="155" fill="#F56565" fontSize="11" fontWeight="bold">3,500 K (Red star)</text>
            
            {/* Wien shift arrow */}
            <path d="M 390 35 L 180 35" stroke="#55D6E8" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            <text x="285" y="25" fill="#55D6E8" fontSize="10" textAnchor="middle" fontWeight="bold">Peak shifts shorter as T rises</text>
          </svg>
        );

      case 'redshift-wave':
        return (
          <svg viewBox="0 0 700 240" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="700" height="240" fill="#071426" rx="12" />
            
            {/* Distant galaxy emitting light */}
            <g transform="translate(90, 80)">
              <ellipse cx="0" cy="0" rx="35" ry="18" fill="none" stroke="#4299E1" strokeWidth="2" transform="rotate(-15)" />
              <circle cx="0" cy="0" r="8" fill="#F6E05E" />
              <text x="0" y="40" fill="#90CDF4" fontSize="11" textAnchor="middle" fontWeight="bold">Distant Galaxy</text>
              <text x="0" y="55" fill="#CBD5E0" fontSize="9" textAnchor="middle">Emitted Short Wave (λ_rest)</text>
            </g>
            
            {/* Expanding space wave */}
            <path d="M 140 80 Q 160 50 180 80 T 220 80 T 270 80 Q 300 35 330 80 T 400 80 Q 450 30 500 80 T 580 80" fill="none" stroke="url(#waveGrad)" strokeWidth="3" />
            
            {/* Earth Observer */}
            <g transform="translate(630, 80)">
              <circle cx="0" cy="0" r="16" fill="#2B6CB0" stroke="#63B3ED" strokeWidth="2" />
              <text x="0" y="40" fill="#63B3ED" fontSize="11" textAnchor="middle" fontWeight="bold">Telescope on Earth</text>
              <text x="0" y="55" fill="#CBD5E0" fontSize="9" textAnchor="middle">Observed Long Wave (λ_obs)</text>
            </g>
            
            {/* Redshift formula callout */}
            <g transform="translate(150, 160)">
              <rect width="400" height="60" rx="8" fill="#0D2344" stroke="#2B6CB0" strokeWidth="1" />
              <text x="200" y="25" fill="#55D6E8" fontSize="13" textAnchor="middle" fontWeight="bold">z = (λ_observed − λ_rest) / λ_rest</text>
              <text x="200" y="45" fill="#CBD5E0" fontSize="11" textAnchor="middle">At low redshift: v ≈ c · z (c ≈ 300,000 km/s)</text>
            </g>
            
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4299E1" />
                <stop offset="50%" stopColor="#ECC94B" />
                <stop offset="100%" stopColor="#E53E3E" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'exoplanet-transit':
        return (
          <svg viewBox="0 0 700 250" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="700" height="250" fill="#071426" rx="12" />
            
            {/* Top view: Star with transit */}
            <g transform="translate(180, 80)">
              <circle cx="0" cy="0" r="48" fill="#F6E05E" />
              <text x="0" y="4" fill="#744210" fontSize="11" textAnchor="middle" fontWeight="bold">Host Star (R_*)</text>
              
              {/* Orbiting planet in transit */}
              <line x1="-100" y1="0" x2="100" y2="0" stroke="#718096" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="-10" cy="0" r="10" fill="#1A202C" stroke="#55D6E8" strokeWidth="1.5" />
              <text x="-10" y="-16" fill="#55D6E8" fontSize="9" textAnchor="middle">Planet (R_p)</text>
            </g>
            
            {/* Right: Light Curve graph */}
            <g transform="translate(360, 30)">
              <rect width="300" height="180" rx="8" fill="#0D2344" stroke="#2B6CB0" strokeWidth="1" />
              <text x="150" y="24" fill="#55D6E8" fontSize="12" textAnchor="middle" fontWeight="bold">Transit Light Curve</text>
              
              {/* Axes */}
              <line x1="40" y1="140" x2="270" y2="140" stroke="#718096" strokeWidth="1" />
              <line x1="40" y1="40" x2="40" y2="140" stroke="#718096" strokeWidth="1" />
              <text x="155" y="160" fill="#CBD5E0" fontSize="9" textAnchor="middle">Time</text>
              <text x="25" y="90" fill="#CBD5E0" fontSize="9" textAnchor="middle" transform="rotate(-90 25 90)">Flux</text>
              
              {/* Dip Curve */}
              <path d="M 50 60 L 100 60 L 120 110 L 180 110 L 200 60 L 250 60" fill="none" stroke="#63B3ED" strokeWidth="2.5" />
              
              {/* Depth indicator */}
              <line x1="150" y1="60" x2="150" y2="110" stroke="#ECC94B" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="155" y="88" fill="#ECC94B" fontSize="9" textAnchor="start" fontWeight="bold">ΔF / F ≈ (R_p / R_*)²</text>
            </g>
          </svg>
        );

      case 'dark-matter-curve':
        return (
          <svg viewBox="0 0 700 250" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="700" height="250" fill="#071426" rx="12" />
            
            {/* Axes */}
            <line x1="90" y1="200" x2="620" y2="200" stroke="#A0AEC0" strokeWidth="1.5" />
            <line x1="90" y1="200" x2="90" y2="40" stroke="#A0AEC0" strokeWidth="1.5" />
            <text x="350" y="225" fill="#CBD5E0" fontSize="11" textAnchor="middle">Distance from Galaxy Center (kpc)</text>
            <text x="45" y="120" fill="#CBD5E0" fontSize="11" textAnchor="middle" transform="rotate(-90 45 120)">Orbital Velocity (km/s)</text>
            
            {/* Observed Curve (Flat at ~220 km/s due to Dark Matter) */}
            <path d="M 90 190 Q 150 80 230 75 L 600 75" fill="none" stroke="#55D6E8" strokeWidth="3" />
            <circle cx="450" cy="75" r="5" fill="#55D6E8" />
            <text x="465" y="70" fill="#55D6E8" fontSize="11" fontWeight="bold">Observed Flat Curve (with Dark Matter Halo)</text>
            
            {/* Expected Keplerian Declining Curve (Visible Matter only) */}
            <path d="M 90 190 Q 150 80 230 85 Q 350 120 600 170" fill="none" stroke="#E53E3E" strokeWidth="2.5" strokeDasharray="4 4" />
            <text x="440" y="145" fill="#FC8181" fontSize="11">Expected Decline (Visible Stars & Gas Only)</text>
            
            {/* Galaxy icon at origin */}
            <ellipse cx="140" cy="180" rx="28" ry="12" fill="none" stroke="#CBD5E0" strokeWidth="1" transform="rotate(-20)" />
            <circle cx="140" cy="180" r="4" fill="#F6E05E" />
            <text x="140" y="196" fill="#E2E8F0" fontSize="8" textAnchor="middle">Visible Disk</text>
          </svg>
        );

      case 'stellar-remnants':
        return (
          <svg viewBox="0 0 720 220" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="720" height="220" fill="#071426" rx="12" />
            
            {/* White Dwarf */}
            <g transform="translate(130, 95)">
              <circle cx="0" cy="0" r="32" fill="#EBF8FF" stroke="#63B3ED" strokeWidth="2" />
              <text x="0" y="55" fill="#90CDF4" fontSize="12" textAnchor="middle" fontWeight="bold">White Dwarf</text>
              <text x="0" y="72" fill="#CBD5E0" fontSize="10" textAnchor="middle">Size ≈ Earth (~12,000 km)</text>
              <text x="0" y="87" fill="#CBD5E0" fontSize="9" textAnchor="middle">Electron Degeneracy Pressure (&lt; 1.4 M_☉)</text>
            </g>
            
            {/* Neutron Star */}
            <g transform="translate(360, 95)">
              <circle cx="0" cy="0" r="10" fill="#9F7AEA" stroke="#D6BCFA" strokeWidth="2" />
              <text x="0" y="55" fill="#D6BCFA" fontSize="12" textAnchor="middle" fontWeight="bold">Neutron Star</text>
              <text x="0" y="72" fill="#CBD5E0" fontSize="10" textAnchor="middle">Size ≈ City (~20 km)</text>
              <text x="0" y="87" fill="#CBD5E0" fontSize="9" textAnchor="middle">Neutron Degeneracy Pressure (1.4–3 M_☉)</text>
            </g>
            
            {/* Black Hole */}
            <g transform="translate(590, 95)">
              <circle cx="0" cy="0" r="24" fill="#000000" stroke="#E53E3E" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="0" cy="0" r="4" fill="#E53E3E" />
              <text x="0" y="55" fill="#FC8181" fontSize="12" textAnchor="middle" fontWeight="bold">Black Hole</text>
              <text x="0" y="72" fill="#CBD5E0" fontSize="10" textAnchor="middle">Event Horizon (Point Singularity)</text>
              <text x="0" y="87" fill="#CBD5E0" fontSize="9" textAnchor="middle">Escape velocity exceeds c (&gt; 3 M_☉)</text>
            </g>
          </svg>
        );

      case 'telescope-spectrum':
      default:
        return (
          <svg viewBox="0 0 720 220" className="diagram-svg" role="img" aria-label={altText}>
            <rect width="720" height="220" fill="#071426" rx="12" />
            
            {/* EM Spectrum bar */}
            <g transform="translate(50, 40)">
              <rect x="0" y="0" width="100" height="40" fill="#805AD5" rx="4" />
              <text x="50" y="24" fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">Gamma / X-ray</text>
              
              <rect x="105" y="0" width="95" height="40" fill="#3182CE" rx="4" />
              <text x="152" y="24" fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">Ultraviolet</text>
              
              <rect x="205" y="0" width="110" height="40" fill="#38A169" rx="4" />
              <text x="260" y="24" fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">Visible Light</text>
              
              <rect x="320" y="0" width="130" height="40" fill="#DD6B20" rx="4" />
              <text x="385" y="24" fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">Infrared (IR)</text>
              
              <rect x="455" y="0" width="165" height="40" fill="#D69E2E" rx="4" />
              <text x="537" y="24" fill="#FFF" fontSize="10" textAnchor="middle" fontWeight="bold">Radio Waves</text>
            </g>
            
            {/* Atmospheric Opacity Blockers */}
            <g transform="translate(50, 110)">
              <rect x="0" y="0" width="200" height="35" rx="6" fill="rgba(229, 62, 62, 0.2)" stroke="#E53E3E" strokeWidth="1" />
              <text x="100" y="22" fill="#FC8181" fontSize="10" textAnchor="middle">Atmosphere Opaque (Space Only)</text>
              
              <rect x="205" y="0" width="110" height="35" rx="6" fill="rgba(56, 161, 105, 0.2)" stroke="#38A169" strokeWidth="1" />
              <text x="260" y="22" fill="#68D391" fontSize="10" textAnchor="middle">Visible Window</text>
              
              <rect x="320" y="0" width="130" height="35" rx="6" fill="rgba(221, 107, 32, 0.2)" stroke="#DD6B20" strokeWidth="1" />
              <text x="385" y="22" fill="#FBD38D" fontSize="10" textAnchor="middle">Mostly Absorbed (Webb Space)</text>
              
              <rect x="455" y="0" width="165" height="35" rx="6" fill="rgba(56, 161, 105, 0.2)" stroke="#38A169" strokeWidth="1" />
              <text x="537" y="22" fill="#68D391" fontSize="10" textAnchor="middle">Radio Window (Ground Dishes)</text>
            </g>
            
            <text x="360" y="190" fill="#A0AEC0" fontSize="11" textAnchor="middle">
              Infrared penetrates dust clouds; Radio reveals cold hydrogen; X-ray/Gamma require orbit.
            </text>
          </svg>
        );
    }
  };

  return (
    <figure className="lesson-diagram-card">
      <div className="svg-wrapper">{renderSvg()}</div>
      <figcaption className="diagram-caption">{caption}</figcaption>
    </figure>
  );
};
