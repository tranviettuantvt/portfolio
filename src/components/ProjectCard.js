import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({ title, tech, imgUrl, code, netlify, des }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="error" />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{tech}</span>
        </div>
        <div className="proj-btn">
          <a target="_blank" style={{ color: "white" }} href={netlify}>
            <i class="fa-solid fa-paper-plane"></i> <span>Visit</span>
          </a>
          <a target="_blank" style={{ color: "white" }} href={code}>
            <i class="fa-solid fa-code"></i>
            <span> Code</span>
          </a>
        </div>
      </div>
      <div className="proj-des">
        <div className="proj-des-header">
          <span>{title} | {tech}</span>
        </div>
        <div className="proj-des-body">
          <p style={{color:"#a0a0b4"}}>{des}</p>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
