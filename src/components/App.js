import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import JobsContainer from './JobsContainer'
import SearchBar from './SearchBar'
import '../stylesheets/App.css'

class App extends Component {

  onTermSubmit = () => {

  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment blue inverted">
          <h2>Job Search</h2>
        </div>

        <SearchBar onFormSubmit={this.onTermSubmit} />
        <JobsContainer />
      </div>
    )
  }
}

export default App
