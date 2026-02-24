import './App.css'
import type {ITodo} from "./models/ITodo.ts";
import {useFetch} from "./hooks/useFetch.ts";

function App() {

    const {todos} = useFetch<{ limit: number, todos: ITodo[] }>('https://dummyjson.com/todos', {limit: 0, todos: []});

    return (
        <>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        {todo.id} : {todo.todo} : {todo.completed.toString()}
                    </div>
                ))
            }
        </>
    )
}

export default App
