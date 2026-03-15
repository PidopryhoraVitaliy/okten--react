import './User.css';
import {type FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type PropType = { user: IUser; }

export const User: FC<PropType> = ({user}) => {
    return (
        <div className={'user'}>
            <b>{user.id}</b>
            <p>user: <b>{user.name}</b></p>
        </div>
    );
};