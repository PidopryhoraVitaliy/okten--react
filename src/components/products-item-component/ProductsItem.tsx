import './ProductsItem.css';
import type {FC} from "react";
import type {ProductsItemModel} from "../../models/ProductsItemModel.ts";

type PropType = { productsItem: ProductsItemModel; }

export const ProductsItem: FC<PropType> = ({productsItem}) => {
    return (
        <div className={'products-item-wrap'}>
            <div className={'products-item-info-wrap'}>
                <p>id: {productsItem.id}</p>
                <p>title: {productsItem.title}</p>
                <p>price: {productsItem.price}</p>
                <p>quantity: {productsItem.quantity}</p>
                <p>discountPercentage: {productsItem.discountPercentage}</p>
                <p>discountedTotal: {productsItem.discountedTotal}</p>
            </div>
            <img src={productsItem.thumbnail} alt={productsItem.title}/>
        </div>
    );
};