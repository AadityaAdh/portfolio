import React, { useState } from 'react'
import './Navbarpage.css'
import Navbar from './Navbar'
import Modelsection from './Modelsection'
import Nleft from './Nleft'

export default function NavbarPage() {
    const [npcos,changenpcos]=useState({height:"100vh",width:"100%"})

  return (
    <div className='npco'  style={npcos}>
        <Navbar/>
        <div className='npbco'>
          <Nleft/>
          <div className='model1container'><Modelsection/></div>
        </div>
        
        
      
    </div>
  )
}
