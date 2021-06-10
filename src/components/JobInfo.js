import React from 'react'
import JobDesc from './JobDesc';

const JobInfo = ({ company, duties, dates, title }) => {
  

  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((duty, idx) => <JobDesc key={idx} duty={duty}/>)}
    </article>
  )
};

export default JobInfo
