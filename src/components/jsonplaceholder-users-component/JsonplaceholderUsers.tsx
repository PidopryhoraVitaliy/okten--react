import './JsonplaceholderUsers.css';
import {useEffect, useState} from "react";
import type {JsonplaceholderUserModel} from "../../models/JsonplaceholderUserModel.ts";
import {JsonplaceholderUser} from "../jsonplaceholder-user-component/JsonplaceholderUser.tsx";
import {loadUsers} from "../../services/jsonplaceholder.api.service.ts";

export const JsonplaceholderUsers = () => {
    const [users, setUsers] = useState<JsonplaceholderUserModel[]>([]);

    useEffect(() => {
        loadUsers().then(data => setUsers(data));
    }, []);

    return (
        <>
            <div className='title-wrap'>
                <h2>jsonplaceholder users:</h2>
            </div>
            <div className='jsonplaceholder-users-wrap'>
                {
                    users.map((user: JsonplaceholderUserModel) => <JsonplaceholderUser key={user.id} user={user}/>)
                }
            </div>
        </>
    );
};