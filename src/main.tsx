import './index.css'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {routers} from "./routers/routers.ts";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routers}/>
)
