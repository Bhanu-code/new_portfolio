import React from 'react';

import Card from "./Card";

const Projects = () => {
  return (
    <>
    <h2 className='m-auto mt-5' style={{ textAlign:"center",  color: "#FC2E20", fontWeight:"bold" }}>Projects</h2>
    <div className='container projects mt-5 w-75' style={{ textAlign:"center"}}>
        <div className="row row-cols-1 row-cols-md-2 gap-x-5" >
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects