import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBar from './headerbar/HeaderBar'
import HomePage from './HomePage'
import ParticlesBackground from './particles/Particles-background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <HeaderBar/>
      <HomePage/>

    </>
  )
}

export default App
