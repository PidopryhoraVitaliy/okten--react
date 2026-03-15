import './Users.css';
import {User} from "../user-component/User.tsx";
import {useAppSelector, userSliceActions} from "../../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const Users = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then((response) => response.json())
            .then((data) => {
                dispatch(userSliceActions.loadUsers(data));
            })
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