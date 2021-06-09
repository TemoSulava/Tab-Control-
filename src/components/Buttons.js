import React from "react";

const Buttons = ({ company, index, setValue, value }) => {
  console.log(value);
  return (
    <button
      onClick={() => setValue(index)}
      key={index}
      className={`job-btn ${index === value && "active-btn"}`}
    >
      {company}
    </button>
  );
};

export default Buttons;
