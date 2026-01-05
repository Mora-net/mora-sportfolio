const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-heading text-center">About Me</h2>
        <p className="text-center muted-text mt-3 mb-4">
          Sad Boy's Story ;)
        </p>
        <div className="row justify-content-center" data-aos="fade-down">
          <div className="col-lg-5 about-portrait">
            <img
              src="/src/assets/images/image4.png"
              className="img-fluid"
              alt="About Me Portrait"
            />
          </div>
          <div className="col-lg-7">
            <p>
              I am a passionate and motivated web developer with strong
              knowledge in HTML, CSS, JS, Bootstrap, and React. I focus on
              clean, responsive, and user-friendly applications.
            </p>
            <p>
              Currently expanding into full-stack development, learning
              databases and backend. My goal is to become a professional
              full-stack developer and build high-quality applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
