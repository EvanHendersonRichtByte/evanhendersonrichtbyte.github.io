import React from "react";

const Experience = () => {
  return (
    <div className="experience container-fluid shadow p-4">
      <h3 className="text-bootstrap text-center">Experiences</h3>
      <hr className="border-bootstrap" />
      <div className="row mt-3 justify-content-center">
        <div className="card bg-react border-react m-3">
          <div className="card-body text-react">
            <h5 className="card-title">ReactJS</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-node m-3">
          <div className="card-body text-node">
            <h5 className="card-title">NodeJS</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-danger m-3">
          <div className="card-body text-danger">
            <h5 className="card-title">Laravel</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card m-3 border-php">
          <div className="card-body text-php">
            <h5 className="card-title">PHP</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-success m-3">
          <div className="card-body text-success">
            <h5 className="card-title">MongoDB</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-mysql m-3">
          <div className="card-body text-mysql">
            <h5 className="card-title">MySQL</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-bootstrap m-3">
          <div className="card-body text-bootstrap">
            <h5 className="card-title">Bootstrap</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
