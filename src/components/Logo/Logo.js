import React from "react";
import Tilt from "react-tilt";
import faceDetect from "./face-detection.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 center">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          {" "}
          <h1>Face Detect</h1>
          <img src={faceDetect} alt="face detect icon" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
