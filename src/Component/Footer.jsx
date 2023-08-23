import React from 'react'
import "../Style/Footer.css"
const Footer = () => {
  return (
    <div className='footer-main' >
    <div className='footer-sub1'>
      <ul >
       <li >Email: esavari.rentals@gmail.com</li>
       <br/>
       <li>Address : DKG Labs Pvt. Ltd.,
       201C/6, D-21 Corporate Dwarka, New Delhi – 110077</li>
       <br/>
       <li>4th Floor, 18, Gulab Bagh, Devas Naka,
       Near Metro Mall, Indore, Madhya Pradesh, 452010</li>

      </ul>
      <div className='f-sub2'>
        <div className='ul-2'>
        <ul >
         <li className='sub-head'>Company</li>
         <br/>
         <li>About Us</li>
         <li>Products</li>
         <li>NBFC</li>
         <li>Contact Us</li>
         <li className='download-logo'> 
           <li> <img src='https://th.bing.com/th/id/OIP.pW0TOZyl_OZMIuo5HjUsyQHaIf?pid=ImgDet&rs=1' width={"100%"} className='logo-apple'/></li>
           <li> Download on the app store</li>

         </li>
        </ul>
        </div>
        <ul >
         <li className='sub-head'>Help & Support</li>
         <br/>
         <li>News & Blog</li>
         <li>FAQ</li>
         <li>Privacy Policy</li>
         <li>Terms and Conditions</li>
         <li className='download-logo2'> 
           <li> <img src='https://logospng.org/download/play-store/logo-play-store-4096.png'  width={"100%"} className='logo-apple'/></li>
           <li >Get it on Google Play</li>
           
         </li>
        </ul>
      </div>
      <ul>
       <li className='sub-head'>Become a Partner</li>
       <br/>
       <li>Dealer/Franchise</li>
       <li>Direct Selling Agent</li>
       <li>Growth Partner</li>
       <li>Recovery Agency/Agents</li>
       <li>Collection Agency/Agents</li>
      </ul>
    </div>
   </div>
  )
}

export default Footer
