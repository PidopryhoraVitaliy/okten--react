import './UserCarts.css';
import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import type {BaseResponceModel} from "../../models/BaseResponceModel.ts";
import type {CartModel} from "../../models/CartModel.ts";
import {Link, useParams} from "react-router-dom";
import {Cart} from "../cart-component/Cart.tsx";

export const UserCarts = () => {
    const {userId} = useParams();
    const [carts, setCarts] = useState<CartModel[]>([]);

    useEffect(() => {
        if (userId) {
            // https://dummyjson.com/carts/user/33
            getAll<BaseResponceModel & { carts: CartModel[] }>('/carts/user/' + userId)
                .then(data => setCarts(data.carts));
        }
    }, [userId]);

    return (
        <>
            <Link to={'/users'}>users</Link>
            <div className='title-wrap'>
                <h2>Carts:</h2>
            </div>
            <div>
                {
                    (carts.length === 0)
                        ? (<div>empty / no data on user's carts</div>)
                        : (<div className='carts-wrap'>
                            {
                                carts.map((cart) => <Cart key={cart.id} cart={cart}/>)
                            }
                        </div>)
                }
            </div>
        </>
    );
};