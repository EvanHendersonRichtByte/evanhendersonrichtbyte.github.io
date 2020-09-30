import React, { Fragment, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook, FiSmartphone, FiTwitter } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { Waypoint } from "react-waypoint";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const Contact = () => {
  const [contactTrigger, setContactTrigger] = useState("");
  const handleWaypointEnter = () => {
    setContactTrigger("yes");
  };
  const EmailAnimR = keyframes`${pulse}`;
  const EmailAnim = styled.td`
    animation: 1.5s ${EmailAnimR};
  `;
  return (
    <Fragment>
      <div className="contact container-fluid bg-light">
        <Waypoint onEnter={handleWaypointEnter} />
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5">
              <div className="row">
                <div className="col-md-6">
                  <h3>TALK TO ME</h3>
                  <p className="mb-3">
                    Cards can be organized into Masonry-like columns with just
                    CSS by wrapping them in .card-columns. Cards are built with
                    CSS column properties instead of flexbox for easier
                    alignment. Cards are ordered from top to bottom and left to
                    right.
                  </p>
                  <table className="table table-borderless">
                    {contactTrigger === "yes" && (
                      <EmailAnim>
                        <tbody>
                          <tr className="row">
                            <td>
                              <HiOutlineMail className="text-main" />
                            </td>
                            <td>adamhenderson3x3@gmail.com</td>
                          </tr>
                          <tr className="row">
                            <td>
                              <FiSmartphone className="text-main" />
                            </td>
                            <td>+62 8214141xxxx</td>
                          </tr>
                          <tr className="row">
                            <td>
                              <VscLocation className="text-main" />
                            </td>
                            <td>29.116435, -57.918038</td>
                          </tr>
                        </tbody>
                      </EmailAnim>
                    )}
                  </table>
                </div>
                <div className="col-md-4 offset-md-1 bg-light">
                  <h3 className="mb-3">SAY SOMETHING</h3>
                  <form action="/" className="form shadow-lg">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-main"
                        defaultValue="Your Name..."
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-main"
                        defaultValue="Your Mail..."
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control border-main"
                        defaultValue="Message..."
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-block btn-main">
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-footer container-fluid bg-main text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>212</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="col-md-4 pt-4">
              <p>
                <span className="font-weight-bold">About Me</span> <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center text-center">
              <div className="row">
                <div className="col-md-4">
                  <FiFacebook className="footer-icon" />
                </div>
                <div className="col-md-4">
                  <FiTwitter className="footer-icon" />
                </div>
                <div className="col-md-4">
                  <AiOutlineGithub className="footer-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
