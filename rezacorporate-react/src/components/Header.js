import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [title, settitle]= useState([])
  useEffect(()=>{
    fetch('http://localhost/ReactJS/rezacorporate-react-php/general_get.php')
    .then((response)=>response.json())
    .then((data)=>settitle(data))
  })
  return (
    <>
    {/* <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      {title.map((t)=>
      <h1 className="logo me-auto"><a href="index.html">{t.title}</a></h1>
      )}
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li className="nav-link scrollto"><NavLink to='/' className="nav-link">Home</NavLink></li>
          <li className="nav-link scrollto"><NavLink to='/aboutpage' className="nav-link">About</NavLink></li>
          <li className="nav-link scrollto"><NavLink to='/servicespage' className="nav-link">Services</NavLink></li>
          <li className="nav-link scrollto"><NavLink to='/portfoliopage' className="nav-link">Blog</NavLink></li>
          <li className="nav-link scrollto"><NavLink to='/teampage' className="nav-link">Team</NavLink></li>
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li className="nav-link scrollto"><NavLink to='/contactpage' className="nav-link">Contact</NavLink></li>
          <li className="getstarted scrollto"><NavLink to='/' className="nav-link">Get Started</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}
    </>
  )
}
