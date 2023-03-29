import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Tetris",
      tech: "Javascript",
      des: "Tetris is a beloved classic puzzle game that challenges players to fit falling blocks of various shapes into a grid. The goal is to create complete horizontal lines without any gaps, using skills such as block spawning, rotation, movement, and scoring. ",
      code: "https://github.com/tranviettuantvt/tetris",
      netlify: "https://tvt-tetris.netlify.app/",
      imgUrl: require("../asset/tetris.PNG"),
    },
    {
      id: 2,
      title: "Spotify",
      tech: "ReactJs & TailwindCss",
      des:"A clone of Spotify that performs basic music app actions, such as: play and pause, next and prev, random and repeat, seek and control volume of songs. With full responsive on PC, tablet and mobile.",
      code: "https://github.com/tranviettuantvt/spotify-update",
      netlify: "https://tvt-spotify-update.netlify.app/",
      imgUrl: require("../asset/spotify.PNG"),
    },
    {
      id: 3,
      title: "TodoList",
      tech: "ReactJs & Redux Toolkit",
      des:"A todo app which perform various actions, including adding to-do lists, marking them as complete, and filtering them based on three different criteria. This is the first project where I have applied Redux Toolkit, so that I have followed a guide from a YouTube video.",
      code: "https://github.com/tranviettuantvt/TodoApp_ReduxToolkit",
      netlify: "https://tvt-todoapp.netlify.app/",
      imgUrl: require("../asset/todoapp.PNG"),
    },
  ];

  const project2 = [
    {
      id: 4,
      title: "Calculator",
      tech: "ReactJs",
      des:"A basic calculator that do four mathematics operation: plus, multiply, devide, subtraction. Beside, app also perform delete, percent actions. This project allow me to apply React hooks and gain deeper understanding after I learn ReactJs course in F8.",
      code: "https://github.com/tranviettuantvt/Calculator",
      netlify: "https://tvt-calculator.netlify.app/",
      imgUrl: require("../asset/calculator.PNG"),
    },
    {
      id: 5,
      title: "Gym Website",
      tech: "ReactJs",
      des:"A website for gym club with friendly user interface. I create this website to understand how to structure a React file and analyse the component.",
      code: "https://github.com/tranviettuantvt/Gym-web",
      netlify: "https://tvt-gymweb.netlify.app/",
      imgUrl: require("../asset/gym-web.PNG"),
    },
    {
      id: 6,
      title: "Music Player",
      tech: "Javascript",
      des:"A mobile music app which can perform the music actions such as: play and pause, next and prev, repeat and random Song... This is the project of Javascript course on F8 that I practice.",
      code: "https://github.com/tranviettuantvt/Music-Player",
      netlify: "https://tvt-musicplayer-mb.netlify.app/",
      imgUrl: require("../asset/music-mb.PNG"),
    },
  ];
  const project3 = [
    {
      id: 7,
      title: "Shopee Website",
      tech: "Javascript",
      des:"A clone website of Shopee with friendly user interface. This is the project I do at the end to complete the HTML/CSS course on F8",
      code: "https://github.com/tranviettuantvt/Shopee",
      netlify: "https://app.netlify.com/sites/tvt-shopee/overview",
      imgUrl: require("../asset/shopee.PNG"),
    },
    {
      id: 8,
      title: "Travel Website",
      tech: "ReactJs",
      des:"A website for travel with friendly user interface. I create this website with the purpose of practicing and understanding deeply how to structure a React file and analyse the component after learning ReactJS.",
      code: "https://github.com/tranviettuantvt/TravelWeb-React",
      netlify: "https://tvt-travelweb.netlify.app/",
      imgUrl: require("../asset/travel.PNG"),
    },
  ];
  return (
    <section className="project" id="project">
      <hr style={{ margin: "0 12rem" }} />
      <hr style={{ margin: "1rem 16rem 5rem" }} />
      <Container>
        <Row>
          <Col>
            <h2>
              <i class="fa-solid fa-school"></i>Personal Projects
            </h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {project2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {project3.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
