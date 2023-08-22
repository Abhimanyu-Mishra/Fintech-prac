import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Vimg1 from "../assetss/im1.jpg" 
import Vimg2 from "../assetss/im2.png" 
import Vimg3 from "../assetss/VimgS1.jpg"
import Vimg4 from "../assetss/im5.webp" 

import "../Style/Sliderr.css"


const SliderrComponent = () => {
     const [allimg] = useState([Vimg1,Vimg2,Vimg4])


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  const divStyle = {
    backgroundImage: 'url()',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    width: '500px',
    height: '350px',
  };

  const imgtext ={
    backgroundColor: "transparent"
  }

  return (
    <div>
     
      <Slider {...settings}>
        {allimg.map((image, index) => (
          <div className='dyn-div' key={index} style={divStyle} >
            <img className='dyn-img' src={image} alt={`Slide ${index + 1}`} />
            <center>
            <div className='imgtext'>
              <h3>Lorem Ipsum is simply dummy text of the printing </h3>
              <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which</div>
              <span className='get-loan'>Get Loan</span>
             </div>
             </center>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderrComponent;

