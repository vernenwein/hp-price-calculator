import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StepSlider = (props) => {
  const initialSlide = { props };
  const sliderSettings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: false,
    infinite: false,
    initialSlide,
  };
  return (
    <Slider {...sliderSettings}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </Slider>
  );
};

export default StepSlider;
