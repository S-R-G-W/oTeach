import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <nav className="navbar  navbar-blue bg-light">
        <a className="navbar-brand" >
          oTeach
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" >SignUp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
