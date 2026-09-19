const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Python',
  'Flask',
  'Odoo',
  'SQL',
  'Git & GitHub',
  'Power BI',
  'Responsive Design',
];

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">SKILLS</p>
      <h2>Tools I work with</h2>
      <div className="skill-grid">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
