import {Users} from "../components/users-component/Users.tsx";

export const UsersPage = () => {
    return (
        <>
            <h2>#knZgVIwvqd</h2>
            <p>
                На головній сторінці вивести всіх користувачів з будь-якого апі.
            </p>
            <p>
                При кліку на певного користувача вивести його корзини товарів, заміняючи(!!!!!) батьківський компонент списком з корзинами.
            </p>
            <hr/>
            <Users/>
        </>
    );
};