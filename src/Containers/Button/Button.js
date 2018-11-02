import React, { Component } from 'react';
import classes from './Button.module.css';

class Button extends Component {
  render () {
    return (
      <button className={classes.Button}> Click Me</button>
    )
  }
}

export default Button