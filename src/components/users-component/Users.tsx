import './Users.css';
import {useEffect, useState} from "react";
import type {UserModel} from "../../models/UserModel.ts";
import {User} from "../user-component/User.tsx";
import {loadUsers} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([]);
    const [query] = useSearchParams({limit: "10", skip: "0"});

    useEffect(() => {
        const limit = query.get('limit') || "10";
        const skip = query.get('skip') || "0";
        loadUsers(limit, skip).then(data => setUsers(data));
    }, [query]);

    return (
        <>
            <div className='title-wrap'>
                <h2>Users:</h2>
            </div>
            <div className='users-wrap'>
                {
                    users.map((user) => <User key={user.id} user={user}/>)
                }
            </div>
        </>
    );
};