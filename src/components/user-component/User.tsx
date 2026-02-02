import './User.css';
import type {FC} from "react";
import type {UserModel} from "../../models/UserModel.ts";
import {useNavigate} from "react-router-dom";

type PropType = { user: UserModel; }

export const User: FC<PropType> = ({user}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/users/' + user.id + '/carts');
    };

    return (
        <div className={'user'}>
            <div>
                <p>id: {user.id}</p>
                <p>user: <b>{user.firstName} {user.lastName}</b> ({user.username})</p>
                <p>phone: {user.phone}</p>
                <p>email: {user.email}</p>
            </div>
            <button onClick={handleOnClick}>Show user carts</button>
        </div>
    );
};