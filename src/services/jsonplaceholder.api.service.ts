import {urls} from "../constants/urls.ts";
import type {JsonplaceholderCommentModel} from "../models/JsonplaceholderCommentModel.ts";
import type {JsonplaceholderUserModel} from "../models/JsonplaceholderUserModel.ts";
import type {JsonplaceholderPostModel} from "../models/JsonplaceholderPostModel.ts";

const loadComments = async (): Promise<JsonplaceholderCommentModel[]> => {
    return await fetch(urls.jsonplaceholder.comments.allComments).then(response => response.json());
}

const loadUsers = async (): Promise<JsonplaceholderUserModel[]> => {
    return await fetch(urls.jsonplaceholder.users.allUsers).then(response => response.json());
}

const loadPosts = async (): Promise<JsonplaceholderPostModel[]> => {
    return await fetch(urls.jsonplaceholder.posts.allPosts).then(response => response.json());
}

export {loadComments, loadUsers, loadPosts}