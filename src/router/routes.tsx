import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "", element: <Layout/>, children: [
            {index: true, element: <MainPage/>},
            {
                path: "users", element: <UsersPage/>, children: [
                    {path: "jsonplaceholder", element: <div>jsonplaceholder - content</div>},
                    {path: "dummyjson", element: <div>dummyjson - content</div>},
                ]
            },
            {
                path: "posts", element: <PostsPage/>, children: [
                    {path: "jsonplaceholder", element: <div>jsonplaceholder - content</div>},
                    {path: "dummyjson", element: <div>dummyjson - content</div>},
                ]
            },
            {
                path: "comments", element: <CommentsPage/>, children: [
                    {path: "jsonplaceholder", element: <div>jsonplaceholder - content</div>},
                ]
            },
        ]
    }
]);