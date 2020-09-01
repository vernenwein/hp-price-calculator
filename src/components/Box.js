import React, { useRef, useState } from "react";
import { Card, CardHeader, CardContent, Button } from "@material-ui/core";
import { Box as MaterialUIBox } from "@material-ui/core";
import StepSlider from "./StepSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Box = () => {
  const slider = useRef(null);
  const [hasLMS, setHasLMS] = useState(null);
  const [numOfEmployees, setNumOfEmployees] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const isOnLastSlide =
    (hasLMS === "true" && currentStep === 1) || currentStep === 2;
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
    <Card raised={true} className="w-3/6">
      <CardHeader title="Course Price Calculator" />
      <CardContent>
        <StepSlider
          refSlider={slider}
          hasLMS={hasLMS}
          setHasLMS={setHasLMS}
          numOfEmployees={numOfEmployees}
          setNumOfEmployees={setNumOfEmployees}
        />
        <MaterialUIBox pt={2} display="flex" justifyContent="space-between">
          <Button disabled={currentStep === 0} onClick={clickPrevSlide}>
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={isNextButtonDisabled}
            onClick={clickNextSlide}
          >
            {isOnLastSlide ? "Submit " : "Next"}
          </Button>
        </MaterialUIBox>
      </CardContent>
    </Card>
  );
};
export default Box;
