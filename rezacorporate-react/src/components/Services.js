import React, {useState, useEffect} from 'react'

export default function Services() {
  const [service, setservice]= useState([])
  const [title, settitle]= useState([])
  useEffect(() => {
    fetch('http://localhost/ReactJS/rezacorporate-react-php/services_get.php')
    .then((response)=>response.json())
    .then((data)=>setservice(data))
  })
  useEffect(()=>{
    fetch('http://localhost/ReactJS/rezacorporate-react-php/general_get.php')
    .then((response)=>response.json())
    .then((data)=>settitle(data))
  })
  
  return (
    <>
    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        {title.map((t)=>
        <div className="section-title">
          <h2>Services</h2>
          <p>{t.servicessub}</p>
        </div>
        )}

        <div className="row">
        {service.map((s,i)=>  
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className={s.boxicon}></i></div>
              <h4><a href="">{s.headline}</a></h4>
              <p>{s.subtitle}</p>
            </div>
          </div>)}

          {/* <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="">Sed ut perspici</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-layer"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div> */}

        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}
    </>
  )
}
