const Header = () => {
  return (
    <header id="header">
      <nav id="navbar" className="navbar navbar-expand-md">
        <div className="container">
          <a href="/" className="navbar-brand logo">
            <span>&lt;</span>
            <span className="logo-name">March Somora</span>
            <span>/&gt;</span>
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <i className="bi bi-list toggle-icon"></i>
          </button>

          <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#hero" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#skills" className="nav-link">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#projects" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#blogs" className="nav-link">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
