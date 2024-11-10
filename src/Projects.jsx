import React, { useState } from 'react'
import './Projects.css'

export default function Projects() {
    const [pcos,changepcos]=useState({height:"100vh",width:"100%"})

  return (
    <div className='pco' style={pcos}>
      <h1 className='someprojects'>Some of my project works</h1>
      <div className='pcaco'>
        
        <div className='card'>
        <img src='./src/facerecog.jpg'></img>
          <div className='outside'>
          <h1>Face recognition with automated attendence</h1>
          <p>A facial recognition system designed for accurate identification and verification of individuals by analyzing unique facial features. The project supports real-time recognition, making it ideal for applications like automated attendance, security, and personalized user experiences.</p>
          <a href='https://www.youtube.com'>View Project</a>
          </div>
          
          
          
          
        </div>
        <div className='card'>
        <img src='./src/hangman.png'></img>
          <div className='outside'>
          <h1>Hangman</h1>
          <p>A classic Hangman game featuring graphical elements, sound effects, and a scoring system, bringing a fun, interactive twist to the traditional word-guessing challenge.</p>
          <a href='https://www.youtube.com'>View Project</a>

          </div>
        
          
          

          
          
        </div>
        <div className='card'>
        <img src='./src/airline.jpg'></img>
          <div className='outside'>
          <h1>Airline reservation system</h1>
          <p>An airline reservation system built to streamline booking, manage schedules, and handle passenger information efficiently, enhancing the travel experience and operational ease.</p>
          <a href='https://www.youtube.com'>View Project</a>

          </div>
          
          
          
          
        </div>
        <div className='card'>
        



          <img src='./src/gan.png'></img>
          <div className='outside'>
          <h1>Traffic sign generation and recognition</h1>
          <p>A system for traffic sign recognition and generation that accurately identifies signs and generates synthetic images, enhancing data for autonomous driving and traffic monitoring.</p>
          <a href='https://www.youtube.com'>View Project</a>

          </div>
          
          
          
          
        </div>
      </div>
      
    </div>
  )
}
