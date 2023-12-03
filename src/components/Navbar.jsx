import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark m-auto">
            <div className="container d-flex">
                <a href="#" className='navbar-brand'>Logo</a>
                <button className="navbar-toggler" data-bs-toggle="collapse"
                    data-bs-target="#nav" aria-controls='nav' aria-label='expand navigation'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav gap-2 gap-sm-5 ms-auto">
                        <li className='nav-item'>
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className="nav-link">Experince</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className="nav-link">Projects</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className="nav-link">Contact</a>
                        </li>
                    </ul>

                </div>

            </div>

        </nav>
    )
}

export default Navbar