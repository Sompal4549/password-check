import React from "react";
import "./style.css"
const SliderButton = ({ icon, sliderChange, direction }) => {
  return (
    <div
      className={`${direction}_arrow arrow`}
      onClick={sliderChange}
    >
      <button>{icon}</button>
    </div>
  );
};

export default SliderButton;
