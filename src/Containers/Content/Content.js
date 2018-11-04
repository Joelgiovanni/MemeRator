import React, { Component } from 'react';
import classes from './Content.module.css';
import Button from '../Button/Button';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';
import image8 from '../../images/image8.jpeg';
import image9 from '../../images/image9.jpg';
import image10 from '../../images/image10.jpg';
import image11 from '../../images/image11.jpg';
import image12 from '../../images/image12.jpg';
import image13 from '../../images/image13.jpg';
import image14 from '../../images/image14.jpg';
import image15 from '../../images/image15.jpg';
import image16 from '../../images/image16.jpg';
import image17 from '../../images/image17.jpg';
import image18 from '../../images/image18.jpg';
import image19 from '../../images/image19.jpg';
import image20 from '../../images/image20.jpg';

class Content extends Component {
  state = {
    initialState: null,
    list: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20
    ]
  }

  onClick = () => {
    const randomItem =  this.state.list[Math.floor(Math.random() * this.state.list.length)];
    this.setState({ initialState: randomItem })
  }

  renderImage() {
    if(this.state.initialState === null) {
      return (
        <h1> Click To Start laughing!</h1>
      )
    } else {
      return (
        <img src={this.state.initialState} alt="meme"/>
      )
    }
  }

  render () {
    return (
      <div className={classes.Content}>
        <Button data={this.state} click={this.onClick}/>
        <div className={classes.Image}>
          {this.renderImage()}
        </div>
      </div>
    )
  }
}

export default Content