import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import ServiceImg from "../assets/img/furniture.jpg";
import LibraryImg from "../assets/img/library.jpg";
import EcommerceImg from "../assets/img/ecommerce.png";
import CarRentalImg from "../assets/img/carrental.jpg";
import AdminDashboard from "../assets/img/admindashboard.png";

const Projects = () => {
  return (
    <div className="projects container mt-4">
      <h3 className="text-center text-main">Projects</h3>
      <hr className="border-main" />
      <div className="card-columns text-center">
        <ProjectsCard
          projImage={ServiceImg}
          projTitle="Kryptonforce Service Online"
          projImageAlt="Service"
          projDesc="This project is currently maintained"
        />
        <ProjectsCard
          projImage={LibraryImg}
          projTitle="ReactJS Library Web"
          projImageAlt="Library"
          projDesc="This website helps you to get your desired books, even infinium oghma"
        />
        <ProjectsCard
          projImage={EcommerceImg}
          projTitle="Ecommerce"
          projImageAlt="Ecommerce"
          projDesc="This project is aimed to help US army to fight against afghanistan"
        />
        <ProjectsCard
          projImage={AdminDashboard}
          projTitle="Laravel Admin Service"
          projImageAlt="Laravel Admin Service"
          projDesc="Laravel Admin Service"
        />
        <ProjectsCard
          projImage={CarRentalImg}
          projTitle="Keep it Simple Rental Online"
          projImageAlt="Keep it Simple Rental Online"
          projDesc="This website is dedicated for specific purposes only"
        />
      </div>
    </div>
  );
};

export default Projects;
