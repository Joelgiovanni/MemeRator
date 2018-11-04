import React,  { Component } from 'react';
import classes from './Container.module.css'
import Content from '../Content/Content';

class Container extends Component {

  render () {

    return (
      <div className={classes.Container}>
          <Content />
      </div>
    )
  }
}

export default Container;