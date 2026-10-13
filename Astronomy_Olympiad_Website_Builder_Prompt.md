# MASTER BUILD PROMPT: ORBITLEARN — ASTRONOMY OLYMPIAD PREPARATION WEBSITE

**How to use:** Copy the entire document below into Intergrovity (or your AI website builder). Treat it as the full product brief, content specification, design system, and functional acceptance checklist. Build the working website, not just a concept image or static mockup.

---

## 1. PRODUCT GOAL

Create a polished, responsive learning website called **OrbitLearn** that helps school students independently prepare for an introductory astronomy and physics-based astronomy competition. The website must teach the topics in plain language, provide topic-by-topic study guidance, link out to reliable learning references, and let students complete Junior and Senior multiple-choice practice exams that mark automatically.

This is an **independent learning resource**. Do not claim the site is operated, approved, sponsored, or endorsed by NASA, IOAA, or any competition organiser. Do not use NASA's logo or recreate the event poster as the site's identity. It is fine to link to official NASA educational material.

### Core outcomes
1. A Junior student can understand what to study, learn it on the site, follow further reading links, and take a quiz.
2. A Senior student can do the same, including introductory formula-based problems.
3. Students can see their score instantly, identify incorrect answers, read explanations, and try again.
4. A teacher or workshop organiser can use the site as a simple self-study platform without needing accounts or a database.
5. The content must be substantial enough to learn from; do not make pages that contain only headings, cards, or external links.

### Scope and accuracy note
The supplied competition poster, the uploaded International Space Olympiad syllabuses, and the IOAA resources are not automatically evidence that all these resources belong to one official event. Present OrbitLearn as **practice based on a beginner-friendly Junior and Senior syllabus**. Put a neutral notice in About/FAQ: “Check your specific competition organiser for the official syllabus, exam format, eligibility, dates and rules. OrbitLearn's papers and lessons are independent practice resources.” Do not promise a NASA visit, certificate, camp, award or selection outcome.

---

## 2. VISUAL DIRECTION — FOLLOW THIS CLOSELY

### Design concept
Premium science-learning product with a deep-space visual identity: calm, crisp, modern and academic. It should feel like a high-quality astronomy learning app, not a generic AI landing page, gaming dashboard, or a clone of NASA's website.

### Colour palette
- Midnight navy: `#071426` — hero and dark background sections.
- Deep blue: `#0D2344` — navigation, dark cards and footer.
- Space blue: `#163E72` — primary buttons and selected states.
- Electric cyan: `#55D6E8` — small highlights, progress indicators and focus states.
- Soft sky: `#EAF4FB` — pale background panels.
- Paper white: `#FFFFFF` — reading surfaces.
- Main ink: `#15243A` — body text on light surfaces.
- Secondary text: `#60718A` — supporting text.
- Correct/success: `#167D61`; warning: `#B7791F`; incorrect: `#B93838`.

Do not make everything neon. Cyan is an accent only. Text contrast must remain accessible.

### Typography
Use **Inter** or a similar clean sans-serif for interface and body text. Use a tasteful display face such as **Space Grotesk** for major headings if supported. Use a readable line length (roughly 60–80 characters) and generous line spacing. Formula text must be legible on phones.

### Art direction
Use a restrained, high-quality space illustration in the home hero: dark blue star field, one elegant planetary arc or planet edge, subtle orbits and a small realistic-looking spacecraft or telescope illustration. Prefer original CSS/SVG illustrations or royalty-free assets with alt text. Do not use many random planets, excessive sparkles, stock photos of children, or AI-looking clip art. Content pages should prioritise readable lessons over decorative graphics.

### Layout rules
- Max content width about 1120–1200px, centred.
- Desktop: 12-column feel, with a left learning sidebar on lesson pages and main reading area on the right.
- Mobile: single column; sidebar becomes a collapsible drawer or horizontal unit selector.
- Use an 8px spacing rhythm, card radius 14–18px, subtle borders, restrained shadowing.
- Buttons must have hover, active, focus-visible, disabled and loading states where appropriate.
- Give cards a consistent design language; avoid too many different card styles.
- No emoji-heavy UI. Icons should be consistent Lucide-style line icons or simple SVG icons.
- Use subtle transitions (150–220ms) for hover, accordion and navigation states; honour reduced-motion preferences.

### Required responsive behaviour
Test at 360px, 390px, 768px, 1024px and 1440px widths. No horizontal overflow, clipped equations, broken tables or tiny tap targets. Main touch targets should be at least 44px high.

---

## 3. INFORMATION ARCHITECTURE AND PAGES

Build these routes or equivalent views:

1. `/` — Home dashboard / landing page.
2. `/learn` — Select Junior or Senior and browse units.
3. `/learn/junior` — Junior syllabus overview and unit list.
4. `/learn/junior/<unit-slug>` — Junior lesson pages.
5. `/learn/senior` — Senior syllabus overview and unit list.
6. `/learn/senior/<unit-slug>` — Senior lesson pages.
7. `/practice` — Practice centre with Junior/Senior quiz choices.
8. `/practice/junior` — Junior MCQ exam.
9. `/practice/senior` — Senior MCQ exam.
10. `/resources` — Curated reference library with topic filters.
11. `/about` — Purpose, disclaimer, use instructions and FAQ.

If the builder cannot implement multiple routes, use a single-page app with working navigation and shareable URL hash states. Do not fake routes that all show the same page.

### Global header
- Brand wordmark: **OrbitLearn** with a simple orbit icon; sublabel “Astronomy preparation”.
- Navigation: Learn, Practice Quiz, Resources, About.
- A visually clear “Start learning” primary CTA.
- Mobile hamburger that opens and closes correctly.
- Sticky on scroll if it remains unobtrusive.

### Global footer
- Links to Learn, Practice Quiz, Resources, About.
- Resource note: “Learning links open external educational sources.”
- Disclaimer: “Independent educational resource; not affiliated with or endorsed by NASA, IOAA or an event organiser.”
- No fake contact information, partner logos or made-up social links.

---

## 4. HOME PAGE — COMPOSITION AND COPY

Create a premium desktop-first but mobile-perfect page. Recommended order:

### A. Hero
Small eyebrow: `YOUR JOURNEY INTO ASTRONOMY`

Headline: **Understand the universe. Prepare with confidence.**

Subheadline: “Learn astronomy one topic at a time, explore trusted references, and test your understanding with instant-marking practice quizzes for Junior and Senior students.”

Primary CTA: **Explore the syllabus** → `/learn`
Secondary CTA: **Try a practice quiz** → `/practice`

Supporting line: “Beginner-friendly explanations • Curated references • Instant quiz results”

Right side: tasteful space visual in a rounded, dark panel; optional floating mini-stats “2 study tracks”, “Topic-by-topic lessons”, “Instant results”. Do not show fabricated student counts, pass rates or ranking statistics.

