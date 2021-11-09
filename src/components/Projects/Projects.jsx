import React from "react";
import "./Projectcss.css";
import {
  // BlogCard,
  // CardInfo,
  // ExternalLinks,
  // GridContainer,
  // HeaderThree,
  // Hr,
  // Tag,
  // TagList,
  // TitleContent,
  // UtilityList,
  // Img,
  // Section,
  // SectionDivider,
  // SectionTitle,
  ProjectsContainer,
  // ProjectsDisplay,
} from "./ProjectsElements";
// import image3 from "../../images/5.svg";

import { projects } from "./ProjectsData";
// import Navbar from "../Navbar/Navbar";
import { Icon } from "../SignIn/SignInElements";
import Card from "./Card";

const Projects = () => {
  return (
    <ProjectsContainer>
      <div style={{ width: "100%", padding: "20px 0px" }}>
        <Icon style={{ marginTop: "200px" }} to="/">
          My Hobby
        </Icon>
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
        <Card
          img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="The Everyday Salad"
          description="Take your boring salads up a knotch. This recipe is perfect for lunch
      and only contains 5 ingredients!"
        />

        <Card
          img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Simple Risotto"
          description="Fear Risotto no more! This simple recipe is perfect for family dinners."
        />

        <Card
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Baked Cod with Vegetables"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
