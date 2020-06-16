// jshint esversion: 9
import React, { Component } from 'react';
import './styles/global.css';

import axios from 'axios';
import CourseSummary from './components/CourseSummary';

// stateful component for now

class App extends Component {

  // the constructor sets loading to true, which will result in the initial display of a loading message
  // while we fetch the initial data

  constructor() {
    super();
    this.state = {
      courses: [],
      loading: true
    };
  }

  // Use axios to retrieve the data. Once we have the data,
  // reset the 'loading' flag so that the new content will be rendered.

  loadData(path) {
    console.log(path);
    axios.get(path)
    .then(response => { 
      this.setState({
        courses: response.data,
        loading: false 
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  // this will be called the first time through. just load the data

  componentDidMount() {
    const path = 'http://localhost:5000/api/courses';
    this.loadData(path);
  }

  // render the app

  render() {
    let courseMarkup = [];

    if (!this.state.loading) {
      console.log (this.courses);

      courseMarkup = this.courses.map(course => 
        <CourseSummary courseID={course.id} title={course.title} key={course.id} />);
        
      console.log(courseMarkup);
    }

    return (
        <div className="App">
          <header className="App-header">
            <h1>
              Course Directory Client
            </h1>
          </header>
          <ul>
            { 
              (this.state.loading)
              ? <p>Loading...</p>
              : courseMarkup }
          </ul>
        </div>
    );

  }
}

export default App;
