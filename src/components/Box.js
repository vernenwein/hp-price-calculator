import React, { useRef, useState } from "react";
import StepSlider from "./StepSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Box = () => {
  const slider = useRef(null);
  const [hasLMS, setHasLMS] = useState(null);
  const [numOfEmployees, setNumOfEmployees] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const isOnLastSlide =
    (hasLMS === true && currentStep === 1) || currentStep === 2;
  const isNextButtonDisabled =
    hasLMS === null ||
    (hasLMS !== null && currentStep > 0 && numOfEmployees === null);

  const clickPrevSlide = () => {
    goToSlide(currentStep - 1);
  };

  const clickNextSlide = () => {
    if (isOnLastSlide) {
      alert("submit");
    } else {
      goToSlide(currentStep + 1);
    }
  };

  const goToSlide = (i) => {
    slider.current.slickGoTo(i);
    setCurrentStep(i);
  };

  return (
    <div className="rounded-md bg-white p-2 shadow-md max-w-full w-3/6">
      <StepSlider
        refSlider={slider}
        hasLMS={hasLMS}
        setHasLMS={setHasLMS}
        numOfEmployees={numOfEmployees}
        setNumOfEmployees={setNumOfEmployees}
      />
      <div className="flex flex-row justify-between">
        <button
          disabled={currentStep === 0}
          onClick={clickPrevSlide}
          className="rounded bg-green-400 text-white hover:bg-green-500 py-1 px-2 duration-300"
        >
          Previous
        </button>
        <button
          disabled={isNextButtonDisabled}
          onClick={clickNextSlide}
          className="rounded bg-green-400 text-white hover:bg-green-500 py-1 px-2 duration-300"
        >
          {isOnLastSlide ? "Submit " : "Next"}
        </button>
      </div>
    </div>
  );
};
export default Box;
