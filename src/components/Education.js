import React from "react";

function Education() {
  return (
    <div
    id="education"
      className="education"
      style={{ backgroundColor: "#ffffff", padding: "2.6rem 0" }}
    >
      <div className="edu-text">
        <h2>
          <i class="fa-solid fa-school"></i> My Education and Certificate
        </h2>
        <p>
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think. 
          <a target="_blank" style={{ color: "#393939" , marginLeft:"4px"}} href="https://drive.google.com/drive/folders/1U_biRhKu1FXOyov86tbvaHzwCLrSRmaD">
            <i class="fa-solid fa-paper-plane"></i>
          </a>
        </p>
      </div>
      <div className="edu-content row">
        <div className="edu-img col-md-4">
          <img src="./images/fpt.jpg" alt="" />
        </div>
        <div className="edu-infor col-md-8">
          <h4>Software Engineering</h4>
          <p>FPT University</p>
          <h5>2020-2024 | Pursuing</h5>
        </div>
      </div>

      <div className="edu-content row">
        <div className="edu-img col-md-4">
          <img src="./images/jsad.png" alt="" />
        </div>
        <div className="edu-infor col-md-8">
          <h4>Javascript Advanced Course</h4>
          <p>FullStack F8</p>
          <h5>Up to now | Pursuing</h5>
        </div>
      </div>
      <div className="edu-content row">
        <div className="edu-img col-md-4">
          <img src="./images/da.png" alt="" />
        </div>
        <div className="edu-infor col-md-8">
          <h4>Data Structure & Algorithms</h4>
          <p>CodeLearn.io</p>
          <h5>Up to now| Pursuing</h5>
        </div>
      </div>
      <div className="edu-content row">
        <div className="edu-img col-md-4">
          <img src="./images/sdlc.PNG" alt="" />
        </div>
        <div className="edu-infor col-md-8">
          <h4>Software Development Lifecycle</h4>
          <p>Cousera | University of Minnesota</p>
          <h5>August 2022 - November 2022</h5>
        </div>
      </div>
      <div className="edu-content row">
        <div className="edu-img col-md-4">
          <img src="./images/Web.PNG" alt="" />
        </div>
        <div className="edu-infor col-md-8">
          <h4>Basics of Web Development & Coding</h4>
          <p>Cousera | University of Michigan</p>
          <h5>May 2022 - July 2022</h5>
        </div>
      </div>
    </div>
  );
}

export default Education;
