import React from 'react'
import Expcard from "./Expcard"
const Expsection = () => {
  return (
    <div className='container'>
    <h2 className='mt-5 mb-5' style={{ textAlign:"center", margin:"auto",
        color: "#0000FF", fontWeight:"bold"}}>Experience</h2>
    <div className="container">
        <Expcard />
        <Expcard />
        <Expcard />
    </div>

    </div>
  )
}

export default Expsection