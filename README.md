# Portfolio - Arbin Bhasima

A modern, interactive developer portfolio built with React 19, Three.js, and GSAP animations. This portfolio showcases my work as a full-stack developer from Nepal, featuring 3D graphics, smooth animations, and a responsive design.

## Tech Stack

- **React 19** - Frontend framework
- **Vite 8** - Build tooling
- **Three.js / React-Three-Fiber** - 3D graphics and WebGL rendering
- **React-Three-Drei** - Helper components for R3F
- **React-Three-Postprocessing** - Post-processing effects
- **GSAP** - Professional-grade animations
- **@gsap/react** - React integration for GSAP
- **Tailwind CSS 4** - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind integration with Vite

## Project Structure

```
portfolio/
├── public/
│   ├── images/          # Static images (logos, icons, backgrounds)
│   ├── models/         # 3D GLB models
│   └── vite.svg        # Favicon
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── HeroModels/    # 3D hero section components
│   │   │   ├── HeroExperience.jsx
│   │   │   ├── HeroLights.jsx
│   │   │   ├── Particles.jsx
│   │   │   ├── Particles2.jsx
│   │   │   └── Room.jsx
│   │   ├── Models/
│   │   │   └── TechLogos/
│   │   │       └── TechIcon.jsx
│   │   ├── AnimetedCounter.jsx
│   │   ├── Button.jsx
│   │   ├── GlowCard.jsx
│   │   ├── NavBar.jsx
│   │   └── TitleHeader.jsx
│   ├── sections/      # Page sections
│   │   ├── ExperienceSection.jsx
│   │   ├── FeatureCards.jsx
│   │   ├── Hero.jsx
│   │   ├── LogoSection.jsx (commented out)
│   │   ├── ShowcaseSection.jsx
│   │   └── TechStact.jsx
│   ├── constants/     # Data and configuration
│   │   └── index.js
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── eslint.config.js   # ESLint configuration
├── index.html        # HTML entry point
├── package.json      # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

## Features

### Hero Section
- Animated text with GSAP scroll-triggered animations
- Interactive 3D scene using React-Three-Fiber
- Particle effects overlay (166 floating particles)
- Rotating word animation cycling through: Ideas, Concepts, Designs, Code
- Animated counter component (Internships, Technology Stacks, Completed Projects, Completion Rate)
- Call-to-action button

### Showcase Section
- Dynamic project showcase with visual effects
- Interactive cards with glow effects

### Feature Cards
- Grid of ability cards showcasing skills:
  - High-Performance Backend
  - Data Architecture
  - API Design & Security
  - Problem Solving
  - On-Time Delivery
  - Quality Focus
  - Cross-Platform Development (Mac, Windows & Linux)
  - DevOps & Deployment
  - Reliable Communication

### Experience Section
- Professional experience timeline with cards:
  - Frontend Developer at Hostinger (Jan 2023 - Present)
  - Full Stack Developer at Docker (Jun 2020 - Dec 2023)
  - React Native Developer at Appwrite (Mar 2019 - May 2020)
- Each card includes responsibilities and reviews

### Tech Stack Section
- Interactive 3D tech stack logos (React, Python, Three.js, Git, Golang, FastAPI, Docker)
- Floating animations with custom models

### Navigation
- Responsive navbar with smooth scroll navigation
- Links: Work, Experience, Skills, Testimonials

### 3D Components
- HeroExperience: Main 3D scene with desk setup
- Room: 3D room environment with desk, computer, chair
- Particles: Ambient particle effects
- Particles2: Enhanced particle overlay
- HeroLights: Dynamic lighting for 3D scenes

## Dependencies

### Production Dependencies
- `@gsap/react` - GSAP React integration
- `@react-three/drei` - R3F helpers
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/postprocessing` - Post-processing effects
- `@tailwindcss/vite` - Tailwind CSS Vite plugin
- `gsap` - Animation platform
- `react` - UI library
- `react-countup` - CountUp animations
- `react-dom` - React DOM renderer
- `react-responsive` - Responsive design utilities
- `tailwindcss` - CSS framework
- `three` - 3D graphics library

### Development Dependencies
- `@eslint/js` - JavaScript linting
- `@types/react` - React type definitions
- `@types/react-dom` - React DOM types
- `@vitejs/plugin-react` - Vite React plugin
- `eslint` - JavaScript linter
- `eslint-plugin-react-hooks` - React hooks linting
- `eslint-plugin-react-refresh` - Hot module reload
- `globals` - Global variables
- `vite` - Next-generation build tool

## Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Design Highlights

- **Dark theme** with cyan accents (#00FFFF / #22d3ee)
- **Responsive design** - Works on mobile, tablet, and desktop
- **Smooth animations** - GSAP-powered transitions and scroll effects
- **3D visuals** - WebGL-powered graphics and particle systems
- **Modern aesthetics** - Glassmorphism, glow effects, floating elements

## Customization

### Modifying Content
Edit `src/constants/index.js` to update:
- Navigation links (`navLinks`)
- Counter items (`counterItems`)
- Abilities/Skills (`abilities`)
- Tech stack (`techStackImgs`, `techStackIcons`)
- Experience cards (`expCards`)
- Testimonials (`testimonials`)
- Social links (`socialImgs`)

### Adding 3D Models
Place GLB files in `public/models/` and add entries to `techStackIcons` in constants.

### Modifying Animations
Edit GSAP configurations in individual components for custom animation timing and easing.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires WebGL support for 3D features.

## Performance Notes

- Uses code splitting for optimized bundles
- 3D models are optimized GLB files
- Particle count is configurable (currently 166)
- Lazy loading for non-critical sections

---

Built with passion for creating innovative web solutions.

**Author:** Arbin Bhasima  
**Location:** Nepal