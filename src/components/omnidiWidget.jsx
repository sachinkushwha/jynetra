import { useEffect } from "react"

const OmnidiWidget=()=>{
    useEffect(()=>{
        const script=document.createElement('script');
        script.id="omnidimension-web-widget",
        script.async=true,
        script.src=`https://omnidim.io/web_widget.js?secret_key=${import.meta.env.VITE_SECRECT_KEY}`
    })
    return null
}
export default OmnidiWidget;