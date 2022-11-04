import React from 'react'
import "./Contact.css"
import { useState } from 'react';
const Contact = () => {
  const name = "daniel07";
  const [inputErrors, setInputErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputField, setInputField] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    let value = e.target.value;
    setInputField({
      ...inputField,
      [e.target.name]: value,
    });
    // console.log(inputField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputErrors(validate(inputField));
    setIsSubmit(true);

    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      alert("mssg sent")
        .then(() =>
          setInputField({
            firstname: "",
            lastname: "",
            email: "",
            message: "",
          })
        );
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "First Name is required";
    }
    if (!values.lastname) {
      errors.lastname = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.message) {
      errors.message = "Please Enter your message";
    }
    return errors;
  };

  return (
    <div className="contactpage__container">
      <section className="contactpage">
        <h2 className="contact__title">Contact Me</h2>
        <p className="contact__subtitle">Hi there, contact me to ask me about anything you have in mind.</p>
        <form className="contactpage__form" onSubmit={handleSubmit}>
          <div className="first__and__last__name">
            <div className="firstname">
              <label htmlFor="" className="contactpage__label">First name</label>  <br />
              <input type="text" id='first_name' className="first__name" placeholder='Enter your first name' onChange={handleChange}
                value={inputField.firstname} name="firstname" />
              <p className="text-danger">{inputErrors.firstname}</p>
            </div>
            <div className="lastname">
              <label htmlFor="" className="contactpage__label">Last name</label>  <br />
              <input type="text" id='last_name' className="last__name" placeholder='Enter your last name' onChange={handleChange} value={inputField.lastname} name="lastname" />
              <p className="text-danger">{inputErrors.lastname}</p>
            </div>
          </div>
          <div className="emailaddress">
            <label htmlFor="" className="contactpage__label">Email</label>  <br />
            <input type="email" id='email' className="email" placeholder='yourname@email.com' value={inputField.email} name="email" onChange={handleChange} />
            <p className="text-danger">{inputErrors.email}</p>
          </div>
          <div className="contact__message">
            <label htmlFor="" className="contactpage__label">Message</label>  <br />
            <textarea name="message" type="text" className='none' id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." value={inputField.message} onChange={handleChange} ></textarea>
            <p className="text-danger">{inputErrors.message}</p>
            <div className="contact__checkbox">
              <input type="checkbox" className='checkbox_btn' required />
              <p>You agree to providing your data to {name} who may contact you.</p>
            </div>
          </div>
          <button id="btn__submit" type='submit'>Send Message</button>
        </form>

      </section>
    </div>

  )
}
export default Contact;
