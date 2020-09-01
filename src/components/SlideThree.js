import React from "react";

const SlideThree = (props) => {
  const { hasLMS, numOfEmployees } = props;

  const pricePerEmployee = {
    50: 39,
    100: 29,
    200: 19,
    500: 14,
    1000: 12,
    2000: 10,
    3000: "on demand",
  };

  let text = "";
  if (hasLMS === "true") {
    text =
      "You have stated that you have a LMS which leads to a fixed price of XXX. Please fill out the form below and we'll get in touch with you to discuss an individual offer.";
  } else if (numOfEmployees === 3000) {
    text = `You don't have a LMS and want to supply 3000 employees or more. Get in touch with us and we'll discuss an individual offer!`;
  } else {
    text = `You don't have a LMS and want to supply ${numOfEmployees} employees, which costs $ ${pricePerEmployee[numOfEmployees]} per employee. Get in touch with us and we'll discuss an individual offer!`;
  }

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SlideThree;
