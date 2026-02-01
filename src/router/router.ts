import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import App from "../App.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', Component: MainLayout, children: [
            {index: true, Component: App},
            {path: 'posts', Component: PostsPage},
            {path: 'users', Component: UsersPage}
        ]
    }
]);