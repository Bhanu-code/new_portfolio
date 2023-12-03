import React from 'react'
import google from "../assets/google-logo.png"

const Expcard = () => {
    return (
        <div className='card mt-4 mb-2 border-0'>
            <div className="card-header bg-black d-flex justify-content-between align-items-center">
                <div>
                    <img src={google} alt="" style={{ width: "30px", height: "30px", marginRight:"1rem" }} />
                    <h4 className='d-inline' style={{ fontWeight: "bold", color: "white"}}>Lead Software Engineer at Google</h4>
                </div>

                <span className='d-none d-md-inline'>24th Oct, 2023</span>
            </div>
            <div className="card-body">
                <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
            </div>
        </div>
    )
}

export default Expcard