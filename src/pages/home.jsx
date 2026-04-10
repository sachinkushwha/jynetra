import { Choice } from "../components/choice"
import { Hero } from "../components/hero"
import { Project } from "../components/project"
import { Review } from "../components/review"
import { Service } from "../components/services"
import { About } from "./about"

export const Home = () => {
    const project = [
        {
            name: 'Rantik',
            dis: 'Rantik is an online local marketplace platform that connects nearby shopkeepers with customers. Through this website, users can easily browse products from local stores and order daily essentials directly from their home. The platform helps small businesses go digital and provides customers with a simple and convenient shopping experience. It focuses on supporting local markets and making online shopping accessible in small towns.',
            link: 'https://shyampurbazar.vercel.app/'
        },
        { name: 'Wassap', dis: 'Wassap is a lightweight messaging application that focuses only on text chatting. Through this app, users can instantly send and receive messages. Wassap has a clean and easy-to-use interface, making conversations smooth and fast.This app is best for users who want a simple and reliable chat experience without any extra features.', link: 'https://socketio-q6x1.vercel.app' },

        { name: 'Physiotherapy Clinic Website', dis: 'A clean, responsive website for a physiotherapy clinic with essential information and contact details. Built using MERN.', link: 'https://drkalimphysio.vercel.app' },

        { name: 'UnivPaperHub', dis: 'UnivPaperHub is a clean, responsive web application designed to help university students easily access previous year question papers and academic materials.', link: 'https://univpaperhub.onrender.com/' },

        {
            name: 'QR Code Genie',
            dis: 'QR Code Genie is a clean, mobile-responsive web application that lets users generate and download QR codes instantly. Just enter any link and get a shareable QR code in seconds.',
            link: 'https://qrcodegenrater-hazel.vercel.app/'
        }

    ]
    return (
        <>
            <Hero />
            <About />
            <Service />
            <Project project={project} />
            <Choice />
            <Review />
        </>
    )
}