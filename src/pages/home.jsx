import { Hero } from "../components/hero"
import { Project } from "../components/project"
import { Review } from "../components/review"
import { Service } from "../components/services"
import { About } from "./about"

export const Home=()=>{
    const project=[
        {name:'Physiotherapy Clinic Website',dis:'A clean, responsive website for a physiotherapy clinic with essential information and contact details. Built using MERN.'},
        {name:'TextRefine Web Tool',dis:'A simple tool that performs text operations like removing punctuation, converting to uppercase, and more. Created using Django.'}
    ]
    return(
        <>
        <Hero/>
        <About/>
        <Service/>
        <Project project={project}/>
        <Review/>
        </>
    )
}