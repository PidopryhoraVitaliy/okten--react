import './Todos.css';
import {useEffect, useState} from "react";
import {Todo} from "../todo-component/Todo.tsx";
import type {TodoModel} from "../../models/TodoModel.ts";
import {loadTodos} from "../../service/api.service.ts";

export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    useEffect(() => {
        loadTodos()
            .then(data => {
                // console.log(data);
                setTodos(data);
            });
    }, []);

    return (
        <div className='todosWrap'>
            {
                todos.map((todo) => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};