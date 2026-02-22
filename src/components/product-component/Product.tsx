import './Product.css';
import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type PropType = { product: IProduct };
export const Product: FC<PropType> = ({product}) => {
    return (
        <div className={'product'}>
            <h4>
                <div>{product.title}</div>
                <img className={'thumbnail'} src={product.thumbnail} alt={product.title}/>
            </h4>
            <p>{product.description}</p>
            <p><strong>category:</strong> {product.category}</p>
            <p><strong>price:</strong> {product.price}</p>
            <p><strong>rating:</strong> {product.rating}</p>
            <p><strong>stock:</strong> {product.stock}</p>
            <p><strong>brand:</strong> {product.brand}</p>
        </div>
    );
};