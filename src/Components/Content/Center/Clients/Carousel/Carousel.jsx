import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from './Card/Card';

import './Carousel.css'
import I1 from '../../../../images/client.png'



export let car = [
   <Card img={I1} ism={"ЕКАТЕРИНА"}/>,
   <Card img={I1} ism={"ЕКАТЕРИНА"}/>,
   <Card img={I1} ism={"ЕКАТЕРИНА"}/>,
  ]

const Carousel = () => {
  return (
    <AliceCarousel 
    mouseTracking 
    items={car} 
    infinite={true} 
    autoPlay={true} 
    animationDuration={5000} 
    />
  );
}

export default Carousel 