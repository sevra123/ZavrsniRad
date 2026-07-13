import React from "react";
import "./Banner.css";

function Banner({ title, image }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-overlay">
        <div className="container">
          <h1 className="banner-title">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
