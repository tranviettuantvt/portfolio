import React from "react";

function Aboutme() {
  return (
    <div id="about">
      <h3 className="about-text">
        <i class="fa-solid fa-user-tie"> About Me</i>
      </h3>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 about-content mt-2"
            style={{ textAlign: "center" }}
          >
            <img className="" src="./images/avatar.jpg" alt="" />
          </div>
          <div className="about-infor col-md-6">
            <h3 style={{ color: "#393939" }}>My name is Viet Tuan</h3>
            <p>Front-End Developer</p>
            <p style={{ marginBottom: "8px" }}>
              I am currently a Junior studying Software Engineering at FPT
              University. Over the past year, I have been learning Javascript
              and ReactJS through various tutorials on YouTube and online
              documentation. In addition, I have also familiarized myself with
              other front-end tools such as Redux, TailwindCSS...
            </p>
            <p style={{ marginBottom: "8px" }}>
              With the short-term goal of becoming a full-stack developer after
              graduation and the longterm of being a technical lead, I am very
              passionate about improving my coding skills and developing
              applications & websites.
            </p>
            <p style={{ marginBottom: "8px" }}>
              As an intern, I am prepared to learn from my mistakes, gain
              practical experience, and do my best in projects. I am eager to
              work collaboratively with everyone and continuously improve
              myself. Give me a chance !!!
            </p>
            <ul className="about-detail row">
              <li className="col-md-5">
                <span>Age: </span>21
              </li>
              <li className="col-md-7">
                <span>Email: </span>tranviettuantvt@gmail.com
              </li>
            </ul>
            <ul className="about-detail row">
              <li className="col-md-5">
                <span>Phone: </span>0934 983 251
              </li>
              <li className="col-md-7">
                <span>Place: </span>Ngu Hanh Son, Da Nang
              </li>
            </ul>
            <a href="https://drive.google.com/file/d/1uLJuY3dQ0Jw-KFKysW1AtS2bQs2LFcqO/view?usp=sharing" target="_blank">
            <button className="banner-btn">
              Resume
              <i
                style={{ position: "relative", top: "1px", left: "2px" }}
                class="fa-solid fa-circle-right"
              ></i>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
