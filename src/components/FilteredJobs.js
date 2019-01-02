import React from 'react'

const FilteredJobs = (props) => {
  // debugger
  console.log(props)
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search for your Dream Job"}
        onChange={props.handleChange}
        value={props.searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default FilteredJobs
