import './Users.css';
import {useEffect, useState} from "react";
import type {UserModel} from "../../models/UserModel.ts";
import {User} from "../user-component/User.tsx";
import {loadUsers} from "../../services/api.service.ts";

export const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([]);

    // useEffect(() => {
    //     loadUsers().then(data => setUsers(data));
    // }, []);

    return (
        <>
            <div className='title-wrap'>
                <h2>Users:</h2>
            </div>
            {/*<div className='users-wrap'>*/}
            {/*    {*/}
            {/*        users.map((user) => <User key={user.id} user={user}/>)*/}
            {/*    }*/}
            {/*</div>*/}
        </>
    );
};