### B. Choose your study track
Two large accessible cards, visually balanced:
- **Junior Astronomy** — “Build your foundations: Earth, Moon and Sun, planets, stars, space technology, galaxies and the universe.” Button: “Explore Junior”.
- **Senior Astronomy** — “Go deeper: orbits, stellar brightness, spectra, fusion, redshift, exoplanets and introductory astrophysics.” Button: “Explore Senior”.

Each card lists 5–6 example topics and has a clear route link. Do not label students by age unless the event's category ages are verified.

### C. Learn → Practise → Improve
A clean 3-step horizontal band on desktop, stacked on mobile:
1. **Study a unit** — read a short lesson with key words and diagrams.
2. **Explore more** — open NASA, Wikipedia and Google topic searches.
3. **Check your understanding** — take MCQs, review explanations and retry.

### D. Featured learning units
Show three Junior and three Senior units, clearly labelled. Each card includes a short description and a “Study unit” link.

### E. Practice test preview
Use a small quiz-preview card with sample question (do not reveal the answer until interaction). CTA: “Take Junior quiz” and “Take Senior quiz”. Explain that each quiz is a 15-question practice set, 1 mark per correct answer, no negative marking for this website's practice exams.

### F. Trusted learning resources
Small editorial block with NASA Science, NASA Space Place, IOAA resources and Wikipedia. Avoid implying all these organisations endorse the site.

### G. Footer disclaimer
Use the exact independence note described above.

---

## 5. LEARNING EXPERIENCE — REQUIRED LESSON TEMPLATE

Every unit must be a genuine lesson. Reuse one consistent page layout:

1. Breadcrumb: Home → Learn → category → unit.
2. Category badge: Junior or Senior (neutral, not an official certification badge).
3. Unit title and 2–3 sentence introduction answering “What is this, and why does it matter?”
4. Estimated study time such as “8–12 minutes”. These are estimates, not tracked facts.
5. “Learning goals” with 3–5 measurable bullets.
6. “Learn the concept” with clear explanations in short sections. Use analogy where useful, but identify analogies as analogies.
7. One relevant illustration / diagram (CSS/SVG where appropriate) with an accessible label.
8. “Key ideas to remember” panel.
9. “Key terms” glossary with plain-language definitions.
10. Senior lessons: formula panel only where relevant, variables and units defined, one fully worked example, and a “Check the units” reminder.
11. “Common mistakes” panel (2–4 items).
12. “Check your understanding” with 3 interactive MCQs per unit, answer feedback after selection, and a retry button. These unit checks are separate from the formal 15-question practice exams.
13. “Explore further” with links for each unit:
    - **Trusted science reference**: use the specified NASA/ESA/IOAA/educational link where one is supplied.
    - **Wikipedia overview**: a direct article URL for the relevant concept.
    - **Search more**: an actual Google Search URL, not a button that does nothing.
14. Buttons: “Mark unit complete” and “Next unit”.
15. Record unit completion locally in the browser. Make it clear the progress is stored on this device and no account is required.

Content quality requirement: write the lesson copy itself. Do not make an empty lesson shell and tell the user to research everything externally. Students should be able to understand the essential syllabus concepts directly on OrbitLearn, with the external references serving as deeper reading.

---

## 6. JUNIOR SYLLABUS — UNITS AND REQUIRED CONTENT

Junior learning content should be friendly, precise and mostly conceptual. Define scientific vocabulary the first time it is used. Avoid advanced equations except a simple inverse-square idea in an optional “Maths corner”. The student should be able to answer all Junior MCQs listed in Section 9.

### JUNIOR UNIT 1 — Our Solar System
**Core explanation:** The Solar System contains the Sun and the objects held by its gravity, including eight planets, dwarf planets, moons, asteroids and comets. Explain that planets orbit the Sun and that their properties differ.

**Must teach:**
- The Sun is a star and is at the centre of our Solar System.
- The eight planets in order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.
- Inner rocky planets vs outer giant planets; gas giants vs ice giants at a simple level.
- Jupiter is the largest planet; Saturn is well known for its prominent rings.
- Gravity as the attraction that helps keep planets in orbit; do not teach that planets orbit because space has wind or because the Sun pushes them.
- Natural satellites (moons) and artificial satellites.
- Solar System vs galaxy: the Milky Way is the galaxy containing our Solar System.

**Learning outcomes:** Students can list the planets in order, recognise the Sun as a star, explain a basic orbit, identify Jupiter and Saturn's distinguishing features, and distinguish a solar system from a galaxy.

**External links:**
- NASA Solar System: https://science.nasa.gov/solar-system/
- NASA Solar System Exploration: https://science.nasa.gov/solar-system/exploration/
- Wikipedia — Solar System: https://en.wikipedia.org/wiki/Solar_System
- Wikipedia — Planet: https://en.wikipedia.org/wiki/Planet
- Google search: https://www.google.com/search?q=NASA+solar+system+eight+planets+for+students

### JUNIOR UNIT 2 — Earth, Moon and Sun
**Core explanation:** Earth's rotation produces day and night. Earth's tilted axis, combined with its yearly orbit around the Sun, produces seasons. The Moon reflects sunlight, orbits Earth and appears to change phase as the Sun–Earth–Moon geometry changes.

**Must teach:**
- Rotation vs revolution.
- Why day and night occur.
- Earth's axial tilt (about 23.5 degrees) and why seasons are not primarily caused by Earth being closer to or farther from the Sun.
- The Moon does not make its own visible light; it reflects sunlight.
- Moon phases: the Moon's orbit changes how much of its sunlit half we see.
- Lunar eclipse: Earth lies between the Sun and Moon so Earth's shadow falls on the Moon. (Also introduce solar eclipse: the Moon blocks some sunlight from reaching Earth.)
- A lunar eclipse does not happen every month because the Moon's orbital plane is tilted relative to Earth's orbit.

**Learning outcomes:** Students can explain day/night, seasons, lunar phases and lunar eclipses in simple language and identify the role of reflected sunlight.

**External links:**
- NASA — Seasons on Earth, Mars and Beyond: https://science.nasa.gov/helio-and-you-seasons-on-earth-mars-and-beyond/
- NASA — Why eclipses happen: https://science.nasa.gov/eclipses/geometry/
- Wikipedia — Earth's seasons: https://en.wikipedia.org/wiki/Season
- Wikipedia — Moon phases: https://en.wikipedia.org/wiki/Lunar_phase
- Wikipedia — Lunar eclipse: https://en.wikipedia.org/wiki/Lunar_eclipse
- Google search: https://www.google.com/search?q=NASA+Moon+phases+seasons+eclipses+for+students

