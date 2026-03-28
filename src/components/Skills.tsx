import './Skills.css';

interface Skill {
  name: string;
  icon: string;
  description: string;
  badge?: string;
}

const SKILLS: Skill[] = [
  {
    name: 'C#',
    icon: '⬡',
    description: 'Primary language for backend and tooling development.',
  },
  {
    name: 'ASP.NET',
    icon: '◈',
    description: 'Building RESTful APIs and full-stack web applications.',
  },
  {
    name: 'DevOps',
    icon: '⬙',
    description: 'Docker, CI/CD pipelines, and deployment basics.',
    badge: 'Basics',
  },
  {
    name: 'Full Stack',
    icon: '◫',
    description: 'End-to-end development from database to UI.',
  },
  {
    name: 'Reverse Engineering',
    icon: '◯',
    description: 'Analyzing and understanding compiled software internals.',
    badge: 'Learning',
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills</h2>
        <p className="skills__desc">
          Technologies and disciplines I work with daily.
        </p>

        <div className="skills__grid">
          {SKILLS.map((skill) => (
            <div className="skills__card" key={skill.name}>
              <div className="skills__card-header">
                <span className="skills__icon" aria-hidden="true">{skill.icon}</span>
                {skill.badge && (
                  <span className={`skills__badge${skill.badge === 'Learning' ? ' skills__badge--learning' : ''}`}>
                    {skill.badge}
                  </span>
                )}
              </div>
              <h3 className="skills__name">{skill.name}</h3>
              <p className="skills__description">{skill.description}</p>
              <div className="skills__card-glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
