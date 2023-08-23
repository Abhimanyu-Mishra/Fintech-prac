import React from 'react'
import "../Style/Contact.css"
const Contact = () => {
  return (
    <div>
     <center>
      <div className='news-l'>
      NEWS LETTER
      </div>
      <div className='sec-heading'>Get the latest news about Fintech! We promise no spam, only bundles of joy.
      </div>

      <div className='email-box'>
       <input className='emaill' type='email' placeholder='enter Email' />
       <button type= "submit" className='subs'>Subscribe</button>
      </div>
     
      </center>
      <div className='form-main'>
       <div className='form-sub1'>
       <div className='news-l' >Don't hesitate to
       contact us for any
       information</div>

       <div>Call us for immidate support to this number</div>
       <div>+91 8319918953</div>
       </div>

       <div className='form-sub2'>
         <label htmlFor='name'>Name</label> <br/>
         <input className='namee'  type='text' /><br/>
         <label   htmlFor='name'>Email</label> <br/>
         <input className='namee'  type='text' /><br/>
         <label htmlFor='name'>Phone Number</label> <br/>
         <input className='namee' type='text' /><br/>
         <label htmlFor='name'>Subject</label> <br/>
         <input className='namee' type='text' /><br/>
         <label htmlFor='name'>Message</label> <br/>
         <input className='namee' type='text' /><br/>
         <button className='send-message' type='submit' >Send Message</button> <br/>
       </div>
       
      </div>
      
    </div>
  )
}

export default Contact