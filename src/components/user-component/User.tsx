import './User.css';
import type {FC} from "react";
import type {UserModel} from "../../models/UserModel.ts";
import {Link, useNavigate} from "react-router-dom";

type PropType = { user: UserModel; }

export const User: FC<PropType> = ({user}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('users/details', {state: user});
    };

    return (
        <div className={'user'}>
            <div>
                <p>user: <b>{user.firstName} {user.lastName}</b> ({user.username})</p>
                <p>email: {user.email}</p>
            </div>
            <button onClick={handleOnClick}>Show details</button>
            <Link to={'users/details'} state={user}>Show user details</Link>
        </div>
    );
};