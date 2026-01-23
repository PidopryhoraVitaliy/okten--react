import './App.css'
import {Posts} from "./components/posts-component/Posts.tsx";
import {Comments} from "./components/comments-component/Comments.tsx";
import {Todos} from "./components/todos-component/Todos.tsx";

function App() {
    return (
        <div className={'wrap'}>
            <Todos/>
            <Posts/>
            <Comments/>
        </div>
    )
}

export default App
