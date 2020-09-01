import React from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

const SlideOne = (props) => {
  const { hasLMS, setHasLMS } = props;
  console.log(hasLMS);
  return (
    <div>
      <h1>Do you have a LMS (Learning Management System)?</h1>
      <RadioGroup
        aria-label="lms or not"
        name="hasLMS"
        value={hasLMS}
        onChange={(e) => setHasLMS(e.target.value)}
      >
        <FormControlLabel value="false" control={<Radio />} label="No" />
        <FormControlLabel value="true" control={<Radio />} label="Yes" />
      </RadioGroup>
    </div>
  );
};

export default SlideOne;
