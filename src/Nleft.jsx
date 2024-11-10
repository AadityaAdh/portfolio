import React, { useEffect, useState } from 'react'
import './Nleft.css'
import { BsArrowReturnRight } from 'react-icons/bs';


export default function Nleft() {
    const [nleftcos,setnleftcos]=useState({backgroundColor:'red',height:'100px'}) 
  return (
    <div className='nleftco' >
      <img src='./public/images/aaditya.jpg'></img>
      <p>Hello, I'm <br/>Aaditya Adhikari<br/> I specialize in <br/><span className='specialtopics'>Machine Learning<br/>Data Analysis<br/>Web Development</span> </p>
      <a><BsArrowReturnRight size={60} />Let's Collaborate</a>
      
      

    </div>
  )
}
 