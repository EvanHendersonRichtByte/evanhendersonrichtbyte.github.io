import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { slideInLeft, fadeInRight } from "react-animations";
import styled, { keyframes } from "styled-components";
import Avatar from "../assets/img/avatar.jpg";
const Profile = (props) => {
  const [imageTrigger, setImageTrigger] = useState("");
  const [paragraphTrigger, setParagraphTrigger] = useState("");
  const handleWaypointEnter = () => {
    setImageTrigger("yes");
    setParagraphTrigger("yes");
  };
  const slideInL = keyframes`${slideInLeft}`;
  const LeftImageAnim = styled.div`
    animation: 2s ${slideInL};
  `;
  const fadeInR = keyframes`${fadeInRight}`;
  const RightParagraphAnim = styled.div`
    animation: 2s ${fadeInR};
  `;
  return (
    <div className="profile container text-center my-4">
      <Waypoint onEnter={handleWaypointEnter} />
      <div className="profile-header ">
        <h3 className="text-main">About Me</h3>
        <hr className="border-main" />
      </div>
      <div className="profile-content container">
        <div className="row">
          {imageTrigger === "yes" && (
            <LeftImageAnim>
              <div className="profile-content-left col-md-4">
                <img
                  className="profile-image rounded mt-4"
                  src={Avatar}
                  alt="Me"
                />
              </div>
            </LeftImageAnim>
          )}

          <div className="profile-content-right col-md-8">
            <table className="table table-borderless text-left">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>Evan Henderson RichtByte</td>
                </tr>
                <tr>
                  <th>Date of Birth:</th>
                  <td>May 08, 2003</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>adamhenderson3x3@gmail.com</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>29.116435, -57.918038</td>
                </tr>
                <tr>
                  <th>Phone:</th>
                  <td>+62 8214141xxxx</td>
                </tr>
              </tbody>
            </table>
            {paragraphTrigger === "yes" && (
              <RightParagraphAnim>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  interdum mi velit, ut viverra odio maximus a. Maecenas non
                  feugiat nibh. Mauris vitae elementum tellus, et ornare mauris.
                  Praesent semper placerat dictum. Orci varius natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                  Curabitur iaculis dolor nunc,
                </p>
              </RightParagraphAnim>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
