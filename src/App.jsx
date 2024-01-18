import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBar from './headerbar/HeaderBar'
import HomePage from './HomePage'
import ParticlesBackground from './particles/Particles-background'
import { useDispatch, useSelector } from 'react-redux'
import { setMobileState } from './redux/isMobile'
import { isMobile } from 'react-device-detect'
function App() {
  const dispatch = useDispatch();
  useEffect(()=> {

    dispatch(setMobileState(isMobile));
    window.scrollTo(0,0);

  },[])

  const isMobileApp = useSelector(state=> state.isMobileState.isMobile);
  return (
    <>

      <HeaderBar/>
      <HomePage/>

    </>
  )
}

export default App
