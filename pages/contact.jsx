import Head from 'next/head'
import {GoMail} from 'react-icons/go'
import {ImLocation2} from 'react-icons/im'
import {ImWhatsapp} from 'react-icons/im'
import {FaFacebookSquare} from 'react-icons/fa'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sa41ki7', 'template_0nkkq14', form.current, '9GE27Lw_ZPrGHYHoM')
      .then((result) => {
          console.log(result.text);
          Swal.fire(
            'congrats',
            'your message has been sent successfully, we will get in touch soon ',
            'success'
          )
          form.current.innerText = ' '
      }, (error) => {
          console.log(error.text);
          Swal.fire(
            'error',
            'error something went wrong ',
            'error'
          )
      });
  };

  return (
    <main className='contact-page'>
      <Head>
      <title>
        contact page for property Agents in Abakaliki
      </title>
      <meta name="description" content="a property agency website, for properties around ebonyi state, Nigeria" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <section className="contact-landpage">
        <img src="/contact-img2.jpg" alt="" className="contact-img" />
        <div className="contact-form-container">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text"required placeHolder='enter your name' name="user_name"/>
            <input type="tel" required placeHolder='enter your phonenumber' name="phone_number"/>
            <input type="text" placeHolder='enter your email {optional}' name="user_email"/>
            <textarea name="message" required id="" placeHolder='enter your message'></textarea>
            <input type="submit" value='send message' className='contact-submit-btn'/>
          </form>
        </div>
      </section>
      <section className="contact-details">
        <span className="contact-cards">
          <ImLocation2 />
          <h2>no:2-old-enugu-road-abakaliki-ebonyi </h2>
        </span>
        <span className="contact-cards">
          <GoMail />
          <h2>cityScoutRealtorsSupport@gmail.com</h2>
        </span>
        <span className="contact-cards">
          <ImWhatsapp />
          <h2>@cityScoutRealtors.whatsapp.com</h2>
        </span>
        <span className="contact-cards">
          <FaFacebookSquare />
          <h2>@cityScoutRealtors.facebook.com</h2>
        </span>
      </section>
      <section className="map-container">
      <div className="mapouter"><div className="gmap_canvas"><iframe style={{width:'100%', height:'400px'}} id="gmap_canvas" src="https://maps.google.com/maps?q=chillis%20foods%20,%20abakaliki%20ebonyi%20state%20nigeria&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://putlocker-is.org"></a><br /></div></div>
      </section>
    </main>
  )
}

export default contact