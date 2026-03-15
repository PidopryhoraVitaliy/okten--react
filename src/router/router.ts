import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', Component: MainLayout, children: [
            {index: true, Component: App},
            {path: 'users', Component: UsersPage}
        ]
    }
]);