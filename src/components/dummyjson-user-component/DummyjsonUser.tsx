import './DummyjsonUser.css';
import type {FC} from "react";
import type {DummyjsonUserModel} from "../../models/DummyjsonUserModel.ts";

type PropType = { user: DummyjsonUserModel };

export const DummyjsonUser: FC<PropType> = ({user}) => {
    return (
        <div className={'dummyjson-user'}>
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