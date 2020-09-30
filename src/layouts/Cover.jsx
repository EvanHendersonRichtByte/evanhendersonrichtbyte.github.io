import React from "react";
import $ from "jquery";
const Cover = () => {
  $(".cover").slideDown(1000);
  return (
    <div className="cover container-fluid vh-100 d-flex justify-content-center align-items-center position-absolute bg-dark">
      <h1>Feeling lonely?</h1>
    </div>
  );
};

export default Cover;
