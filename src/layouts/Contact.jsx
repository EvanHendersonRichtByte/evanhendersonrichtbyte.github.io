import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook, FiSmartphone, FiTwitter } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { Waypoint } from "react-waypoint";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import { init, send } from "emailjs-com";

const Contact = () => {
  // ? State Declaration
  const [state, setState] = useState({
    user_name: "",
    user_email: "",
    message: "",
    to_name: "Evan Henderson",
    reply_to: "No one",
  });
  const { user_name, user_email, message } = state;
  const [contactTrigger, setContactTrigger] = useState("");
  // ! Function and Anim Declaration
  const handleInput = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });
  const handleWaypointEnter = () => setContactTrigger("yes");

  const EmailAnimR = keyframes`${pulse}`;
  const EmailAnim = styled.td`
    animation: 1.5s ${EmailAnimR};
  `;
  // * EmailJS Integration
  init("user_9rgWJ9bLGKwR8ijemGaxL");
  let templateParams = { user_name, user_email, message };
  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_wwffwm4", "template_hknpbnd", templateParams).then(
      (res) => {
        console.log("Success!", res.status);
        window.location.reload()
      },
      (err) => console.log("Failed", err)
    );
  };
  return (
    <section id="section-contact" className="section-contact">
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
                  <form onSubmit={handleSubmit} className="form shadow-lg">
                    <div className="form-group">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control border-main"
                        value={user_name}
                        placeholder="Your Name"
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control border-main"
                        placeholder="Your Email"
                        value={user_email}
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        className="form-control border-main"
                        value={message}
                        onChange={handleInput}
                        placeholder="Message..."
                        required
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
    </section>
  );
};

export default Contact;
