// jshint esversion: 9
import React from 'react';

// return a list element containing an image element using the provided ID and title

const CourseSummary = (props) => (
  <li>
    `ID: ${props.courseID} Title: ${props.title}`
  </li>
);

export default CourseSummary;