// import './App.css'
import { Hero } from './components/hero'
import { Nav } from './components/nav'
import {data, Outlet} from 'react-router-dom'
import ScrollTotop from './scrolltotop'
import { Footer } from './components/footer'
import { Instagram, Linkedin } from 'lucide-react'
function App() {
const footerdata=[
  {
    name:'Contact Us',data:['Email: contact@jynetra.com','Phone: +91-XXXXXXXXXX','Location: India']
  },
  {
    name:'Services',data:['Website Development','App Development','UI/UX Design']
  },
  {
    name:'Follow Us',data:[<a href='' target='_blank'><Instagram/></a>,<a href='' target='_blank'><Linkedin/></a>]
  }
]
  return (
    <>
    <ScrollTotop/>
     <Nav/>
     <Outlet/>
     <Footer data={footerdata}/>
    </>
  )
}

export default App
