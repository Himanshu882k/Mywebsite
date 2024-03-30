import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./FormStyles.css"

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ihbdi28', 'template_as07f13', form.current, {
        publicKey: 'W7xY7LoEgaQd56Suo',
      })
      .then(
        (result) => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Failed to send email. Error: ' + error.text);
        },
      );
  };

  return (

    <form ref={form} onSubmit={sendEmail}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pompiere&display=swap')
      </style>
      <h1 style={{ fontFamily: 'Pompiere, sans-serif' }}>Contact Me</h1>
      <label style={{ fontFamily: 'Pompiere, sans-serif' }}className='form'>Name</label>
      <input type="text" name="user_name" style={{ width: "80%", height: "30px" }} />
      <label style={{ fontFamily: 'Pompiere, sans-serif' }}className='form'>Email</label>
      <input type="email" name="user_email" style={{ width: "80%", height: "30px" }} />
      <label style={{ fontFamily: 'Pompiere, sans-serif' }}className='form'>Subject</label>
      <input type="text" name="Subject" style={{ width: "80%", height: "30px" }}></input>
      <label style={{ fontFamily: 'Pompiere, sans-serif' }}>Message</label>
      <textarea style={{ width: "80%", height: "300px" }} rows="6" name='message' placeholder="Type your message here" />
      <input style={{ fontFamily: 'Pompiere, sans-serif' }}className='btn' type="submit" value="Send" />
    </form>
  );
};

export default Form;
