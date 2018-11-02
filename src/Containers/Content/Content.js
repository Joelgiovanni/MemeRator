import React, { Component } from 'react';
import classes from './Content.module.css';


class Content extends Component {
  render () {

    return (
      <div className={classes.Content}>
      <p>{this.props.data}</p>
      </div>
    )
  }
}

export default Content