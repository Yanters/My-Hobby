import React from "react";
import "./Projectcss.css";
import { ProjectsContainer } from "./ProjectsElements";

import { projects } from "./ProjectsData";
import { Icon } from "../SignIn/SignInElements";
import Card from "./Card";

const Projects = () => {
  return (
    <ProjectsContainer>
      <div style={{ width: "100%", padding: "20px 0px" }}>
        <Icon style={{ marginTop: "200px", marginBottom: "200px" }} to="/">
          My Hobby
        </Icon>
        <br />
        <br />
      </div>
      <div className="wrapper">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
            link={project.link}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="gototable">
        <Icon style={{ marginTop: "200px", marginBottom: "200px" }} to="/">
          Summary
        </Icon>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            width: "80vw",
            margin: "auto",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Time Spent</th>
                <th>Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>YelpCamp</td>
                <td>~100h</td>
                <td>Node JS | DataBase</td>
              </tr>
              <tr>
                <td>2</td>
                <td>My Hobby</td>
                <td>~70h</td>
                <td>React JS | Jquery</td>
              </tr>
              <tr>
                <td>3</td>
                <td>CryptoCurrency</td>
                <td>~10h</td>
                <td>React JS | Redux | RapidAPI</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Messenger App</td>
                <td>~8h</td>
                <td>React JS | Firebase | Chat Engine</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Paralax Scrolling</td>
                <td>~5h</td>
                <td>HTML | CSS | JS</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Museum Of Candy</td>
                <td>~2h</td>
                <td>HTML | CSS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br /> <br />
      <br />
    </ProjectsContainer>
  );
};

export default Projects;
