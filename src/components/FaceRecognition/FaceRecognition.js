import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div>
      <div className="center ma">
        <div className="mt2">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="detect"
              width="300px"
              height="auto"
              style={{ border: "2px solid white" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
