import React from "react";
import { Link } from "react-scroll";

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
              <Link className="nav-link nav-after" to="home" delay={50} span={true} smooth={true} activeClass="active">
                <div className="nav-after">
                  Home <span class="sr-only">(current)</span>
                </div>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link nav-after" to="about" delay={50} span={true} smooth={true}>
                <div className="nav-after">About</div>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link nav-after" to="skill" delay={50} span={true} smooth={true}>
                <div className="nav-after">Skill</div>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link nav-after" to="education" delay={50} span={true} smooth={true}>
                <div className="nav-after">Education</div>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link nav-after" to="project" delay={50} span={true} smooth={true}>
                <div className="nav-after">Project</div>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link nav-after" to="education" delay={50} span={true} smooth={true}>
                <div className="nav-after">Certificate</div>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link nav-after" to="connect" delay={50} span={true} smooth={true}>
                <div className="nav-after">Contact</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbart;
