import React, { Fragment } from "react";
import Hero from "./layouts/Hero";
import Profile from "./layouts/Profile";
import Experience from "./layouts/Experience";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";
import Loader from "./layouts/Loader";
import $ from "jquery";
import "jquery/dist/jquery.slim.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/App.css";
function App() {
  return (
    <Fragment>
      {$(document).ready() ? (
        <Fragment>
          <Hero />
          <Profile />
          <Experience />
          <Projects />
          <Contact />
        </Fragment>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
}

export default App;
