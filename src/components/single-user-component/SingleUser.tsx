import './SingleUser.css';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";

export const SingleUser = () => {
    const {id} = useParams();
    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(userSliceActions.loadUser(id));
    }, [id]);

    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {user && <div>  {user.id}. {user.name} </div>}
        </div>
    );
};