import React from "react";
import ReactLogo from "../assets/logo/react.png";
import NodeLogo from "../assets/logo/nodejs.png";
import LaravelLogo from "../assets/logo/laravel.png";
import PhpLogo from "../assets/logo/php.png";
import MongodbLogo from "../assets/logo/mongodb.png";
import MysqlLogo from "../assets/logo/mysql.png";
import BootstrapLogo from "../assets/logo/bootstrap.png";
import ExperienceCard from "../components/ExperienceCard";
const Experience = () => {
  return (
    <section id="section-experience" className="section-experience container-fluid shadow p-4">
      <div className="container">
        <h3 className="text-main text-center my-3">Experiences</h3>
        <hr className="border-main" />
      </div>
      <div className="row my-3 justify-content-center">
        <ExperienceCard
          expImg={ReactLogo}
          expAlt="React Logo"
          expDesc="A JavaScript library for building user interfaces"
        />
        <ExperienceCard
          expImg={NodeLogo}
          expAlt="Node Logo"
          expDesc="Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine"
        />
        <ExperienceCard
          expImg={LaravelLogo}
          expAlt="Laravel Logo"
          expDesc="Laravel is a web application framework with expressive, elegant syntax"
        />
        <ExperienceCard
          expImg={PhpLogo}
          expAlt="PHP Logo"
          expDesc="PHP is a popular general-purpose scripting language that is especially suited to web development"
        />
        <ExperienceCard
          expImg={MongodbLogo}
          expAlt="MongoDB Logo"
          expDesc="MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era"
        />
        <ExperienceCard
          expImg={MysqlLogo}
          expAlt="MySQL Logo"
          expDesc="MySQL Database Service is a fully managed database service to deploy cloud-native applications using the world's most popular open source database"
        />
        <ExperienceCard
          expImg={BootstrapLogo}
          expAlt="Bootstrap Logo"
          expDesc="Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites"
        />
      </div>
    </section>
  );
};

export default Experience;
