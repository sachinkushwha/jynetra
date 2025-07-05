import { Choice } from "../components/choice"
import { Hero } from "../components/hero"
import { Project } from "../components/project"
import { Review } from "../components/review"
import { Service } from "../components/services"
import { About } from "./about"

export const Home=()=>{
    const project=[
        {name:'Physiotherapy Clinic Website',dis:'A clean, responsive website for a physiotherapy clinic with essential information and contact details. Built using MERN.',link:'https://drkalimphysio.vercel.app'},
        {name:'UnivPaperHub',dis:'UnivPaperHub is a clean, responsive web application designed to help university students easily access previous year question papers and academic materials.',link:'https://univpaperhub.onrender.com/'}
    ]
    return(
        <>
        <Hero/>
        <About/>
        <Service/>
        <Project project={project}/>
        <Choice/>
        <Review/>
        </>
    )
}