import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";

const StepSlider = (props) => {
  const {
    refSlider,
    hasLMS,
    setHasLMS,
    numOfEmployees,
    setNumOfEmployees,
  } = props;
  const sliderSettings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: false,
    infinite: false,
    arrows: false,
  };
  return (
    <Slider ref={refSlider} {...sliderSettings}>
      <SlideOne hasLMS={hasLMS} setHasLMS={setHasLMS} />
      {hasLMS === "false" && (
        <SlideTwo
          numOfEmployees={numOfEmployees}
          setNumOfEmployees={setNumOfEmployees}
        />
      )}
      <SlideThree hasLMS={hasLMS} numOfEmployees={numOfEmployees} />
    </Slider>
  );
};

export default StepSlider;
