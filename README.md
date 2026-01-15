# Modern Multi-Page React Portfolio Website

A professional, responsive portfolio website built with React, Vite, and React Router. Features smooth animations, modern design, and a clean multi-page architecture.

## Features

- 🏠 **Home Page** - Hero section with animated profile and call-to-action
- 👤 **About Me** - Personal bio with education, experience, and location cards
- 🏆 **Achievements** - Showcase of accomplishments in a beautiful card layout
- 📄 **Resume** - Professional resume with download functionality
- 💼 **Skills** - Interactive skill bars showing proficiency levels
- 🎒 **What's in My Bag** - Showcase of daily tools and equipment
- 📧 **Contact** - Functional contact form with validation
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✨ **Smooth Animations** - Fade-in, slide-up, and hover effects
- 🎨 **Modern UI** - Clean design with gradient purple theme

## Tech Stack

- **React 19.2.0** - Modern React with hooks
- **Vite 7.2.4** - Fast build tool and dev server
- **React Router DOM** - Multi-page navigation
- **Pure CSS** - No CSS frameworks, custom styling
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VexlsGG/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── src/
│   ├── components/      # Reusable components (Navbar)
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Resume.jsx
│   │   ├── Skills.jsx
│   │   ├── Bag.jsx
│   │   └── Contact.jsx
│   ├── assets/         # Images and static files
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Customization

### Colors
Edit the gradient colors in CSS files to match your brand:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Content
- Update personal information in each page component
- Replace placeholder images with your own photos
- Modify the resume content in `Resume.jsx`
- Update achievements, skills, and bag items

### Add Your Resume PDF
To add a real PDF download:
1. Place your PDF in the `public` folder
2. Update the `handleDownload` function in `Resume.jsx`

## Deployment

Build the project for production:
```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License

This project is open source and available for personal and commercial use.
