import {UserCarts} from "../components/user-carts-component/UserCarts.tsx";
import {useParams} from "react-router-dom";

export const UserCartsPage = () => {
    const {userId} = useParams();

    return (
        <>
            {userId && <UserCarts userId={userId}/>}
        </>
    );
};