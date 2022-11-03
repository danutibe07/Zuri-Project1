import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__container">
        <h2 className="contact__title">Contact Me</h2>
        <p className="contact__title">Hi there, contact me to ask me about anything you have in mind.</p>
        <div className="first__and__last__name">
          <div className="firstname">
            <label htmlFor="" className="contactpage__label">First name</label>
            <input type="text" id='first_name' className="first__name" />
          </div>
          <div className="lastname">
            <label htmlFor="" className="contactpage__label">Last name</label>
            <input type="text" id='last_name' className="last__name" />
          </div>
        </div>
        <div className="emailaddress">
          <label htmlFor="" className="contactpage__label"></label>
          <input type="email" id='email' className="email" />
        </div>
        <div className="message">
          <label htmlFor="" className="contactpage__label"></label>
          <textarea name="" id="message" cols="30" rows="10"></textarea>
        </div>
        <button id="btn__submit"></button>
      </div>
    </div>
  )
}

export default Contact






{/* 
Last name
Enter your first name
Enter your last name
This is a hint text to help user.
This is a hint text to help user.
Email
yourname@email.com
This is a hint text to help user.
Message
Send me a message and I'll reply you as soon as possible...
You agree to providing your data to {name} who may contact you.
Send message */}