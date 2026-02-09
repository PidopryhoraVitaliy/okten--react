import {urls} from "../constants/urls.ts";
// import type {PostModel, PostsResponseModel} from "../models/PostModel.ts";
import type {UserModel, UsersResponseModel} from "../models/UserModel.ts";

// const loadPosts = async (): Promise<PostModel[]> => {
//     const response: PostsResponseModel = await fetch(urls.posts.allPosts).then(response => response.json());
//     return response.posts;
// }

export const loadUsers = async (): Promise<UserModel[]> => {
    // https://dummyjson.com/users?limit=5&skip=10
    const response: UsersResponseModel = await fetch(urls.users.allUsers).then(response => response.json());
    return response.users;
}

// export {loadPosts, loadUsers};