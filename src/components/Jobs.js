import React, { useState } from "react";
import Buttons from './Buttons';
import JobInfo from './JobInfo';

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
      <JobInfo company={company} duties={duties} dates={dates} title={title}/>
    </div>
  );
};

export default Jobs;
