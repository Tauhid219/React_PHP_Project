import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Contact() {
  const [name, setname]= useState('')
  const [email, setemail]= useState('')
  const [sub, setsubject]= useState('')
  const [msg, setmessage]= useState('')
  const commit=()=>{
    axios({
      method: 'post',
      url: 'http://localhost/ReactJS/rezacorporate-react-php/contact_msg_insert.php',
      data: {
        name: name,
        email: email,
        sub: sub,
        msg: msg
      }
      
    })
    .then(function(response){
      setname('')
      setemail('')
      setsubject('')
      setmessage('')
  })
  }
  const [contact, setcontact]= useState([])
  useEffect(()=>{
    fetch('http://localhost/ReactJS/rezacorporate-react-php/contact_get.php')
    .then((response)=>response.json())
    .then((data)=>setcontact(data))
  })
  return (
    <>
    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        {contact.map((c)=>
        <div className="section-title">
          <h2>Contact</h2>
          <p>{c.heading}</p>
        </div>
        )}

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            {contact.map((c)=>
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{c.location}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{c.email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{c.phone}</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{border:"0", "width": "100%", "height": "290px"}} allowFullScreen></iframe>
            </div>
            )}

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="" method="" role="" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" onChange={(e)=>setname(e.target.value)} value={name} name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" onChange={(e)=>setemail(e.target.value)} value={email} className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" onChange={(e)=>setsubject(e.target.value)} value={sub} className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea onChange={(e)=>setmessage(e.target.value)} value={msg} className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit" onClick={commit}>Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}

    </>
  )
}
