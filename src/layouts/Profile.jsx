import React from "react";

const Profile = (props) => {
  return (
    <div className="profile container text-center my-4">
      <div className="profile-header ">
        <h3 className="text-main">About Me</h3>
        <hr className="border-main"/>
        <img
          className="profile-image rounded-circle my-3"
          src={props.image}
          alt="Me"
        />
      </div>
      <div className="profile-content container">
        <div className="row">
          <div className="profile-content-left col-md-6">
            <p className="pt-4 text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              interdum mi velit, ut viverra odio maximus a. Maecenas non feugiat
              nibh. Mauris vitae elementum tellus, et ornare mauris. Praesent
              semper placerat dictum. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Curabitur iaculis
              dolor nunc, ac congue justo volutpat non. Donec dignissim dui leo,
              vel pulvinar tellus bibendum eu. Aenean eros enim, laoreet id
              dapibus in, porttitor at nibh. Pellentesque efficitur, nisi nec
              facilisis bibendum, urna felis ultricies odio, id faucibus nulla
              lectus a neque.
            </p>
          </div>
          <div className="profile-content-right col-md-6">
            <table className="table table-borderless text-left">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>Galur Arasy Lumintang</td>
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
                  <td>Jl. Wendit Barat no.18, Malang, East Java, Indonesia</td>
                </tr>
                <tr>
                  <th>Phone:</th>
                  <td>+62 82141413537</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
