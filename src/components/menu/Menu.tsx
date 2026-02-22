import './Menu.css';
import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={''}>task</Link></li>
            <li><Link to={'login'}>login</Link></li>
            <li><Link to={'auth/resources'}>resources</Link></li>
        </ul>
    );
};