### JUNIOR UNIT 3 — Stars and Light
**Core explanation:** A star is a hot ball of gas/plasma that emits energy; the Sun is our nearest star. Stars look like points because they are extremely far away. Their apparent twinkling is mainly caused by Earth's changing atmosphere bending the light.

**Must teach:**
- What a star is and how it differs from a planet.
- Nuclear fusion as the main source of energy for the Sun and other main-sequence stars; no detailed nuclear equations required.
- Star colour gives clues about surface temperature: blue-white stars are hotter than red stars (introduce qualitatively).
- Stars appear to twinkle because atmospheric turbulence/refractive changes affect starlight. Planets usually twinkle less because they appear as tiny disks and atmospheric variations average out more.
- Do not say stars literally switch on and off.

**Learning outcomes:** Students can compare stars and planets, state why the Sun shines at a beginner level, and explain why stars appear to twinkle.

**External links:**
- NASA APOD — Why Stars Twinkle: https://science.nasa.gov/image-article/apod-2000-july-25-why-stars-twinkle/
- NASA Star Lifecycle: https://science.nasa.gov/mission/webb/star-lifecycle/
- Wikipedia — Star: https://en.wikipedia.org/wiki/Star
- Wikipedia — Nuclear fusion: https://en.wikipedia.org/wiki/Nuclear_fusion
- Wikipedia — Atmospheric refraction: https://en.wikipedia.org/wiki/Atmospheric_refraction
- Google search: https://www.google.com/search?q=NASA+why+stars+twinkle+star+vs+planet+for+students

### JUNIOR UNIT 4 — Comets, Satellites and Space Technology
**Core explanation:** Space objects and spacecraft help us study the Solar System and Earth. A comet contains ice, dust and rocky material; when warmed near the Sun, it can release gas and dust that form a coma and tails. Artificial satellites are human-made objects placed in orbit for specific jobs.

**Must teach:**
- Comets vs asteroids: a comet has a substantial amount of ice and can develop a coma/tails near the Sun; asteroids are usually rock/metal-rich.
- The comet tail is pushed away from the Sun by sunlight and solar wind; it does not simply trail behind the comet's direction of travel.
- Artificial vs natural satellites.
- Uses of satellites: communication, weather forecasting, navigation, Earth observation and scientific research.
- A telescope collects or detects light/radiation so distant objects can be studied.
- Simple purpose of rockets: provide thrust to carry payloads into space; detailed rocket equations are not required.

**Learning outcomes:** Students can distinguish comets from asteroids, give two satellite applications and explain what a telescope does.

**External links:**
- NASA — Solar System Exploration: https://science.nasa.gov/solar-system/exploration/
- NASA — What's That Space Rock?: https://science.nasa.gov/solar-system/10-things-whats-that-space-rock/
- NASA Space Place — Solar System: https://spaceplace.nasa.gov/menu/explore/solar-system/
- Wikipedia — Comet: https://en.wikipedia.org/wiki/Comet
- Wikipedia — Artificial satellite: https://en.wikipedia.org/wiki/Artificial_satellite
- Google search: https://www.google.com/search?q=NASA+comets+satellites+telescopes+for+students

### JUNIOR UNIT 5 — Galaxies and the Wider Universe
**Core explanation:** A galaxy is a huge collection of stars, gas, dust and dark matter held together by gravity. Our Solar System is part of the Milky Way. An exoplanet is a planet orbiting a star beyond our Solar System.

**Must teach:**
- Difference between a planet, star, solar system and galaxy.
- The Milky Way contains our Sun and many other stars.
- Basic galaxy types: spiral, elliptical and irregular (recognition level only).
- The universe contains galaxies; the Milky Way is only one galaxy.
- Exoplanets orbit stars other than the Sun.
- Introductory thought: seeing distant objects means seeing light that travelled for a long time; do not require advanced lookback-time calculations.

**Learning outcomes:** Students can identify the Milky Way as our galaxy, classify a simple galaxy image, and define exoplanet correctly.

**External links:**
- NASA Solar System: https://science.nasa.gov/solar-system/
- NASA JPL — Learn about the universe with Webb: https://www.jpl.nasa.gov/edu/resources/teachable-moment/learn-about-the-universe-with-the-james-webb-space-telescope/
- Wikipedia — Milky Way: https://en.wikipedia.org/wiki/Milky_Way
- Wikipedia — Galaxy: https://en.wikipedia.org/wiki/Galaxy
- Wikipedia — Exoplanet: https://en.wikipedia.org/wiki/Exoplanet
- Google search: https://www.google.com/search?q=NASA+Milky+Way+galaxies+exoplanets+for+students

### JUNIOR UNIT 6 — Light Intensity and Simple Astronomy Maths
**Core explanation:** Light from a source spreads out as it travels. For a point-like source, intensity follows an inverse-square relationship with distance: double the distance means one-quarter the intensity; triple the distance means one-ninth.

**Must teach:**
- Meaning of distance and intensity.
- Inverse-square pattern: intensity is proportional to 1/d².
- Use ratios rather than complicated algebra.
- Example: if a planet is 3 times farther from the same lamp, it receives 1/9 as much light, assuming no other changes.
- Students should understand the question assumes the same light source and comparable conditions.

**Learning outcomes:** Students can calculate simple fractions when distance changes by a factor of two or three and explain why distant objects appear fainter.

**External links:**
- Wikipedia — Inverse-square law: https://en.wikipedia.org/wiki/Inverse-square_law
- Wikipedia — Apparent magnitude: https://en.wikipedia.org/wiki/Apparent_magnitude
- Google search: https://www.google.com/search?q=inverse+square+law+light+intensity+simple+examples

---

## 7. SENIOR SYLLABUS — UNITS AND REQUIRED CONTENT

Senior content should remain introductory and directly prepare students for the Senior practice MCQs. Teach concepts before formula manipulation. Avoid university-level derivations, advanced calculus or unsupported claims.

### SENIOR UNIT 1 — Gravity, Orbits and Kepler's Third Law
**Core explanation:** Gravity changes the direction of a planet's motion and keeps it in orbit. Kepler's laws describe planetary motion. For planets orbiting the Sun, a convenient form of the third law is T² = a³ when T is measured in Earth years and a in astronomical units (AU).

**Must teach:**
- Gravity and orbital motion as a combination of forward motion and gravitational attraction.
- Elliptical orbit as an introductory concept.
- Orbital period (T) and semi-major axis / average orbital distance (a).
- Kepler's first law: elliptical orbits; second law: a planet moves faster near the Sun and slower farther away; third law: T² is proportional to a³.
- Special units for the simplified Solar System form: T in years, a in AU, where 1 AU is Earth's mean distance from the Sun.
- The simplified T² = a³ form assumes orbiting the Sun (or a central star with one solar mass); do not present it as universal for any possible system.
- Worked example: T = 2 years → T² = 4 → a³ = 4 → a = cube root of 4 ≈ 1.59 AU.

