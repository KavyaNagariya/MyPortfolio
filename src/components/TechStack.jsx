import React, { useState } from 'react';
import './TechStack.css';

const skillsData = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', logo: 'html5', color: 'E34F26' },
  { name: 'CSS3', category: 'Frontend', logo: 'css', color: '1572B6' },
  { name: 'JavaScript', category: 'Frontend', logo: 'javascript', color: 'F7DF1E' },
  { name: 'Next.js', category: 'Frontend', logo: 'nextdotjs', color: 'black', invertDark: true },
  
  // Backend & DBs
  { name: 'C', category: 'Backend', logo: 'c', color: 'A8B9CC' },
  { name: 'Java', category: 'Backend', localLogo: '/java-svgrepo-com.svg' },
  { name: 'Python', category: 'Backend', localLogo: '/python-svgrepo-com.svg' },
  { name: 'FastAPI', category: 'Backend', logo: 'fastapi', color: '009688' },
  { name: 'PostgreSQL', category: 'Backend', localLogo: '/postgresql-logo-svgrepo-com.svg' },
  { name: 'Supabase', category: 'Backend', logo: 'supabase', color: '3ECF8E' },
  
  // Tools / Custom
  { name: 'Git', category: 'Tools', logo: 'git', color: 'F05032' },
  { name: 'GitHub', category: 'Tools', logo: 'github', color: 'black', invertDark: true },
  { name: 'Vercel', category: 'Tools', logo: 'vercel', color: 'black', invertDark: true },
  { name: 'Figma', category: 'Design', logo: 'figma', color: 'F24E1E' },
  { name: 'Antigravity', category: 'Tools', localLogo: '/antigravity-color.svg' },
  { name: 'OpenCode', category: 'Tools', localLogo: '/opencode-dark.svg', isOpencode: true },
];

const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools'];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section className="tech-stack section-divider" id="tech-stack">
      <div className="ts-header">
        <h2 className="title ts-title">Tech Stack</h2>
        <div className="ts-tabs">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`ts-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="ts-grid">
        {filteredSkills.map((skill, idx) => (
          <div key={idx} className="ts-pill">
            {skill.localLogo ? (
              <img 
                src={skill.localLogo} 
                alt={skill.name} 
                className={`ts-real-logo ${skill.isOpencode ? 'opencode-logo' : ''}`}
              />
            ) : (
              <img 
                src={`https://cdn.simpleicons.org/${skill.logo}/${skill.color}`} 
                alt={skill.name} 
                className={`ts-real-logo ${skill.invertDark ? 'ts-invert-dark' : ''}`}
              />
            )}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
