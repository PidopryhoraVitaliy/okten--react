import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
// import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {SingleUserDetailsPage} from "../pages/SingleUserDetailsPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', Component: MainLayout, children: [
            {index: true, Component: UsersPage},
            {path: 'users', Component: UsersPage},
            {path: 'users/details', Component: SingleUserDetailsPage},
        ]
    }
]);