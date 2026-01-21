import type {PostModel} from "../models/PostModel.ts";
import type {CommentModel} from "../models/CommentModel.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

const loadPosts = async ():Promise<PostModel[]> => {
    return await fetch(endpointPosts).then(response => response.json());
}

const loadComments = async ():Promise<CommentModel[]> => {
    return await fetch(endpointComments).then(response => response.json());
}

export {loadPosts, loadComments}