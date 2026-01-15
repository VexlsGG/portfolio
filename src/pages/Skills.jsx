import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Redux", level: 80, icon: "🔄" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express", level: 85, icon: "🚂" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Django", level: 75, icon: "🎸" },
        { name: "REST APIs", level: 90, icon: "🔌" },
        { name: "GraphQL", level: 75, icon: "◈" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "Redis", level: 70, icon: "📦" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90, icon: "🔧" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "CI/CD", level: 80, icon: "🔄" },
        { name: "Jest", level: 85, icon: "🃏" },
        { name: "Webpack", level: 75, icon: "📦" }
      ]
    }
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <h1 className="page-title">Skills & Technologies</h1>
        <p className="page-subtitle">My technical expertise and proficiency levels</p>
        
        <div className="skills-content">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.category} 
              className="skill-category-section"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h2 className="category-title">{category.category}</h2>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-item"
                    style={{ animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05) + 0.3}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <h2>Other Skills</h2>
          <div className="badges-container">
            <span className="badge">Agile/Scrum</span>
            <span className="badge">Team Leadership</span>
            <span className="badge">Code Review</span>
            <span className="badge">Problem Solving</span>
            <span className="badge">System Design</span>
            <span className="badge">Performance Optimization</span>
            <span className="badge">Security Best Practices</span>
            <span className="badge">Responsive Design</span>
            <span className="badge">API Design</span>
            <span className="badge">Testing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
