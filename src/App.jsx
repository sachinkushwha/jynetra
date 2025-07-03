// import './App.css'
import { Hero } from './components/hero'
import { Nav } from './components/nav'
import {Outlet} from 'react-router-dom'
import ScrollTotop from './scrolltotop'
import { Footer } from './components/footer'
function App() {

  return (
    <>
    <ScrollTotop/>
     <Nav/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
