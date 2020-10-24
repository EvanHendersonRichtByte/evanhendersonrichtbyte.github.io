import React, { useState, Fragment } from "react";
import ProjectsCard from "../components/ProjectsCard";
import ServiceImg from "../assets/img/furniture.jpg";
import LibraryImg from "../assets/img/library.jpg";
import EcommerceImg from "../assets/img/ecommerce.png";
import CarRentalImg from "../assets/img/carrental.jpg";
import AdminDashboard from "../assets/img/admindashboard.png";
import { Waypoint } from "react-waypoint";
import styled, { keyframes } from "styled-components";
import { slideInRight, slideInLeft, fadeInUp } from "react-animations";

const Projects = () => {
  const [cardTrigger, setCardTrigger] = useState("");
  const handleWaypointEnter = () => {
    setCardTrigger("yes");
  };
  const ProjAnimR = keyframes`${slideInRight}`;
  const ProjectsAnimR = styled.div`
    animation: 1.5s ${ProjAnimR};
  `;
  const ProjAnimL = keyframes`${slideInLeft}`;
  const ProjectsAnimL = styled.div`
    animation: 1.5s ${ProjAnimL};
  `;
  const ProjAnimC = keyframes`${fadeInUp}`;
  const ProjectsAnimC = styled.div`
    animation: 1.5s ${ProjAnimC};
  `;
  return (
    <section className="section-projects container mt-4">
      <Waypoint onEnter={handleWaypointEnter} />
      <h3 className="text-center text-main">Projects</h3>
      <hr className="border-main" />
      <div className="card-columns text-center">
        {cardTrigger === "yes" && (
          <Fragment>
            <ProjectsAnimL>
              <ProjectsCard
                projImage={ServiceImg}
                projTitle="Kryptonforce Service Online"
                projImageAlt="Service"
                projDesc="This project is currently maintained"
              />
            </ProjectsAnimL>
            <ProjectsAnimC>
              <ProjectsCard
                projImage={LibraryImg}
                projTitle="ReactJS Library Web"
                projImageAlt="Library"
                projDesc="This website helps you to get your desired books, even infinium oghma"
              />
            </ProjectsAnimC>
            <ProjectsAnimC>
              <ProjectsCard
                projImage={EcommerceImg}
                projTitle="Ecommerce"
                projImageAlt="Ecommerce"
                projDesc="This project is aimed to help US army to fight against afghanistan"
              />
            </ProjectsAnimC>
            <ProjectsAnimR>
              <ProjectsCard
                projImage={AdminDashboard}
                projTitle="Laravel Admin Service"
                projImageAlt="Laravel Admin Service"
                projDesc="Laravel Admin Service"
              />
            </ProjectsAnimR>
            <ProjectsAnimR>
              <ProjectsCard
                projImage={CarRentalImg}
                projTitle="Keep it Simple Rental Online"
                projImageAlt="Keep it Simple Rental Online"
                projDesc="This website is dedicated for specific purposes only"
              />
            </ProjectsAnimR>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Projects;
