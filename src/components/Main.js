import React from "react";
import image from "../images/image1.png";
import image2 from "../images/image2.png";
const MainComponent = () => {
  const serifFont = {
    fontFamily: "serif",
    fontWeight: "600",
    fontSize: "30px",
  };
  const serifFont2 = {
    fontFamily: "serif",
    
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <div>
              <img
                src={image2}
                className="img-fluid rounded-circle"
                alt="Sample"
              />
            </div>
            <h3 style={serifFont} className="me-4 text-success">
              LEARNING NETWORKS
            </h3>
          </div>
          <div className="ms-3">
            <h1 style={serifFont2}>Education Meets Expertise!</h1>
            <h4 style={serifFont2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </h4>
          </div>
        </div>
        <div className="col-md-6">
          <img src={image} className="img-fluid" alt="Sample" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
