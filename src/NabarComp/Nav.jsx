import React from 'react'
import "../Style/Nav.css"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
    <div className='Nav-fix'>
      <div className='up-main'>
        <div className='up-sub1'>
        
          <div className='inside-sub-nav'>Become A Partner</div>
          <div className='inside-sub-nav'>Registered Your NBFC</div>
          <div className='inside-sub-nav'>Apply Loan</div>

        </div>
        <div className='fi-right-nav'>Login/Registered</div>
      </div>

      <div className='down-main'>
        <div className='logo'> Fintech
          <img src=''/>
        </div>
        <div className='down-sub2'>
          <Link to="/" className='linkk'><span>Home</span></Link> 
          <Link to="about" className='linkk'><span>AboutUs</span></Link> 
          <Link to="nbfc" className='linkk'><span>NBFC</span></Link> 
          <Link to="product" className='linkk'><span>Product</span></Link> 
          <Link to="dealer" className='linkk'><span>Dealer</span></Link> 
          <Link to="branch" className='linkk'><span>OurBranch</span></Link> 
          <Link to="loan" className='linkk'><span>Businessloan</span></Link> 
          <Link to="support" className='linkk'><span>Support</span></Link>

        </div>
      
      </div>
    </div>
    </div>
  )
}

export default Nav