import './Resume.css';

function Resume() {
  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    alert('Resume download started! (This is a demo - connect to actual PDF file)');
  };

  return (
    <div className="resume">
      <div className="resume-container">
        <h1 className="page-title">Resume</h1>
        
        <div className="resume-actions">
          <button onClick={handleDownload} className="download-button">
            <span className="download-icon">⬇</span>
            Download PDF
          </button>
        </div>

        <div className="resume-content">
          {/* Header */}
          <div className="resume-header">
            <h2>John Portfolio</h2>
            <p className="resume-contact">
              john.portfolio@email.com | (555) 123-4567 | San Francisco, CA
            </p>
            <p className="resume-links">
              github.com/johnportfolio | linkedin.com/in/johnportfolio
            </p>
          </div>

          {/* Summary */}
          <div className="resume-section">
            <h3 className="section-title">Professional Summary</h3>
            <p>
              Experienced Full-Stack Developer with 5+ years of expertise in building scalable web applications. 
              Proficient in React, Node.js, and cloud technologies. Passionate about creating elegant solutions 
              and mentoring junior developers.
            </p>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h3 className="section-title">Work Experience</h3>
            
            <div className="resume-item">
              <div className="item-header">
                <h4>Senior Full-Stack Developer</h4>
                <span className="item-date">2022 - Present</span>
              </div>
              <p className="item-company">Tech Solutions Inc., San Francisco, CA</p>
              <ul>
                <li>Led development of e-commerce platform serving 100K+ users</li>
                <li>Implemented microservices architecture reducing load time by 40%</li>
                <li>Mentored team of 5 junior developers</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="item-header">
                <h4>Full-Stack Developer</h4>
                <span className="item-date">2020 - 2022</span>
              </div>
              <p className="item-company">Digital Innovations LLC, San Francisco, CA</p>
              <ul>
                <li>Developed responsive web applications using React and Node.js</li>
                <li>Integrated third-party APIs and payment gateways</li>
                <li>Improved application performance by 35%</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="item-header">
                <h4>Junior Developer</h4>
                <span className="item-date">2019 - 2020</span>
              </div>
              <p className="item-company">StartupXYZ, San Francisco, CA</p>
              <ul>
                <li>Built features for SaaS platform using React and Redux</li>
                <li>Collaborated with UX team to implement responsive designs</li>
                <li>Participated in code reviews and agile ceremonies</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="section-title">Education</h3>
            <div className="resume-item">
              <div className="item-header">
                <h4>Bachelor of Science in Computer Science</h4>
                <span className="item-date">2015 - 2019</span>
              </div>
              <p className="item-company">University of Technology</p>
              <p>GPA: 3.8/4.0 | Dean's List | Graduated with Honors</p>
            </div>
          </div>

          {/* Skills */}
          <div className="resume-section">
            <h3 className="section-title">Technical Skills</h3>
            <div className="skills-list">
              <div className="skill-category">
                <strong>Frontend:</strong> React, JavaScript, TypeScript, HTML5, CSS3, Redux, Next.js
              </div>
              <div className="skill-category">
                <strong>Backend:</strong> Node.js, Express, Python, Django, REST APIs, GraphQL
              </div>
              <div className="skill-category">
                <strong>Database:</strong> MongoDB, PostgreSQL, MySQL, Redis
              </div>
              <div className="skill-category">
                <strong>Tools:</strong> Git, Docker, AWS, CI/CD, Jest, Webpack
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
