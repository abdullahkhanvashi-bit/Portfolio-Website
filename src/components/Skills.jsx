function Skills() {
  return (
    <section className="container mt-5">

      <h2>Skills</h2>

      <p>React</p>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: "85%" }}
        >
          85%
        </div>
      </div>

      <p className="mt-3">
        Spring Boot
      </p>

      <div className="progress">
        <div
          className="progress-bar bg-success"
          style={{ width: "80%" }}
        >
          80%
        </div>
      </div>
    </section>
  );
}

export default Skills;