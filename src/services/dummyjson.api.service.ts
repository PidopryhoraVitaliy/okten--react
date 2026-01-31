import {urls} from "../constants/urls.ts";
import type {DummyjsonCommentModel, DummyjsonCommentsResponseModel} from "../models/DummyjsonCommentModel.ts";
import type {DummyjsonUserModel, DummyjsonUsersResponseModel} from "../models/DummyjsonUserModel.ts";
import type {DummyjsonPostModel, DummyjsonPostsResponseModel} from "../models/DummyjsonPostModel.ts";

const loadComments = async (): Promise<DummyjsonCommentModel[]> => {
    const response: DummyjsonCommentsResponseModel = await fetch(urls.dummyjson.comments.allComments).then(response => response.json());
    return response.comments;
}

const loadUsers = async (): Promise<DummyjsonUserModel[]> => {
    const response: DummyjsonUsersResponseModel = await fetch(urls.dummyjson.users.allUsers).then(response => response.json());
    return response.users;
}

const loadPosts = async (): Promise<DummyjsonPostModel[]> => {
    const response: DummyjsonPostsResponseModel = await fetch(urls.dummyjson.posts.allPosts).then(response => response.json());
    return response.posts;
}

export {loadComments, loadUsers, loadPosts}