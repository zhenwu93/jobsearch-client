import React, { Component } from 'react'
import FilteredJobs from './FilteredJobs'
import JobList from './JobList'

import axios from 'axios'

const API = 'http://localhost:3000/api/v1/job_listings.json';
class JobsContainer extends Component {

  constructor(props) {
    super(props)
    this.state={
      jobs: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    axios.get(API)
    .then(res => {
      console.log(res)
      this.setState({jobs: res.data})
    })
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    let input = event.target.value
    this.setState({searchTerm: input})
  }

  render() {
    let filteredJobs = this.state.jobs.filter(jobs =>
      jobs.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      jobs.location.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div>
        <FilteredJobs handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <JobList jobs={filteredJobs}/>
      </div>
    )
  }
}

export default JobsContainer
