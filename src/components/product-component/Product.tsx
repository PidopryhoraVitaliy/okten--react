import './Product.css';
import type {FC} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";

type PropType = { product: ProductModel };
export const Product: FC<PropType> = ({product}) => {
    return (
        <div className={'product'}>
            <h4>{product.title}</h4>
            <img src={product.thumbnail} alt={product.title}/>
            <p>{product.description}</p>
            <p>category: {product.category}</p>
            <p>price: {product.price}</p>
            <p>brand: {product.brand}</p>
            <details>
                <summary>reviews</summary>
                <p>{JSON.stringify(product.reviews)}</p>
            </details>
        </div>
    );
};