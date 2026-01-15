import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="page-title">About Me</h1>
        <div className="about-content">
          <div className="about-image">
            <div className="profile-placeholder">
              <svg width="250" height="250" viewBox="0 0 250 250">
                <circle cx="125" cy="125" r="120" fill="#667eea" opacity="0.1"/>
                <circle cx="125" cy="125" r="100" fill="#764ba2" opacity="0.2"/>
                <circle cx="125" cy="85" r="35" fill="#667eea"/>
                <ellipse cx="125" cy="165" rx="50" ry="60" fill="#667eea"/>
              </svg>
            </div>
          </div>
          <div className="about-text">
            <h2>Hi there! 👋</h2>
            <p>
              I'm a passionate full-stack developer with a love for creating elegant solutions 
              to complex problems. With expertise in modern web technologies, I specialize in 
              building responsive, user-friendly applications that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying up-to-date with the latest industry trends.
            </p>
            <div className="info-cards">
              <div className="info-card">
                <h3>🎓 Education</h3>
                <p>Computer Science Degree</p>
                <p className="detail">University of Technology</p>
              </div>
              <div className="info-card">
                <h3>💼 Experience</h3>
                <p>5+ Years</p>
                <p className="detail">Web Development</p>
              </div>
              <div className="info-card">
                <h3>📍 Location</h3>
                <p>San Francisco, CA</p>
                <p className="detail">Open to Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
