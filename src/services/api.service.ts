import {urls} from "../constants/urls.ts";
// import type {PostModel, PostsResponseModel} from "../models/PostModel.ts";
import type {UserModel, UsersResponseModel} from "../models/UserModel.ts";

// const loadPosts = async (): Promise<PostModel[]> => {
//     const response: PostsResponseModel = await fetch(urls.posts.allPosts).then(response => response.json());
//     return response.posts;
// }

export const loadUsers = async (limit: string, skip: string): Promise<UserModel[]> => {
    const response: UsersResponseModel = await fetch(urls.users.getUsers(limit, skip)).then(response => response.json());
    return response.users;
}

// export {loadPosts, loadUsers};