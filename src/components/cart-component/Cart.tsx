import './Cart.css';
import type {FC} from "react";
import type {CartModel} from "../../models/CartModel.ts";
import {ProductsItem} from "../products-item-component/ProductsItem.tsx";

type PropType = { cart: CartModel; }

export const Cart: FC<PropType> = ({cart}) => {

    return (
        <div className={'cart'}>
            <div>
                <p><b>total:</b> {cart.total}</p>
                <p>discountedTotal: {cart.discountedTotal}</p>
                <p>userId: {cart.userId}</p>
                <p>totalProducts: {cart.totalProducts}</p>
                <p>totalQuantity: {cart.totalQuantity}</p>
            </div>
            <div>
                <p><b>Products:</b></p>
                {cart.products.map(item => <ProductsItem key={item.id} productsItem={item}/>)}
            </div>
        </div>
    );
};