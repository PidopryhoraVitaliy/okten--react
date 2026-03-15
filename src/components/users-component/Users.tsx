import './Users.css';
import {User} from "../user-component/User.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";

export const Users = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users/")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         dispatch(userSliceActions.loadUsers(data));
        //     })
        dispatch(userSliceActions.loadUsers());
    }, []);

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