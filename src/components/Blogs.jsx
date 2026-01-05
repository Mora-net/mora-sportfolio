const blogs = [
  {
    title: "How to Update Township Game – Guide",
    category: "Gaming",
    link: "https://gamesroid.com/how-to-update-township-game/",
    img: "https://gamesroid.com/wp-content/uploads/2023/10/How-to-Update-Township.webp",
  },
  {
    title: "Most Popular Mobile Games in India",
    category: "Gaming",
    link: "https://gamesroid.com/most-popular-mobile-games-in-india/",
    img: "https://gamesroid.com/wp-content/uploads/2023/09/Popular-Mobile-Games.webp",
  },
  {
    title: "100+ Best Discord Banners and GIFs",
    category: "Gaming",
    link: "https://gamesroid.com/best-discord-banners/",
    img: "https://gamesroid.com/wp-content/uploads/2024/01/Discord-Banners.webp",
  },
];

const Blogs = () => (
  <section id="blogs">
    <div className="container">
      <h2 className="section-heading text-center">My Blogs</h2>
      <div className="row justify-content-center gy-4">
        {blogs.map((blog) => (
          <div className="col-lg-4 col-md-6" key={blog.title} data-aos="fade-up">
            <div className="card article-card">
              <img src={blog.img} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <span className="badge bg-primary">{blog.category}</span>
                <h6 className="card-title mt-2">{blog.title}</h6>
                <a href={blog.link} target="_blank" className="text-decoration-none">
                  Read More <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;
