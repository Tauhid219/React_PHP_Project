import React, {useState, useEffect} from 'react'

export default function Cta() {
  const [title, settitle]= useState([])
  useEffect(()=>{
    fetch('http://localhost/ReactJS/rezacorporate-react-php/general_get.php')
    .then((response)=>response.json())
    .then((data)=>settitle(data))
  })
  return (
    <>
    {/* <!-- ======= Cta Section ======= --> */}
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="row">
          {title.map((t)=>
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p>{t.ctasub}</p>
          </div>
          )}
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Cta Section --> */}
    </>
  )
}
