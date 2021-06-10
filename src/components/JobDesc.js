import React from 'react';
import { AiOutlineCaretRight } from "react-icons/ai";

const JobDesc = ({ duty }) => {
  return (
   <div className="job-desc">
      <AiOutlineCaretRight />
      <p>{duty}</p>
   </div>
  )
}

export default JobDesc;
