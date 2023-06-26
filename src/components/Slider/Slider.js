import React, { useEffect, useState } from "react";
import { DataSlider } from "./dataSlider";
import SliderButton from "./SliderButton";
import "./style.css";
const Slider = () => {
  const data = DataSlider;
  const [sliderIndex, setSliderIndex] = useState(1);
  const nextslide = () => {
    if (sliderIndex !== data.length) {
      setSliderIndex(sliderIndex + 1);
    } else if (sliderIndex === data.length) {
      setSliderIndex(1);
    }
  };

  const prevSlide = () => {
    if (sliderIndex !== 1) {
      setSliderIndex(sliderIndex - 1);
    } else if (sliderIndex === 1) {
      setSliderIndex(data.length);
    }
  };
  const moveDot = (index) => {
    setSliderIndex(index);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     nextslide();
  //   }, 2500);
  // }, [sliderIndex]);
  return (
    <>
      <div style={{ display: "flex" }} className="sliderContainer">
        <div>
          <SliderButton
            icon={"left"}
            sliderChange={prevSlide}
            direction="left"
          />
        </div>
        <div className="sliderImageContainer">
          {data.map((slider, index) => {
            return (
              <div
                style={{
                  display: sliderIndex === index + 1 ? "block" : "none",
                }}
                key={index}
                className="slider"
              >
                <img
                  src={slider.img}
                  alt={slider.alt}
                  className="slider-image"
                />
              </div>
            );
          })}
        </div>
        <div>
          <SliderButton
            icon="right"
            direction="right"
            sliderChange={nextslide}
          />
        </div>
      </div>
      <div className="dotsContainer">
        <div className="container-dots" style={{ display: "flex", gap: "5px" }}>
          {Array.from({ length: data.length }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={sliderIndex === index + 1 ? "dot-active" : "dot"}
              style={{
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
