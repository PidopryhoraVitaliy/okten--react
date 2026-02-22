import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import App from "../App.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

export const routers = createBrowserRouter([
    {
        path: '/', Component: MainLayout, children: [
            { index: true, Component: App },
            { path: '/login', Component: LoginPage },
            { path: '/auth/resources', Component: AuthResourcesPage },
        ]
    }
]);