**Required formula:** `T² = a³` (solar-mass central star; T in years, a in AU).

**Learning outcomes:** Students can explain how gravity contributes to orbits, identify the variables and units, and solve one-step Kepler-law questions using a calculator.

**External links:**
- NASA — Orbits and Kepler's Laws: https://science.nasa.gov/solar-system/orbits-and-keplers-laws/
- NASA JPL — Exploring Exoplanets with Kepler (math lesson): https://www.jpl.nasa.gov/edu/resources/lesson-plan/exploring-exoplanets-with-kepler/
- Wikipedia — Kepler's laws of planetary motion: https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion
- Wikipedia — Astronomical unit: https://en.wikipedia.org/wiki/Astronomical_unit
- Google search: https://www.google.com/search?q=Kepler+third+law+T2%3Da3+worked+examples+students

### SENIOR UNIT 2 — Luminosity, Flux, Brightness and Distance
**Core explanation:** Luminosity is the total energy a star emits per unit time. Apparent flux is the amount of that energy received per unit area at an observer. For the same luminosity, flux falls with the square of distance. A star may look faint because it is far away, intrinsically faint, or both.

**Must teach:**
- Luminosity vs apparent brightness/flux.
- Distance affects received flux according to the inverse-square law: `F ∝ L/d²`.
- Compare two objects using a ratio, keeping units consistent.
- Example used in practice: luminosity is 4 times a reference star and distance is 2 times as large: relative flux = 4/2² = 1.
- Stellar parallax: apparent angular shift as Earth views a nearby star from different positions in its orbit.
- Parsecs and arcseconds: `d(pc) = 1 / p(arcsec)` for p in arcseconds. Example p = 0.5 arcsec → d = 2 parsecs.
- Explain that parallax is useful mainly for nearby stars; do not teach inverse parallax with milliarcseconds unless labelled carefully.

**Required formulas:** `F ∝ L/d²`; `d(pc) = 1/p(arcsec)`.

**Learning outcomes:** Students can distinguish intrinsic energy output from observed brightness and solve basic flux and parallax problems.

**External links:**
- Wikipedia — Luminosity: https://en.wikipedia.org/wiki/Luminosity
- Wikipedia — Inverse-square law: https://en.wikipedia.org/wiki/Inverse-square_law
- Wikipedia — Stellar parallax: https://en.wikipedia.org/wiki/Parallax#Astronomy
- Wikipedia — Parsec: https://en.wikipedia.org/wiki/Parsec
- Google search: https://www.google.com/search?q=stellar+parallax+parsec+formula+luminosity+flux+inverse+square+law

### SENIOR UNIT 3 — Star Colour, Temperature and Wavelength
**Core explanation:** Stars emit light across a range of wavelengths. Their spectrum and colour give clues about surface temperature. In the simplified relationship described by Wien's law, hotter objects peak at shorter wavelengths.

**Must teach:**
- Wavelength and the visible spectrum at an introductory level.
- Redder stars are generally cooler than blue-white stars; explain this is a temperature clue, not a universal statement about every coloured object.
- Wien's displacement relationship qualitatively: peak wavelength decreases as temperature increases.
- A star's colour does not directly tell its distance or apparent brightness.
- Students should answer the concept question: if surface temperature rises, the peak wavelength shifts shorter.

**Optional formula extension:** `λ_max T ≈ 2.9 × 10⁻³ m·K`; require qualitative understanding first and simple substitution only if desired.

**Learning outcomes:** Students can connect star colour to surface temperature and predict the wavelength shift for a hotter star.

**External links:**
- Wikipedia — Wien's displacement law: https://en.wikipedia.org/wiki/Wien%27s_displacement_law
- Wikipedia — Stellar classification: https://en.wikipedia.org/wiki/Stellar_classification
- Google search: https://www.google.com/search?q=star+colour+surface+temperature+Wien%27s+law+student+explanation

### SENIOR UNIT 4 — The Sun, Nuclear Fusion and Stellar Lifetimes
**Core explanation:** The Sun's energy is generated mainly by nuclear fusion in its core, where hydrogen nuclei combine through a chain of reactions to form helium and release energy. A star's mass strongly influences how quickly it uses its fuel and how long it lives.

**Must teach:**
- Nuclear fusion vs chemical burning; clarify that the Sun is not burning like wood or coal.
- The Sun converts hydrogen into helium through fusion.
- Basic pathway: gas cloud collapses, a star forms, stable main-sequence stage, then later evolution.
- Greater-mass stars generally have higher luminosity and consume their available fuel much faster, so they generally live shorter lives than low-mass stars.
- Low/intermediate-mass star remnant: white dwarf; massive-star core-collapse can leave a neutron star or black hole, depending on details. Keep this at introductory level.
- Do not require detailed pp-chain branches, CNO reaction networks or stellar structure equations.

**Learning outcomes:** Students can identify fusion as the Sun's energy source and explain the relationship between stellar mass, fuel use and lifetime.

**External links:**
- NASA — Star lifecycle: https://science.nasa.gov/mission/webb/star-lifecycle/
- NASA — Life cycles of Sun-like and massive stars: https://science.nasa.gov/asset/webb/life-cycles-of-sun-like-and-massive-stars/
- Wikipedia — Nuclear fusion: https://en.wikipedia.org/wiki/Nuclear_fusion
- Wikipedia — Stellar evolution: https://en.wikipedia.org/wiki/Stellar_evolution
- Google search: https://www.google.com/search?q=NASA+star+life+cycle+nuclear+fusion+massive+stars+lifetimes

### SENIOR UNIT 5 — Redshift and the Expanding Universe
**Core explanation:** When light from a distant galaxy is stretched to longer wavelengths, it is called redshift. Cosmological redshift is evidence that space has expanded while the light travelled to us. At small redshifts, recession speed can be approximated by v ≈ cz.

**Must teach:**
- Wavelength and spectral lines at a simple level.
- Redshift means observed wavelength is longer than emitted/rest wavelength; blueshift means shorter.
- Formula: `z = (λ_observed − λ_rest) / λ_rest`.
- At low redshift only: `v ≈ cz`, where c ≈ 300,000 km/s and v is in km/s.
- Worked example: z = 0.1 → v ≈ 0.1 × 300,000 = 30,000 km/s.
- Explain the low-redshift equation is an approximation and not a precision distance calculator for very distant galaxies.
- Hubble–Lemaître relationship: on large scales, more distant galaxies generally show greater recession speeds.

**Learning outcomes:** Students can interpret a redshift, calculate a simple z value, and use the low-redshift approximation for a basic numerical question.

