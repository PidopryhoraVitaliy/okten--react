import './Todos.css';
import {useEffect, useState} from "react";
import {loadTodos} from "../../service/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";
import type {TodoModel} from "../../models/TodoModel.ts";

export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);

    useEffect(() => {
        loadTodos().then(data => setTodos(data));
    }, []);

    return (<>
            <div className='title-wrap'>
                <h2>Todos:</h2>
            </div>
            <div className='todos-wrap'>
                {
                    todos.map((item) => <Todo key={item.id} todo={item}/>)
                }
            </div>
        </>
    );
};