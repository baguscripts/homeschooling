import React,{useRef} from 'react'
import './Contact.css'
import {RiMessengerLine} from 'react-icons/ri'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
// import emailjs from 'emailjs-com'



function Contact() {
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    // emailjs.sendForm('service_2b1tak8','template_ial439s', form.current, '_IFFqOeA3AwikO3Dp')
    e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 className='font-bold text-2xl text-center'>Contact Us</h2>

      <div className='container contact__container '>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>baguscripts@gmail.com</h5>
            <a href='mailto:baguscripts@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
          <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>baguscripts@gmail.com</h5>
            <a href='m.me/emmanuel.kipruto.' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+254719738677</h5>
            <a href='https://api.whatsapp.com/send?phone+254719738677' target="_blank">Send a message</a>
          </article> 
        </div>
        <form ref={form} onSubmit={sendEmail} className="">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea type="message" name="message" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