**External links:**
- NASA — Hubble cosmological redshift: https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-cosmological-redshift/
- NASA — What is cosmological redshift?: https://science.nasa.gov/asset/webb/what-is-cosmological-redshift/
- Wikipedia — Redshift: https://en.wikipedia.org/wiki/Redshift
- Wikipedia — Hubble's law: https://en.wikipedia.org/wiki/Hubble%27s_law
- Google search: https://www.google.com/search?q=NASA+redshift+expanding+universe+v%3Dcz+worked+example

### SENIOR UNIT 6 — Exoplanets and the Transit Method
**Core explanation:** An exoplanet is a planet beyond our Solar System. One way to find it is to measure a tiny, repeated dip in the light from a star when a planet passes in front of that star from our viewpoint.

**Must teach:**
- Definition of exoplanet.
- Transit geometry: star, planet and observer nearly aligned.
- Light curve: graph showing measured brightness over time; a transit produces a dip.
- Repeated dips can indicate an orbiting planet; the dip depth can help estimate the planet's size relative to the star.
- Transit is not the only detection method, but it is the method covered in this practice quiz.
- Avoid claiming that transits directly show every detail of a planet.

**Learning outcomes:** Students can identify the transit method from a description and explain why a star's brightness dips.

**External links:**
- NASA — What's a transit?: https://science.nasa.gov/exoplanets/whats-a-transit/
- NASA — How we find and characterize exoplanets: https://science.nasa.gov/exoplanets/how-we-find-and-characterize/
- Wikipedia — Transit method: https://en.wikipedia.org/wiki/Methods_of_detecting_exoplanets#Transit_photometry
- Wikipedia — Exoplanet: https://en.wikipedia.org/wiki/Exoplanet
- Google search: https://www.google.com/search?q=NASA+exoplanet+transit+method+light+curve+students

### SENIOR UNIT 7 — Telescopes, Infrared and Radio Astronomy
**Core explanation:** Different telescopes observe different parts of the electromagnetic spectrum. Optical telescopes detect visible light, infrared telescopes detect longer wavelengths useful for studying cool objects and some dusty regions, and radio telescopes detect radio waves from astronomical sources.

**Must teach:**
- A telescope gathers/detects electromagnetic radiation; it does not physically magnify every object in the same way.
- Radio astronomy reveals signals not visible to human eyes, including radio emission from charged particles and magnetic fields.
- Infrared telescopes can observe some objects and dusty regions more effectively than visible-light telescopes because infrared light passes through some dust more easily.
- Atmosphere blocks or absorbs some wavelength ranges, one reason many observatories operate in space.
- Distinguish optical, radio and infrared by the type of radiation detected.

**Learning outcomes:** Students can identify the purpose of a radio telescope and explain why infrared observations can reveal some dusty or cool objects.

**External links:**
- NASA — Infrared astronomy: https://science.nasa.gov/mission/webb/science-overview/science-explainers/infrared-astronomy/
- NASA Webb FAQs: https://science.nasa.gov/mission/webb/faqs-full/
- NASA Radio JOVE educational resources: https://radiojove.gsfc.nasa.gov/education/
- Wikipedia — Radio astronomy: https://en.wikipedia.org/wiki/Radio_astronomy
- Wikipedia — Infrared astronomy: https://en.wikipedia.org/wiki/Infrared_astronomy
- Google search: https://www.google.com/search?q=NASA+radio+telescope+infrared+astronomy+dust+education

### SENIOR UNIT 8 — Black Holes, White Dwarfs and Neutron Stars
**Core explanation:** These are different kinds of compact stellar remnants. A white dwarf is the dense remnant of a lower/intermediate-mass star. A neutron star is an even denser remnant that can form after the core of a massive star collapses. A black hole has an event horizon, the boundary beyond which light cannot escape to a distant observer.

**Must teach:**
- White dwarf vs neutron star vs black hole.
- Event horizon as a boundary, not a solid surface.
- Stellar remnants depend on the original star and its evolution; avoid presenting simplified mass cut-offs as exact universal rules.
- The event horizon does not mean that the black hole is a vacuum cleaner that automatically sucks in everything nearby.
- Gravitational effects and observations provide evidence for compact objects.

**Learning outcomes:** Students can distinguish the three remnant types and define event horizon accurately.

**External links:**
- NASA — Black holes: https://science.nasa.gov/universe/black-holes/
- Wikipedia — Black hole: https://en.wikipedia.org/wiki/Black_hole
- Wikipedia — White dwarf: https://en.wikipedia.org/wiki/White_dwarf
- Wikipedia — Neutron star: https://en.wikipedia.org/wiki/Neutron_star
- Google search: https://www.google.com/search?q=NASA+black+hole+event+horizon+white+dwarf+neutron+star+basics

### SENIOR UNIT 9 — Dark Matter and Gravity in Galaxies
**Core explanation:** Dark matter is inferred from gravitational effects. It does not emit, absorb or reflect light in the usual detectable way, but evidence such as galaxy rotation patterns and gravitational lensing suggests there is more gravitating matter than visible matter alone accounts for.

**Must teach:**
- Dark matter is not simply ordinary dark-coloured dust or a black hole; it is a name for matter inferred from its gravitational effects.
- At large distances from a galaxy's centre, stars orbit faster than expected if only visible matter were present (qualitative level).
- Gravitational lensing is another line of evidence (recognition level only).
- Distinguish dark matter from dark energy: this syllabus quiz is focused on dark matter and gravitational evidence; dark energy relates to accelerated expansion and is a different concept.
- Scientists continue to investigate what dark matter is made of; do not state its identity as settled.

**Learning outcomes:** Students can say why dark matter is inferred and give one type of gravitational evidence.

**External links:**
- NASA Space Place — What is dark matter?: https://spaceplace.nasa.gov/dark-matter/en/
- NASA — Dark energy (for distinguishing the concepts): https://science.nasa.gov/dark-energy/
- Wikipedia — Dark matter: https://en.wikipedia.org/wiki/Dark_matter
- Wikipedia — Galaxy rotation curve: https://en.wikipedia.org/wiki/Galaxy_rotation_curve
- Google search: https://www.google.com/search?q=NASA+dark+matter+galaxy+rotation+curves+evidence+students

### SENIOR UNIT 10 — Earth's Axial Tilt and Seasons
**Core explanation:** Earth has seasons because its rotational axis is tilted relative to its orbit. As Earth moves around the Sun, each hemisphere spends part of the year tilted toward the Sun and part tilted away. This changes the angle of incoming sunlight and the length of daylight.

**Must teach:**
- Earth's axis is tilted about 23.5 degrees.
- Hemisphere tilted toward the Sun: higher Sun angle and longer days; usually summer.
- Hemisphere tilted away: lower Sun angle and shorter days; usually winter.
- The Northern and Southern Hemispheres experience opposite seasons.
- Seasons are not primarily caused by Earth's changing distance from the Sun.

