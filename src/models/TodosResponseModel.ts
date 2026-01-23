import type {TodoModel} from "./TodoModel.ts";

export type TodosResponseModel = {
    todos: TodoModel[];
    total: number;
    skip: number;
    limit: number;
}