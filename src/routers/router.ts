import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import App from "../App.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";
import {CreateCarPage} from "../pages/CreateCarPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', Component: MainLayout, children: [
            {index: true, Component: App},
            {path: '/cars', Component: CarsPage},
            {path: '/cars/create', Component: CreateCarPage},
        ]
    }
]);