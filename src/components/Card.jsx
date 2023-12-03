import React from 'react';
import Avatar from "../assets/Avatar.png"

import arrow from "../assets/view_icon.png"

const Card = () => {
    return (
        <div className='card mt-2 w-100' style={{ width: "390px", height: "301px" }}>
            <div className="card-img-top">
                <img src={Avatar} alt="" />
            </div>
            <div className="card-body">
                <div className="card-footer d-flex justify-content-between">
                    <span>Ecommerce Project</span>
                    <img src={arrow} alt="arrow" style={{ width: "20px", height: "20px" }} />
                </div>
            </div>
        </div>
    )
}

export default Card