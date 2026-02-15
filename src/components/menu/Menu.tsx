import './Menu.css';
import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={''}>task</Link></li>
            <li><Link to={'cars'}>cars</Link></li>
            <li><Link to={'cars/create'}>create car</Link></li>
        </ul>
    );
};