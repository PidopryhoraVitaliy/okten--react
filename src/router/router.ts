import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UserCartsPage} from "../pages/UserCartsPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', Component: MainLayout, children: [
            {index: true, Component: UsersPage},
            {
                path: 'users', Component: UsersPage, children: [
                    {path: ':userId/carts', Component: UserCartsPage},
                ]
            },
        ]
    }
]);