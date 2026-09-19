const projects = [
  {
    title: 'Finance Compliance Tracker',
    technologies: 'Flask • MySQL • HTML/CSS',
    image: '/images/finance.svg',
  },
  {
    title: 'ShopKart',
    technologies: 'React • API • Router • LocalStorage',
    image: '/images/shop.svg',
  },
  {
    title: 'Odoo College ERP',
    technologies: 'Odoo • Python • XML',
    image: '/images/erp.svg',
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">PROJECTS</p>
      <h2>Selected work</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <img src={project.image} loading="lazy" alt="" />
            <div>
              <h3>{project.title}</h3>
              <p>{project.technologies}</p>
              <a href="#contact">View details →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
