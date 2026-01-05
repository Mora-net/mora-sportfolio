const projects = [
  {
    title: "PfpFinder",
    stacks: "HTML | CSS | BS | JS + NodeJS",
    link: "https://pfpfinder.com/",
    img: "/src/assets/images/projects/pfpfinder-banner.webp",
    description: "Find the best profile pictures and banners for all your social media accounts.",
  },
  {
    title: "BikeKart",
    stacks: "HTML | CSS",
    link: "https://itsvijaysingh.github.io/BikeKart/",
    img: "/src/assets/images/projects/bikekart-banner.webp",
    description: "BikeKart is just another bike store web template with multiple sections.",
  },
  {
    title: "SimplCalc",
    stacks: "HTML | CSS | JS",
    link: null,
    img: "/src/assets/images/projects/simplcalc-banner.webp",
    description: "Tired of calculating manually? SimplCalc is best and faster solution.",
    inProgress: true,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-heading text-center">Projects</h2>
        <div className="row justify-content-center mt-4 gy-4">
          {projects.map((proj) => (
            <div className="col-lg-4 col-md-6" key={proj.title}>
              <div className={`card project-card ${proj.inProgress ? "cursor-not-allowed" : ""}`}>
                <img src={proj.img} className="card-img-top" alt={proj.title} />
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.description}</p>
                  {proj.link && !proj.inProgress && (
                    <a href={proj.link} target="_blank" className="btn btn-primary">Visit</a>
                  )}
                  {proj.inProgress && <button className="btn btn-secondary" disabled>In Progress</button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
