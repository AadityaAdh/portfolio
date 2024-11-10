import React, { useState } from 'react'
import './Who.css'

export default function Who() {
  const [wcos, changewcos] = useState({ height: "100vh", width: "100%" });

  return (
    <div className='wco' style={wcos}>
      <img src='aaditya.png' alt='Aaditya Adhikari' />
      <p>
        I am <strong>Aaditya Adhikari</strong>, a computer engineering graduate with expertise in
        <strong>machine learning</strong>, <strong>data analysis</strong>, and <strong>web development</strong>. I've worked on
        impactful projects such as a <strong>face recognition</strong> system with classification
        and bounding box detection, applicable in areas like automated attendance
        and security. I also developed a <strong>GAN-based model</strong> for traffic sign generation
        and recognition, pushing AI's role in safety and infrastructure.
        My airline reservation system project gave me hands-on experience in
        creating user-friendly applications, and my interactive Hangman game taught
        me about <strong>game development</strong>. Actively freelancing, I apply my Python and
        data analysis skills to solve real-world problems. My goal is to
        continuously learn, take on new challenges, and make a meaningful impact
        with innovative, high-quality results.
      </p>
    </div>
  )
}
