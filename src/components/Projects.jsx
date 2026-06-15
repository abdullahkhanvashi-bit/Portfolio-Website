function Projects() {
  const projects = [
    {
      title:
        "Ecommerce",
      tech: "React, Spring Boot, SQL"
    },
    {
      title:
        "Football News Media",
      tech: "Web Development, JavaScript, SQL,"
    }
  ];

  return (
    <section
      id="projects"
      className="container mt-5"
    >
      <h2>Projects</h2>

      <div className="row">
        {projects.map((p, i) => (
          <div
            className="col-md-4"
            key={i}
          >
            <div className="card p-3">
              <h4>{p.title}</h4>

              <p>{p.tech}</p>

              <button className="btn btn-primary">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;