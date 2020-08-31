import React from "react";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "@material-ui/core/Slider";

const SlideTwo = (props) => {
  const { numOfEmployees, setNumOfEmployees } = props;
  const pricePerEmployee = {
    50: 39,
    100: 29,
    200: 19,
    500: 14,
    1000: 12,
    2000: 10,
    3000: "on demand",
  };

  const marks = [
    {
      value: 50,
    },
    {
      value: 100,
    },
    {
      value: 200,
    },
    {
      value: 500,
    },
    {
      value: 1000,
    },
    {
      value: 2000,
    },
    {
      value: 3000,
    },
  ];

  return (
    <div>
      <h1>How many employees do you want to teach?</h1>
      <div className="w-11/12 mt-10 m-auto">
        <Slider
          defaultValue={numOfEmployees ? numOfEmployees : 500}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          marks={marks}
          step={null}
          max={3000}
          min={50}
          onChange={(e, val) => setNumOfEmployees(val)}
        />
      </div>
    </div>
  );
};

export default SlideTwo;