**Learning outcomes:** Students can explain the cause of seasons and reject the common misconception that summer occurs because Earth is much closer to the Sun.

**External links:**
- NASA — Seasons on Earth, Mars and Beyond: https://science.nasa.gov/helio-and-you-seasons-on-earth-mars-and-beyond/
- NASA — Educator topics: https://science.nasa.gov/learn/heat/topics/
- Wikipedia — Season: https://en.wikipedia.org/wiki/Season
- Wikipedia — Earth's orbit: https://en.wikipedia.org/wiki/Earth%27s_orbit
- Google search: https://www.google.com/search?q=NASA+why+Earth+has+seasons+axial+tilt+student+explanation

---

## 8. RESOURCES PAGE — BEHAVIOUR AND CONTENT

Create a useful searchable resource catalogue. Each resource tile includes title, short description, source name/domain, topic tags, category level (Junior, Senior or Both), and an external-link icon. Every external link must open in a new tab and use `rel="noopener noreferrer"`.

### Main reference links to feature
- Junior IOAA syllabus: https://ioaastrophysics.org/junior-ioaa/junior-ioaa-syllabus
- IOAA main website: https://ioaastrophysics.org/
- IOAA syllabus resources: https://ioaastrophysics.org/resources/ioaa-syllabus
- IOAA past problems resource: https://ioaastrophysics.org/resources/problems-from-past-ioaa
- NASA Solar System: https://science.nasa.gov/solar-system/
- NASA Space Place for younger learners: https://spaceplace.nasa.gov/
- NASA Space Place Solar System: https://spaceplace.nasa.gov/menu/explore/solar-system/
- NASA Sun and heliophysics education: https://science.nasa.gov/learn/heat/topics/
- NASA star lifecycle: https://science.nasa.gov/mission/webb/star-lifecycle/
- NASA Kepler's laws: https://science.nasa.gov/solar-system/orbits-and-keplers-laws/
- NASA redshift explainer: https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-cosmological-redshift/
- NASA exoplanet transit: https://science.nasa.gov/exoplanets/whats-a-transit/
- NASA infrared astronomy: https://science.nasa.gov/mission/webb/science-overview/science-explainers/infrared-astronomy/
- NASA Radio JOVE educational resources: https://radiojove.gsfc.nasa.gov/education/
- NASA dark matter for students: https://spaceplace.nasa.gov/dark-matter/en/

### Link behaviour
For each unit's “Explore further” section, show at least three distinct items:
1. “Official / educational reference” — NASA, ESA, IOAA or another suitable education source, when available.
2. “Wikipedia overview” — direct article, explicitly marked as a general overview, not an official syllabus.
3. “Search this topic” — real Google search URL focused on the topic. Keep the query pre-filled, e.g. `https://www.google.com/search?q=NASA+Kepler+third+law+worked+examples`.

Do not show raw URLs as the only label; use clear link titles. Do not build fake links. If a URL fails, replace it with a verified page or a Google search for the official domain and topic. The site must not scrape content from external pages; simply link to them.

---

## 9. FUNCTIONAL PRACTICE QUIZZES — EXACT REQUIREMENTS

### Quiz behaviour
Build two separate auto-marked quizzes: Junior and Senior. Each has the 15 MCQs listed below, each worth 1 mark, total 15 marks. The website's practice quizzes use **no negative marking**. Suggested timer: 20 minutes, but the quiz can still be submitted early. Make clear this is the website's practice format, not necessarily the official competition's exam format.

### Before starting
Show title, track, 15 questions, 15 possible marks, suggested time, and a note: “You will see explanations after you submit.” Button: “Start quiz”.

### During quiz
- Display one question at a time, not 15 crowded questions in a long wall of text.
- Progress indicator: `Question 4 of 15`, progress bar and answered count.
- Four radio-button options, single-select only.
- Previous and Next buttons.
- Question navigator with answered/unanswered visual state; navigator is keyboard-accessible.
- On mobile, the navigator collapses.
- Do not reveal correctness before final submission.
- If an unanswered question remains, ask for confirmation before submission; allow the student to submit anyway.
- Optional timer starts after pressing Start; if time reaches zero, auto-submit. Timer must work, pause only if clearly designed, and not reset accidentally on rerender.

### Results
After submit, show:
- Score such as `11 / 15` and percentage.
- Friendly feedback tied to score, not an exaggerated promise.
- Breakdown by topic/unit so students can see what to revise.
- Review mode: every question, chosen answer, correct answer, short explanation and a “Study this unit” link.
- Buttons: “Retry quiz”, “Review incorrect only” and “Back to syllabus”.
- Retaking resets answer choices, timer and result state correctly.
- Persist latest attempt and best score in localStorage only; provide “Reset progress” in settings/about with confirmation. Do not store names, emails or personal data.
- Quiz must be usable with keyboard and screen reader; label each radio choice and announce score after completion.

### Junior MCQ bank (use exactly; correct answer is shown here for implementation only)
Store questions in structured data, e.g. `{ id, unit, question, options, correctIndex, explanation }`. On the student-facing quiz, do not show the answer key until submit.

J1 — Which object is at the centre of our Solar System?
A. Earth | B. The Sun | C. The Moon | D. Jupiter
Correct: B. Explanation: The planets orbit the Sun.

J2 — What causes day and night on Earth?
A. Earth's revolution around the Sun | B. The Moon's orbit | C. Earth's rotation | D. Clouds covering the Sun
Correct: C. Explanation: Earth rotates once roughly every 24 hours.

J3 — Why do we have seasons?
A. Earth's tilt as it orbits the Sun | B. Earth moves much closer to the Sun in summer | C. The Moon blocks sunlight | D. The Sun changes size each season
Correct: A. Explanation: Earth's axial tilt changes the angle and duration of sunlight.

J4 — Which is the largest planet in our Solar System?
A. Earth | B. Mars | C. Saturn | D. Jupiter
Correct: D. Explanation: Jupiter is the largest planet.

J5 — Which planet is famous for its prominent ring system?
A. Mercury | B. Saturn | C. Venus | D. Mars
Correct: B. Explanation: Saturn's rings are especially prominent.

J6 — The Moon shines mainly because it…
A. makes its own visible light | B. reflects sunlight | C. is made of fire | D. reflects light from Earth only
Correct: B. Explanation: The Moon reflects sunlight.

J7 — What is a star?
A. A rocky planet | B. A natural satellite | C. A hot ball of gas producing energy | D. A comet
Correct: C. Explanation: Stars produce energy, mainly through nuclear fusion.

J8 — Why do stars appear to twinkle?
A. They switch on and off | B. Earth's atmosphere bends their light | C. They orbit Earth every second | D. They are smaller than planets
Correct: B. Explanation: Atmospheric turbulence changes the apparent brightness and position of starlight.

