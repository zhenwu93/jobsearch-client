import React from 'react'
import Jobs from './Jobs'

const JobsList = (props) => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Title
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Company
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Type
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Salary
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Requirements
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Location
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Experience
            </h3>
          </th>
        </tr>

        {props.jobs.map(jobs =>
          <Jobs jobs={jobs}/>
        )}

      </tbody>
    </table>
  )
}

export default JobsList
