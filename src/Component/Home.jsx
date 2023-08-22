import React, { useState } from 'react'
import re from "../assetss/re.jpeg"
import CalculateIcon from '@mui/icons-material/Calculate';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import QuizIcon from '@mui/icons-material/Quiz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "../Style/Home.css"
const Home = () => {

    const data = [
        {
            srcc: FactCheckIcon,
            name: "Check Loan Ability"
        }, {
            srcc: { CalculateIcon },
            name: "EMI Calculator"
        }, {
            srcc: QuizIcon,
            name: "Psychometric Test"
        }, {
            srcc: { LocationOnIcon },
            name: "Nearest Delor"
        }, {
            srcc: { PeopleAltIcon },
            name: "Nearest Partner"
        }, {
            srcc: { TouchAppIcon },
            name: "Apply Loan"
        }
    ]

    const slider2data = [
       { imgsr : "https://w7.pngwing.com/pngs/510/905/png-transparent-stephen-sinatra-primary-care-physician-medicine-gynecomastia-man-smiling-business-surgery-sleeve-thumbnail.png",
         msg:"I was in urgent need of funds for my business, and I found this platform to be a lifesaver. The process was fast and hassle-free, and I received the funds I needed in no time. Highly recommend!",
         name:"Abhishek sharma",
         designation : "Bussiness Head",
         rating :"https://t4.ftcdn.net/jpg/03/56/17/91/240_F_356179107_TmjUM2MqfO7ix2wdZg8ONDXupqWALSAf.jpg" 
    }, { imgsr : "https://w7.pngwing.com/pngs/237/360/png-transparent-graphy-happiness-happy-man-man-tshirt-child-people-thumbnail.png",
    msg:"I was in urgent need of funds for my business, and I found this platform to be a lifesaver. The process was fast and hassle-free, and I received the funds I needed in no time. Highly recommend!",
    name:"Sachin sharma",
    designation : "Bussiness Head", 
    rating :"https://t4.ftcdn.net/jpg/03/56/17/91/240_F_356179107_TmjUM2MqfO7ix2wdZg8ONDXupqWALSAf.jpg" 

}

    ]
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
        width: '200px',
        height: '250px',
      };
      console.log(slider2data[1].name);


    return (
        <div className='home-main'>
            <div className='homesub1'>
                {
                    data && data.map((i,index) => {
                        return (
                            <div className='loan6-box-main'>
                                <div className='img-main'>
                                    <img src={i.srcc} alt={`Slide ${index + 1}`}/>
                                </div>
                                <br />
                                <span className='textt'>{i.name}</span>
                            </div>

                        )
                    })
                }
            </div>

            <div className='Video-main'>
                <div className='video-sub1'>
                    <div className='video-heading' >Get Instant Loan . But without the hassle.</div>
                    <br /><div>Welcome to our platform, where obtaining a loan is quick, easy, and hassle-free. Whether you need funds for a home renovation, a new car, or unexpected medical expenses, we are here to help.</div>
                    <br />
                    <span className='learn-btn'>Learn More...</span>
                </div>

                <div className='youtube'>
                    <ReactPlayer className="youtubee" width="100%" url={"https://youtu.be/P2Gn5dHbMGs"} controls={true} />
                </div>
            </div>


            <div className='cart3-main'>

                <div className='cart3sub1'>
                    <div className='cart3-head'>Seamless Financial Management</div>
                    <div> Our platform offers seamless financial management tools that empower you to track your expenses, create budgets, and achieve your financial goals. </div>

                </div>
                <div className='cart3sub1'>

                    <div className='cart3-head'>Secure Transactions</div>
                    <div>Our platform offers seamless financial management tools that empower you to track your expenses, create budgets, and achieve your financial goals. </div>
                </div>

                <div className='cart3sub1'>
                    <div className='cart3-head'>Personalized Recommendations</div>
                    <div> Our platform offers seamless financial management tools that empower you to track your expenses, create budgets, and achieve your financial goals.</div>
                </div>

            </div>


            <div className='product-main'>
                <div className='product-text'>Products</div>

                <div className='product-cart-main'>

                    <div className='prd-img'>
                        <img src='https://e7.pngegg.com/pngimages/545/826/png-clipart-lucknow-kanpur-electric-rickshaw-electric-vehicle-auto-rickshaw-electronics-mode-of-transport-thumbnail.png' />
                        <div className='prd-heading'>
                            Fast and Easy EV Financing
                        </div>
                        <div>Whether you are looking to purchase an electric vehicle for personal use or your business, our EV loan product provides a fast and easy financing solution. With competitive interest rates and flexible repayment terms, we make it convenient for you to drive .Read more...</div>
                        <div className='prd-heading'>1 January 2023</div>
                    </div>

                    <div className='prd-img'>
                        <img src='https://e7.pngegg.com/pngimages/545/826/png-clipart-lucknow-kanpur-electric-rickshaw-electric-vehicle-auto-rickshaw-electronics-mode-of-transport-thumbnail.png' />
                        <div className='prd-heading'>
                            Fast and Easy EV Financing
                        </div>
                        <div>Whether you are looking to purchase an electric vehicle for personal use or your business, our EV loan product provides a fast and easy financing solution. With competitive interest rates and flexible repayment terms, we make it convenient for you to drive .Read more...</div>
                        <div className='prd-heading'>1 January 2023</div>
                    </div>

                    <div className='prd-img'>
                        <img src='https://e7.pngegg.com/pngimages/545/826/png-clipart-lucknow-kanpur-electric-rickshaw-electric-vehicle-auto-rickshaw-electronics-mode-of-transport-thumbnail.png' />
                        <div className='prd-heading'>
                            Fast and Easy EV Financing
                        </div>
                        <div>Whether you are looking to purchase an electric vehicle for personal use or your business, our EV loan product provides a fast and easy financing solution. With competitive interest rates and flexible repayment terms, we make it convenient for you to drive .Read more...</div>
                        <div className='prd-heading'>1 January 2023</div>
                    </div>

                    <div className='prd-img'>
                        <img src='https://e7.pngegg.com/pngimages/545/826/png-clipart-lucknow-kanpur-electric-rickshaw-electric-vehicle-auto-rickshaw-electronics-mode-of-transport-thumbnail.png' />
                        <div className='prd-heading'>
                            Fast and Easy EV Financing
                        </div>
                        <div>Whether you are looking to purchase an electric vehicle for personal use or your business, our EV loan product provides a fast and easy financing solution. With competitive interest rates and flexible repayment terms, we make it convenient for you to drive .Read more...</div>
                        <div className='prd-heading'>1 January 2023</div>
                    </div>
                    <br/>
                   

                </div>
                <br/>

                <div className='product-text'>What our customers are saying    </div>
                  <div className='slider2-up-text'>See what our satisfied clients have to say about their experience with our fintech loan provider platform.</div>
                 

                <div className='slider2'>
                
     
                <Slider {...settings}>
        {slider2data.map((i, index) => (
            <center>
          <div className='feedback-main' key={index} >
            <img className='feed-img' src={i.imgsr} alt={`Slide ${index + 1}`} />
            
            <div className='imgtextt-main'>
            <div>{i.msg}</div><br/>
            <span >
             <img className='rating' src={i.rating}  />
            </span>
              <div className='name-text'>{i.name} </div>
              <div className='name-text'>{i.designation} </div>
            </div>
            
          </div>
          </center>
        ))}
      </Slider>
              
                </div>
                
                <div className='product-text'>Our Partner</div>
                <div className='partner-main'>
                  <img  src='https://th.bing.com/th/id/R.f588e7d5ec590386e47890c8278a9f25?rik=%2bn9Fa%2bqtQhvhCg&riu=http%3a%2f%2fwww.powerstik.net%2fimg%2fclient-logos%2ftrontek.png&ehk=d45ISjmbwR6EItOUP2EMH%2f%2bbTI011tsVX1bILp8j5mk%3d&risl=&pid=ImgRaw&r=0' className = "partner-img" />
                  <img className = "partner-img" src='https://png.pngtree.com/png-vector/20190327/ourmid/pngtree-eco-energy-logo-design-png-image_880934.jpg' />
                  <img className = "partner-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStY9WKxJMtbH43gSR_kl7Tv1h3Tn2pqgpEEL_pDS7JDw&s' />
                  <img className = "partner-img" src="https://www.skeletondancecrew.com/wp-content/uploads/2018/11/hero-cycles-squarelogo-1464958916941.png" />
                  <br/>
                  <img className = "partner-img" src=' https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png' />
                </div>

            </div>

        </div>
    )
}

export default Home