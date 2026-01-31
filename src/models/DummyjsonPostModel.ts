export interface DummyjsonPostModel {
	userId: number;
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: {
		likes: number;
		dislikes: number;
	};
	views: number;
}

export type DummyjsonPostsResponseModel = {
	posts: DummyjsonPostModel[];
	total: number;
	skip: number;
	limit: number;
}