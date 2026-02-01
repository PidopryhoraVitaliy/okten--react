import './User.css';
import type {FC} from "react";
import type {UserModel} from "../../models/UserModel.ts";

type PropType = { user: UserModel; }

export const User: FC<PropType> = ({user}) => {
    return (
        <div className={'user'}>
            <p>user: <b>{user.firstName} {user.lastName}</b> ({user.username})</p>
            <p>phone: {user.phone}</p>
            <p>email: {user.email}</p>
            <p>role: {user.role}</p>
            <p>gender: {user.gender}</p>
            <p>university: {user.university}</p>
            <p>city: {user.address.city}</p>
            <p>company: {user.company.name}</p>
        </div>
    );
};