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
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className='form'>Name</label>
      <input type="text" name="user_name" />
      <label className='form'>Email</label>
      <input type="email" name="user_email" />
      <label className='form'>Subject</label>
      <input type="text" name="Subject"></input>
      <label>Message</label>
      <textarea rows="6" name='message' placeholder="Type your message here"/>
      <input className='btn' type="submit" value="Send" />
    </form>
  );
};

export default Form;
