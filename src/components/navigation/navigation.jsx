import { Link, Outlet } from "react-router-dom";
import Logo from "../Logo/logo";

import './navigation.scss'

const Navigation = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand logo">
              {/* double <span>descent</span> */}
              <Logo />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/provision" className="dropdown-item">
                        Provision
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Mens
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    to="/sign-in"
                    className="nav-link"
                    tabindex="-1"
                    // aria-disabled="true"
                  >
                    Login
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn search-btn" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default Navigation;
