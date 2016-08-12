import React, { Component, PropTypes } from 'react';

class StudentDetails extends Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    subject: PropTypes.array,
    total: PropTypes.object,
    src: PropTypes.string,
    average: PropTypes.func,
  }

  static defaultProps = {
    name: 'Rema'
  }
  constructor() {
    super();
    this.state = {
      counter: 1,
      age: 10
    };
  }
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('did mount');
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({age: nextProps.age});
  }
  handleClick() {
    this.setState({counter: this.state.counter + 1});
  }
  render() {
    console.log(this.props);
    return (
      <div>
      <p>*********************** </p>
      <p>Name: {this.props.name} </p>
      <p>Age: {this.state.age} </p>
      <p>Subject: {this.props.subject[2]} </p>
      <p>Total: {this.props.total.mark2}</p>
      <p>Average: {this.props.average()}</p>
      <p><img src= {this.props.src} alt="image"/> </p>
      <button onClick={this.handleClick.bind(this)}>
        Clicked {this.state.counter} times.
      </button>
      <p>*********************** </p>
      </div>
    );
  }
}

export default StudentDetails;
