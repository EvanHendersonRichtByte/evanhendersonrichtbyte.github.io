import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <a class="navbar-brand text-secondary" href="/">
        {" "}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Location
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
