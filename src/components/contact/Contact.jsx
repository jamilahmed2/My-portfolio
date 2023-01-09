import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsLinkedin,BsInstagram} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

   const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bzfcjsi', 'template_80839kq', form.current, '9MvZljhIuSECvwAbC')
    
    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:ja0935991@gmail.com" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
           <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/jamil-ahmed-54655220b/" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/jimmi.prv" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' value="send" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact