import './User.css';
import type {FC} from "react";
import type {UserModel} from "../../models/UserModel.ts";
import {useNavigate} from "react-router-dom";

type PropType = { user: UserModel; }

export const User: FC<PropType> = ({user}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/carts/user/'+user.id);
    };

    return (
        <div className={'user'}>
            <div>
                <p>id: {user.id}</p>
                <p>user: <b>{user.firstName} {user.lastName}</b> ({user.username})</p>
                <p>phone: {user.phone}</p>
                <p>email: {user.email}</p>
                <p>city: {user.address.city}</p>
                <p>company: {user.company.name}</p>
            </div>
            {/*https://dummyjson.com/carts/user/33*/}
            <button onClick={handleOnClick}>Show user carts</button>
            {/*<Link to={'/carts/user/'+user.id} state={user}>Show user carts</Link>*/}
        </div>
    );
};