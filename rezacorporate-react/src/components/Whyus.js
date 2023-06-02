import React, { useEffect, useState } from 'react'

export default function Whyus() {
  const[whyus, setwhyus]= useState([])
  useEffect(()=>{
    fetch('http://localhost/ReactJS/rezacorporate-react-php/whyus_get.php')
    .then((response)=>response.json())
    .then((data)=>setwhyus(data))
  })
  return (
    <>
    {/* <!-- ======= Why Us Section ======= --> */}
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row">

          {whyus.map((w)=>
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content">
              <h3><strong>{w.headline}</strong></h3>
              <p>
                {w.subtitle}
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span>{w.line1}<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                      {w.line1sub}
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span>{w.line2}<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      {w.line2sub}
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span>{w.line3}<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      {w.line3sub}
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>
          )}

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: `url(${'assets/img/why-us.png'})`}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>
       

      </div>
    </section>
    {/* <!-- End Why Us Section --> */}
    </>
  )
}
