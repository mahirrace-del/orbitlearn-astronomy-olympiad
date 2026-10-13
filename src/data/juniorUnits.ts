import { LessonUnit } from '../types';

export const juniorUnits: LessonUnit[] = [
  {
    id: 'j-unit-1',
    slug: 'solar-system',
    track: 'junior',
    unitNumber: 1,
    title: 'Our Solar System',
    introduction:
      'The Solar System is our cosmic neighbourhood, bound together by the immense gravitational pull of the Sun. Understanding how planets and minor bodies orbit our star provides the foundational building block for all observational astronomy.',
    estimatedTime: '10–12 minutes',
    learningGoals: [
      'Identify the Sun as a star at the gravitational center of our planetary system.',
      'List the eight planets in exact orbital order from closest to farthest from the Sun.',
      'Distinguish between inner terrestrial planets and outer gas/ice giants.',
      'Explain how gravity keeps planets in stable elliptical orbits.',
      'Differentiate between a solar system and a galaxy.'
    ],
    sections: [
      {
        heading: 'The Central Star and Planetary Order',
        content: [
          'At the very centre of our Solar System sits the Sun, an average yellow dwarf star (spectral class G2V) that contains more than 99.8% of the total mass of the entire system.',
          'Eight major planets orbit the Sun in roughly the same flat plane (the ecliptic). In order of increasing distance from the Sun, they are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.',
          'A popular memory aid to remember this sequence is: "My Very Educated Mother Just Served Us Noodles".'
        ]
      },
      {
        heading: 'Rocky Terrestrial Worlds vs Giant Outer Planets',
        content: [
          'The four inner planets (Mercury, Venus, Earth, and Mars) are terrestrial planets. They are composed primarily of rock and metal, possess solid surfaces you could stand on, and have few or no natural moons.',
          'Beyond the Asteroid Belt lie the four outer giants. Jupiter and Saturn are gas giants, made overwhelmingly of hydrogen and helium gas wrapped around dense cores. Jupiter is the largest planet in our Solar System, with more mass than all other planets combined, while Saturn is famous for its bright, prominent system of icy rings.',
          'Uranus and Neptune are classified as ice giants. Their thick atmospheres contain heavier volatile compounds, including water, ammonia, and methane ice, which give them their distinctive pale cyan and deep azure hues.'
        ],
        analogy:
          'Think of the inner planets like dense solid pebbles near a campfire, while the outer giants are like huge billowing clouds of steam floating in the chilly darkness farther away.'
      },
      {
        heading: 'Gravity: The Cosmic Anchor',
        content: [
          'Planets remain in orbit due to the attractive force of gravity acting continuously between each planet and the Sun.',
          'Sir Isaac Newton showed that every object with mass attracts every other object. A planet is moving forward through space at high speed; without gravity, it would fly off into the dark in a straight line. The Sun’s gravitational pull constantly bends this straight path into a closed orbital loop.',
          'Crucially, space is an airless vacuum: planets do not orbit because of "space wind" or because the Sun pushes them outward. Gravity is strictly an attractive pull.'
        ]
      },
      {
        heading: 'Satellites and Scale: Solar System vs Galaxy',
        content: [
          'Objects that circle planets are called satellites. Natural satellites are moons (such as Earth’s Moon, Jupiter’s Ganymede, and Saturn’s Titan). Artificial satellites are human-engineered spacecraft launched to orbit Earth or other planets for communications, weather monitoring, and science.',
          'A common beginner confusion is mixing up our Solar System with a galaxy. Our Solar System contains just one star (the Sun) and its orbiting bodies, spanning a few light-hours across. Our galaxy, the Milky Way, is an enormous spiral city containing over 100 to 400 billion stars and their solar systems, spanning roughly 100,000 light-years.'
        ]
      }
    ],
    diagram: {
      type: 'solar-system',
      caption: 'The eight planets orbiting the Sun in order: terrestrial inner worlds and massive outer gas/ice giants.',
      altText: 'Diagram illustrating the Sun at the center with Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune in orbital order.'
    },
    keyIdeas: [
      'The Sun is a star at the centre containing 99.8% of the Solar System’s mass.',
      'Order from Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.',
      'Inner 4 are rocky terrestrial planets; outer 4 are giants (Jupiter & Saturn = gas giants, Uranus & Neptune = ice giants).',
      'Jupiter is the largest planet; Saturn has the most prominent ring system.',
      'Gravity continually pulls planets toward the Sun, curving their forward motion into orbits.',
      'Our Solar System is a single star system inside the Milky Way galaxy, which contains hundreds of billions of stars.'
    ],
    keyTerms: [
      {
        term: 'Terrestrial Planet',
        definition: 'A planet with a compact, rocky surface like Earth, Mercury, Venus, or Mars.'
      },
      {
        term: 'Gas Giant',
        definition: 'A large planet composed mostly of hydrogen and helium, specifically Jupiter and Saturn.'
      },
      {
        term: 'Ice Giant',
        definition: 'A giant planet containing heavier elements such as water, ammonia, and methane, namely Uranus and Neptune.'
      },
      {
        term: 'Satellite',
        definition: 'Any body that orbits a larger astronomical object; can be natural (a moon) or artificial (human-made spacecraft).'
      },
      {
        term: 'Milky Way',
        definition: 'The vast barred spiral galaxy containing our Solar System and hundreds of billions of other stars.'
      }
    ],
    commonMistakes: [
      'Believing the Sun is not a star, or that it sits at the centre of the entire universe rather than just our Solar System.',
      'Thinking planets orbit because the Sun "pushes" them or because space has winds.',
      'Confusing the Solar System (one star and 8 planets) with the entire Milky Way Galaxy.',
      'Listing Pluto as one of the eight major planets (Pluto was reclassified by the IAU as a dwarf planet in 2006).'
    ],
    checkQuestions: [
      {
        id: 'jc-1-1',
        question: 'Which planet is the largest in our entire Solar System?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        correctIndex: 2,
        explanation: 'Jupiter is by far the largest planet, containing more mass than all other planets in the Solar System combined.'
      },
      {
        id: 'jc-1-2',
        question: 'What keeps the Earth in a stable orbit around the Sun?',
        options: [
          'Solar wind blowing against Earth’s atmosphere',
          'Gravitational attraction between Earth and the Sun bending its forward path',
          'Magnetic repulsion pushing Earth outward',
          'The pressure of sunlight pushing on Earth’s oceans'
        ],
        correctIndex: 1,
        explanation: 'Gravity pulls Earth toward the Sun, constantly turning its forward velocity into an orbital path.'
      },
      {
        id: 'jc-1-3',
        question: 'Which of the following correctly describes the relationship between the Solar System and the Milky Way?',
        options: [
          'The Solar System contains billions of galaxies',
          'The Milky Way is one small planet inside our Solar System',
          'Our Solar System is just one star system inside the vast Milky Way galaxy',
          'The Solar System and the Milky Way are two identical names for the same object'
        ],
        correctIndex: 2,
        explanation: 'The Milky Way is our home galaxy containing hundreds of billions of stars; our Solar System is just one single system inside it.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA Solar System Exploration',
        url: 'https://science.nasa.gov/solar-system/exploration/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Comprehensive educational guide to the planets and missions exploring our cosmic backyard.'
      },
      {
        title: 'NASA Solar System Overview',
        url: 'https://science.nasa.gov/solar-system/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Official NASA gateway to data and imagery of the Sun, planets, and minor bodies.'
      },
      {
        title: 'Wikipedia: Solar System',
        url: 'https://en.wikipedia.org/wiki/Solar_System',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Detailed encyclopaedic overview of planetary formation, structure, and orbits.'
      },
      {
        title: 'Google Search: NASA Solar System Eight Planets',
        url: 'https://www.google.com/search?q=NASA+solar+system+eight+planets+for+students',
        source: 'google.com',
        type: 'search',
        description: 'Explore verified student articles, interactive 3D planet models, and classroom guides.'
      }
    ]
  },
  {
    id: 'j-unit-2',
    slug: 'earth-moon-sun',
    track: 'junior',
    unitNumber: 2,
    title: 'Earth, Moon and Sun',
    introduction:
      'The dance of Earth, our Moon, and the Sun creates the fundamental cycles of human life: day and night, the four seasons, the changing phases of the Moon, and dramatic solar and lunar eclipses.',
    estimatedTime: '10–12 minutes',
    learningGoals: [
      'Distinguish between Earth’s rotation on its axis and its orbital revolution around the Sun.',
      'Explain why Earth’s 23.5° axial tilt causes seasons rather than distance from the Sun.',
      'Understand that the Moon shines purely by reflecting sunlight.',
      'Describe how changing Sun–Earth–Moon geometry produces lunar phases.',
      'Explain the geometry of lunar and solar eclipses and why they do not occur every single month.'
    ],
    sections: [
      {
        heading: 'Rotation vs Revolution: Day and Night',
        content: [
          'Earth performs two distinct motions at the same time: rotation and revolution.',
          'Rotation is the spinning of Earth around its own internal imaginary axis. Earth takes roughly 24 hours (one day) to complete one rotation from west to east. As Earth spins, whichever side faces the Sun experiences daytime, while the side turned away experiences night.',
          'Revolution is Earth’s journey in orbit around the Sun. Earth completes one full orbital revolution approximately every 365.25 days (one year).'
        ]
      },
      {
        heading: 'Axial Tilt and the Cause of Seasons',
        content: [
          'Earth’s axis of rotation is tilted by approximately 23.5 degrees relative to a line perpendicular to its orbital plane (the ecliptic).',
          'Crucially, seasons are NOT caused by Earth being closer to or farther from the Sun! Earth’s orbit is nearly circular (perihelion is around January 3, when the Northern Hemisphere is in the depths of winter).',
          'When the Northern Hemisphere is tilted toward the Sun, sunlight strikes the ground more directly (at a higher angle), concentrating heat energy. Days are also longer than nights. This creates summer in the north. At the exact same time, the Southern Hemisphere is tilted away from the Sun, receiving shallow, spread-out sunlight and shorter days, causing winter.'
        ],
        analogy:
          'Hold a flashlight straight down onto a desk: the light forms a small, intensely bright, hot circle. Tilt the flashlight at an angle: the same light spreads out across a wide oval, making each patch of surface much cooler.'
      },
      {
        heading: 'The Moon and Its Phases',
        content: [
          'The Moon does not produce its own visible light. It shines solely because its rocky, dusty surface (regolith) acts like a rough mirror, reflecting sunlight back to Earth.',
          'At any given moment, exactly half of the Moon is illuminated by the Sun (except during eclipses). As the Moon orbits Earth once every ~29.5 days (synodic month), our perspective on that sunlit half changes.',
          'When the Moon is between Earth and the Sun, the illuminated side faces away from us, producing a New Moon. As it moves around Earth, we see a growing crescent, First Quarter (half lit), Gibbous, and finally Full Moon (when the Moon is opposite the Sun and we see the entire sunlit face).'
        ]
      },
      {
        heading: 'Solar and Lunar Eclipses',
        content: [
          'A lunar eclipse occurs when Earth passes directly between the Sun and the Moon. Earth casts a long shadow into space, and the Full Moon moves into this shadow. During totality, sunlight filtered and bent through Earth’s atmosphere casts a reddish glow on the Moon (often called a "blood moon").',
          'A solar eclipse occurs when the Moon passes directly between the Sun and Earth at New Moon, casting its small shadow onto Earth and temporarily blocking the Sun.',
          'Why do eclipses not happen every single month? The Moon’s orbital plane around Earth is tilted by about 5 degrees relative to Earth’s orbit around the Sun. Most months, the Moon passes slightly above or below the direct Sun–Earth line. Eclipses can only occur when the Moon crosses the plane of Earth’s orbit at special crossing points called nodes.'
        ]
      }
    ],
    diagram: {
      type: 'seasons-tilt',
      caption: 'Earth’s 23.5° axial tilt causes seasonal variations in sunlight angle and day length between hemispheres.',
      altText: 'Diagram of Earth tilted at 23.5 degrees orbiting the Sun, showing direct sunlight on the summer hemisphere and shallow sunlight on the winter hemisphere.'
    },
    keyIdeas: [
      'Rotation on Earth’s axis takes 24 hours and causes day and night.',
      'Revolution around the Sun takes ~365.25 days (one year).',
      'Seasons are caused by Earth’s 23.5° axial tilt, NOT distance from the Sun.',
      'The Moon makes no light of its own; it reflects sunlight.',
      'Phases result from seeing differing proportions of the Moon’s illuminated hemisphere as it orbits Earth.',
      'In a lunar eclipse, Earth’s shadow falls on the Moon.',
      'Eclipses happen only during eclipse seasons because the Moon’s orbit is tilted ~5° to Earth’s orbit.'
    ],
    keyTerms: [
      {
        term: 'Axial Tilt (Obliquity)',
        definition: 'The angle between an object’s rotational axis and its orbital plane (approx. 23.5° for Earth).'
      },
      {
        term: 'Rotation',
        definition: 'The spinning of a celestial body on its own axis (takes ~24 hours for Earth).'
      },
      {
        term: 'Revolution',
        definition: 'The orbital motion of one body around another (takes ~1 year for Earth around the Sun).'
      },
      {
        term: 'Lunar Eclipse',
        definition: 'An event where Earth moves directly between the Sun and Moon, casting Earth’s shadow onto the Moon.'
      },
      {
        term: 'Solar Eclipse',
        definition: 'An event where the Moon passes directly between the Sun and Earth, blocking sunlight from reaching parts of Earth.'
      }
    ],
    commonMistakes: [
      'Believing summer happens because Earth is physically closer to the Sun in space.',
      'Thinking the Moon shines by nuclear fire or generates its own visible light.',
      'Confusing Moon phases with eclipses (phases are caused by viewing angle of sunlit halves, not by Earth’s shadow).',
      'Assuming a lunar eclipse should occur every single full moon.'
    ],
    checkQuestions: [
      {
        id: 'jc-2-1',
        question: 'What is the primary cause of Earth’s seasons throughout the year?',
        options: [
          'Earth moving significantly closer to the Sun during the summer months',
          'Earth’s axial tilt of ~23.5° as it orbits the Sun',
          'The Moon blocking solar heat during winter',
          'Variations in the Sun’s core nuclear fusion rate'
        ],
        correctIndex: 1,
        explanation: 'Earth’s axial tilt causes each hemisphere to receive more direct sunlight and longer daylight hours during its summer.'
      },
      {
        id: 'jc-2-2',
        question: 'Why does the Moon shine in the night sky?',
        options: [
          'It produces its own light through volcanic activity',
          'It undergoes nuclear fusion in its core',
          'It reflects sunlight back toward Earth',
          'It glows from light absorbed from the Earth only'
        ],
        correctIndex: 2,
        explanation: 'The Moon has no internal light source; its rocky surface simply reflects sunlight.'
      },
      {
        id: 'jc-2-3',
        question: 'Why does a lunar eclipse not happen every month at Full Moon?',
        options: [
          'Earth’s shadow is too small to ever hit the Moon most months',
          'The Moon’s orbit is tilted by about 5 degrees relative to Earth’s orbital plane',
          'The Moon switches off its reflection',
          'The Sun moves too fast for shadows to form'
        ],
        correctIndex: 1,
        explanation: 'Because the Moon’s orbital plane is tilted by ~5°, the Full Moon usually passes above or below Earth’s shadow cone.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA Helio: Seasons on Earth, Mars and Beyond',
        url: 'https://science.nasa.gov/helio-and-you-seasons-on-earth-mars-and-beyond/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'NASA explainer on planetary axial tilts, solar radiation angles, and seasons.'
      },
      {
        title: 'NASA: Why Eclipses Happen (Geometry)',
        url: 'https://science.nasa.gov/eclipses/geometry/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Visual guides explaining eclipse geometry, the lunar orbital tilt, and nodes.'
      },
      {
        title: 'Wikipedia: Lunar Eclipse',
        url: 'https://en.wikipedia.org/wiki/Lunar_eclipse',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Detailed article detailing the umbra, penumbra, and atmospheric Rayleigh scattering during eclipses.'
      },
      {
        title: 'Google Search: NASA Moon phases and eclipses for students',
        url: 'https://www.google.com/search?q=NASA+Moon+phases+seasons+eclipses+for+students',
        source: 'google.com',
        type: 'search',
        description: 'Find interactive diagrams, lunar phase calendars, and educational activities.'
      }
    ]
  },
  {
    id: 'j-unit-3',
    slug: 'stars-and-light',
    track: 'junior',
    unitNumber: 3,
    title: 'Stars and Light',
    introduction:
      'Stars are massive luminous spheres of plasma powered by nuclear fusion in their cores. Exploring why stars shine, what their colours reveal about temperature, and why they appear to twinkle from Earth unlocks the science of starlight.',
    estimatedTime: '9–11 minutes',
    learningGoals: [
      'Define what a star is and distinguish it from a planet.',
      'Identify nuclear fusion as the fundamental power source of the Sun and stars.',
      'Explain how star colour reveals surface temperature (blue is hottest, red is coolest).',
      'Explain atmospheric refraction and why stars appear to twinkle while planets generally do not.',
      'Clarify that stars do not literally turn on and off.'
    ],
    sections: [
      {
        heading: 'What is a Star? Nuclear Fusion',
        content: [
          'A star is an enormous, self-luminous ball of hot gas and plasma held together by its own immense gravity.',
          'Unlike planets, which are cold and shine only by reflecting light, stars generate their own intense light and heat through nuclear fusion in their extreme cores.',
          'In the core of the Sun (where temperatures exceed 15 million degrees Celsius and pressures are tremendous), hydrogen nuclei (protons) are squeezed together and fused into helium nuclei. In this fusion reaction, a small fraction of mass is converted directly into energy according to Einstein’s E = mc², radiating outward into space.'
        ]
      },
      {
        heading: 'Star Colours and Surface Temperatures',
        content: [
          'When you gaze up at the night sky, stars are not all the same colour. Some appear distinctly reddish (like Betelgeuse in Orion), while others shine brilliant blue-white (like Rigel in Orion) or yellow-white (like our Sun).',
          'A star’s colour is an immediate clue to its surface temperature:',
          '• Blue and blue-white stars are the hottest, with surface temperatures ranging from 10,000 K to over 30,000 K.',
          '• Yellow stars (like our Sun) have intermediate temperatures around 5,800 K.',
          '• Red stars are the coolest, with surface temperatures around 2,500 K to 3,500 K.'
        ],
        analogy:
          'Think of a piece of iron in a blacksmith’s forge: as it warms up, it first glows dull red, then bright orange-yellow, and when it becomes exceedingly hot, it glows dazzling white-blue.'
      },
      {
        heading: 'Why Do Stars Twinkle? (Scintillation)',
        content: [
          'When starlight reaches Earth, it has travelled billions of kilometres through empty space without disruption. However, in the final millisecond of its journey, it passes through Earth’s turbulent atmosphere.',
          'Earth’s atmosphere consists of moving pockets and layers of air with differing temperatures and densities. As starlight passes through these shifting layers, the light rays are repeatedly bent and refracted in slightly different directions.',
          'Because stars are so unimaginably distant, they appear as pinpoint sources of light. Shifting air pockets rapidly divert and refocus this pinpoint beam, causing rapid fluctuations in brightness and colour known scientifically as astronomical scintillation (twinkling).',
          'Importantly, stars do NOT switch on and off in space! If you view stars from above the atmosphere (such as from the Hubble Space Telescope or the International Space Station), they shine with steady, unwavering brightness.'
        ]
      },
      {
        heading: 'Why Planets Usually Do Not Twinkle',
        content: [
          'Planets in our Solar System are much closer to Earth than distant stars. When viewed through a telescope, a planet is seen not as an infinitely tiny point, but as a small visible disk.',
          'Light rays from many different points across the planet’s disk pass through the atmosphere simultaneously. While atmospheric turbulence might bend the light from the left edge of the disk slightly one way, it bends light from the right edge another way. These tiny shifts average out, resulting in a steady, calm glow.'
        ]
      }
    ],
    diagram: {
      type: 'star-fusion',
      caption: 'Nuclear fusion in the stellar core powers stars, while atmospheric refraction causes starlight to twinkle.',
      altText: 'Diagram showing hydrogen fusing into helium inside a stellar core, emitting photons that travel through Earth’s atmosphere where turbulence causes scintillation.'
    },
    keyIdeas: [
      'A star is a self-luminous sphere of plasma powered by core nuclear fusion.',
      'The Sun fuses hydrogen into helium in its core at ~15 million Kelvin.',
      'Colour reveals temperature: blue-white stars are the hottest; red stars are the coolest.',
      'Stars twinkle because Earth’s turbulent air bends their pinpoint light rays.',
      'Stars do not actually switch on and off; in space, their light is rock-steady.',
      'Planets twinkle far less because they are close enough to act as extended disks whose fluctuations average out.'
    ],
    keyTerms: [
      {
        term: 'Nuclear Fusion',
        definition: 'The process where lighter atomic nuclei fuse into heavier nuclei under extreme heat and pressure, releasing energy.'
      },
      {
        term: 'Plasma',
        definition: 'An ionized state of matter where electrons are stripped away from atomic nuclei, making up stars.'
      },
      {
        term: 'Scintillation',
        definition: 'The rapid variation in apparent brightness or position of a distant point source caused by atmospheric turbulence (twinkling).'
      },
      {
        term: 'Photosphere',
        definition: 'The visible surface layer of a star from which light escapes into space.'
      }
    ],
    commonMistakes: [
      'Thinking stars twinkle because they physically flicker or pulse like lightbulbs.',
      'Believing red stars are the hottest because red is associated with heat in everyday plumbing faucets.',
      'Assuming the Sun burns via chemical combustion (like wood or coal) rather than nuclear fusion.',
      'Confusing the visible brightness of a star with its true surface temperature.'
    ],
    checkQuestions: [
      {
        id: 'jc-3-1',
        question: 'What fundamental process powers the core of the Sun and main-sequence stars?',
        options: [
          'Burning coal and fossil fuels',
          'Nuclear fusion of hydrogen into helium',
          'Gravitational friction from colliding asteroids',
          'Electric lightning storms across the surface'
        ],
        correctIndex: 1,
        explanation: 'Main-sequence stars fuse hydrogen into helium in their cores under immense pressure and temperature.'
      },
      {
        id: 'jc-3-2',
        question: 'Which of the following star colours indicates the highest surface temperature?',
        options: ['Deep red', 'Warm orange', 'Yellow (like our Sun)', 'Blue-white'],
        correctIndex: 3,
        explanation: 'Blue-white stars have surface temperatures exceeding 10,000–30,000 K, making them far hotter than yellow or red stars.'
      },
      {
        id: 'jc-3-3',
        question: 'Why do stars appear to twinkle when observed from the ground on Earth?',
        options: [
          'Stars rapidly switch their nuclear fusion on and off',
          'Earth’s shifting, turbulent atmosphere refracts and bends the pinpoint starlight',
          'The Moon regularly passes in front of every star every few seconds',
          'Space dust passes between Earth and the stars in rapid pulses'
        ],
        correctIndex: 1,
        explanation: 'Earth’s moving atmospheric layers with varying temperatures and densities bend the narrow starlight beams.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA APOD: Why Stars Twinkle',
        url: 'https://science.nasa.gov/image-article/apod-2000-july-25-why-stars-twinkle/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Astronomy Picture of the Day guide detailing atmospheric scintillation and adaptive optics.'
      },
      {
        title: 'NASA: Star Lifecycle and Webb Observations',
        url: 'https://science.nasa.gov/mission/webb/star-lifecycle/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Learn how protostars ignite fusion, evolve through stellar stages, and return material to the cosmos.'
      },
      {
        title: 'Wikipedia: Atmospheric Refraction',
        url: 'https://en.wikipedia.org/wiki/Atmospheric_refraction',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Detailed explanation of the deviation of light rays passing through Earth’s atmosphere.'
      },
      {
        title: 'Google Search: NASA why stars twinkle star vs planet for students',
        url: 'https://www.google.com/search?q=NASA+why+stars+twinkle+star+vs+planet+for+students',
        source: 'google.com',
        type: 'search',
        description: 'Find interactive classroom demonstrations and video explainers on starlight.'
      }
    ]
  },
  {
    id: 'j-unit-4',
    slug: 'comets-satellites-space-tech',
    track: 'junior',
    unitNumber: 4,
    title: 'Comets, Satellites and Space Technology',
    introduction:
      'From icy wanderers of the outer Solar System to human-made orbiters and giant telescopes, modern astronomy relies on understanding celestial debris and the engineering feats that allow us to observe them.',
    estimatedTime: '10–12 minutes',
    learningGoals: [
      'Distinguish between icy comets and rocky/metallic asteroids.',
      'Explain why a comet’s tail always points away from the Sun regardless of travel direction.',
      'Differentiate between natural and artificial satellites and list key satellite functions.',
      'Describe how telescopes collect and focus light to observe distant objects.',
      'Understand the foundational role of rockets in providing thrust to escape Earth’s gravity.'
    ],
    sections: [
      {
        heading: 'Comets vs Asteroids: Dirty Snowballs vs Rocky Fragments',
        content: [
          'Both comets and asteroids are small remnants left over from the formation of the Solar System 4.6 billion years ago, but their compositions and origins differ fundamentally.',
          'Asteroids are rocky, metallic bodies that formed mostly in the warm inner Solar System, predominantly found in the Asteroid Belt between Mars and Jupiter.',
          'Comets are often described as "dirty snowballs" or "icy dirtballs." They originate in the cold outer fringes of the Solar System (the Kuiper Belt and distant Oort Cloud). Comets contain substantial amounts of water ice, frozen carbon dioxide, methane, ammonia, and embedded dust grains.'
        ]
      },
      {
        heading: 'Anatomy of a Comet and the Mystery of the Tail',
        content: [
          'Far from the Sun, a comet is just a frozen, dark nucleus only a few kilometres wide.',
          'As a comet’s highly elliptical orbit brings it closer to the Sun, solar radiation heats its surface. The ices vaporize directly into gas (sublimation), forming a glowing cloud around the nucleus called a coma.',
          'Crucially, a comet usually develops two prominent tails: an ion (gas) tail and a dust tail. These tails do NOT simply trail behind the comet like smoke behind a speeding car! Instead, they are pushed directly AWAY from the Sun by the pressure of sunlight (radiation pressure) and the solar wind (a stream of charged particles flowing outward from the Sun).',
          'This means when a comet is travelling away from the Sun, its tail actually points ahead of it!'
        ],
        analogy:
          'Imagine standing in front of a giant high-powered fan with long streamers of ribbon: no matter which direction you walk, the ribbons will always blow away from the fan.'
      },
      {
        heading: 'Satellites: Eyes in the Sky',
        content: [
          'A satellite is any body that orbits a larger astronomical object.',
          'Natural satellites are celestial moons created by nature (like Earth’s Moon or the moons of Mars, Phobos and Deimos).',
          'Artificial satellites are engineered spacecraft placed in Earth orbit by rockets. They serve critical modern functions:',
          '• Communications: Relaying television, internet, and international calls worldwide.',
          '• Weather Forecasting: Monitoring storm systems, hurricanes, and cloud cover in real time.',
          '• Navigation: Global positioning systems (like GPS) that allow precise location tracking.',
          '• Earth Observation: Measuring deforestation, ocean temperatures, and climate change.',
          '• Scientific Research: Observing cosmic phenomena without atmospheric interference (e.g., Hubble, James Webb Space Telescope).'
        ]
      },
      {
        heading: 'Telescopes and Rockets',
        content: [
          'A telescope is an optical or electronic instrument designed to collect and focus electromagnetic radiation (visible light, infrared, radio, etc.). By gathering far more light than the small pupil of the human eye can, telescopes allow astronomers to resolve fine details and see exceedingly faint, distant objects.',
          'Rockets provide the thrust needed to launch satellites and probes into space. By expelling high-speed exhaust gases downward, Newton’s third law of motion ("for every action, there is an equal and opposite reaction") generates an upward reaction force strong enough to overcome Earth’s gravity.'
        ]
      }
    ],
    diagram: {
      type: 'comet-tail',
      caption: 'A comet’s tails always point away from the Sun due to solar wind and radiation pressure.',
      altText: 'Diagram of a comet orbiting the Sun, showing its gas and dust tails pointing directly away from the Sun regardless of whether it is approaching or receding.'
    },
    keyIdeas: [
      'Comets are rich in ice, dust, and volatiles; asteroids are primarily rocky and metallic.',
      'Solar heating sublimates cometary ice, producing a coma and tails.',
      'A comet’s tail always points away from the Sun because of solar wind and radiation pressure.',
      'Natural satellites are moons; artificial satellites are human-made orbital spacecraft.',
      'Satellites serve communication, navigation, meteorology, Earth monitoring, and space exploration.',
      'Telescopes collect radiation to reveal faint, distant celestial structures.'
    ],
    keyTerms: [
      {
        term: 'Coma',
        definition: 'The glowing nebulous envelope of gas and dust surrounding the nucleus of an active comet near the Sun.'
      },
      {
        term: 'Sublimation',
        definition: 'The transition of a substance directly from the solid state to the gas state without passing through liquid form.'
      },
      {
        term: 'Solar Wind',
        definition: 'A continuous stream of charged particles (protons and electrons) emitted outward from the Sun into space.'
      },
      {
        term: 'Artificial Satellite',
        definition: 'A manufactured device placed in orbit around Earth or another celestial body.'
      }
    ],
    commonMistakes: [
      'Assuming a comet’s tail always points behind its direction of motion like a tailpipe exhaust.',
      'Thinking comets and asteroids are completely identical in chemical composition.',
      'Believing artificial satellites remain in space because there is zero gravity (they are actually in free-fall around Earth).',
      'Thinking telescopes work merely by magnifying images rather than primarily gathering light.'
    ],
    checkQuestions: [
      {
        id: 'jc-4-1',
        question: 'Which statement correctly differentiates a comet from an asteroid?',
        options: [
          'Comets are made purely of iron, while asteroids are made of gas',
          'Comets contain significant ice and volatile compounds that form a tail near the Sun; asteroids are primarily rock and metal',
          'Comets only orbit outside the Milky Way galaxy',
          'Asteroids always have glowing blue tails'
        ],
        correctIndex: 1,
        explanation: 'Comets contain abundant ices that sublimate when approaching the Sun, creating a coma and tails; asteroids are rocky/metallic bodies.'
      },
      {
        id: 'jc-4-2',
        question: 'In which direction does a comet’s tail point relative to the Sun?',
        options: [
          'Always directly behind the direction the comet is flying',
          'Always pointing directly toward the center of the Sun',
          'Always pointing away from the Sun due to solar wind and radiation pressure',
          'Randomly changing direction every minute'
        ],
        correctIndex: 2,
        explanation: 'Solar wind and sunlight pressure push gas and dust away from the Sun, so the tails always point away from the Sun.'
      },
      {
        id: 'jc-4-3',
        question: 'What is the primary function of an astronomical telescope?',
        options: [
          'To generate new stars in distant galaxies',
          'To gather light and electromagnetic radiation to reveal faint, distant objects',
          'To push planets into wider orbits',
          'To accelerate spacecraft to light speed'
        ],
        correctIndex: 1,
        explanation: 'Telescopes collect photons over a wide aperture, making distant and faint cosmic targets visible and analyzable.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA: What’s That Space Rock?',
        url: 'https://science.nasa.gov/solar-system/10-things-whats-that-space-rock/',
        source: 'science.nasa.gov',
        type: 'official',
        description: 'Guide comparing asteroids, comets, meteoroids, meteors, and meteorites.'
      },
      {
        title: 'NASA Space Place: Solar System & Satellites',
        url: 'https://spaceplace.nasa.gov/menu/explore/solar-system/',
        source: 'spaceplace.nasa.gov',
        type: 'official',
        description: 'Interactive articles and animations explaining satellites, comets, and spacecraft.'
      },
      {
        title: 'Wikipedia: Comet',
        url: 'https://en.wikipedia.org/wiki/Comet',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'In-depth review of comet orbital mechanics, nucleus morphology, and tail formation.'
      },
      {
        title: 'Google Search: NASA comets satellites telescopes for students',
        url: 'https://www.google.com/search?q=NASA+comets+satellites+telescopes+for+students',
        source: 'google.com',
        type: 'search',
        description: 'Find educational worksheets, scale models, and mission news on space technology.'
      }
    ]
  },
  {
    id: 'j-unit-5',
    slug: 'galaxies-wider-universe',
    track: 'junior',
    unitNumber: 5,
    title: 'Galaxies and the Wider Universe',
    introduction:
      'Zooming out from our Solar System reveals that our Sun is merely one star among hundreds of billions in the Milky Way, which itself is one of billions of galaxies scattered across the observable universe.',
    estimatedTime: '10–12 minutes',
    learningGoals: [
      'Define a galaxy and understand the hierarchy: Planet < Star < Solar System < Galaxy < Universe.',
      'Identify the Milky Way as our home spiral galaxy.',
      'Recognise the three primary morphological classes of galaxies: spiral, elliptical, and irregular.',
      'Define an exoplanet as a planet orbiting a star other than our Sun.',
      'Understand that seeing distant objects in the universe means looking back in time due to the finite speed of light.'
    ],
    sections: [
      {
        heading: 'The Cosmic Hierarchy',
        content: [
          'To avoid confusion in astronomy, it is essential to understand the order of cosmic structures:',
          '1. Planet: A world orbiting a star (e.g., Earth, Jupiter).',
          '2. Star: A glowing ball of fusion plasma (e.g., our Sun, Sirius).',
          '3. Solar System: A star and all planets, moons, asteroids, and comets bound to it.',
          '4. Galaxy: A colossal gravitational structure containing billions of stars, interstellar gas, dust, and dark matter.',
          '5. Universe: All of space, time, matter, and energy in existence, containing billions of galaxies.'
        ]
      },
      {
        heading: 'Our Home: The Milky Way Galaxy',
        content: [
          'Our Solar System resides in the Milky Way, a giant barred spiral galaxy with a diameter of about 100,000 light-years.',
          'The Milky Way contains between 100 and 400 billion stars. Our Sun orbits the center of the galaxy at a distance of about 26,000 light-years, located in a spiral arm called the Orion Spur.',
          'At the very heart of the Milky Way lies a supermassive black hole named Sagittarius A* (pronounced "A-star"), with a mass equal to roughly 4 million times our Sun.'
        ]
      },
      {
        heading: 'Galaxy Types: Spiral, Elliptical, and Irregular',
        content: [
          'Galaxies come in three primary shapes classified originally by astronomer Edwin Hubble:',
          '• Spiral Galaxies: Flattened disks with pinwheel-like spiral arms winding outward from a central bulge (e.g., Andromeda Galaxy, Milky Way). They contain abundant gas, dust, and active star formation.',
          '• Elliptical Galaxies: Smooth, football- or sphere-shaped galaxies with little gas or dust, consisting mostly of older, reddish stars.',
          '• Irregular Galaxies: Galaxies with no symmetric or regular shape, often distorted by gravitational interactions or collisions with other galaxies (e.g., the Magellanic Clouds).'
        ]
      },
      {
        heading: 'Exoplanets and Lookback Time',
        content: [
          'An exoplanet (extrasolar planet) is any planet that orbits a star other than our Sun. Since the first confirmed discovery in the 1990s, astronomers have catalogued over 5,500 exoplanets using space telescopes like Kepler and TESS.',
          'Because light travels at a finite speed (approximately 300,000 kilometres per second in a vacuum), starlight takes time to reach our eyes. Sunlight takes about 8.3 minutes to reach Earth. Light from our nearest stellar neighbour, Proxima Centauri, takes 4.24 years. Light from distant galaxies takes millions or billions of years to reach our telescopes.',
          'Therefore, whenever we look deep into the universe, we are looking backward in time, seeing objects as they existed when their light first departed!'
        ]
      }
    ],
    diagram: {
      type: 'galaxy-types',
      caption: 'The primary galaxy classifications: Spiral, Elliptical, and Irregular.',
      altText: 'Diagram illustrating a pinwheel spiral galaxy, a smooth elliptical galaxy, and an asymmetrical irregular galaxy.'
    },
    keyIdeas: [
      'Hierarchical scale: Planet < Star < Solar System < Galaxy < Universe.',
      'The Milky Way is our home barred spiral galaxy, containing hundreds of billions of stars.',
      'Three main galaxy shapes: Spiral (disks with arms), Elliptical (smooth ovals), and Irregular (distorted).',
      'An exoplanet is a planet outside our Solar System orbiting another star.',
      'Light travels at ~300,000 km/s; observing distant galaxies means seeing them as they existed in the past.'
    ],
    keyTerms: [
      {
        term: 'Galaxy',
        definition: 'A massive gravitationally bound system consisting of stars, stellar remnants, gas, dust, and dark matter.'
      },
      {
        term: 'Exoplanet',
        definition: 'A planet that orbits a star outside our own Solar System.'
      },
      {
        term: 'Light-Year',
        definition: 'The astronomical distance that light travels through vacuum in one Julian year (approx. 9.46 trillion kilometres).'
      },
      {
        term: 'Spiral Galaxy',
        definition: 'A galaxy with a rotating disk, spiral arms, and a central bulge rich in gas and young stars.'
      }
    ],
    commonMistakes: [
      'Confusing a solar system with a galaxy (a galaxy contains hundreds of billions of solar systems).',
      'Assuming exoplanets orbit the Sun like Neptune or Pluto.',
      'Believing looking through a telescope shows things as they are right now in instantaneous real time.',
      'Thinking all galaxies have identical spiral shapes.'
    ],
    checkQuestions: [
      {
        id: 'jc-5-1',
        question: 'Which galaxy contains our Sun and the Solar System?',
        options: ['Andromeda Galaxy', 'Milky Way Galaxy', 'Whirlpool Galaxy', 'Sombrero Galaxy'],
        correctIndex: 1,
        explanation: 'Our Sun and all the planets are part of the Milky Way galaxy.'
      },
      {
        id: 'jc-5-2',
        question: 'What is an exoplanet?',
        options: [
          'A dwarf planet located in our Asteroid Belt',
          'A human-made satellite orbiting Earth',
          'A planet that orbits a star outside our Solar System',
          'A rogue asteroid that entered the Sun’s atmosphere'
        ],
        correctIndex: 2,
        explanation: 'By definition, an exoplanet (extrasolar planet) is a planet orbiting another star beyond our Solar System.'
      },
      {
        id: 'jc-5-3',
        question: 'When astronomers observe a galaxy that is 2 million light-years away, what are they seeing?',
        options: [
          'What the galaxy looks like at this exact instantaneous second',
          'The galaxy as it existed 2 million years in the past when the light left it',
          'A projection of what the galaxy will look like 2 million years in the future',
          'An illusion created by Earth’s upper atmosphere'
        ],
        correctIndex: 1,
        explanation: 'Because light travels at a finite speed, it took 2 million years for the light to reach us, revealing the galaxy as it was 2 million years ago.'
      }
    ],
    externalLinks: [
      {
        title: 'NASA JPL: Learn About the Universe with Webb',
        url: 'https://www.jpl.nasa.gov/edu/resources/teachable-moment/learn-about-the-universe-with-the-james-webb-space-telescope/',
        source: 'jpl.nasa.gov',
        type: 'official',
        description: 'Educational guide on galaxy formation, deep fields, and cosmic history.'
      },
      {
        title: 'Wikipedia: Milky Way',
        url: 'https://en.wikipedia.org/wiki/Milky_Way',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Encyclopaedic overview of the structure, components, and stellar populations of our home galaxy.'
      },
      {
        title: 'Wikipedia: Exoplanet',
        url: 'https://en.wikipedia.org/wiki/Exoplanet',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Comprehensive article covering exoplanet discovery methods, diversity, and habitability.'
      },
      {
        title: 'Google Search: NASA Milky Way galaxies exoplanets for students',
        url: 'https://www.google.com/search?q=NASA+Milky+Way+galaxies+exoplanets+for+students',
        source: 'google.com',
        type: 'search',
        description: 'Explore exoplanet travel bureau posters, 3D star maps, and student guides.'
      }
    ]
  },
  {
    id: 'j-unit-6',
    slug: 'light-intensity-astronomy-maths',
    track: 'junior',
    unitNumber: 6,
    title: 'Light Intensity and Simple Astronomy Maths',
    introduction:
      'As light radiates outward from a star or lamp, it spreads over an increasingly vast spherical surface. Mastering the inverse-square law through simple ratios allows junior astronomers to understand why distant worlds appear so faint.',
    estimatedTime: '8–10 minutes',
    learningGoals: [
      'Understand the concepts of light intensity and distance in plain terms.',
      'State the inverse-square relationship: intensity is proportional to 1 / distance².',
      'Calculate simple brightness ratios when distance doubles or triples without complicated algebra.',
      'Explain why Pluto receives far less solar energy per square metre than Earth.',
      'Appreciate why distant stars require giant telescope mirrors to detect.'
    ],
    sections: [
      {
        heading: 'Why Does Light Get Fainter with Distance?',
        content: [
          'If you stand directly next to a streetlamp, its light is dazzlingly bright. Walk down the street a few hundred metres, and the lamp appears much dimmer. The lamp is still emitting the exact same amount of energy every second—so why does it look fainter?',
          'Because light travels outward in all directions, expanding across the surface of a sphere. As the radius of this sphere (the distance, d) increases, the surface area of the sphere expands according to the geometric formula Area = 4πd².',
          'The total light emitted must now spread out over a much larger area. That means any small detector (such as the pupil of your eye or a telescope sensor) collects only a tiny fraction of the total light.'
        ]
      },
      {
        heading: 'The Inverse-Square Pattern: Simple Ratios',
        content: [
          'In astronomy, the brightness or flux (F) received from a point-like source obeys the inverse-square law: Intensity ∝ 1 / d².',
          'You do not need complicated algebra to use this rule! Just work with simple ratios:',
          '• If you double the distance (2× farther): the intensity becomes 1 / (2²) = 1/4 as bright.',
          '• If you triple the distance (3× farther): the intensity becomes 1 / (3²) = 1/9 as bright.',
          '• If you move 4 times farther away (4× farther): the intensity drops to 1 / (4²) = 1/16 as bright.',
          '• If you move 10 times farther away (10× farther): the intensity drops to 1 / (10²) = 1/100 as bright.'
        ],
        analogy:
          'Imagine spreading a teaspoon of butter over a single slice of toast: it is thick and rich. If you have to spread that exact same teaspoon over 4 slices of toast, the butter on each slice is four times thinner. At 9 slices, it is nine times thinner!'
      },
      {
        heading: 'Real Astronomy Application: Sunlight Across the Solar System',
        content: [
          'We measure distances in the Solar System using Astronomical Units (AU), where 1 AU is Earth’s average distance from the Sun.',
          'Earth is at 1 AU, receiving 100% of standard solar flux. Jupiter orbits at approximately 5.2 AU from the Sun. How much sunlight does Jupiter receive per square metre compared to Earth?',
          'Distance ratio ≈ 5. Using our inverse-square pattern: 1 / (5²) = 1/25. That means every square metre of Jupiter’s cloud tops receives only about 4% (1/25th) of the solar energy that Earth receives!',
          'This is why spacecraft exploring the outer planets (like Voyager and New Horizons) often require nuclear thermoelectric generators (RTGs) instead of solar panels.'
        ]
      }
    ],
    diagram: {
      type: 'inverse-square',
      caption: 'The Inverse-Square Law: As distance doubles, light spreads over 4 times the area, dropping to 1/4 the intensity.',
      altText: 'Diagram showing light radiating from a point source through squares at distance 1d (area 1), 2d (area 4), and 3d (area 9).'
    },
    keyIdeas: [
      'Light radiates outward in an expanding sphere of area 4πd².',
      'Intensity falls with the square of distance: Intensity ∝ 1 / d².',
      '2× distance = 1/4 the light intensity.',
      '3× distance = 1/9 the light intensity.',
      'Outer planets receive dramatically less solar power because of this geometric spreading.',
      'Telescopes need large apertures to collect enough photons from distant, faint objects.'
    ],
    keyTerms: [
      {
        term: 'Inverse-Square Law',
        definition: 'A physical principle stating that a specified physical quantity is inversely proportional to the square of the distance from the source.'
      },
      {
        term: 'Light Intensity / Flux',
        definition: 'The amount of light energy received per unit area per unit time (measured in watts per square metre).'
      },
      {
        term: 'Astronomical Unit (AU)',
        definition: 'The average distance between Earth and the Sun, approximately 149.6 million kilometres.'
      }
    ],
    commonMistakes: [
      'Thinking double the distance means half the brightness (it is actually one-quarter, because 2² = 4).',
      'Thinking triple the distance means one-third the brightness (it is actually one-ninth, because 3² = 9).',
      'Assuming light loses energy because it "gets tired" or wears out as it travels through empty vacuum space.',
      'Forgetting that the inverse-square law assumes an identical light source under comparable, unobstructed conditions.'
    ],
    checkQuestions: [
      {
        id: 'jc-6-1',
        question: 'If you move 3 times farther away from a lamp, how does the received light intensity change?',
        options: [
          'It drops to 1/3 of the original intensity',
          'It drops to 1/6 of the original intensity',
          'It drops to 1/9 of the original intensity',
          'It remains exactly the same'
        ],
        correctIndex: 2,
        explanation: 'According to the inverse-square law, intensity is proportional to 1/d². For 3 times the distance, 1/(3²) = 1/9.'
      },
      {
        id: 'jc-6-2',
        question: 'A spacecraft travels from 1 AU to 2 AU from the Sun. What fraction of solar intensity does it now receive per square metre?',
        options: ['1/2', '1/4', '1/8', '1/16'],
        correctIndex: 1,
        explanation: 'Doubling the distance from 1 AU to 2 AU reduces intensity to 1/(2²) = 1/4 of its value at 1 AU.'
      },
      {
        id: 'jc-6-3',
        question: 'Why does light intensity decrease with distance in empty space?',
        options: [
          'Empty space contains cold air that absorbs the photons',
          'The light energy spreads out over the increasingly large surface area of a sphere',
          'Gravity slows the light particles down until they stop',
          'Light rays curve backward toward their source'
        ],
        correctIndex: 1,
        explanation: 'As light travels outward, the same total energy is distributed over a sphere whose area increases as 4πd².'
      }
    ],
    externalLinks: [
      {
        title: 'Wikipedia: Inverse-square Law',
        url: 'https://en.wikipedia.org/wiki/Inverse-square_law',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Comprehensive article illustrating the geometric basis of the inverse-square law.'
      },
      {
        title: 'Wikipedia: Apparent Magnitude',
        url: 'https://en.wikipedia.org/wiki/Apparent_magnitude',
        source: 'wikipedia.org',
        type: 'wikipedia',
        description: 'Learn how astronomers measure and scale the apparent brightness of celestial objects.'
      },
      {
        title: 'Google Search: Inverse square law light intensity simple examples',
        url: 'https://www.google.com/search?q=inverse+square+law+light+intensity+simple+examples',
        source: 'google.com',
        type: 'search',
        description: 'Find interactive practice problems and animated demonstrations of light spreading.'
      }
    ]
  }
];
