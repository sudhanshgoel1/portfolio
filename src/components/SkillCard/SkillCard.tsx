import React from "react";
import "./SkillCard.css";

type Skill = {
    name: string;
    level: number;
};

type Props = {
    title: string;
    skills: Skill[];
};

export default function SkillCard({ title, skills }: Props) {
    return (
        <div className="col-lg col-md-6 mb-4">
            <div
                className="skill-card-modern h-100"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="skill-card-header">
                    <div className="skill-icon">
                        {title.includes('Backend') && '⚙️'}
                        {title.includes('Frontend') && '🎨'}
                        {title.includes('Database') && title.includes('Tools') && '🛠️'}
                        {!title.includes('Backend') && !title.includes('Frontend') && !title.includes('Database') && !title.includes('Tools') && '💻'}
                    </div>
                    <h5 className="skill-card-title">{title}</h5>
                </div>
                
                <div className="skills-list">
                    {skills.map((skill, i) => (
                        <div className="skill-item" key={i}>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-progress-container">
                                <div 
                                    className="skill-progress-bar"
                                    data-aos="fade-right"
                                    data-aos-delay={700 + (i * 100)}
                                    style={{ 
                                        '--skill-width': `${skill.level}%`,
                                        '--skill-delay': `${i * 0.1}s`
                                    } as React.CSSProperties}
                                >
                                    <div className="skill-progress-fill"></div>
                                    <div className="skill-progress-glow"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="skill-card-footer">
                    <div className="proficiency-indicator">
                        <span className="proficiency-label">Avg. Proficiency</span>
                        <span className="proficiency-value">
                            {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
