export interface TodoModel {
    id: number;
    todo: string;
	completed: boolean;
	userId: number;
}

export type TodosResponseModel = {
    todos: TodoModel[];
    total: number;
    skip: number;
    limit: number;
}