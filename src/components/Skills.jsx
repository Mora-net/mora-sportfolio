const skills = [
  { name: "HTML", img: "/src/assets/images/skills/HTML.svg" },
  { name: "CSS", img: "/src/assets/images/skills/CSS.svg" },
  { name: "JS", img: "/src/assets/images/skills/JS.svg" },
  { name: "React.JS", img: "/src/assets/images/skills/NodeJS.svg" },
  { name: "ExpressJS", img: "/src/assets/images/skills/ExpressJS.svg" },
  { name: "C# .net", img: "https://tas.co.in/wp-content/uploads/2025/08/c-sharp-and-asp.jpg" },
  { name: "Bootstrap", img: "/src/assets/images/skills/Bootstrap.svg" },
  { name: "C/C++", img: "https://www.credosystemz.com/wp-content/uploads/2023/09/cc.webp" },
  { name: "Python", img: "/src/assets/images/skills/Python.svg" },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-heading text-center">Skills</h2>
        <div className="row justify-content-center mt-4 gy-4">
          {skills.map((skill) => (
            <div className="col-6 col-md-4 col-lg-2" key={skill.name} data-aos="fade-up">
              <div className="skill text-center">
                <img src={skill.img} alt={skill.name} className="skill-image" />
                <p className="skill-name">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
