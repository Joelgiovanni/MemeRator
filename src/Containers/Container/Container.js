import React,  { Component } from 'react';
import classes from './Container.module.css'
import Button from '../Button/Button';
import Content from '../Content/Content'
import Img from 'react-image';
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.png'

class Container extends Component {
  state = {
    img1: <Img src={image1} />,
    img2: <Img src={image2} />,
    img3: <Img src={image3} />,
    img4: <Img src={image4} />,
  }

  render () {

    return (
      <div className={classes.Container}>
        <div className={classes.Content}>
          <Button />
          <Content data={this.state.img1}/>
        </div>
      </div>
    )
  }
}

export default Container;