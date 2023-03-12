import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div class="hero-text">
        <h1>Hi There, I'm VIET TUAN</h1>
        <p style={{ marginTop: "16px", color: "#6c757d" }}>
          I am into Front-end developer with a passion for creating dynamic and engaging
          user interfaces. I am seeking ReactJs internship opportunity and so excited to take on new challenges and contribute
          to innovative projects. <br />
        </p>
        <button className="banner-btn">
          About me <i class="fa-regular fa-circle-down"></i>
        </button>
        <ul className="banner-icon">
          <li>
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="">
              <iconify-icon
                style={{ color: "#393939", position: "relative", top: "2px" }}
                icon="simple-icons:netlify"
              ></iconify-icon>
            </a>
          </li>
        </ul>
      </div>
      <div className="img-avatar">
        <img src="./images/avatar.jpg" alt="" />
      </div>
    </div>
  );
}

export default Banner;
