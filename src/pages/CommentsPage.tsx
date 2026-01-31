import {Link, Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <>
            <h3>CommentsPage</h3>
            <ul>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>dummyjson</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </>
    );
};