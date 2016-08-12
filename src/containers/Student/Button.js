import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <button onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </button>
    );
  }
}
