import React, { useEffect } from "react";
import $ from "jquery";
const Projects = () => {
  useEffect(() => {
    $.ajax({
      url: "https://api.github.com/users/evanhendersonrichtbyte/repos",
      accepts: { mycustomtype: "application/vnd.github.v3+json" },
    })
      .fail(() => {
        console.log("GET operation is failed");
      })
      .then((res) => {
        console.log(res);
      });
  });

  return (
    <div className="projects container pt-3">
      <h3 className="text-center text-bootstrap">Projects</h3>
      <hr className="border-bootstrap" />
    </div>
  );
};

export default Projects;
