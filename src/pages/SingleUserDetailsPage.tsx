import {useLocation} from "react-router-dom";
import type {UserModel} from "../models/UserModel.ts";

export const SingleUserDetailsPage = () => {
    const {state} = useLocation();
    const user = state as UserModel;

    return (
        <>
            <p>user: <b>{user.firstName} {user.lastName}</b> ({user.username})</p>
            <p>phone: {user.phone}</p>
            <p>email: {user.email}</p>
            <p>role: {user.role}</p>
            <p>gender: {user.gender}</p>
            <p>university: {user.university}</p>
            <p>city: {user.address.city}</p>
            <p>company: {user.company.name}</p>
        </>
    );
};