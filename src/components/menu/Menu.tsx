import './Menu.css';
import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={''}>task</Link></li>
            <li><Link to={'posts'}>posts</Link></li>
            <li><Link to={'users'}>users</Link></li>
        </ul>
    );
};