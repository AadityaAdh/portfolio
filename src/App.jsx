import { useState } from 'react'
import './App.css'
import NavbarPage from './NavbarPage'
import Who from './Who'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wholecontainer'>
    <div className='aco'>
    <NavbarPage/>
    <Projects/>
    <Who/>
    
    <Contact/>
    </div>
    </div>
  
      

  )
}

export default App
