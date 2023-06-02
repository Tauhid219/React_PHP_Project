import React, { useEffect, useState } from 'react'

export default function About() {
  const[about, setabout]= useState([])
  useEffect(()=>{
    fetch('http://localhost/ReactJS/rezacorporate-react-php/aboutus_get.php')
    .then((response)=>response.json())
    .then((data)=>setabout(data))
  })
  return (
    <>
     {/* <!-- ======= About Us Section ======= --> */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        {about.map((a)=>
        <div className="row content">
          <div className="col-lg-6">
            <p>
              {a.headline}
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i>{a.list1}</li>
              <li><i className="ri-check-double-line"></i>{a.list2}</li>
              <li><i className="ri-check-double-line"></i>{a.list3}</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              {a.detail}
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>
        )}

      </div>
    </section>
    {/* <!-- End About Us Section --> */}
    </>
  )
}
