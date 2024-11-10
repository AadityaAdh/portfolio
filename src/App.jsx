import { useState } from 'react'
import './App.css'
import Navbarpage from './Navbarpage'
import Who from './Who'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wholecontainer'>
    <div className='aco'>
    <Navbarpage/>
    <Projects/>
    <Who/>
    
    <Contact/>
    </div>
    </div>
  
      

  )
}

export default App
