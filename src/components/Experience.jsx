
import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";

import "./experience.css"

const Experience = () => {
  return (
    <div className='container experience gap-2 mt-5'>
        <h2 className='m-auto w-100' style={{fontSize: "1.5rem"}}>Experience with</h2>
        <div className="container w-50 mt-5">
            <div className="row row-cols-md-5">
                <div className="col">
                    <img className="exp-icon" src={html} alt="html" />
                </div>
                <div className="col">
                    <img className="exp-icon" src={css} alt="html" />
                </div>
                <div className="col">
                    <img className="exp-icon" src={javascript} alt="html" />
                </div>
                <div className="col">
                    <img className="exp-icon" src={reactjs} alt="html" />
                </div>
                <div className="col">
                    <img className="exp-icon" src={nodejs} alt="html" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience