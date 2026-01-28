export interface UserModel {
	id: number;
	username: string;
	fullName: string;
}

export interface CommentModel {
	id: number;
	postId: number;
	body: string;
	likes: number;
	user: UserModel;
}

export type CommentsResponseModel = {
	comments: CommentModel[];
	total: number;
	skip: number;
	limit: number;
}