import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from './components/Navbar'
import {HeroSection} from './components/Herosection'
import {FeatureGrid} from './components/FeatureGrid'
import {TaskManager} from './components/TaskManager'
import {ContactForm} from './components/ContactForm'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>
     <Navbar/>
     <HeroSection/>
     <FeatureGrid/>
     <TaskManager/>
     <ContactForm/>
     <Footer/>
    </div>
  )
}

export default App
