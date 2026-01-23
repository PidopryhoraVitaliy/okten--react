import type {PostModel} from "./PostModel.ts";

export type PostsResponseModel = {
    posts: PostModel[];
    total: number;
    skip: number;
    limit: number;
}