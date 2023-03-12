import React from "react";

function Navbart() {
  return (
    <nav class="navbar fixed-top py-2 navbar-expand-lg ">
      <div className="container-md p-0 ">
        <a class="navbar-brand ms-5" href="#">
          <img src="./images/TVT_LOGO.png" alt="" />
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-5">
            <li class="nav-item active">
              <a class="nav-link " href="#">
                <div className="nav-after">
                  Home <span class="sr-only">(current)</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-after" href="#">
                <div className="nav-after">About</div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-after" href="#">
                <div className="nav-after">Skill</div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-after" href="#">
                <div className="nav-after">Education</div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-after" href="#">
                <div className="nav-after">Project</div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-after" href="#">
                <div className="nav-after">Certificate</div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-after" href="#">
                <div className="nav-after">Contact</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbart;