J9 — Which object is made mostly of ice, dust and rock and can develop a tail near the Sun?
A. Comet | B. Asteroid only | C. Moon | D. Artificial satellite
Correct: A. Explanation: Solar heating releases gas and dust from a comet.

J10 — What does a satellite do?
A. Always travels to another star | B. Orbits a planet or another body | C. Produces all its own light | D. Never moves
Correct: B. Explanation: Natural and artificial satellites orbit larger bodies.

J11 — Which layer of the Sun do we normally see as its visible surface?
A. Core | B. Photosphere | C. Corona only | D. Radiative zone
Correct: B. Explanation: The photosphere is the visible surface of the Sun.

J12 — What is a lunar eclipse?
A. The Moon passes between Earth and Sun | B. Earth's shadow falls on the Moon | C. The Sun passes behind Mars | D. The Moon disappears permanently
Correct: B. Explanation: A lunar eclipse occurs when the Moon enters Earth's shadow.

J13 — Which galaxy contains our Solar System?
A. Andromeda | B. Whirlpool | C. Milky Way | D. Sombrero
Correct: C. Explanation: Our Solar System is part of the Milky Way.

J14 — What is a telescope mainly used for?
A. Making distant objects easier to observe | B. Changing a planet's orbit | C. Creating stars | D. Stopping Earth's rotation
Correct: A. Explanation: Telescopes collect light or other electromagnetic radiation so distant objects can be studied.

J15 — What is an exoplanet?
A. A planet outside our Solar System | B. A moon of Earth | C. A type of galaxy | D. A space telescope
Correct: A. Explanation: Exoplanets orbit stars beyond our Solar System.

### Senior MCQ bank (use exactly; correct answer is shown here for implementation only)

S1 — A planet completes one orbit in 2 years. Its average orbital distance is approximately how many AU? Use T² = a³, with T in years and a in AU.
A. 1.26 AU | B. 1.59 AU | C. 2 AU | D. 4 AU
Correct: B. Explanation: a³ = 4, so a = cube root of 4 ≈ 1.59 AU.

S2 — What keeps planets in orbit around the Sun?
A. Magnetism alone | B. Gravity combined with their forward motion | C. Air resistance | D. The Sun's light pressure alone
Correct: B. Explanation: Gravity continually changes a planet's direction of motion.

S3 — If a star's surface temperature increases, its peak emission shifts toward which part of the spectrum?
A. Longer wavelengths | B. Shorter wavelengths | C. No change | D. Only radio waves
Correct: B. Explanation: Wien's law says hotter objects peak at shorter wavelengths.

S4 — A star has parallax 0.5 arcseconds. Its distance is…
A. 0.5 parsec | B. 2 parsecs | C. 5 parsecs | D. 10 parsecs
Correct: B. Explanation: Distance in parsecs = 1 / parallax in arcseconds.

S5 — A star has luminosity 4 times a reference star and is 2 times as far away. Using F proportional to L/d², compare its flux with the reference star at its reference distance.
A. Same flux | B. Twice as much | C. Four times as much | D. One-quarter as much
Correct: A. Explanation: Relative flux = 4 / 2² = 1.

S6 — Which process powers the Sun's core?
A. Chemical burning | B. Nuclear fission | C. Hydrogen fusion into helium | D. Radioactive decay only
Correct: C. Explanation: The Sun is powered mainly by nuclear fusion.

S7 — Why does a massive star generally have a shorter lifetime than a low-mass star?
A. It contains no hydrogen | B. It uses its fuel much faster | C. It is always colder | D. It has no gravity
Correct: B. Explanation: High-mass stars generally have much higher luminosities and consume their available fuel rapidly.

S8 — A galaxy's spectrum is shifted toward longer wavelengths. This is commonly called…
A. blueshift | B. redshift | C. parallax | D. eclipse
Correct: B. Explanation: Redshift means spectral features are observed at longer wavelengths.

S9 — What is the main evidence that the universe is expanding?
A. All stars are identical | B. Many distant galaxies show redshift related to distance | C. The Moon has craters | D. Saturn has rings
Correct: B. Explanation: Galaxy redshifts and their relationship with distance support expansion.

S10 — Which method can detect an exoplanet by measuring a small, repeated dip in a star's brightness?
A. Transit | B. Direct radio broadcast | C. Lunar eclipse | D. Parallax alone
Correct: A. Explanation: A planet passing in front of its star blocks a small fraction of its light.

S11 — Why are radio telescopes useful?
A. They detect radio wavelengths from space | B. They work only underwater | C. They eliminate gravity | D. They can see only the Moon
Correct: A. Explanation: Radio telescopes study radio emission from astronomical sources.

S12 — What is a black hole's event horizon?
A. A solid surface | B. The boundary beyond which light cannot escape to a distant observer | C. The centre of every galaxy | D. A cloud of ice
Correct: B. Explanation: It marks the boundary of no return for light travelling outward.

S13 — The Sun's total energy output per unit time is called its…
A. parallax | B. luminosity | C. declination | D. eccentricity
Correct: B. Explanation: Luminosity is the total energy emitted per unit time.

S14 — What is dark matter inferred to do on galactic scales?
A. Emit bright visible light | B. Contribute gravity without emitting detectable light in the usual way | C. Stop galaxies rotating | D. Destroy all stars
Correct: B. Explanation: Its gravitational effects help explain observations such as galaxy rotation curves.

S15 — What is the main reason seasons differ between hemispheres?
A. Earth's tilt makes the hemispheres receive different sunlight angles and day lengths | B. The Sun turns off in winter | C. Earth's orbit stops | D. The Moon changes Earth's temperature directly
Correct: A. Explanation: Axial tilt changes seasonal sunlight and daylight duration.

### Quiz content tagging
Tag each quiz question with one syllabus unit so results can say, for example, “Review Earth, Moon and Sun” or “Review Stellar Brightness and Distance”. Map tags consistently:
- Junior: J1/J4/J5 → Solar System; J2/J3/J6/J12 → Earth, Moon and Sun; J7/J8/J11 → Stars and Light; J9/J10/J14 → Space Technology; J13/J15 → Wider Universe; add inverse-square practice in unit checks for Light Intensity.
- Senior: S1/S2 → Gravity and Orbits; S4/S5/S13 → Brightness and Distance; S3 → Star Temperature; S6/S7 → Sun and Stellar Lifetimes; S8/S9 → Redshift and Universe; S10 → Exoplanets; S11 → Telescopes; S12 → Compact Remnants; S14 → Dark Matter; S15 → Seasons.

---

## 10. UNIT CHECKS AND QUESTION AUTHORING RULES

