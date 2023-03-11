import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_46bmqef', 'template_iq5nvyq', form.current, 'ayXpM8UpJegKHAZT2');

    event.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>chinmayagarwal4@gmail.com</h5>
            <a href="mailto:chinmayagarwal4@gmail.com" target="_blank">Send an Email</a>
          </article>
          
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Chinmay Agarwal</h5>
            <a href="https://www.linkedin.com/in/chinmay-agarwal-b26b0b165/" target="_blank">Connect on LinkedIn</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 8954502462</h5>
            <a href="https://wa.me/8954502462" target="_blank">Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required></input>
          <input type="email" name="email" placeholder="Your Email" required></input>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send message</button>    
        </form>
      </div>
    </section>
  )
}

export default Contact