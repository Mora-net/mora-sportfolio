const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row about-content">
          <div className="col-lg-7 hero-content" data-aos="fade-up">
            <span className="h3">
              Hello, I'm
              <img
                src="https://t3.ftcdn.net/jpg/15/80/35/30/360_F_1580353035_WfmfJwDLo8NPcUBStJ9qHKNYHJpT8Cdb.jpg"
                alt="Hero"
                style={{ width: "100px", marginLeft: "30px" }}
              />
            </span>
            <h1 className="name">March Somora</h1>
            <button className="btn btn-sm btn-showcase mt-3">
              Full-Stack Developer
            </button>
            <p className="tagline mt-3">
              I’m a fourth-year university student passionate about web
              development. Since 2021, I’ve been turning small experiments into
              clean and responsive websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
