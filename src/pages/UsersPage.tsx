import {Link, Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
            <h3>UsersPage</h3>
            <ul>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>dummyjson</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </>
    );
};