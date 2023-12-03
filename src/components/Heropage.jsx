import React from 'react';
import "./Heropage.css";

import Avatar from "../assets/Avatar.png"

const Heropage = () => {
    return (

        <div className="container d-flex flex-column justify-content-around 
        align-items-center gap-5 gap-md-2 mt-4 ">
            
                <img src={Avatar} alt="image" />
            
            <div className='w-100 intro'>
                I do code and<br />
                make content about it!
            </div>
            <p className='w-100 about'>
                I am a seasoned full-stack software engineer with over<br />
                8 years of professional experience, specializing in backend development.<br />
                My expertise lies in crafting robust and scalable SaaS-based<br />
                architectures on the Amazon AWS platform.
            </p>
            <div className="buttons d-flex gap-4 justify-content-center">
                <button className='contact-btn'>Get in touch</button>
                <button className='resume-btn'>Download CV</button>
            </div>

        </div>

    )
}

export default Heropage