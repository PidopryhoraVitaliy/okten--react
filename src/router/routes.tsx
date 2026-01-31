import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {JsonplaceholderComments} from "../components/jsonplaceholder-comments-component/JsonplaceholderComments.tsx";
import {DummyjsonComments} from "../components/dummyjson-comments-component/DummyjsonComments.tsx";
import {JsonplaceholderUsers} from "../components/jsonplaceholder-users-component/JsonplaceholderUsers.tsx";
import {DummyjsonUsers} from "../components/dummyjson-users-component/DummyjsonUsers.tsx";
import {JsonplaceholderPosts} from "../components/jsonplaceholder-posts-component/JsonplaceholderPosts.tsx";
import {DummyjsonPosts} from "../components/dummyjson-posts-component/DummyjsonPosts.tsx";

export const routes = createBrowserRouter([
    {
        path: "", element: <Layout/>, children: [
            {index: true, element: <MainPage/>},
            {
                path: "users", element: <UsersPage/>, children: [
                    {path: "jsonplaceholder", element: <JsonplaceholderUsers/>},
                    {path: "dummyjson", element: <DummyjsonUsers/>},
                ]
            },
            {
                path: "posts", element: <PostsPage/>, children: [
                    {path: "jsonplaceholder", element: <JsonplaceholderPosts/>},
                    {path: "dummyjson", element: <DummyjsonPosts/>},
                ]
            },
            {
                path: "comments", element: <CommentsPage/>, children: [
                    {path: "jsonplaceholder", element: <JsonplaceholderComments/>},
                    {path: "dummyjson", element: <DummyjsonComments/>},
                ]
            },
        ]
    }
]);