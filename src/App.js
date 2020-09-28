import React, { Fragment } from "react";
import Hero from "./components/Hero";
import Image from "./assets/img/devmode.gif";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import "jquery/dist/jquery.slim.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/App.css";
// import Projects from "./components/Projects";
function App() {
  return (
    <Fragment>
      <Hero />
      <Profile image={Image} />
      <Experience />
      {/* <Projects /> */}
    </Fragment>
  );
}

export default App;
