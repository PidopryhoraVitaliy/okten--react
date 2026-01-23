import type {CommentModel} from "./CommentModel.ts";

export type CommentsResponseModel = {
    comments: CommentModel[];
    total: number;
    skip: number;
    limit: number;
}