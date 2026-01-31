import './JsonplaceholderUser.css';
import type {FC} from "react";
import type {JsonplaceholderUserModel} from "../../models/JsonplaceholderUserModel.ts";

type PropType = { user: JsonplaceholderUserModel };

export const JsonplaceholderUser: FC<PropType> = ({user: {name, username, phone, email, address, company }}) => {
    return (
        <div className={'jsonplaceholder-user'}>
            <p>user: <b>{name}</b> ({username})</p>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            <p>city: {address.city}</p>
            <p>company: {company.name}</p>
        </div>
    );
};