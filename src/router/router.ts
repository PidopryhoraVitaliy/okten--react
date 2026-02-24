import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import App from "../App.tsx";

export const router = createBrowserRouter([
    {
        path: '/', Component: MainLayout, children: [
            { index: true, Component: App },
        ]
    }
]);