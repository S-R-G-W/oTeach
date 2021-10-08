import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <nav class="navbar  navbar-blue bg-light">
        <a class="navbar-brand" href="#">
          oTeach
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" >SignUp</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
