import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Best Web Application Award",
      description: "Received recognition for developing an innovative e-commerce platform that increased sales by 150%.",
      date: "2024",
      category: "Award"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "Made significant contributions to popular React libraries with over 1000+ stars on GitHub.",
      date: "2023",
      category: "Contribution"
    },
    {
      id: 3,
      title: "Tech Talk Speaker",
      description: "Presented at major tech conferences about modern web development practices and React optimization.",
      date: "2023",
      category: "Speaking"
    },
    {
      id: 4,
      title: "Hackathon Winner",
      description: "First place in National Coding Hackathon for creating an AI-powered productivity tool.",
      date: "2023",
      category: "Competition"
    },
    {
      id: 5,
      title: "Project Lead - Mobile App",
      description: "Led a team of 5 developers to successfully launch a mobile application with 50K+ downloads.",
      date: "2022",
      category: "Project"
    },
    {
      id: 6,
      title: "Certified Cloud Architect",
      description: "Obtained AWS Solutions Architect Professional certification with distinction.",
      date: "2022",
      category: "Certification"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Award': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'Contribution': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'Speaking': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'Competition': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'Project': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'Certification': 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)'
    };
    return colors[category] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  };

  return (
    <div className="achievements">
      <div className="achievements-container">
        <h1 className="page-title">Achievements</h1>
        <p className="page-subtitle">Milestones and accomplishments throughout my journey</p>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className="achievement-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="achievement-category"
                style={{ background: getCategoryColor(achievement.category) }}
              >
                {achievement.category}
              </div>
              <div className="achievement-date">{achievement.date}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
