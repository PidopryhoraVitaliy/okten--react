interface DummyjsonUserModel {
	id: number;
	username: string;
	fullName: string;
}

export interface DummyjsonCommentModel {
	id: number;
	postId: number;
	body: string;
	likes: number;
	user: DummyjsonUserModel;
}

export type DummyjsonCommentsResponseModel = {
	comments: DummyjsonCommentModel[];
	total: number;
	skip: number;
	limit: number;
}