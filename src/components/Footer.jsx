import React from 'react';
import mail from "../assets/mail.png"
import instagram from "../assets/instagram.png"
import x from "../assets/x.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import "./footer.css"

const Footer = () => {
  return (
    <div className='container mt-4'>
      <h2 className='w-100 text-center' style={{ fontWeight:"bold", color:"#FFD700", fontSize:"35px" }}>Contact</h2>
      <p className='w-100 mt-5 text-center'>Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing
        and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
        comprehensive skill set encompassing front-end and back-end technologies</p>
      <span className='d-block text-center'>
        <img src={mail} alt="" style={{ width:"17px", height:"17px" }}/>
        <p className='d-inline'>iswarpatro@gmail.com</p>
      </span>
      <div className="social-icons mt-3 d-flex gap-5 mb-5 justify-content-center">
        <img src={instagram} alt="" />
        <img src={github} className="bg-light" alt="" />
        <img src={x} alt="" />
        <img src={linkedin} className='bg-light' alt="" />
      </div>
      <p className='w-100 copyright' style={{textAlign:"center"}}>© copyright. All rights reserved... created by Bhanu Chowhan</p>
    </div>
  )
}

export default Footer