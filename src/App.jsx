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
    name:'Contact Us',data:[<a href='mailto:sachinkushawaha349@gmail.com'>Email: sachinkushawaha349@gmail.com</a>,<a href='tel:+919334167296'>Phone: +91-9334167296</a>,'Location: India']
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
