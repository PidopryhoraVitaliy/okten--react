import './DummyjsonUsers.css';
import {useEffect, useState} from "react";
import type {DummyjsonUserModel} from "../../models/DummyjsonUserModel.ts";
import {loadUsers} from "../../services/dummyjson.api.service.ts";
import {DummyjsonUser} from "../dummyjson-user-component/DummyjsonUser.tsx";

export const DummyjsonUsers = () => {
    const [users, setUsers] = useState<DummyjsonUserModel[]>([]);

    useEffect(() => {
        loadUsers().then(data => setUsers(data));
    }, []);

    return (
        <>
            <div className='title-wrap'>
                <h2>dummyjson users:</h2>
            </div>
            <div className='dummyjson-users-wrap'>
                {
                    users.map((user: DummyjsonUserModel) => <DummyjsonUser key={user.id} user={user}/>)
                }
            </div>
        </>
    );
};