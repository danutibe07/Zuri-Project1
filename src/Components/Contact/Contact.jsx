import React from 'react'
import "./Contact.css"
const Contact = () => {
  const name = "daniel07";
  const handleSubmit = () =>{
      alert('Message Sent');
  }
  return (
    <div className='contact' onSubmit={handleSubmit}>
      <div className="contact__container">
        <h2 className="contact__title">Contact Me</h2>
        <p className="contact__subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
        <form className="contactpage__form">
        <div className="first__and__last__name">
          <div className="firstname">
            <label htmlFor="" className="contactpage__label">First name</label>
            <input type="text" id='first_name' className="first__name" placeholder='Enter your first name' />
          </div>
          <div className="lastname">
            <label htmlFor="" className="contactpage__label">Last name</label>
            <input type="text" id='last_name' className="last__name" placeholder='Enter your last name' />
          </div>
        </div>
        <div className="emailaddress">
          <label htmlFor="" className="contactpage__label">Email</label>
          <input type="email" id='email' className="email" placeholder='yourname@email.com'/>
        </div>
        <div className="contact__message">
          <label htmlFor="" className="contactpage__label">Message</label>
          <textarea name="message" type="text" className='none' id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
          <div className="contact__checkbox">
            <input type="checkbox" className='checkbox_btn'/>
            <p>You agree to providing your data to {name} who may contact you.</p>
          </div>
          
        </div>
        </form>
        <button id="btn__submit" onClick={handleSubmit}>Send Message</button>
      </div>
    </div>
  )
} 
export default Contact;
