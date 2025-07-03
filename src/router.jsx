import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Service } from "./components/services";

const router =createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/service',
                element:<Service/>
            }
        ]
    }
])

export default router;