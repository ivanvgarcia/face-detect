import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="pa4">
      <p className="f3 b">
        {"This Magic Brain will detect faces in your picture. Give it a try!"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-dark-pink">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;