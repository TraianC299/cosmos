
import earth from '../assets/planetsCute/earth.png'
import mars from '../assets/planetsCute/mars.png'
import mercury from '../assets/planetsCute/mercury.png'
import neptune from '../assets/planetsCute/neptune.png'
import saturn from '../assets/planetsCute/saturn.png'
import uranus from '../assets/planetsCute/uranus.png'
import venus from '../assets/planetsCute/venus.png'
import jupiter from '../assets/planetsCute/jupiter.png'
import sunImage from '../assets/planetsCute/sun.png'

import earthSurface from '../assets/surfaces/earth.jpeg'
import marsSurface from '../assets/surfaces/mars.jpg'
import mercurySurface from '../assets/surfaces/mercury.jpeg'
import neptuneSurface from '../assets/surfaces/neptune.jpeg'
import saturnSurface from '../assets/surfaces/saturn.jpeg'
import uranusSurface from '../assets/surfaces/uranus.jpeg'
import venusSurface from '../assets/surfaces/venus.jpeg'
import jupiterSurface from '../assets/surfaces/jupiter.webp'
import sunSurface from '../assets/surfaces/sun.jpeg'

const planets = [
    { 
      name: 'Mercury', 
      radius: 2440, 
      distance: 57.9, 
      color: '#b2b2b2', 
      orbit: 88, 
      initialRotation: 0, 
      speed: 47.87, 
      image: mercury, 
      surfaceImage: mercurySurface,
      temperture: 167, 
      density: 5.43,
      dayLength: 4222.6,
      gravity: 3.7,
      mass: "3.285 × 10^23 kg",
      moons: 0,
      description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.',
      facts: [
        "Mercury is the closest planet to the sun.",
        "Mercury is the smallest planet in our solar system.",
        "Mercury has no moons.",
        "Mercury has a heavily cratered surface due to its lack of an atmosphere.",
        "A day on Mercury lasts about 59 Earth days, while a year on Mercury lasts just 88 Earth days."
      ]
     },
    { 
      name: 'Venus', 
      radius: 6052, 
      distance: 108.2, 
      color: '#f2d9d9', 
      orbit: 225 , 
      initialRotation: 60, 
      speed: 35.02, 
      image: venus , 
      surfaceImage: venusSurface,
      temperture: 464 , 
      density: 5.24,
      dayLength: 2802,
      gravity: 8.87,
      mass: "4.867 × 10^24 kg",
      moons: 0,
      description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth\'s night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight. Venus lies within Earth\'s orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a bit before dawn.',
      facts: [
        "Venus is the second planet from the sun.",
        "Venus is the hottest planet in our solar system, with an average temperature of 462 degrees Celsius.",
        "Venus has a thick atmosphere made mostly of carbon dioxide, which creates a runaway greenhouse effect.",
        "Venus rotates in the opposite direction to most planets, so its day is longer than its year.",
        "Venus has no moons."
      ]
     },
    { 
      name: 'Earth', 
      radius: 6371, 
      distance: 149.6, 
      color: '#b2d9f2', 
      orbit: 365 , 
      initialRotation: 40, 
      speed: 29.78, 
      image: earth , 
      surfaceImage: earthSurface,
      temperture: 15 ,
      density: 5.52,
      dayLength: 24,
      gravity: 9.807,
      mass: "5.972 × 10^24 kg",
      moons: 1,
      description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth\'s surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans but also lakes, rivers and other fresh water, which together constitute the hydrosphere. Earth\'s gravity interacts with other objects in space, especially the Sun and the Moon, Earth\'s only natural satellite. Earth orbits around the Sun in 365.26 days, a period known as an Earth year.',
      facts: [
        "Earth is the third planet from the sun and the only known planet with life.",
        "Earth has a relatively thin atmosphere that protects us from the sun's harmful radiation.",
        "Earth has one natural satellite, the moon.",
        "Earth's rotation is gradually slowing down, causing our day to get longer.",
        "The Earth's magnetic field protects us from solar wind and cosmic rays."
      ]
     },
    { 
      name: 'Mars', 
      radius: 3390, 
      distance: 227.9, 
      color: '#fda600', 
      orbit: 687 , 
      initialRotation: 20, 
      speed: 24.13, 
      image: mars , 
      surfaceImage: marsSurface,
      temperture: -65 , 
      density: 3.93,
      dayLength: 24.7,
      gravity: 3.711,
      mass: "6.39 × 10^23 kg",
      moons: 2,
      description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet" because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.',
      facts: [
        "Mars is the fourth planet from the sun and is often called the Red Planet because of its reddish appearance.",
        "Mars has two small moons, Phobos and Deimos.",
        "Mars has a thin atmosphere with a surface pressure only about 1% of Earth's.",
        "Mars has the largest volcano and the deepest canyon in our solar system.",
        "Mars has polar ice caps that are made up of frozen carbon dioxide and water."
      ]
     },
    { 
      name: 'Jupiter', 
      radius: 69911, 
      distance: 778.6, 
      color: '#bcafb2', 
      orbit: 4333 , 
      initialRotation: 160, 
      speed: 13.07, 
      image: jupiter, 
      surfaceImage: jupiterSurface,
      temperture: -110,
      density: 1.33,
      dayLength: 9.9,
      gravity: 24.79,
      mass: "1.898 × 10^27 kg",
      moons: 79,
      description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter. When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows, and is on average the third-brightest natural object in the night sky after the Moon and Venus.',
      facts: [
        "Jupiter is the fifth planet from the sun and is the largest planet in our solar system.",
        "Jupiter has at least 79 known moons, the most of any planet in our solar system.",
        "Jupiter has a very strong magnetic field, which creates intense radiation belts around the planet.",
        "Jupiter has a banded appearance due to its swirling clouds, and it has a giant storm known as the Great Red Spot.",
        "Jupiter is a gas giant, with no solid surface to stand on."
      ],
     },
    { 
      name: 'Saturn', 
      radius: 58232, 
      distance: 1433.5, 
      color: '#ab604a', 
      orbit: 10759 , 
      initialRotation: 240, 
      speed: 9.69, 
      image: saturn , 
      surfaceImage: saturnSurface,
      temperture: -140 , 
      density: 0.69,
      dayLength: 10.66,
      gravity: 10.44,
      mass: "5.683 × 10^26 kg",
      moons: 62,
      description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. Although it has only one-eighth the average density of Earth, with its larger volume Saturn is over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god\'s sickle.',
      rings: true, 
      facts: [
        "Saturn is known for its beautiful rings, which are made up of countless particles of ice and rock ranging in size from tiny grains to enormous boulders.",
        "Saturn has at least 82 moons, the most of any planet in our solar system. Its largest moon, Titan, is the only moon in our solar system with a dense atmosphere (just like our Earth).",
      ]
    },
    { 
      name: 'Uranus', 
      radius: 25362, 
      distance: 2872.5, 
      color: '##4FD0E7', 
      orbit: 30685 , 
      initialRotation: 100, 
      speed: 6.81, 
      image: uranus ,
      surfaceImage: uranusSurface, 
      temperture: -195 , 
      density: 1.27,
      dayLength: 17.24,
      gravity: 8.87,
      mass: "8.681 × 10^25 kg",
      moons: 27,
      description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the other gas giants. Uranus\' atmosphere is similar to Jupiter\'s and Saturn\'s in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F).',
      facts: [
        'Due to its extreme tilt, Uranus experiences very long seasons. Each pole experiences 42 years of continuous sunlight followed by 42 years of darkness.',
        'Uranus is the coldest planet in our solar system, with a minimum temperature of -224 degrees Celsius.',
        "NASA's Voyager 2 spacecraft is the only spacecraft to have visited Uranus. It made its closest approach to the planet in 1986.",
        'Uranus is the only planet in our solar system that rotates on its side.'
      ]
    },
    { 
      name: 'Neptune', 
      radius: 24622, 
      distance: 4495.1, 
      color: '##2990B5', 
      orbit: 60190, 
      initialRotation: 280, 
      speed: 5.43, 
      image: neptune , 
      surfaceImage: neptuneSurface,
      temperture: -200, 
      density: 1.638,
      dayLength: 16.11,
      gravity: 11.15,
      mass: "1.024 × 10^26",
      moons: 17,
      description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune\'s trident.' ,
      facts: [
        'Neptune has a very thick atmosphere that is mostly composed of hydrogen, helium, and methane.',
        "The methane in Neptune's atmosphere absorbs red light, giving the planet its blue color",
        "Neptune has the strongest winds in the solar system, with winds reaching up to 1,600 km/h (1,000 mph).",
        "The planet has 14 known moons, the largest of which is Triton.",
        "Neptune's average distance from the Sun is about 4.5 billion km (2.8 billion miles).",
        "Neptune has been visited only once by a spacecraft, the Voyager 2, in 1989."
      ]
    }
  ]

const sun = { 
  name: 'Sun', 
  radius: 695700, 
  distance: 0, 
  color: '#f2d9d9', 
  orbit: 0, 
  initialRotation: 0, 
  speed: 0, 
  image: sunImage, 
  surfaceImage: sunSurface,
  temperture: 5778, 
  density: 1.41,
  dayLength: 25.38,
  gravity: 274,
  mass: "1.989 × 10^30 kg",
  moons: 0,
  description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 mi), or 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System. About three quarters of the Sun\'s mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.' ,
  facts: [
    'The Sun is a main-sequence G-type star, meaning that it is a yellow star that is generating energy through nuclear fusion of hydrogen into helium in its core.',
    'The Sun is about 4.6 billion years old, and is expected to remain in its main-sequence phase for another 5 billion years.',
    'The Sun is the largest object in the Solar System, with a diameter of 1.39 million kilometers (864,000 mi).',
    'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit.',
    'The Sun is made up of 99.86% of the mass of the entire Solar System.',
    'The Sun is the source of all the energy that reaches Earth.',
  ]
}

export  {
  planets, sun
}