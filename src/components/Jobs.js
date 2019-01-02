import React from 'react'

const Jobs = (props) => {
  // debugger
  console.log(props)
  return (
    <tr>
      <td>{props.jobs.title}</td>
      <td>{props.jobs.company}</td>
      <td>{props.jobs.job_type}</td>
      <td>{props.jobs.salary}</td>
      <td>{props.jobs.description}</td>
      <td>{props.jobs.requirements}</td>
      <td>{props.jobs.location}</td>
      <td>{props.jobs.experience}</td>
    </tr>
  )
}

export default Jobs
