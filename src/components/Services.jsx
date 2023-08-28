import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import serr1 from "../assets/serr1.jpg"
import serr2 from "../assets/serr2.jpg"
import serr4 from "../assets/serr4.jpg"

const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop
        autoPlay showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
        >
            <div>
                <img src={serr1} alt="item1" />
                <p className='legend'>Full Stack  developer</p>
            </div>

            <div>
                <img src={serr2} alt="item2" />
                <p className='legend'>Networking</p>
            </div>

            <div>
                <img src={serr4} alt="item4" />
                <p className='legend'>Cloud Computing</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services;