import type {PostModel} from "../models/PostModel.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';

const loadPosts = async ():Promise<PostModel[]> => {
    return await fetch(endpointPosts).then(response => response.json());
}

export {loadPosts}