import React, {useState, useEffect} from 'react'

export default function Team() {
  const [title, settitle]= useState([])
  const [team, setteam]= useState([])
  useEffect(()=>{
    fetch('http://localhost/ReactJS/rezacorporate-react-php/general_get.php')
    .then((response)=>response.json())
    .then((data)=>settitle(data))
  })
  useEffect(()=>{
    fetch('http://localhost/ReactJS/rezacorporate-react-php/team_get.php')
    .then((response)=>response.json())
    .then((data2)=>setteam(data2))
  })
  return (
    <>
    {/* <!-- ======= Team Section ======= --> */}
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        {title.map((t)=>
        <div className="section-title">
          <h2>Team</h2>
          <p>{t.teamsub}</p>
        </div>
        )}

        <div className="row">

          {team.map((te)=>
          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={`http://localhost/ReactJS/rezacorporate-react-php/assets/team_img/${te.photo}`} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <a href="#"><h4>{te.name}</h4></a>
                <span>{te.position}</span>
                <p>{te.detail}</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div> */}

        </div>

      </div>
    </section>
    {/* <!-- End Team Section --> */}
    </>
  )
}
