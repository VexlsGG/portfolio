import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-image-placeholder">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="#667eea" opacity="0.2"/>
                <circle cx="100" cy="100" r="70" fill="#764ba2" opacity="0.3"/>
                <text x="100" y="110" fontSize="60" fill="#667eea" textAnchor="middle" fontWeight="bold">JP</text>
              </svg>
            </div>
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">Hello, I'm John Portfolio</span>
          </h1>
          <p className="hero-tagline">
            Full-Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
          <p className="hero-description">
            Building innovative solutions with modern technologies
          </p>
          <Link to="/about" className="cta-button">
            Learn More About Me
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
