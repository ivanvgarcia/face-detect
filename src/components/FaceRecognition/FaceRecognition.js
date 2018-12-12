import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div>
      <div className="center ma">
        <div className="absolute mt2">
          {imageUrl && (
            <img
              id="inputimage"
              src={imageUrl}
              alt="detect"
              width="300px"
              height="auto"
              style={{ border: "2px solid white" }}
            />
          )}
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
