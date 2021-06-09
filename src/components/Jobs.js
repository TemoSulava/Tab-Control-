import React, { useState } from "react";
import Buttons from './Buttons';

const Jobs = ({ data }) => {
  const [value, setValue] = useState(1);
  

  const { company, duties, dates, title } = data[value]

  
  return (
    <div className="jobs-center">
      <div className="btn-container">
        {data.map((dat, index) => {
          return (
            <Buttons key={index} {...dat} setValue={setValue} index={index} value={value} />
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
