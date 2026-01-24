import type {PostModel} from "../models/PostModel.ts";
import type {CommentModel} from "../models/CommentModel.ts";
import type {TodoModel} from "../models/TodoModel.ts";
import type {PostsResponseModel} from "../models/PostsResponseModel.ts";
import type {CommentsResponseModel} from "../models/CommentsResponseModel.ts";
import type {TodosResponseModel} from "../models/TodosResponseModel.ts";
import type {ProductModel} from "../models/ProductModel.ts";
import type {ProductsResponseModel} from "../models/ProductsResponseModel.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';
const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';

const loadPosts = async (): Promise<PostModel[]> => {
    const response: PostsResponseModel = await fetch(endpointPosts).then(response => response.json());
    return response.posts;
}

const loadComments = async (): Promise<CommentModel[]> => {
    const response: CommentsResponseModel = await fetch(endpointComments).then(response => response.json());
    return response.comments;
}

const loadTodos = async (): Promise<TodoModel[]> => {
    // const response: { todos: TodoModel[]; total: number; skip: number; limit: number; } = await fetch(endpointTodos).then(response => response.json());
    const response: TodosResponseModel = await fetch(endpointTodos).then(response => response.json());
    return response.todos;
}

const loadProducts = async (): Promise<ProductModel[]> => {
    const response: ProductsResponseModel = await fetch(endpointProducts).then(response => response.json());
    return response.products;
}

export {loadPosts, loadComments, loadTodos, loadProducts}