import React, { Fragment, useEffect } from "react";
import $ from "jquery";
const ExperienceCard = (props) => {
  useEffect(() => {
    $(".exp-card").hover(
      function () {
        $(this).find("img").addClass("card-img-hovered");
        $(this).find(".exp-desc").addClass("card-text-hovered");
      },
      function () {
        $(this).find("img").removeClass("card-img-hovered");
        $(this).find(".exp-desc").removeClass("card-text-hovered");
      }
    );
  });
  return (
    <Fragment>
      <div className="card bg-transparent border-0 m-5 d-flex justify-content-center align-items-center exp-card">
        <div className="card-body">
          {props.expAlt === "Laravel Logo" ||
          props.expAlt === "MongoDB Logo" ? (
            <img
              className="mt-2"
              src={props.expImg}
              alt={props.expAlt}
              height="50"
            />
          ) : (
            <img src={props.expImg} alt={props.expAlt} height="75" />
          )}
        </div>
        <div className="exp-desc position-absolute">
          <p className="text-center">{props.expDesc}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ExperienceCard;
