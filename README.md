# Avance Designs

Premium Interior & Exterior Design Studio — React web application.

## Tech Stack
- **Vite** + **React 18**
- **React Router v6**
- **Tailwind CSS v3**
- **Google Fonts**: Cormorant Garamond (display) + DM Sans (body) + DM Mono

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.jsx       # Sticky navbar with mobile menu
    Footer.jsx       # Full footer with CTA band
    PageHero.jsx     # Reusable page hero section
    ProjectCard.jsx  # Portfolio project card with hover
  pages/
    Home.jsx         # Hero, featured projects, services, CTA
    About.jsx        # Story, team, mission, values
    Services.jsx     # Interior, exterior, consultation
    Portfolio.jsx    # Filtered grid gallery
    Contact.jsx      # Form, map, office info
  styles/
    globals.css      # Tailwind + custom utilities
  App.jsx            # Router setup + scroll observer
  main.jsx           # Entry point
```

## Brand Palette
| Token       | Hex       |
|-------------|-----------|
| Primary     | `#0A1F44` |
| Secondary   | `#1E3A8A` |
| Accent      | `#3B82F6` |
| Gold        | `#C9A96E` |
| Background  | `#FAFAFA` |

## Features
- Sticky transparent-to-solid navbar on scroll
- Intersection Observer scroll animations
- Portfolio category filter
- Contact form with validation + success state
- Fully responsive (mobile → desktop)
- Smooth scrolling, hover effects, marquee band
