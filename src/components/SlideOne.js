import React from "react";

const SlideOne = (props) => {
  const { hasLMS, setHasLMS } = props;
  return (
    <div>
      <h1>Do you have a LMS (Learning Management System)?</h1>
      <form className="py-2">
        <label className="block">
          <input
            type="radio"
            name="hasLMS"
            defaultChecked={hasLMS === false}
            value={false}
            onChange={() => setHasLMS(false)}
          />
          <span className="pl-1">No</span>
        </label>
        <label className="block pt-2">
          <input
            type="radio"
            name="hasLMS"
            checked={hasLMS === true}
            value={true}
            onChange={() => setHasLMS(true)}
          />
          <span className="pl-1">Yes</span>
        </label>
      </form>
    </div>
  );
};

export default SlideOne;
