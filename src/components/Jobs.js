import React from 'react'

const Jobs = (props) => {
  // debugger
  console.log(props)
  // <td>{props.jobs.website}</td>
  return (
    <tr>
      <td>{props.jobs.company}</td>
      <td>{props.jobs.title}</td>
      <td>{props.jobs.location}</td>
      <td>{props.jobs.salary}</td>
      <td>{props.jobs.description}</td>
      <td><button className="ui button">Apply</button></td>
    </tr>
  )
}

export default Jobs
