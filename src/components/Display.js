import React from "react";
import image1 from "../images/card1Image.png";
import image2 from "../images/card2Image.png";
import image3 from "../images/card3Image.png"
import whatsappLogo from "../images/image1.png";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaWhatsapp } from "react-icons/fa";

const Display = () => {
  const containerStyle = {
    padding: "10px",
  };

  const cardImageStyle = {
    width: "100%",
  };

  const whatsappLogoStyle = {
    width: "30px",
    marginRight: "5px",
  };

  const cardInnerStyle = {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
  };

  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <h5 className="text-success fw-bold">Whatsapp Courses</h5>
      <div className="row row-cols-4">
        <div className="col mb-4">
          <div className="card">
            <img src={image1} alt="Card 1" style={cardImageStyle} />
            <div className="card-body">
              <h4>Power of Innovation and Science</h4>
              <div className="d-flex align-items-center">
                <img
                  src={whatsappLogo}
                  alt="WhatsApp Logo"
                  style={whatsappLogoStyle}
                />
                <p>WhatsApp</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                WhatsApp logo and text. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. WhatsApp logo and text.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "20px",
                  border: "1px solid black",
                }}
              >
                Join Online Courses
              </button>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card">
            <img src={image2} alt="Card 2" style={cardImageStyle} />
            <div className="card-body">
              <h4>Power of Innovation and Science</h4>
              <div className="d-flex align-items-center">
                <img
                  src={whatsappLogo}
                  alt="WhatsApp Logo"
                  style={whatsappLogoStyle}
                />
                <p>WhatsApp</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                WhatsApp logo and text. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. WhatsApp logo and text.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "20px",
                  border: "1px solid black",
                }}
              >
                Join Online Courses
              </button>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card">
            <img src={image1} alt="Card 3" style={cardImageStyle} />
            <div className="card-body">
              <h4>Power of Innovation and Science</h4>
              <div className="d-flex align-items-center">
                <img
                  src={whatsappLogo}
                  alt="WhatsApp Logo"
                  style={whatsappLogoStyle}
                />
                <p>WhatsApp</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                WhatsApp logo and text. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. WhatsApp logo and text.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "20px",
                  border: "1px solid black",
                }}
              >
                Join Online Courses
              </button>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card" style={{ backgroundColor: "yellow", height:'170px' }}>
            <div className="card-body">
              <div>
                <div style={cardInnerStyle}>
                  <FaWhatsapp size={30} />
                  <span style={{ marginLeft: "2px" }}>
                    Do the Courses Over Whatsapp
                  </span>
                </div>
                <div style={inputContainerStyle}>
                  <PhoneInput
                    placeholder="Enter phone number"
                    defaultCountry="IN"
                    flags={["IN"]}
                    inputStyle={{ width: "100%" }}
                  />
                 
                 
                </div>
                <br />
                <button
                    type="submit"
                    className="btn btn-success  w-100 border-radius-20"
                  >
                    Sign
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
