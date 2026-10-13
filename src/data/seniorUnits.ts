import { LessonUnit } from '../types';

export const seniorUnits: LessonUnit[] = [
  {
    id: 's-unit-1',
    slug: 'gravity-orbits-kepler',
    track: 'senior',
    unitNumber: 1,
    title: 'Gravity, Orbits and Kepler’s Third Law',
    introduction:
      'Planetary motion is governed by the universal law of gravitation and described elegantly by Johannes Kepler’s three empirical laws. In our Solar System, Kepler’s Third Law provides a direct mathematical link between orbital period and distance from the Sun.',
    estimatedTime: '12–15 minutes',
    learningGoals: [
      'Explain orbital mechanics as the combination of forward tangential motion and continuous gravitational acceleration.',
      'State Kepler’s Three Laws of planetary motion.',
      'Apply Kepler’s Third Law in the simplified Solar System form: T² = a³.',
      'Identify the exact units required: T in Earth years and a in Astronomical Units (AU).',
      'Recognise that the simplified form assumes a central star of one solar mass (1 M_☉).'
    ],
    sections: [
      {
        heading: 'How Gravity Creates Stable Orbits',
        content: [
          'Isaac Newton conceived the famous thought experiment of a cannon on a high mountain. Fired with low velocity, the cannonball falls to Earth nearby. Fired faster, it travels farther across the curvature of the planet. Fired at orbital speed (~7.9 km/s for low Earth orbit), the cannonball falls toward Earth at the exact same rate that Earth’s surface curves away beneath it!',
          'An orbit is not a state of "zero gravity"—it is a continuous state of free-fall. A planet moves forward through space with tangential velocity, while the Sun’s gravitational pull constantly accelerates it toward the center, curving its trajectory into a closed orbital path.'
        ],
        analogy:
          'Swinging a ball on a string: the ball wants to fly off in a straight line, but the tension in the string constantly pulls it inward. In space, gravity acts as the invisible string.'
      },
      {
        heading: 'Kepler’s Three Laws of Planetary Motion',
        content: [
          'Published between 1609 and 1619 based on Tycho Brahe’s precise observational data, Kepler’s laws revolutionized astronomy:',
          '1. Kepler’s First Law (The Law of Ellipses): The orbit of each planet is an ellipse, with the Sun situated at one of the two foci.',
          '2. Kepler’s Second Law (The Law of Equal Areas): A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time. Consequently, a planet travels fastest at perihelion (closest point to the Sun) and slowest at aphelion (farthest point).',
          '3. Kepler’s Third Law (The Harmonic Law): The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit: T² ∝ a³.'
        ]
      },
      {
        heading: 'The Simplified Solar System Formula: T² = a³',
        content: [
          'In general physics, Kepler’s Third Law for any two-body system is written: T² = [4π² / (G(M₁ + M₂))] · a³.',
          'However, when an object orbits our Sun (where central mass M ≈ 1 Solar Mass, M_☉) and we measure orbital period T in Earth years and semi-major axis a in Astronomical Units (AU), all the complex constants cancel out to exactly 1!',
          'This yields the famous simplified relation: T² = a³.',
          'Crucial limitation: This simplified formula works directly only for objects orbiting our Sun (or a star with exactly 1 solar mass). For stars with different masses or exoplanetary systems, the stellar mass must be accounted for: T² · M_star = a³.'
        ]
      }
    ],
    diagram: {
      type: 'kepler-orbit',
      caption: 'Kepler’s Laws: Elliptical orbit with the Sun at one focus; equal areas swept in equal time intervals.',
      altText: 'Diagram of an elliptical planetary orbit showing perihelion (fast motion) and aphelion (slow motion) with equal area wedges.'
    },
    keyIdeas: [
      'Orbits are a continuous state of free-fall under gravity.',
      'Kepler’s 1st Law: orbits are ellipses with the Sun at one focus.',
      'Kepler’s 2nd Law: equal areas swept in equal times (planets move fastest at perihelion).',
      'Kepler’s 3rd Law: T² = a³ when T is in Earth years and a is in AU (for a 1 M_☉ central star).',
      'To solve for a from T: a = ∛(T²). To solve for T from a: T = √(a³).'
    ],
    keyTerms: [
      {
        term: 'Semi-major Axis (a)',
        definition: 'Half of the longest diameter of an ellipse; represents the average orbital distance of a planet from its star.'
      },
      {
        term: 'Orbital Period (T)',
        definition: 'The time taken by an astronomical object to complete one full orbit around its host body.'
      },
      {
        term: 'Perihelion',
        definition: 'The point in the orbit of a planet where it is closest to the Sun.'
      },
      {
        term: 'Aphelion',
        definition: 'The point in the orbit of a planet where it is farthest from the Sun.'
      }
    ],
    formula: {
      formula: 'T² = a³',
      description: 'Relates orbital period T (in Earth years) to average distance a (in AU) for objects orbiting the Sun.',
      variables: [
        { symbol: 'T', meaning: 'Orbital period', unit: 'Earth years (yr)' },
        { symbol: 'a', meaning: 'Semi-major axis (average orbital distance)', unit: 'Astronomical Units (AU)' }
      ],
      workedExample: {
        problem:
          'A newly discovered asteroid completes one full orbit around the Sun in 2 Earth years (T = 2). What is its average orbital distance in AU?',
        stepByStep: [
          'Step 1: Write down Kepler’s Third Law in Solar System units: T² = a³.',
          'Step 2: Square the orbital period: T² = (2)² = 4.',
          'Step 3: Equate to distance: a³ = 4.',
          'Step 4: Solve for a by taking the cube root: a = ∛4 ≈ 1.5874 AU.'
        ],
        result: 'The asteroid’s average orbital distance is approximately 1.59 AU.'
      },
      unitsReminder:
        'Always verify your units before calculating! T must be in years and a must be in AU. If T is in days, divide by 365.25. If a is in km, convert using 1 AU ≈ 149.6 million km.'
    },
    commonMistakes: [
      'Mixing up the powers: writing a² = T³ instead of T² = a³.',
      'Using seconds or days for T without converting to Earth years.',
      'Using kilometres or miles for a instead of AU in the simplified formula.',
      'Applying T² = a³ directly to exoplanets orbiting stars with masses very different from the Sun without mass adjustment.'
    ],
    checkQuestions: [
      {
        id: 'sc-1-1',
        question: 'A planet completes one orbit around the Sun in 2 years. What is its average distance in AU? (Use T² = a³)',
        options: ['1.26 AU', '1.59 AU', '2.00 AU', '4.00 AU'],
        correctIndex: 1,
        explanation: 'Using T² = a³: T = 2, so T² = 4. Therefore a³ = 4, giving a = ∛4 ≈ 1.59 AU.'
      },
      {
        id: 'sc-1-2',
        question: 'What keeps planets in stable closed orbits around the Sun rather than flying off into deep space?',
        options: [
          'Magnetic attraction between planetary cores',
          'Gravitational attraction continually bending their forward motion',
          'Solar wind pushing planets from behind',
          'Atmospheric friction in interplanetary space'
        ],
        correctIndex: 1,
        explanation: 'Gravity pulls the planet toward the Sun, continually redirecting its straight-line forward velocity into an orbital ellipse.'
      },
      {
        id: 'sc-1-3',
        question: 'According to Kepler’s Second Law, where in its orbit does a planet travel at its highest speed?',
        options: [
          'At aphelion (farthest from the Sun)',
          'At perihelion (closest to the Sun)',
          'Speed is completely constant throughout the entire orbit',
          'At the equinox positions only'
        ],
        correctIndex: 1,
        explanation: 'Because a line to the Sun sweeps out equal areas in equal times, the planet moves fastest at perihelion.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA: Orbits and Kepler’s Laws',
        url: 'https://science.nasa.gov/solar-system/orbits-and-keplers-laws/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'NASA guide to orbital mechanics, eccentricities, and Kepler’s mathematical formulations.'
      },
      {
        title: 'NASA JPL: Exploring Exoplanets with Kepler (Math Lesson)',
        url: 'https://www.jpl.nasa.gov/edu/resources/lesson-plan/exploring-exoplanets-with-kepler/',
        source: 'jpl.nasa.gov',
        type: 'official',
        description: 'Classroom curriculum applying Kepler’s Third Law to discovered alien planetary systems.'
      },
      {
        title: 'Wikipedia: Kepler’s Laws of Planetary Motion',
        url: 'https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Full mathematical derivation of Kepler’s laws from Newtonian gravity and conservation of angular momentum.'
      },
      {
        title: 'Google Search: Kepler third law T2=a3 worked examples students',
        url: 'https://www.google.com/search?q=Kepler+third+law+T2%3Da3+worked+examples+students',
        source: 'google.com',
        type: 'search',
        description: 'Practice interactive problem sets and numerical drills on orbital periods.'
      }
    ]
  },
  {
    id: 's-unit-2',
    slug: 'luminosity-flux-brightness-distance',
    track: 'senior',
    unitNumber: 2,
    title: 'Luminosity, Flux, Brightness and Distance',
    introduction:
      'Distinguishing between how much energy a star generates (luminosity) and how bright it appears in our telescopes (flux) is fundamental to astrophysics. Combining the inverse-square law with stellar parallax allows astronomers to determine cosmic distances.',
    estimatedTime: '12–14 minutes',
    learningGoals: [
      'Define luminosity (L) and apparent flux (F) with their scientific units.',
      'Master the inverse-square law of flux: F ∝ L / d².',
      'Compare stars using flux and luminosity ratios.',
      'Define stellar parallax (p) and the astronomical parsec (pc).',
      'Use the parallax distance formula: d(pc) = 1 / p(arcsec).'
    ],
    sections: [
      {
        heading: 'Luminosity vs Apparent Brightness (Flux)',
        content: [
          'A common pitfall in astronomy is confusing luminosity with apparent brightness:',
          '• Luminosity (L) is an intrinsic property of the star: the total radiant energy emitted by the entire star into all directions every single second. It is measured in Watts (Joules per second) or in solar luminosities (L_☉ ≈ 3.828 × 10²⁶ W). A 100-watt bulb has a luminosity of 100 W no matter where it is placed in the universe.',
          '• Apparent Flux (F) or brightness is an observer-dependent property: the radiant energy received per unit area per second at a detector on Earth. It is measured in Watts per square metre (W/m²).'
        ]
      },
      {
        heading: 'The Inverse-Square Flux Relation: F ∝ L / d²',
        content: [
          'Because starlight radiates outward in an expanding sphere of radius d, the light is distributed over the sphere’s surface area 4πd².',
          'The exact equation connecting flux, luminosity, and distance is: F = L / (4πd²).',
          'When comparing two stars (Star A and Star B), we take the ratio of fluxes: F_A / F_B = (L_A / L_B) · (d_B / d_A)².',
          'For example: If a star has 4 times the luminosity of a reference star (L = 4 L_ref) but is situated 2 times as far away (d = 2 d_ref), its flux compared to the reference star is: F = (4) / (2)² = 4 / 4 = 1. It appears with the exact same apparent brightness!'
        ]
      },
      {
        heading: 'Stellar Parallax and the Parsec',
        content: [
          'How do astronomers determine the distance d to a star in the first place? For nearby stars, we use stellar parallax.',
          'As Earth orbits the Sun, our vantage point shifts by 2 AU over six months. Because of this baseline, nearby stars appear to shift slightly back and forth against the distant background stars.',
          'The parallax angle (p) is defined as half of the total apparent angular shift across the year, measured in arcseconds (where 1 arcsecond = 1/3600 of a degree).',
          'Astronomers defined the parsec (pc, "parallax-second") such that a star with a parallax angle of exactly 1 arcsecond is at a distance of 1 parsec: d(pc) = 1 / p(arcsec).',
          'One parsec equals approximately 3.26 light-years or 206,265 AU. For instance, if a star has a measured parallax of p = 0.5 arcseconds, its distance is: d = 1 / 0.5 = 2 parsecs.'
        ]
      }
    ],
    diagram: {
      type: 'flux-distance',
      caption: 'Flux drops inversely with distance squared (F ∝ L/d²), while parallax angle p determines distance in parsecs: d = 1/p.',
      altText: 'Diagram showing Earth orbiting the Sun creating parallax angle p on a nearby star, alongside light spreading over area d².'
    },
    keyIdeas: [
      'Luminosity (L, Watts) is total energy emitted per second; Flux (F, W/m²) is energy received per unit area.',
      'Flux follows the inverse-square law: F = L / (4πd²), or F ∝ L/d².',
      'If L increases by factor 4 and distance increases by factor 2: relative flux = 4/(2²) = 1 (unchanged).',
      'Parallax angle p is measured in arcseconds; distance d is measured in parsecs.',
      'Parallax formula: d(pc) = 1 / p(arcsec). If p = 0.5″, d = 2 pc.',
      'Parallax is only applicable to relatively nearby stars due to optical resolution limits.'
    ],
    keyTerms: [
      {
        term: 'Luminosity (L)',
        definition: 'The total radiant energy output of a star per unit time across all wavelengths.'
      },
      {
        term: 'Apparent Flux (F)',
        definition: 'The rate at which radiant energy passes through a unit area perpendicular to the beam at an observer.'
      },
      {
        term: 'Parsec (pc)',
        definition: 'A unit of distance equal to ~3.26 light-years, defined as the distance at which 1 AU subtends an angle of 1 arcsecond.'
      },
      {
        term: 'Arcsecond (″)',
        definition: 'An angular measurement equal to 1/60th of an arcminute, or 1/3600th of a degree.'
      }
    ],
    formula: {
      formula: 'F ∝ L/d²  |  d(pc) = 1 / p(arcsec)',
      description: 'Calculates relative flux from luminosity and distance, and astronomical distance from parallax.',
      variables: [
        { symbol: 'F', meaning: 'Apparent flux / brightness', unit: 'W/m² or relative' },
        { symbol: 'L', meaning: 'Intrinsic luminosity', unit: 'Watts or solar luminosities (L_☉)' },
        { symbol: 'd', meaning: 'Distance to star', unit: 'parsecs (pc) or meters' },
        { symbol: 'p', meaning: 'Parallax angle', unit: 'arcseconds (arcsec or ″)' }
      ],
      workedExample: {
        problem:
          'Star Alpha has 4 times the luminosity of Star Beta (L_Alpha = 4 L_Beta) and is located twice as far away (d_Alpha = 2 d_Beta). How does the apparent flux of Star Alpha compare to Star Beta?',
        stepByStep: [
          'Step 1: Write down the flux ratio: F_Alpha / F_Beta = (L_Alpha / L_Beta) / (d_Alpha / d_Beta)².',
          'Step 2: Substitute the known factors: L_ratio = 4, d_ratio = 2.',
          'Step 3: Square the distance ratio: (2)² = 4.',
          'Step 4: Divide: 4 / 4 = 1.'
        ],
        result: 'Star Alpha delivers the exact same apparent flux as Star Beta to our telescope.'
      },
      unitsReminder:
        'When using d(pc) = 1/p, ensure p is strictly in arcseconds. If given in milliarcseconds (mas), divide by 1000 first (e.g., 50 mas = 0.05 arcsec → d = 20 pc).'
    },
    commonMistakes: [
      'Assuming a visually bright star is necessarily high-luminosity (it could simply be very close to Earth, like Sirius).',
      'Forgetting to square distance when computing flux ratios (e.g. dividing by 2 instead of 2² = 4).',
      'Confusing parsecs with light-years (1 pc ≈ 3.26 light-years).',
      'Inverting the parallax formula (writing d = p instead of d = 1/p).'
    ],
    checkQuestions: [
      {
        id: 'sc-2-1',
        question: 'A star has a measured stellar parallax of 0.5 arcseconds. What is its distance from Earth?',
        options: ['0.5 parsec', '2 parsecs', '5 parsecs', '10 parsecs'],
        correctIndex: 1,
        explanation: 'Using d(pc) = 1 / p(arcsec): d = 1 / 0.5 = 2 parsecs.'
      },
      {
        id: 'sc-2-2',
        question:
          'A star has luminosity 4 times a reference star and is 2 times as far away. Using F ∝ L/d², how does its flux compare with the reference star?',
        options: ['Same flux', 'Twice as much flux', 'Four times as much flux', 'One-quarter as much flux'],
        correctIndex: 0,
        explanation: 'Relative flux = L / d² = 4 / (2)² = 4 / 4 = 1. The star has the exact same apparent flux.'
      },
      {
        id: 'sc-2-3',
        question: 'What is the astronomical term for the total energy a star emits into space per second across all wavelengths?',
        options: ['Parallax', 'Apparent flux', 'Luminosity', 'Declination'],
        correctIndex: 2,
        explanation: 'Luminosity is the total power output of a star, measured in Watts or solar units.'
      }
    ],
    externalLinks: [
      {
        title: 'Wikipedia: Luminosity',
        url: 'https://en.wikipedia.org/wiki/Luminosity',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Physical definitions of luminosity, absolute bolometric magnitude, and Stefan-Boltzmann law.'
      },
      {
        title: 'Wikipedia: Stellar Parallax',
        url: 'https://en.wikipedia.org/wiki/Parallax#Astronomy',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Comprehensive review of trigonometric parallax and ESA Gaia mission astrometry.'
      },
      {
        title: 'Wikipedia: Parsec',
        url: 'https://en.wikipedia.org/wiki/Parsec',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'History and geometric derivation of the parsec distance unit.'
      },
      {
        title: 'Google Search: stellar parallax parsec formula luminosity flux inverse square law',
        url: 'https://www.google.com/search?q=stellar+parallax+parsec+formula+luminosity+flux+inverse+square+law',
        source: 'google.com',
        type: 'search',
        description: 'Access worked stellar brightness examples and university introductory astronomy slides.'
      }
    ]
  },
  {
    id: 's-unit-3',
    slug: 'star-colour-temperature-wavelength',
    track: 'senior',
    unitNumber: 3,
    title: 'Star Colour, Temperature and Wavelength',
    introduction:
      'Stars radiate approximately as blackbodies, emitting electromagnetic radiation across a continuous spectrum. Analysing the peak emission wavelength reveals a star’s precise surface temperature through Wien’s Displacement Law.',
    estimatedTime: '10–12 minutes',
    learningGoals: [
      'Describe how stars emit continuous thermal radiation across a range of wavelengths.',
      'Explain Wien’s Displacement Law: hotter objects peak at shorter wavelengths.',
      'Correlate star colours with surface temperatures (blue-white is hottest, red is coolest).',
      'Understand that colour reveals surface temperature, not distance or total luminosity.',
      'Apply Wien’s law qualitatively and recognise its standard constant.'
    ],
    sections: [
      {
        heading: 'Continuous Thermal Spectra and Blackbody Radiation',
        content: [
          'A dense hot object, like the gas in a star’s photosphere, emits thermal radiation at every wavelength across the electromagnetic spectrum, producing a continuous Planck spectrum.',
          'This radiation curve has a characteristic smooth bell shape: it rises steeply from short wavelengths, reaches a distinct maximum or peak at λ_max, and slopes gently down toward longer wavelengths.'
        ]
      },
      {
        heading: 'Wien’s Displacement Law: Hotter Means Shorter Wavelengths',
        content: [
          'German physicist Wilhelm Wien demonstrated that the peak wavelength of emission is inversely proportional to the absolute temperature (T) in Kelvin:',
          'λ_max · T = b, where b is Wien’s displacement constant (b ≈ 2.898 × 10⁻³ m·K).',
          'This leads to a simple, fundamental rule:',
          '• As an object’s surface temperature increases, its peak emission wavelength shifts toward shorter, more energetic wavelengths (toward blue, violet, and ultraviolet).',
          '• Conversely, as temperature decreases, the peak emission shifts toward longer wavelengths (toward red and infrared).'
        ],
        analogy:
          'Think of plucked guitar strings: a tight, energetic string vibrates with short wavelengths (high pitch), while a loose, low-energy string vibrates with long wavelengths (low pitch).'
      },
      {
        heading: 'Stellar Classification and Colour Misconceptions',
        content: [
          'Astronomers classify stars into spectral types: O, B, A, F, G, K, M (remembered as "Oh Be A Fine Girl/Guy, Kiss Me"):',
          '• O & B stars: Extremely hot (> 10,000 to 40,000 K), glowing electric blue-white.',
          '• A & F stars: White to yellow-white (7,500 to 10,000 K).',
          '• G stars: Yellow stars like our Sun (T ≈ 5,800 K, peaking in green-blue visible light).',
          '• K & M stars: Cool stars (2,500 to 4,500 K), appearing distinctly orange-red.',
          'Crucial note: A star’s colour tells you only its surface temperature! It does not tell you how far away the star is, nor does it tell you the star’s total luminosity (a red giant star like Betelgeuse is cool on its surface, but because it is gargantuan, it is thousands of times more luminous than our Sun).'
        ]
      }
    ],
    diagram: {
      type: 'wien-spectrum',
      caption: 'Blackbody curves: Hotter stars peak at shorter wavelengths (blue/UV), while cooler stars peak at longer wavelengths (red/IR).',
      altText: 'Graph showing Planck blackbody curves for 10,000 K, 6,000 K, and 3,000 K, illustrating Wien’s displacement of peak wavelength.'
    },
    keyIdeas: [
      'Stars radiate approximately as blackbodies with continuous thermal spectra.',
      'Wien’s Law: λ_max · T ≈ 2.898 × 10⁻³ m·K (peak wavelength is inversely proportional to temperature).',
      'Hotter temperature = shorter peak wavelength (blue/violet).',
      'Cooler temperature = longer peak wavelength (red/infrared).',
      'Star colour is an indicator of surface temperature, not distance or radius.'
    ],
    keyTerms: [
      {
        term: 'Wien’s Displacement Law',
        definition: 'Physical relationship stating that the blackbody peak wavelength of emission is inversely proportional to temperature: λ_max = b / T.'
      },
      {
        term: 'Blackbody',
        definition: 'An idealized physical body that absorbs all incident electromagnetic radiation and emits thermal radiation characteristic of its temperature.'
      },
      {
        term: 'Spectral Class',
        definition: 'Classification system (O, B, A, F, G, K, M) categorizing stars based on spectral characteristics and surface temperature.'
      }
    ],
    formula: {
      formula: 'λ_max · T ≈ 2.898 × 10⁻³ m·K',
      description: 'Wien’s Law: relates surface temperature T (in Kelvin) to peak emission wavelength λ_max (in meters).',
      variables: [
        { symbol: 'λ_max', meaning: 'Peak emission wavelength', unit: 'meters (m) or nanometers (nm)' },
        { symbol: 'T', meaning: 'Surface temperature of the star', unit: 'Kelvin (K)' },
        { symbol: 'b', meaning: 'Wien’s displacement constant', unit: '≈ 2.898 × 10⁻³ m·K' }
      ],
      workedExample: {
        problem:
          'If a star has a surface temperature of 6,000 K (similar to our Sun), at what wavelength does its thermal spectrum peak?',
        stepByStep: [
          'Step 1: State Wien’s Law: λ_max = b / T.',
          'Step 2: Substitute values: b = 2.898 × 10⁻³ m·K, T = 6,000 K.',
          'Step 3: Calculate: λ_max = (2.898 × 10⁻³) / 6000 ≈ 4.83 × 10⁻⁷ m.',
          'Step 4: Convert to nanometers: 4.83 × 10⁻⁷ m = 483 nm (blue-green visible light).'
        ],
        result: 'The star’s emission peaks at approximately 483 nanometers.'
      },
      unitsReminder:
        'Always convert temperatures to Kelvin (K = °C + 273.15). If converting meters to nanometers (nm), multiply by 10⁹ (1 m = 1,000,000,000 nm).'
    },
    commonMistakes: [
      'Assuming that when temperature increases, peak wavelength increases (it decreases: inverse relationship!).',
      'Thinking red stars are hotter than blue stars because fire on Earth is red/yellow.',
      'Claiming that star colour directly reveals a star’s physical distance from Earth.',
      'Confusing the visible colour of a star with atomic emission lines.'
    ],
    checkQuestions: [
      {
        id: 'sc-3-1',
        question: 'If a star’s surface temperature increases, toward which part of the electromagnetic spectrum does its peak emission shift?',
        options: [
          'Toward longer wavelengths (red and infrared)',
          'Toward shorter wavelengths (blue and ultraviolet)',
          'No change in peak wavelength occurs',
          'Exclusively into the radio wave band'
        ],
        correctIndex: 1,
        explanation: 'According to Wien’s Law (λ_max = b/T), higher surface temperatures cause the peak wavelength to shift to shorter wavelengths.'
      },
      {
        id: 'sc-3-2',
        question: 'Which of the following spectral classes represents stars with the highest surface temperatures?',
        options: ['Class M (Red)', 'Class G (Yellow, like the Sun)', 'Class O (Blue-white)', 'Class K (Orange)'],
        correctIndex: 2,
        explanation: 'Class O stars are the hottest, with surface temperatures typically exceeding 30,000 Kelvin.'
      },
      {
        id: 'sc-3-3',
        question: 'What fundamental physical property can astronomers directly infer from the colour of a star’s continuous spectrum?',
        options: ['The star’s distance from Earth', 'The star’s surface temperature', 'The star’s orbital period', 'The star’s magnetic field strength'],
        correctIndex: 1,
        explanation: 'Thermal blackbody radiation dictates that continuous spectral colour is directly governed by surface temperature.'
      }
    ],
    externalLinks: [
      {
        title: 'Wikipedia: Wien’s Displacement Law',
        url: 'https://en.wikipedia.org/wiki/Wien%27s_displacement_law',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Mathematical derivation from Planck’s radiation law and historical development.'
      },
      {
        title: 'Wikipedia: Stellar Classification',
        url: 'https://en.wikipedia.org/wiki/Stellar_classification',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'The Morgan-Keenan spectral classification system from O to M and brown dwarfs.'
      },
      {
        title: 'Google Search: star colour surface temperature Wien’s law student explanation',
        url: 'https://www.google.com/search?q=star+colour+surface+temperature+Wien%27s+law+student+explanation',
        source: 'google.com',
        type: 'search',
        description: 'Explore interactive PhET simulations of blackbody curves and temperature.'
      }
    ]
  },
  {
    id: 's-unit-4',
    slug: 'sun-nuclear-fusion-stellar-lifetimes',
    track: 'senior',
    unitNumber: 4,
    title: 'The Sun, Nuclear Fusion and Stellar Lifetimes',
    introduction:
      'Stars are stellar thermonuclear engines. In their cores, hydrogen nuclei fuse into helium, releasing energy that supports the star against gravitational collapse. A star’s birth mass dictates both how fast it consumes its fuel and the nature of its ultimate death.',
    estimatedTime: '12–14 minutes',
    learningGoals: [
      'Contrast nuclear fusion with chemical burning, confirming the Sun is not on fire.',
      'Describe the core fusion of hydrogen into helium via the proton-proton chain.',
      'Explain hydrostatic equilibrium: balance between outward radiation pressure and inward gravity.',
      'Understand why massive stars burn fuel rapidly and have dramatically shorter lifespans.',
      'Identify the endpoints of stellar evolution: white dwarfs, neutron stars, and black holes.'
    ],
    sections: [
      {
        heading: 'Nuclear Fusion vs Chemical Burning',
        content: [
          'In the 19th century, scientists calculated that if the Sun were made of pure coal and oxygen, chemical burning could only power it for about 5,000 to 10,000 years. Geologists and biologists knew Earth was billions of years old.',
          'The solution came with nuclear physics: the Sun is powered by nuclear fusion, not chemical combustion.',
          'Chemical reactions rearrange chemical bonds between atoms, releasing a few electron-volts (eV) of energy per reaction. Nuclear fusion transforms atomic nuclei themselves, releasing millions of electron-volts (MeV)—over a million times more energy per kilogram of fuel!'
        ]
      },
      {
        heading: 'How Hydrogen Fuses into Helium in the Sun',
        content: [
          'In the solar core (temperature ~15 million K, pressure ~250 billion atmospheres), hydrogen nuclei (protons) collide at immense speeds, overcoming their mutual positive electrostatic repulsion.',
          'Through a multi-step sequence known as the proton-proton (p-p) chain, four hydrogen protons ultimately fuse to create one helium-4 nucleus, accompanied by two positrons, two neutrinos, and gamma-ray photons.',
          'The mass of one helium-4 nucleus is 0.7% less than the combined mass of four individual protons. This "missing mass" (mass defect Δm) is converted directly into pure radiant energy according to Einstein’s E = Δm · c².'
        ]
      },
      {
        heading: 'Hydrostatic Equilibrium and Stellar Lifetimes',
        content: [
          'Throughout its main-sequence life, a star maintains hydrostatic equilibrium: an exquisite balance where the inward gravitational pull of the star’s mass is matched exactly by the outward thermal and radiation pressure generated by core fusion.',
          'A star’s initial mass is the single most critical factor determining its entire destiny:',
          '• High-mass stars (e.g., 10 to 40 times the mass of the Sun) have tremendous core gravitational pressure. To support this immense weight, their core temperatures are vastly higher, causing fusion reactions to occur at a furious, blistering rate.',
          '• Their luminosity scales roughly with mass cubed or to the fourth power: L ∝ M³.⁵! Because they radiate energy so extravagantly, massive stars exhaust their core hydrogen in only a few million to tens of millions of years.',
          '• Low-mass stars (like our Sun or red dwarfs) burn their core fuel frugally. Our Sun has a main-sequence lifetime of ~10 billion years (it is currently halfway through, at 4.6 billion years). Red dwarfs can burn for hundreds of billions of years!'
        ]
      },
      {
        heading: 'The Cosmic Endpoints: Remnants',
        content: [
          'When core hydrogen is depleted, stars expand into giants, fuse heavier elements, and eventually reach the end of their lives:',
          '• Low/Intermediate-Mass Stars (< 8 M_☉, like our Sun): Expel their outer layers to form a glowing planetary nebula, leaving behind a dense, Earth-sized white dwarf supported by electron degeneracy pressure.',
          '• High-Mass Stars (> 8 M_☉): Fuse elements up to iron in an onion-like core. Once iron forms, fusion consumes energy rather than releasing it. The core collapses catastrophically in seconds, producing a core-collapse supernova.',
          '• Massive Remnant: If the collapsing core is between ~1.4 and 3 solar masses, protons and electrons merge into neutrons, forming a city-sized neutron star. If the core exceeds ~3 solar masses, nothing can halt collapse, creating a stellar-mass black hole.'
        ]
      }
    ],
    diagram: {
      type: 'star-fusion',
      caption: 'Hydrostatic equilibrium balances inward gravity with outward fusion pressure; stellar mass dictates lifetime and remnant.',
      altText: 'Diagram illustrating hydrostatic balance in a star, comparing long-lived low-mass stars forming white dwarfs with short-lived massive stars forming supernovae.'
    },
    keyIdeas: [
      'The Sun is powered by nuclear fusion (converting hydrogen into helium), not chemical burning.',
      'E = Δm · c² converts 0.7% of fused mass directly into radiant energy.',
      'Hydrostatic equilibrium: inward gravity is balanced by outward thermal pressure.',
      'Massive stars burn fuel at astronomical rates (L ∝ M³.⁵), living only millions of years.',
      'Low-mass stars live billions of years and end as white dwarfs.',
      'Massive stars end in supernovae, leaving neutron stars or black holes.'
    ],
    keyTerms: [
      {
        term: 'Proton-Proton Chain',
        definition: 'The primary nuclear fusion reaction sequence converting hydrogen into helium in low-to-intermediate-mass stars like the Sun.'
      },
      {
        term: 'Hydrostatic Equilibrium',
        definition: 'The state of balance where the inward gravitational force is balanced by outward gas and radiation pressure gradients.'
      },
      {
        term: 'Mass-Luminosity Relation',
        definition: 'Empirical relation for main-sequence stars where luminosity scales steeply with mass (roughly L ∝ M³.⁵).'
      },
      {
        term: 'Supernova',
        definition: 'The cataclysmic, energetic explosion marking the destruction of a massive star upon core collapse.'
      }
    ],
    commonMistakes: [
      'Believing the Sun burns via chemical oxidation like a wood fire.',
      'Assuming massive stars live longer because they start with "more fuel" (they consume fuel hundreds to thousands of times faster!).',
      'Thinking our Sun will explode as a supernova (it lacks sufficient mass and will instead form a planetary nebula and white dwarf).',
      'Believing iron can be fused to release energy in stellar cores (iron fusion absorbs energy, triggering collapse).'
    ],
    checkQuestions: [
      {
        id: 'sc-4-1',
        question: 'Which nuclear process powers the core of the Sun during its current main-sequence lifetime?',
        options: [
          'Nuclear fission of uranium into lead',
          'Chemical combustion of methane and oxygen',
          'Hydrogen nuclei fusing into helium nuclei',
          'Radioactive alpha decay of carbon'
        ],
        correctIndex: 2,
        explanation: 'The Sun fuses hydrogen protons into helium in its core via the proton-proton chain, converting mass defect into energy.'
      },
      {
        id: 'sc-4-2',
        question: 'Why does a massive star generally have a significantly shorter lifetime than a low-mass star like our Sun?',
        options: [
          'It has no hydrogen remaining at birth',
          'Its core temperature and pressure are so high that it consumes fuel at an enormous rate',
          'It has no gravitational pull to hold its fuel in',
          'It is constantly cooled by interstellar dust'
        ],
        correctIndex: 1,
        explanation: 'Due to extreme core conditions, luminosity scales as L ∝ M³.⁵; massive stars burn through their fuel reserves in mere millions of years.'
      },
      {
        id: 'sc-4-3',
        question: 'What compact stellar remnant will remain after a star with the mass of our Sun ends its evolutionary lifecycle?',
        options: ['A black hole', 'A neutron star', 'A white dwarf', 'A pulsar'],
        correctIndex: 2,
        explanation: 'Stars with birth masses below ~8 solar masses gently shed their envelopes as planetary nebulae and leave dense white dwarfs.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA: Star Lifecycle (Webb)',
        url: 'https://science.nasa.gov/mission/webb/star-lifecycle/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'NASA overview of protostars, main sequence stability, and stellar remnants.'
      },
      {
        title: 'NASA: Life Cycles of Sun-like and Massive Stars',
        url: 'https://science.nasa.gov/asset/webb/life-cycles-of-sun-like-and-massive-stars/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Infographic contrasting the evolution of 1-solar-mass stars with massive stars.'
      },
      {
        title: 'Wikipedia: Stellar Evolution',
        url: 'https://en.wikipedia.org/wiki/Stellar_evolution',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Detailed stages of star formation, main sequence burning, red giant phases, and compact remnants.'
      },
      {
        title: 'Google Search: NASA star life cycle nuclear fusion massive stars lifetimes',
        url: 'https://www.google.com/search?q=NASA+star+life+cycle+nuclear+fusion+massive+stars+lifetimes',
        source: 'google.com',
        type: 'search',
        description: 'Find interactive Hertzsprung-Russell diagram tutorials and stellar lifetime calculators.'
      }
    ]
  },
  {
    id: 's-unit-5',
    slug: 'redshift-expanding-universe',
    track: 'senior',
    unitNumber: 5,
    title: 'Redshift and the Expanding Universe',
    introduction:
      'When astronomers examine light from distant galaxies, absorption lines are systematically shifted toward longer wavelengths. This cosmological redshift reveals that the fabric of space itself is expanding, underpinning modern Big Bang cosmology.',
    estimatedTime: '12–15 minutes',
    learningGoals: [
      'Define redshift (z) and distinguish it from blueshift.',
      'Calculate redshift using the formula: z = (λ_observed − λ_rest) / λ_rest.',
      'Apply the low-redshift velocity approximation: v ≈ c · z, where c ≈ 300,000 km/s.',
      'Explain that cosmological redshift is caused by the expansion of space stretching travelling photons.',
      'State the Hubble–Lemaître Law: recession speed is proportional to galactic distance.'
    ],
    sections: [
      {
        heading: 'Spectral Lines and the Definition of Redshift',
        content: [
          'Elements in a star or galaxy’s atmosphere absorb light at precise, laboratory-measured wavelengths known as spectral absorption lines (like the hydrogen Balmer lines or calcium H & K lines).',
          'When observing distant galaxies, astronomers find that these familiar patterns of lines are shifted toward the red end of the spectrum (longer wavelengths):',
          '• Redshift occurs when λ_observed > λ_rest. Wavelengths are stretched.',
          '• Blueshift occurs when λ_observed < λ_rest. Wavelengths are compressed (e.g., the Andromeda Galaxy, which is gravitationally moving toward the Milky Way).',
          'The dimensionless redshift parameter z is defined as: z = (λ_observed − λ_rest) / λ_rest = Δλ / λ_rest.'
        ]
      },
      {
        heading: 'Low-Redshift Approximation: v ≈ c · z',
        content: [
          'At relatively low redshifts (z ≪ 1, typically z < 0.1 to 0.2), the recession velocity v of a galaxy can be closely approximated using the simple Doppler-like formula:',
          'v ≈ c · z, where c is the speed of light in a vacuum (c ≈ 300,000 km/s).',
          'For example: If a distant galaxy shows a redshift of z = 0.1, its recession speed is approximately: v ≈ 0.1 × 300,000 km/s = 30,000 km/s.',
          'Crucial limitation: For high redshifts (z > 0.5), relativistic effects and cosmic expansion history become important, meaning v ≈ cz is only a low-redshift approximation and cannot be used to yield speeds exceeding light speed!'
        ]
      },
      {
        heading: 'Cosmological Redshift vs Doppler Effect',
        content: [
          'While often explained by analogy to an ambulance siren’s Doppler pitch shift, cosmological redshift is physically different:',
          'Galaxies are not simply rushing through static space like bullets. Instead, the metric fabric of space itself is expanding! As light photons travel across billions of light-years of expanding intergalactic space, their wavelengths are stretched directly by the expansion of space.',
          'In 1927–1929, Georges Lemaître and Edwin Hubble established the Hubble–Lemaître Law: v = H₀ · d. On cosmic scales, more distant galaxies recede faster because there is more expanding space between us and them.'
        ],
        analogy:
          'Draw two dots on an uninflated rubber balloon with a pen and draw a wavy line (light wave) between them. As you blow up the balloon, the dots move apart not because they are walking across the rubber, but because the rubber skin between them is stretching. Notice how the drawn wave stretches to longer wavelengths!'
      }
    ],
    diagram: {
      type: 'redshift-wave',
      caption: 'Cosmological Redshift: As space expands, travelling light waves are stretched to longer, redder wavelengths.',
      altText: 'Diagram of a distant galaxy emitting a short blue wavelength that stretches into a longer red wavelength as space expands.'
    },
    keyIdeas: [
      'Redshift means observed wavelength is longer than rest wavelength: z = (λ_obs − λ_rest) / λ_rest.',
      'Low-redshift velocity approximation: v ≈ c · z (c ≈ 300,000 km/s).',
      'Worked example: z = 0.1 → v ≈ 0.1 × 300,000 = 30,000 km/s.',
      'Cosmological redshift is caused by the expansion of space stretching photons in transit.',
      'Hubble–Lemaître Law: distant galaxies show greater redshifts proportional to distance.'
    ],
    keyTerms: [
      {
        term: 'Redshift (z)',
        definition: 'The fractional shift in wavelength of spectral lines toward longer wavelengths: z = (λ_obs − λ_rest) / λ_rest.'
      },
      {
        term: 'Hubble’s Constant (H₀)',
        definition: 'The current rate of cosmic expansion, approximately 70 km/s per megaparsec.'
      },
      {
        term: 'Doppler Effect',
        definition: 'The change in frequency or wavelength of a wave in relation to an observer moving relative to the source.'
      },
      {
        term: 'Cosmological Redshift',
        definition: 'The stretching of light wavelengths caused by the metric expansion of space over cosmic travel times.'
      }
    ],
    formula: {
      formula: 'z = (λ_obs − λ_rest) / λ_rest  |  v ≈ c · z',
      description: 'Calculates the redshift parameter z and the low-redshift recession speed v.',
      variables: [
        { symbol: 'z', meaning: 'Redshift parameter', unit: 'dimensionless' },
        { symbol: 'λ_obs', meaning: 'Observed wavelength in telescope', unit: 'nm or Ångstroms' },
        { symbol: 'λ_rest', meaning: 'Rest laboratory wavelength', unit: 'nm or Ångstroms' },
        { symbol: 'v', meaning: 'Recession velocity of galaxy', unit: 'km/s' },
        { symbol: 'c', meaning: 'Speed of light', unit: '≈ 300,000 km/s' }
      ],
      workedExample: {
        problem:
          'A hydrogen emission line with a rest laboratory wavelength of 656.3 nm is observed in a distant galaxy at 721.9 nm. Calculate its redshift z and approximate recession speed v.',
        stepByStep: [
          'Step 1: Calculate the wavelength shift: Δλ = 721.9 nm − 656.3 nm = 65.6 nm.',
          'Step 2: Calculate z: z = Δλ / λ_rest = 65.6 / 656.3 ≈ 0.100.',
          'Step 3: Calculate recession speed using the low-redshift formula: v ≈ c · z.',
          'Step 4: Substitute c = 300,000 km/s: v ≈ 300,000 × 0.100 = 30,000 km/s.'
        ],
        result: 'The galaxy has a redshift of z ≈ 0.10 and is receding at approximately 30,000 km/s.'
      },
      unitsReminder:
        'Ensure λ_obs and λ_rest are in the exact same units (both nm or both Å) before subtracting. Redshift z is a pure unitless ratio.'
    },
    commonMistakes: [
      'Confusing redshift with a star or galaxy turning red in actual visible color (it refers to a shift relative to rest spectral lines).',
      'Using v = c · z for high redshifts (z > 1), which would erroneously predict speeds faster than light.',
      'Thinking galaxies are moving through space away from a central explosion in space (the Big Bang happened everywhere; space itself expands).',
      'Thinking blueshift means the universe is contracting overall (blueshift occurs only for local gravitationally bound pairs like Milky Way–Andromeda).'
    ],
    checkQuestions: [
      {
        id: 'sc-5-1',
        question: 'When light from a distant galaxy is observed shifted toward longer wavelengths, what is this phenomenon called?',
        options: ['Blueshift', 'Redshift', 'Gravitational parallax', 'Total internal reflection'],
        correctIndex: 1,
        explanation: 'A shift of spectral absorption or emission features toward longer wavelengths is called redshift.'
      },
      {
        id: 'sc-5-2',
        question: 'What is the primary observational evidence that the universe on large scales is expanding?',
        options: [
          'All stars in the Milky Way have identical chemical compositions',
          'Distant galaxies systematically exhibit redshifts that increase with distance',
          'The Moon’s craters are expanding in diameter',
          'The Sun is slowly cooling down over millions of years'
        ],
        correctIndex: 1,
        explanation: 'Hubble’s observation that distant galaxies systematically show redshifts proportional to their distance demonstrates universal expansion.'
      },
      {
        id: 'sc-5-3',
        question: 'Using the low-redshift approximation v ≈ c · z with c ≈ 300,000 km/s, what is the recession velocity of a galaxy with z = 0.1?',
        options: ['3,000 km/s', '30,000 km/s', '300,000 km/s', '3,000,000 km/s'],
        correctIndex: 1,
        explanation: 'v ≈ 0.1 × 300,000 km/s = 30,000 km/s.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA: Hubble Cosmological Redshift',
        url: 'https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-cosmological-redshift/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'NASA explainer on the physics of cosmological redshift and cosmic expansion.'
      },
      {
        title: 'NASA: What is Cosmological Redshift? (Webb)',
        url: 'https://science.nasa.gov/asset/webb/what-is-cosmological-redshift/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Illustrated asset detailing how Webb observes early galaxies whose light shifted into the infrared.'
      },
      {
        title: 'Wikipedia: Hubble’s Law',
        url: 'https://en.wikipedia.org/wiki/Hubble%27s_law',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Formulation of the Hubble-Lemaître law, measurement of H₀, and cosmic distance ladder.'
      },
      {
        title: 'Google Search: NASA redshift expanding universe v=cz worked example',
        url: 'https://www.google.com/search?q=NASA+redshift+expanding+universe+v%3Dcz+worked+example',
        source: 'google.com',
        type: 'search',
        description: 'Find step-by-step astronomical spectral line analysis problems.'
      }
    ]
  },
  {
    id: 's-unit-6',
    slug: 'exoplanets-transit-method',
    track: 'senior',
    unitNumber: 6,
    title: 'Exoplanets and the Transit Method',
    introduction:
      'Over 5,500 planets orbiting distant stars have been discovered. The most prolific technique for finding these alien worlds is the transit method, which detects the minuscule, periodic dimming of a star’s light when an exoplanet passes directly across its stellar disk.',
    estimatedTime: '10–12 minutes',
    learningGoals: [
      'Define an exoplanet and explain transit geometry.',
      'Interpret astronomical light curves showing transit depth, ingress, and egress.',
      'Relate the fractional transit dip depth to the ratio of planetary and stellar radii: ΔF / F ≈ (R_p / R_*)².',
      'Explain how orbital period is determined from repeated transit events.',
      'Recognise the limitations and geometric probability of detecting planetary transits.'
    ],
    sections: [
      {
        heading: 'What is a Transit? Geometric Alignment',
        content: [
          'An exoplanet is a planet orbiting a star other than our Sun.',
          'An astronomical transit occurs when a celestial body passes directly between a larger emitting body and an observer. In exoplanet science, this occurs when an alien planet’s orbital plane happens to be oriented edge-on relative to Earth’s line of sight.',
          'As the dark silhouette of the planet crosses the bright disk of its host star, it physically blocks a tiny fraction of the star’s light from reaching our telescopes.'
        ]
      },
      {
        heading: 'Reading a Light Curve: The Transit Dip',
        content: [
          'A light curve is a scientific graph showing a star’s measured brightness (flux) plotted over time.',
          'During a transit, the light curve exhibits a characteristic symmetric, U-shaped dip:',
          '• Ingress: The planet begins entering the edge of the stellar disk; brightness gradually decreases.',
          '• Flat Bottom: The planet is completely in front of the star’s disk; brightness reaches a steady minimum.',
          '• Egress: The planet begins exiting the stellar disk; brightness returns to normal baseline.',
          'The time interval between consecutive transit dips reveals the planet’s exact orbital period (T).'
        ]
      },
      {
        heading: 'Calculating Planet Size from Transit Depth',
        content: [
          'The fraction of starlight blocked depends directly on the ratio of the cross-sectional area of the planet (πR_p²) to the cross-sectional area of the star (πR_*²):',
          'Transit Depth: ΔF / F = (πR_p²) / (πR_*²) = (R_p / R_*)².',
          'For a Jupiter-sized planet orbiting a Sun-sized star (R_Jupiter ≈ 0.1 R_Sun), the brightness drops by (0.1)² = 0.01 (a 1% dip).',
          'For an Earth-sized planet orbiting a Sun-sized star (R_Earth ≈ 0.01 R_Sun), the brightness drops by (0.01)² = 0.0001 (a tiny 0.01% dip or 100 parts per million!). Detecting this required space missions like NASA’s Kepler and TESS.'
        ]
      }
    ],
    diagram: {
      type: 'exoplanet-transit',
      caption: 'The Transit Method: A planet crossing in front of its star creates a measurable dip in the light curve.',
      altText: 'Diagram showing an exoplanet orbiting a star, aligned with an observer, producing a characteristic U-shaped light curve dip.'
    },
    keyIdeas: [
      'A transit occurs when an exoplanet passes directly in front of its host star from our perspective.',
      'The light curve reveals a characteristic periodic dip in brightness.',
      'Transit depth depends on area ratio: ΔF / F ≈ (R_p / R_*)².',
      'The time between repeating dips gives the planet’s orbital period T.',
      'Transits can only be observed if the planet’s orbital plane is aligned edge-on to Earth.'
    ],
    keyTerms: [
      {
        term: 'Light Curve',
        definition: 'A graph of light intensity of a celestial object plotted as a function of time.'
      },
      {
        term: 'Transit Depth',
        definition: 'The fractional drop in a star’s flux during a planetary transit: ΔF / F ≈ (R_p / R_*)².'
      },
      {
        term: 'Ingress / Egress',
        definition: 'The phases of transit where the planet enters (ingress) and exits (egress) the star’s apparent disk.'
      }
    ],
    formula: {
      formula: 'ΔF / F ≈ (R_planet / R_star)²',
      description: 'Relates transit depth (fractional flux dip) to the ratio of planet radius to star radius.',
      variables: [
        { symbol: 'ΔF / F', meaning: 'Fractional transit dip depth', unit: 'dimensionless / percentage' },
        { symbol: 'R_planet', meaning: 'Radius of the exoplanet', unit: 'km or Earth/Jupiter radii' },
        { symbol: 'R_star', meaning: 'Radius of the host star', unit: 'km or Solar radii' }
      ],
      workedExample: {
        problem:
          'A star has radius R_* = 700,000 km. An exoplanet with radius R_p = 70,000 km transits the star. What is the fractional transit depth ΔF / F?',
        stepByStep: [
          'Step 1: Calculate the radius ratio: R_p / R_* = 70,000 / 700,000 = 0.10.',
          'Step 2: Square the radius ratio: (0.10)² = 0.01.',
          'Step 3: Convert to percentage: 0.01 × 100% = 1%.'
        ],
        result: 'The star will dim by 1% (ΔF / F = 0.01) during transit.'
      },
      unitsReminder:
        'Ensure R_planet and R_star are converted into the exact same units before computing the ratio.'
    },
    commonMistakes: [
      'Thinking transits can be detected for every exoplanet in the galaxy (most planetary orbits are tilted and never cross our line of sight).',
      'Confusing transit depth with the planet’s mass (transits measure size/radius, not mass; radial velocity is used for mass).',
      'Assuming a transit blocks all or most of the star’s light (transits cause dips of only 0.01% to 1%).',
      'Confusing an exoplanet transit with a solar eclipse on Earth.'
    ],
    checkQuestions: [
      {
        id: 'sc-6-1',
        question: 'Which method detects an exoplanet by measuring a tiny, periodic dip in the host star’s apparent brightness?',
        options: ['The Transit Method', 'Direct Radio Broadcast', 'Stellar Parallax alone', 'Lunar Eclipse Photometry'],
        correctIndex: 0,
        explanation: 'The transit method monitors light curves for repeated dips caused by a planet blocking starlight.'
      },
      {
        id: 'sc-6-2',
        question: 'What primary physical property of an exoplanet can astronomers directly calculate from the depth of a transit dip (ΔF / F)?',
        options: [
          'The exoplanet’s physical radius relative to the star',
          'The exoplanet’s chemical core composition',
          'The exoplanet’s magnetic field intensity',
          'The surface temperature of the exoplanet’s moons'
        ],
        correctIndex: 0,
        explanation: 'Because ΔF/F ≈ (R_p / R_*)², measuring the depth allows astronomers to solve for the planet’s radius.'
      },
      {
        id: 'sc-6-3',
        question: 'If a planet has a radius equal to 1/10th the radius of its star, what fraction of the star’s light is blocked during transit?',
        options: ['1/10 (10%)', '1/20 (5%)', '1/100 (1%)', '1/1000 (0.1%)'],
        correctIndex: 2,
        explanation: 'Depth = (R_p / R_*)² = (1/10)² = 1/100 = 1% of the starlight.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA: What’s a Transit?',
        url: 'https://science.nasa.gov/exoplanets/whats-a-transit/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'NASA guide to transit photometry, light curves, and transit timing variations.'
      },
      {
        title: 'NASA: How We Find and Characterize Exoplanets',
        url: 'https://science.nasa.gov/exoplanets/how-we-find-and-characterize/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Overview of transit, radial velocity, direct imaging, and gravitational microlensing.'
      },
      {
        title: 'Wikipedia: Transit Photometry',
        url: 'https://en.wikipedia.org/wiki/Methods_of_detecting_exoplanets#Transit_photometry',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Mathematical treatment of light curve parameters, limb darkening, and transit probabilities.'
      },
      {
        title: 'Google Search: NASA exoplanet transit method light curve students',
        url: 'https://www.google.com/search?q=NASA+exoplanet+transit+method+light+curve+students',
        source: 'google.com',
        type: 'search',
        description: 'Explore NASA Eyes on Exoplanets interactive visualizer and citizen science data.'
      }
    ]
  },
  {
    id: 's-unit-7',
    slug: 'telescopes-infrared-radio-astronomy',
    track: 'senior',
    unitNumber: 7,
    title: 'Telescopes, Infrared and Radio Astronomy',
    introduction:
      'Visible light represents only a tiny sliver of the electromagnetic spectrum. By observing the universe across radio, infrared, optical, ultraviolet, and X-ray wavelengths, modern astronomy pierces through cosmic dust and unveils energetic high-energy processes.',
    estimatedTime: '11–13 minutes',
    learningGoals: [
      'Understand that telescopes gather and detect electromagnetic radiation across all wavelengths.',
      'Explain how radio telescopes detect non-thermal emissions, magnetic fields, and cold gas.',
      'Explain why infrared telescopes can observe through interstellar dust clouds and study cool targets.',
      'Identify atmospheric absorption windows that necessitate placing certain observatories in space.',
      'Compare optical, radio, and infrared telescopes by wavelength and detector type.'
    ],
    sections: [
      {
        heading: 'The Full Electromagnetic Spectrum',
        content: [
          'All electromagnetic radiation travels at light speed (c ≈ 300,000 km/s) in a vacuum. In order of increasing wavelength (and decreasing photon energy):',
          'Gamma rays → X-rays → Ultraviolet → Visible light (380–750 nm) → Infrared → Microwaves → Radio waves.',
          'An optical telescope only gathers visible photons. A complete understanding of the cosmos requires multi-wavelength astronomy.'
        ]
      },
      {
        heading: 'Radio Astronomy: Cold Gas and High-Energy Jets',
        content: [
          'Radio waves have the longest wavelengths (from millimetres to tens of metres) and lowest photon energies in the electromagnetic spectrum.',
          'Radio telescopes use large parabolic metal dishes as reflectors to focus radio waves onto sensitive receivers.',
          'Why are radio telescopes essential?',
          '• Detecting Neutral Hydrogen: The cold interstellar hydrogen gas permeating galactic arms emits radio waves at a wavelength of 21 centimetres (the spin-flip transition), mapping the spiral structure of galaxies.',
          '• Synchrotron Radiation: High-speed relativistic electrons spiralling around magnetic fields near black holes and supernova remnants produce intense radio emissions.',
          '• Pulsars: Rotating magnetized neutron stars emit precise beams of radio waves like cosmic lighthouses.'
        ]
      },
      {
        heading: 'Infrared Astronomy: Piercing Cosmic Dust',
        content: [
          'Infrared light spans wavelengths from roughly 750 nanometres to 1 millimetre.',
          'Interstellar space is filled with microscopic dust grains made of silicates and carbon. Because visible light wavelengths (0.5 μm) are comparable in size to dust grains, visible light is heavily scattered and blocked by cosmic dust clouds (extinction).',
          'Infrared wavelengths are much longer than typical dust grains, allowing infrared photons to pass right through dense dust clouds with minimal scattering!',
          'This makes infrared observatories (like the James Webb Space Telescope and Spitzer) ideal for:',
          '• Peering into dusty stellar nurseries to witness newborn protostars.',
          '• Studying cool celestial objects like brown dwarfs, protoplanetary disks, and cold giant planets.',
          '• Capturing highly redshifted light from the earliest galaxies in the universe.'
        ]
      },
      {
        heading: 'Why We Put Telescopes in Space: Atmospheric Windows',
        content: [
          'Earth’s atmosphere protects life by acting as a shield, but it also blocks large portions of the electromagnetic spectrum from reaching the ground:',
          '• Gamma rays, X-rays, and most ultraviolet rays are completely absorbed by oxygen and the ozone layer in the upper atmosphere.',
          '• Much of the infrared spectrum is absorbed by water vapour and carbon dioxide in the troposphere.',
          'Only visible light and radio waves have clear "atmospheric windows" to reach the surface unhindered. To observe the cosmos in X-rays, UV, and infrared, observatories must be launched into space.'
        ]
      }
    ],
    diagram: {
      type: 'telescope-spectrum',
      caption: 'The Electromagnetic Spectrum: Radio and visible reach Earth’s surface; IR, UV, and X-ray require space observatories.',
      altText: 'Diagram of the electromagnetic spectrum showing atmospheric opacity, wavelengths, and corresponding telescope types.'
    },
    keyIdeas: [
      'Telescopes collect electromagnetic radiation; optical is only one narrow wavelength band.',
      'Radio telescopes use large dishes to detect 21 cm neutral hydrogen, magnetic fields, and pulsars.',
      'Infrared light penetrates dense interstellar dust clouds that block visible light.',
      'Cool objects (brown dwarfs, dust disks) emit primarily in the infrared.',
      'Earth’s atmosphere absorbs X-rays, UV, and most IR, necessitating space observatories like Webb and Hubble.'
    ],
    keyTerms: [
      {
        term: 'Radio Astronomy',
        definition: 'The subfield of astronomy studying celestial objects that emit radio frequency electromagnetic radiation.'
      },
      {
        term: 'Infrared Astronomy',
        definition: 'Astronomical observation in the infrared band (0.75 to 1000 μm), capable of piercing dust and detecting cool matter.'
      },
      {
        term: 'Atmospheric Extinction',
        definition: 'The absorption and scattering of electromagnetic radiation by matter in Earth’s atmosphere or interstellar space.'
      },
      {
        term: 'Synchrotron Radiation',
        definition: 'Electromagnetic radiation emitted when charged particles accelerate radially in magnetic fields at relativistic speeds.'
      }
    ],
    commonMistakes: [
      'Assuming radio telescopes listen to actual acoustic sound waves (they detect electromagnetic radio photons, not sound).',
      'Thinking space telescopes are put in orbit because they are "closer to the stars" (stars are trillions of km away; space telescopes are above atmospheric blurring and absorption).',
      'Believing infrared light cannot penetrate dust (infrared passes through dust far better than visible light).',
      'Thinking optical telescopes physically magnify distant stars into large disks (stars remain unresolved points).'
    ],
    checkQuestions: [
      {
        id: 'sc-7-1',
        question: 'Why are radio telescopes useful in astronomy?',
        options: [
          'They detect radio wavelength electromagnetic radiation from cosmic sources',
          'They work only when submerged completely underwater',
          'They physically eliminate gravitational attraction',
          'They can observe only the surface of the Moon'
        ],
        correctIndex: 0,
        explanation: 'Radio telescopes detect radio-band electromagnetic radiation from celestial phenomena like pulsars and cold gas clouds.'
      },
      {
        id: 'sc-7-2',
        question: 'What major advantage do infrared space telescopes have when observing star-forming nebulae compared to optical telescopes?',
        options: [
          'Infrared light is completely blocked by all gas',
          'Infrared light has longer wavelengths that penetrate through dense cosmic dust clouds',
          'Infrared telescopes make stars stop burning fuel',
          'Infrared light travels twice as fast as visible light'
        ],
        correctIndex: 1,
        explanation: 'Longer infrared wavelengths pass through interstellar dust with minimal scattering, revealing embedded protostars.'
      },
      {
        id: 'sc-7-3',
        question: 'Why must X-ray and gamma-ray telescopes be placed above Earth’s atmosphere in space?',
        options: [
          'Earth’s atmosphere completely absorbs high-energy X-ray and gamma-ray radiation',
          'X-rays cannot travel through vacuum',
          'Ground telescopes would become too cold',
          'Earth’s magnetic field reflects all radio waves backward'
        ],
        correctIndex: 0,
        explanation: 'Earth’s atmosphere is opaque to X-rays and gamma rays, shielding the surface and necessitating space telescopes.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA: Infrared Astronomy (Webb Explainer)',
        url: 'https://science.nasa.gov/mission/webb/science-overview/science-explainers/infrared-astronomy/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'NASA deep-dive on infrared spectroscopy, cosmic dust penetration, and redshift.'
      },
      {
        title: 'NASA: Radio JOVE Educational Resources',
        url: 'https://radiojove.gsfc.nasa.gov/education/',
        source: 'radiojove.gsfc.nasa.gov',
        type: 'official',
        description: 'NASA student project exploring radio emissions from Jupiter, the Sun, and our galaxy.'
      },
      {
        title: 'Wikipedia: Radio Astronomy',
        url: 'https://en.wikipedia.org/wiki/Radio_astronomy',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'History of radio astronomy, interferometry arrays, and astrophysical emission mechanisms.'
      },
      {
        title: 'Google Search: NASA radio telescope infrared astronomy dust education',
        url: 'https://www.google.com/search?q=NASA+radio+telescope+infrared+astronomy+dust+education',
        source: 'google.com',
        type: 'search',
        description: 'Find interactive multi-wavelength galaxy image comparisons.'
      }
    ]
  },
  {
    id: 's-unit-8',
    slug: 'black-holes-white-dwarfs-neutron-stars',
    track: 'senior',
    unitNumber: 8,
    title: 'Black Holes, White Dwarfs and Neutron Stars',
    introduction:
      'When stars exhaust their nuclear fuel, gravity crushes their remaining cores into bizarre, ultra-dense compact remnants: white dwarfs supported by quantum degeneracy, neutron stars compressed to nuclear densities, and black holes bound by event horizons.',
    estimatedTime: '12–15 minutes',
    learningGoals: [
      'Compare and contrast the three fundamental types of compact stellar remnants.',
      'Explain how electron degeneracy pressure stabilizes white dwarfs up to the Chandrasekhar limit (~1.4 M_☉).',
      'Describe neutron stars and their extreme densities and magnetic fields.',
      'Define a black hole’s event horizon accurately as a boundary of no return for light, not a solid surface.',
      'Debunk the misconception that black holes act as cosmic vacuum cleaners sucking in distant matter.'
    ],
    sections: [
      {
        heading: 'White Dwarfs: Quantum Degeneracy in Action',
        content: [
          'Stars with initial masses under ~8 M_☉ (like our Sun) end their lives by blowing off their outer layers into a planetary nebula.',
          'The remaining hot core collapses down to approximately the physical size of Earth, but retains roughly the mass of the Sun. This is a white dwarf.',
          'At these extreme densities (~10⁶ g/cm³), matter is no longer supported by thermal gas pressure. Instead, it is supported by electron degeneracy pressure—a quantum mechanical effect arising from the Pauli Exclusion Principle, which prevents electrons from occupying identical quantum states.',
          'Chandrasekhar Limit: In 1930, Subrahmanyan Chandrasekhar calculated that electron degeneracy pressure can support a white dwarf only up to a maximum mass of approximately 1.4 solar masses (1.4 M_☉). Beyond this, collapse is inevitable.'
        ]
      },
      {
        heading: 'Neutron Stars: Atomic Nuclei the Size of a City',
        content: [
          'When a massive star (8 to 25 M_☉) undergoes core collapse, the core mass exceeds the Chandrasekhar limit. Gravitational pressure becomes so immense that electrons and protons are forced together (reverse beta decay), merging into neutrons.',
          'The core collapses until it is halted by neutron degeneracy pressure, creating a neutron star.',
          'A neutron star packs 1.4 to 2.1 solar masses into a sphere only about 20 kilometres in diameter—the size of a modest city! A single sugar-cube-sized volume of neutron star material would weigh over a billion tonnes on Earth.',
          'Rapidly spinning, highly magnetized neutron stars that beam radiation toward Earth are observed as pulsars.'
        ]
      },
      {
        heading: 'Black Holes and the Event Horizon',
        content: [
          'If the collapsing stellar core exceeds the Tolman-Oppenheimer-Volkoff limit (roughly 2.5 to 3 M_☉), no known physical force or quantum degeneracy can stop gravity. The core collapses indefinitely toward an infinitesimally small singularity.',
          'The defining boundary of a black hole is its event horizon:',
          '• The event horizon is NOT a solid physical surface or wall. It is an imaginary geometric boundary marking the point where the escape velocity of space equals the speed of light (c).',
          '• Because nothing can exceed light speed, any matter or photon that crosses inside the event horizon can never escape back to an outside observer.',
          '• The radius of the event horizon for a non-rotating black hole is the Schwarzschild radius: R_s = 2GM / c² (about 3 km per solar mass).'
        ],
        analogy:
          'Imagine a canoe paddling upstream on a river. Far from the waterfall, the current is slow and you can paddle away. As you get closer, the current matches your maximum paddling speed. Once you pass that invisible line (the event horizon), the water flows faster than you can paddle, and you cannot return.'
      },
      {
        heading: 'Busting the "Cosmic Vacuum Cleaner" Myth',
        content: [
          'A pervasive myth is that black holes wander the universe actively "sucking in" everything around them like giant vacuum cleaners.',
          'In reality, gravity outside the event horizon obeys standard Newtonian and relativistic physics! If our Sun were instantly replaced by a 1-solar-mass black hole, Earth would NOT be sucked in. Earth would continue orbiting in its exact current 365-day elliptical orbit, because the gravitational mass at the center of the Solar System would remain completely unchanged (though Earth would quickly freeze without sunlight).'
        ]
      }
    ],
    diagram: {
      type: 'stellar-remnants',
      caption: 'Stellar Remnants: White Dwarf (Earth-sized), Neutron Star (City-sized), Black Hole (Event Horizon boundary).',
      altText: 'Diagram illustrating size and mass comparisons between a White Dwarf, Neutron Star, and Black Hole Event Horizon.'
    },
    keyIdeas: [
      'White dwarfs are Earth-sized remnants supported by electron degeneracy pressure up to 1.4 M_☉.',
      'Neutron stars pack ~1.4 to 2 M_☉ into a 20 km city-sized sphere supported by neutron degeneracy.',
      'A black hole’s event horizon is a boundary of no return for light, not a solid physical surface.',
      'Black holes do not act as cosmic vacuums; outside the horizon, their gravity matches any object of equal mass.',
      'Core mass dictates remnant: < 1.4 M_☉ → White Dwarf, 1.4–3 M_☉ → Neutron Star, > 3 M_☉ → Black Hole.'
    ],
    keyTerms: [
      {
        term: 'Event Horizon',
        definition: 'The boundary surrounding a black hole beyond which the escape velocity exceeds the speed of light in vacuum.'
      },
      {
        term: 'White Dwarf',
        definition: 'A compact stellar remnant composed mostly of electron-degenerate matter, formed by stars like the Sun.'
      },
      {
        term: 'Neutron Star',
        definition: 'An extremely dense stellar remnant composed predominantly of closely packed neutrons.'
      },
      {
        term: 'Chandrasekhar Limit',
        definition: 'The maximum theoretical mass of a stable white dwarf star, approximately 1.44 solar masses.'
      }
    ],
    commonMistakes: [
      'Believing the event horizon is a physical crust or solid shell in space.',
      'Thinking black holes suck objects in from any distance regardless of orbital momentum.',
      'Assuming all stars leave black holes when they die (only the most massive stars do).',
      'Confusing a white dwarf with a white hole or neutron star.'
    ],
    checkQuestions: [
      {
        id: 'sc-8-1',
        question: 'What is a black hole’s event horizon?',
        options: [
          'A solid, impenetrable planetary crust',
          'The boundary beyond which light cannot escape to a distant observer',
          'The physical center of every spiral galaxy',
          'A cloud of glowing ice crystals orbiting a star'
        ],
        correctIndex: 1,
        explanation: 'The event horizon is the theoretical boundary where the escape velocity equals the speed of light; light inside cannot escape.'
      },
      {
        id: 'sc-8-2',
        question: 'What quantum mechanical pressure supports a white dwarf against gravitational collapse?',
        options: [
          'Neutron degeneracy pressure',
          'Electron degeneracy pressure',
          'Radiation pressure from active nuclear fusion',
          'Magnetic repulsion between iron ions'
        ],
        correctIndex: 1,
        explanation: 'White dwarfs are held up by electron degeneracy pressure resulting from the Pauli exclusion principle.'
      },
      {
        id: 'sc-8-3',
        question: 'If our Sun were suddenly replaced by a black hole of exactly 1 solar mass, what would happen to Earth’s orbit?',
        options: [
          'Earth would be immediately sucked into the singularity within seconds',
          'Earth would fly off in a straight line out of the Solar System',
          'Earth would continue orbiting at 1 AU in its normal 365-day orbit',
          'Earth would immediately stop moving'
        ],
        correctIndex: 2,
        explanation: 'Because the central gravitational mass is unchanged (1 M_☉), the gravitational force at 1 AU remains identical.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA: Black Holes',
        url: 'https://science.nasa.gov/universe/black-holes/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'NASA overview of stellar-mass black holes, supermassive black holes, and event horizons.'
      },
      {
        title: 'Wikipedia: Black Hole',
        url: 'https://en.wikipedia.org/wiki/Black_hole',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Detailed general relativity review of spacetime curvature, singularities, and thermodynamics.'
      },
      {
        title: 'Wikipedia: Neutron Star',
        url: 'https://en.wikipedia.org/wiki/Neutron_star',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Physics of nuclear density matter, pulsars, and gravitational wave mergers.'
      },
      {
        title: 'Google Search: NASA black hole event horizon white dwarf neutron star basics',
        url: 'https://www.google.com/search?q=NASA+black+hole+event+horizon+white+dwarf+neutron+star+basics',
        source: 'google.com',
        type: 'search',
        description: 'Explore visual comparisons and infographics of compact stellar remnants.'
      }
    ]
  },
  {
    id: 's-unit-9',
    slug: 'dark-matter-gravity-galaxies',
    track: 'senior',
    unitNumber: 9,
    title: 'Dark Matter and Gravity in Galaxies',
    introduction:
      'When astronomers measured how fast stars orbit inside spiral galaxies, the stars were moving far faster than expected from the visible mass of stars and gas alone. This discrepancy revealed dark matter: an unseen substance that exerts gravity across galactic and cosmic scales.',
    estimatedTime: '11–13 minutes',
    learningGoals: [
      'Define dark matter and explain why it is inferred purely from gravitational effects.',
      'Explain galaxy rotation curves and why outer stars orbit faster than predicted by Keplerian motion.',
      'Identify gravitational lensing as independent visual evidence for dark matter.',
      'Clearly distinguish dark matter (attractive gravity) from dark energy (accelerated cosmic expansion).',
      'Acknowledge that dark matter’s exact microscopic particle identity remains an active mystery.'
    ],
    sections: [
      {
        heading: 'The Mystery of Flat Galaxy Rotation Curves',
        content: [
          'In our Solar System, almost all the mass is concentrated in the central Sun. Kepler’s laws predict that outer planets move much slower than inner planets (Earth orbits at ~30 km/s, while Neptune orbits at only ~5.4 km/s: v ∝ 1/√r).',
          'In the 1970s, astronomer Vera Rubin and colleagues measured the orbital speeds of stars and gas clouds in spiral galaxies like Andromeda as a function of distance from the galactic centre.',
          'Astronomers expected that once you moved past the bright galactic bulge and disk, orbital velocities would drop off in a Keplerian decline.',
          'Instead, they discovered that galaxy rotation curves stay flat! Stars at the outer fringes of galaxies orbit just as fast as stars near the centre, often at 200–250 km/s.',
          'To keep these fast-moving outer stars from flying off into intergalactic space, galaxies must be embedded in an enormous halo of unseen matter exerting strong gravitational attraction.'
        ]
      },
      {
        heading: 'What is Dark Matter?',
        content: [
          'Dark matter is matter that does not emit, absorb, or reflect electromagnetic radiation (light) in any detectable way.',
          'It is not simply ordinary dark clouds of gas or dust (which would absorb starlight and emit infrared heat), nor is it composed of ordinary black holes or stray planets.',
          'Cosmological observations indicate that approximately 85% of all matter in the universe is dark matter, while all normal baryonic matter (atoms making up stars, planets, and humans) accounts for only about 15% of all matter.',
          'Leading candidate theories suggest dark matter consists of exotic, undiscovered subatomic particles that interact via gravity and possibly the weak nuclear force (such as WIMPs or axions).'
        ]
      },
      {
        heading: 'Gravitational Lensing: Bending Light with Invisible Mass',
        content: [
          'Einstein’s General Relativity showed that mass curves spacetime, bending the paths of passing light rays.',
          'When light from distant background galaxies passes by a massive foreground galaxy cluster, the cluster acts as a gravitational lens, warping and magnifying the background galaxies into arcs and rings.',
          'By calculating the total mass required to produce the observed light distortion, astronomers find that galaxy clusters contain five to ten times more gravitating mass than all their visible stars and hot X-ray gas combined.'
        ]
      },
      {
        heading: 'Dark Matter vs Dark Energy: Two Very Different Concepts',
        content: [
          'It is crucial not to confuse dark matter with dark energy:',
          '• Dark Matter acts as an attractive gravitational "glue". It pulls matter together, helping galaxies form and keeping stars in orbit.',
          '• Dark Energy is a mysterious smooth energy component of empty space that causes the expansion of the entire universe to accelerate outward.',
          'They share the word "dark" only because both are invisible and their fundamental natures are still under intense scientific investigation.'
        ]
      }
    ],
    diagram: {
      type: 'dark-matter-curve',
      caption: 'Galaxy Rotation Curve: Observed flat curve versus expected Keplerian decline reveals a dark matter halo.',
      altText: 'Graph showing orbital velocity versus distance from galaxy center, contrasting the declining expected curve with the observed flat curve.'
    },
    keyIdeas: [
      'Dark matter is inferred from gravitational effects on stars, galaxies, and light.',
      'Flat galaxy rotation curves reveal that outer stars orbit far faster than visible matter can explain.',
      'Gravitational lensing provides direct independent confirmation of dark matter halos.',
      'Dark matter accounts for ~85% of all matter in the universe.',
      'Dark matter attracts and binds structures; dark energy accelerates cosmic expansion (they are distinct!).'
    ],
    keyTerms: [
      {
        term: 'Dark Matter',
        definition: 'Hypothesized form of matter that does not interact with electromagnetic radiation, inferred through gravitational effects.'
      },
      {
        term: 'Galaxy Rotation Curve',
        definition: 'A plot of the orbital speeds of visible stars or gas in a galaxy versus their radial distance from the galactic center.'
      },
      {
        term: 'Gravitational Lensing',
        definition: 'The bending of light from a distant source around a massive foreground object due to spacetime curvature.'
      },
      {
        term: 'Dark Energy',
        definition: 'A pervasive, repulsive force or energy density causing the accelerated expansion of the universe.'
      }
    ],
    commonMistakes: [
      'Confusing dark matter with dark energy (dark matter pulls together gravitationally; dark energy accelerates expansion).',
      'Thinking dark matter is just everyday dark dust or black clouds (dust absorbs and emits light; dark matter does not interact with light at all).',
      'Believing dark matter has been physically isolated and identified in a test tube (its particle nature remains an open scientific question).',
      'Assuming outer stars in a galaxy slow down like outer planets in the Solar System.'
    ],
    checkQuestions: [
      {
        id: 'sc-9-1',
        question: 'What is dark matter inferred to do on galactic scales?',
        options: [
          'Emit bright visible light and heat',
          'Contribute gravitational attraction without emitting detectable electromagnetic radiation in the usual way',
          'Halt the rotation of all galaxies',
          'Completely destroy surrounding stars'
        ],
        correctIndex: 1,
        explanation: 'Dark matter is inferred because its gravity explains observed galaxy rotation curves and lensing without visible light emission.'
      },
      {
        id: 'sc-9-2',
        question: 'What observational evidence in spiral galaxies first pointed strongly toward the existence of dark matter halos?',
        options: [
          'Galaxy rotation curves remaining flat at large distances instead of declining',
          'Planets escaping their solar systems',
          'Stars turning off in the center of the galaxy',
          'Comets travelling faster than the speed of light'
        ],
        correctIndex: 0,
        explanation: 'Vera Rubin’s observations of flat rotation curves showed outer stars orbit at high speeds requiring unseen gravitational mass.'
      },
      {
        id: 'sc-9-3',
        question: 'How does dark matter differ from dark energy in modern cosmology?',
        options: [
          'Dark matter pulls structures together through gravity, while dark energy drives the accelerated expansion of space',
          'Dark matter is made of visible light, while dark energy is made of rock',
          'They are two identical names for the exact same substance',
          'Dark matter only exists on Earth, while dark energy exists in the Sun'
        ],
        correctIndex: 0,
        explanation: 'Dark matter contributes attractive gravity holding galaxies together, whereas dark energy accelerates universal expansion.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA Space Place: What is Dark Matter?',
        url: 'https://spaceplace.nasa.gov/dark-matter/en/',
        source: 'spaceplace.nasa.gov',
        type: 'official',
        description: 'Student-friendly guide explaining how dark matter was discovered and how it acts as cosmic glue.'
      },
      {
        title: 'NASA: Dark Energy Overview',
        url: 'https://science.nasa.gov/dark-energy/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Clear distinction between dark matter, dark energy, and cosmic geometry.'
      },
      {
        title: 'Wikipedia: Galaxy Rotation Curve',
        url: 'https://en.wikipedia.org/wiki/Galaxy_rotation_curve',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Scientific overview of observational rotation curves, modified Newtonian dynamics (MOND), and halos.'
      },
      {
        title: 'Google Search: NASA dark matter galaxy rotation curves evidence students',
        url: 'https://www.google.com/search?q=NASA+dark+matter+galaxy+rotation+curves+evidence+students',
        source: 'google.com',
        type: 'search',
        description: 'Explore interactive simulations and educational articles on dark matter evidence.'
      }
    ]
  },
  {
    id: 's-unit-10',
    slug: 'earth-axial-tilt-seasons',
    track: 'senior',
    unitNumber: 10,
    title: 'Earth’s Axial Tilt and Seasons',
    introduction:
      'Understanding seasonal variation requires rigorous geometric thinking. Earth experiences seasons because its rotational axis is tilted by 23.5 degrees relative to its orbital plane, varying solar incidence angles and daylight duration throughout the year.',
    estimatedTime: '10–12 minutes',
    learningGoals: [
      'Quantify Earth’s axial tilt (~23.5°) and define the celestial equator and ecliptic.',
      'Explain how changing solar elevation angles concentrate or dilute incident flux (insolation).',
      'Explain why the Northern and Southern Hemispheres experience reversed seasons.',
      'Dismantle the persistent misconception that seasons are caused by variations in orbital distance.',
      'Understand solstices, equinoxes, and day-length variations across latitudes.'
    ],
    sections: [
      {
        heading: 'The 23.5° Tilt and Orbital Geometry',
        content: [
          'Earth revolves around the Sun in a nearly circular orbit spanning an imaginary plane known as the ecliptic.',
          'Earth’s rotational axis does not point straight up perpendicular to the ecliptic plane. Instead, it is tilted by approximately 23.44° (commonly rounded to 23.5°).',
          'Crucially, as Earth orbits the Sun over the course of 365.25 days, the orientation of its axis remains fixed in space (pointing consistently toward Polaris, the North Star) due to gyroscopic conservation of angular momentum.'
        ]
      },
      {
        heading: 'Solar Incidence Angle and Atmospheric Path',
        content: [
          'Because of this fixed tilt, as Earth moves along its orbit, each hemisphere alternates between being tilted toward the Sun and tilted away:',
          '• Hemisphere Tilted Toward the Sun (Summer): The Sun rises higher in the sky. Sunlight strikes the ground at a steep, nearly vertical angle. This concentrates incoming solar flux over a smaller ground area. Furthermore, the Sun stays above the horizon longer, providing more hours of daylight.',
          '• Hemisphere Tilted Away from the Sun (Winter): The Sun remains low along the horizon throughout the day. Sunlight strikes the surface at a shallow, glancing angle, spreading the same amount of solar energy over a much wider surface area. In addition, daylight hours are brief.',
          'This dual effect—directness of sunlight and duration of daylight—is what drives seasonal temperature changes.'
        ],
        analogy:
          'Lambert’s Cosine Law: Solar flux per unit area is proportional to the cosine of the zenith angle (cos θ). At a 90° overhead angle, flux is 100%. At a 30° elevation angle, flux drops by half!'
      },
      {
        heading: 'Opposite Hemispheres and Dismantling the Distance Myth',
        content: [
          'The Northern and Southern Hemispheres always experience opposite seasons. When it is summer in London and New York (June solstice), it is midwinter in Sydney and Buenos Aires.',
          'Why does this completely disprove the idea that seasons are caused by Earth’s distance from the Sun?',
          'If distance caused seasons, the entire planet would experience summer at the same time! In fact, Earth is at perihelion (closest to the Sun, ~147.1 million km) around January 3—right in the middle of Northern Hemisphere winter. Earth is at aphelion (farthest from the Sun, ~152.1 million km) around July 4, during Northern Hemisphere summer.',
          'Earth’s slight orbital eccentricity (~0.0167) produces only a ~6.7% difference in total solar irradiance between perihelion and aphelion, which is completely overshadowed by the effect of the 23.5° axial tilt.'
        ]
      }
    ],
    diagram: {
      type: 'seasons-tilt',
      caption: 'The 23.5° axial tilt causes seasonal variations: Summer hemisphere receives direct light and longer days.',
      altText: 'Diagram showing Earth at four orbital positions around the Sun, illustrating the solstices and equinoxes with 23.5 degree axial tilt.'
    },
    keyIdeas: [
      'Earth’s axis is tilted ~23.5° relative to its orbital plane (the ecliptic).',
      'Seasons are driven by solar incidence angle (concentration of light) and daylight length.',
      'Northern and Southern Hemispheres experience opposite seasons simultaneously.',
      'Distance from the Sun is NOT the cause: Earth is closest to the Sun in January (Northern winter).',
      'Equinoxes occur when neither hemisphere is tilted toward the Sun (equal 12-hour day and night).'
    ],
    keyTerms: [
      {
        term: 'Obliquity (Axial Tilt)',
        definition: 'The angle between an astronomical object’s rotational axis and an axis perpendicular to its orbital plane (approx. 23.5° for Earth).'
      },
      {
        term: 'Ecliptic Plane',
        definition: 'The geometric plane of Earth’s orbit around the Sun.'
      },
      {
        term: 'Solstice',
        definition: 'Either of the two times in the year when the Sun reaches its highest or lowest excursion relative to the celestial equator (June and December).'
      },
      {
        term: 'Equinox',
        definition: 'The time when the Sun crosses the celestial equator, resulting in approximately equal day and night durations across Earth (March and September).'
      }
    ],
    commonMistakes: [
      'Believing summer occurs because Earth is physically closer to the Sun in space.',
      'Assuming the Northern and Southern Hemispheres have summer at the same time.',
      'Thinking Earth’s axis wobbles rapidly back and forth between seasons (the axis maintains fixed pointing direction throughout the year).',
      'Thinking the Sun is directly overhead at noon everywhere on Earth during summer (it is only overhead between the Tropics of Cancer and Capricorn).'
    ],
    checkQuestions: [
      {
        id: 'sc-10-1',
        question: 'What is the primary physical reason that seasons differ between the Northern and Southern Hemispheres?',
        options: [
          'Earth’s axial tilt causes the hemispheres to receive different sunlight angles and day lengths as Earth orbits',
          'The Sun dims significantly during the winter months',
          'Earth’s orbital speed slows to a halt in December',
          'The Moon directly cools Earth’s surface during winter'
        ],
        correctIndex: 0,
        explanation: 'Earth’s 23.5° axial tilt changes the angle and duration of incoming solar energy differently for each hemisphere.'
      },
      {
        id: 'sc-10-2',
        question: 'When the Northern Hemisphere experiences summer in June, what season is occurring simultaneously in the Southern Hemisphere?',
        options: ['Summer', 'Autumn', 'Winter', 'Spring'],
        correctIndex: 2,
        explanation: 'Because the Northern Hemisphere is tilted toward the Sun in June, the Southern Hemisphere is tilted away, experiencing winter.'
      },
      {
        id: 'sc-10-3',
        question: 'Why does Earth being closest to the Sun (perihelion) in early January prove distance does not cause seasons?',
        options: [
          'Because the Northern Hemisphere is in the middle of winter in early January',
          'Because the Sun has no gravity in January',
          'Because sunlight cannot reach Earth in January',
          'Because the Moon blocks all sunlight during perihelion'
        ],
        correctIndex: 0,
        explanation: 'If distance caused seasons, the entire planet would experience maximum summer warmth in January, yet the north is in winter.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA: Seasons on Earth, Mars and Beyond',
        url: 'https://science.nasa.gov/helio-and-you-seasons-on-earth-mars-and-beyond/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'NASA guide examining planetary axial tilts, insolation, and seasonal climate cycles.'
      },
      {
        title: 'NASA: Educator Topics on Heat and Radiation',
        url: 'https://science.nasa.gov/learn/heat/topics/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Educational resources on solar irradiance, angles of incidence, and atmospheric absorption.'
      },
      {
        title: 'Wikipedia: Earth’s Orbit and Seasons',
        url: 'https://en.wikipedia.org/wiki/Season',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Detailed analysis of astronomical seasons, Milankovitch cycles, and daylight variation.'
      },
      {
        title: 'Google Search: NASA why Earth has seasons axial tilt student explanation',
        url: 'https://www.google.com/search?q=NASA+why+Earth+has+seasons+axial+tilt+student+explanation',
        source: 'google.com',
        type: 'search',
        description: 'Find interactive 3D orbit animations and classroom ray-tracing demonstrations.'
      }
    ]
  }
];
