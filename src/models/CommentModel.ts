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

