const Contact = () => (
  <section id="contact">
    <div className="container">
      <h2 className="section-heading text-center">Get In Touch</h2>
      <div className="row justify-content-center" data-aos="fade-down">
        <div className="col-lg-8">
          <form action="https://formspree.io/f/xldjelqg" method="POST">
            <div className="row g-2">
              <div className="col-md-6">
                <input type="text" name="name" placeholder="Name *" required className="form-control" />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" placeholder="Email *" required className="form-control" />
              </div>
              <div className="col-md-12">
                <input type="text" name="subject" placeholder="Subject *" required className="form-control" />
              </div>
              <div className="col-md-12">
                <textarea name="message" rows="5" placeholder="Your message *" required className="form-control"></textarea>
              </div>
              <div className="col-md-12 mt-2">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
