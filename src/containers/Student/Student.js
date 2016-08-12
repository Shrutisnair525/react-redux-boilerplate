import React, { Component } from 'react';
import StudentDetails from './StudentDetails';

const total = {
  mark1: 89,
  mark2: 90
};

export default class Student extends Component {
  average() {
    return ((total.mark1 + total.mark2) / 2);
  }
 // changeCounter() {
 //   this.setState({
 //     ...this.state,
 //     counter: 5,
 //   });
 // }

  render() {
    const logoImage = require('./pic.jpeg');
    const student1Image = require('./student1.jpeg');
    const student2Image = require('./student2.jpeg');
    const student3Image = require('./student3.jpeg');
    const sub = ['Maths', 'English', 'Science'];

    return (
      <div>
        <h1>Student Details!!</h1>
        <img src={logoImage}/>
        <StudentDetails
          name = "Ram"
          age={13}
          subject={sub}
          total={total}
          src={student1Image}
          average={this.average}
          value={5}/>
        <StudentDetails
          name = "Priya"
          age={12}
          subject={sub}
          total={total}
          src={student2Image}
          average={this.average}
          value={5}/>
        <StudentDetails
          age={14}
          subject={sub}
          total={total}
          src={student3Image}
          average={this.average}
          value={5} />
    </div>
    );
  }
}