Create 3 MCQs per lesson unit in addition to the main 15-question paper. Make these short and low-stakes. Avoid questions with disputed wording or multiple defensible answers. Each question needs:
- one unambiguously correct option;
- plausible distractors based on common misconceptions;
- a one- or two-sentence explanation;
- a tag to the corresponding unit;
- an accessible radio control;
- “Try again” feedback without shaming the student.

Do not use advanced questions merely to make the content feel difficult. The goal is foundation-level understanding and confident preparation.

---

## 11. PROGRESS, STATE AND DATA

No sign-in is required. Use localStorage (or the platform's simplest reliable local persistence) for:
- completed units per track;
- latest Junior score and best Junior score;
- latest Senior score and best Senior score;
- last study page if easy to implement.

Requirements:
- The site still works if localStorage is unavailable; in that case progress remains for the current session.
- Do not collect names, email, phone number, school name or any personal data.
- Add a “Clear my local progress” control with a confirmation step.
- Show a concise note: “Progress is saved in this browser on this device.”
- Do not state that progress syncs between devices.
- No external analytics are necessary.

---

## 12. ACCESSIBILITY, QUALITY AND PERFORMANCE

- Semantic HTML landmarks, one H1 per page, logical heading order.
- Full keyboard navigation, visible focus rings, no colour-only signals.
- Proper labels for forms and quiz options; announce changing score/results to assistive technology.
- Alt text for meaningful images; decorative images are ignored by screen readers.
- Sufficient colour contrast; do not place tiny text over stars or photos.
- Equations must remain readable on mobile; use MathJax/KaTeX or readable text notation if available.
- Images optimised and lazy-loaded; avoid video autoplay.
- External links indicate when they open a new tab.
- Avoid unnecessary animation and honour `prefers-reduced-motion`.
- Good empty, error and loading states.
- No dead links, blank content cards, fake search bar, decorative buttons that do nothing, placeholder text, lorem ipsum, console errors or fake quiz scoring.

### Search function
Implement a working site-wide topic search over lesson titles, keywords, glossary terms and resource titles. Results should link to the corresponding unit or reference. If full search is not supported, implement a functional filtered list; do not render a search box that does nothing.

### Navigation and completion states
- Selected navigation state must update correctly.
- “Mark complete” updates the completion meter and unit state.
- “Next unit” goes to the next unit in the selected track.
- Breadcrumb links navigate to the correct page.
- All CTA buttons must have a real outcome.

---

## 13. BUILD/IMPLEMENTATION REQUIREMENTS

Use the stack supported best by the website builder. If a modern frontend stack is supported, prefer React + TypeScript with reusable components and a simple routing method. Keep question data and lesson data in structured arrays or JSON rather than duplicating UI code.

Suggested components:
- `SiteHeader`, `SiteFooter`, `HeroSection`, `TrackCard`, `UnitCard`, `LessonLayout`, `LearningGoals`, `KeyTerms`, `FormulaPanel`, `ResourceLinks`, `UnitCheckQuiz`, `PracticeQuiz`, `QuizResults`, `ProgressMeter`, `ResourceLibrary`, `DisclaimerNotice`.

Keep the site maintainable:
- One source of truth for course units.
- One source of truth for quiz questions and answer keys.
- Use IDs/slugs that do not depend on displayed titles.
- Keep lesson text separate from layout components.
- Avoid arbitrary hard-coded results and do not calculate the score until submission.
- Use the real correctness data in the question bank for scoring.

If backend or database is unavailable, do **not** block implementation. This site can be fully functional on the frontend with localStorage.

---

## 14. SEO AND METADATA

Page title: `OrbitLearn | Astronomy Olympiad Preparation`
Meta description: `Learn introductory astronomy with Junior and Senior study guides, trusted references and instant-marking practice quizzes.`
Open Graph title: `OrbitLearn — Understand the Universe`
Open Graph description: `Topic-by-topic astronomy learning and practice quizzes for Junior and Senior students.`
Use one canonical internal route per page if supported. Do not add unverified official-event names into SEO titles or claim “official NASA preparation”.

---

## 15. ABOUT / FAQ COPY

**What is OrbitLearn?**
OrbitLearn is an independent learning resource for students studying introductory astronomy. It offers topic-based lessons, links to further reading, and practice multiple-choice quizzes.

**Is OrbitLearn an official NASA or IOAA website?**
No. OrbitLearn is independent and is not affiliated with, sponsored by, or endorsed by NASA, IOAA or any event organiser. External references are linked to help students explore reliable information.

**Will these lessons match my competition exactly?**
They are aligned to the Junior and Senior practice papers on OrbitLearn. Competition syllabuses and rules may differ, so students should confirm official requirements with their organiser.

**Are the practice quizzes official exam papers?**
No. They are practice questions for learning and revision, not official examination questions.

**Does the website save my results?**
It can save completion and best scores in the current browser on the current device. No account is required, and progress does not automatically sync between devices.

---

## 16. ACCEPTANCE CHECKLIST — DO NOT FINISH UNTIL ALL WORK

Before presenting the completed site, test each item:

### Design
- [ ] Looks polished on desktop and phone.
- [ ] Palette, type, spacing, cards, buttons and icons are consistent.
- [ ] Hero is distinctive but not cluttered or falsely NASA-branded.
- [ ] Lesson pages are readable and avoid long, dense text walls.

### Content
- [ ] All 6 Junior units exist with real explanatory text, learning outcomes, glossary, common mistakes and resource links.
- [ ] All 10 Senior units exist with real explanatory text, formula explanations and examples where relevant.
- [ ] Every unit has NASA/educational, Wikipedia and Google search links where specified.
- [ ] No claim says this is the official syllabus for the advertised competition.
- [ ] Scientific explanations and units are correct.

### Quiz
- [ ] Junior quiz has all 15 specified MCQs and correct answers.
- [ ] Senior quiz has all 15 specified MCQs and correct answers.
- [ ] Score is correct: 1 point per correct answer, max 15.
- [ ] Correct answers remain hidden until submit.
- [ ] Explanations and correct answers appear in review mode.
- [ ] Incorrect-question-only review works.
- [ ] Retry resets quiz state and timer.
- [ ] Timer and submission logic do not break when moving between questions.
- [ ] Topic breakdown links back to relevant lesson units.

### Functional and accessibility
- [ ] All navigation, links, search and buttons work.
- [ ] Progress persists locally and can be cleared with confirmation.
- [ ] No account or backend is required for core functionality.
- [ ] Keyboard and screen-reader basics are supported.
- [ ] No horizontal overflow at 360px width.
- [ ] No console errors or placeholder pages.
- [ ] External links open safely in new tabs.

### Final handoff
When complete, provide a short summary of implemented pages and features, any functions that the platform could not implement, and how I can edit lesson text or add questions later. Do not just describe what should be built—build the functioning site.

---

# END OF MASTER BUILD PROMPT
