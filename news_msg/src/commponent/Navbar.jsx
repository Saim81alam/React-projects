function Navbar({ setCategory }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand badge bg-light text-dark fs-4" href="#">
          NEWS APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item btn">
              <div
                className="nav-link active"
                onClick={(e) => setCategory(e.target.innerText)}
              >
                business
              </div>
            </li>
            <li className="nav-item btn">
              <div
                className="nav-link active"
                onClick={(e) => setCategory(e.target.innerText)}
              >
                entertainment
              </div>
            </li>
            <li className="nav-item btn">
              <div
                className="nav-link active"
                onClick={(e) => setCategory(e.target.innerText)}
              >
                health
              </div>
            </li>
            <li className="nav-item btn">
              <div
                className="nav-link active"
                onClick={(e) => setCategory(e.target.innerText)}
              >
                sports
              </div>
            </li>
            <li className="nav-item btn">
              <div
                className="nav-link active"
                onClick={(e) => setCategory(e.target.innerText)}
              >
                technology
              </div>
            </li>
            <li className="nav-item btn">
              <div
                className="nav-link active"
                onClick={(e) => setCategory(e.target.innerText)}
              >
                science
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
