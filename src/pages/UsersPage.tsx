import {Users} from "../components/users-component/Users.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
            <h2>#z5PFSTAK</h2>
            <p>
                На головній сторінці вивести всіх користувачів з будь-якого апі.
            </p>
            <p>
                При кліку на певного користувача вивести його корзини товарів, не заміняючи батьківський компонент (поруч з зі списком користувачів)
            </p>
            <hr/>
            <Users/>
            <hr/>
            <Outlet/>
        </>
    );
};