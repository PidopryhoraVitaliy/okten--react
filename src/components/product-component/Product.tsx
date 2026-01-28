import './Product.css';
import type {FC} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
import {Reviews} from "../reviews-component/Reviews.tsx";

type PropType = { product: ProductModel };
export const Product: FC<PropType> = ({product}) => {
    const {width, height, depth} = {...product.dimensions};
    const {createdAt, updatedAt, barcode, qrCode} = {...product.meta};
    const images: string[] = product.images;

    return (
        <div className={'product'}>
            <h2>
                <img className={'thumbnail'} src={product.thumbnail} alt={product.title}/>
                <div>{product.title}</div>
            </h2>
            <div className={'product-img'}>
            {
                images.map((imgSrc, index) => <img key={index} src={imgSrc} alt="product img link"/>)
            }
            </div>
            <p>{product.description}</p>
            <p><strong>category:</strong> {product.category}</p>
            <p><strong>price:</strong> {product.price}</p>
            <p><strong>discount percentage:</strong> {product.discountPercentage}</p>
            <p><strong>rating:</strong> {product.rating}</p>
            <p><strong>stock:</strong> {product.stock}</p>
            <p><strong>tags:</strong> {product.tags.join(', ')}</p>
            <p><strong>brand:</strong> {product.brand}</p>
            <p><strong>sku:</strong> {product.sku}</p>
            <p><strong>weight:</strong> {product.weight}</p>
            <p><strong>dimensions:</strong> width: {width}; height: {height}; depth: {depth};</p>
            <p><strong>warranty information:</strong> {product.warrantyInformation}</p>
            <p><strong>shipping information:</strong> {product.shippingInformation}</p>
            <p><strong>availability status:</strong> {product.availabilityStatus}</p>
            <details>
                <summary><strong>reviews</strong></summary>
                <Reviews reviews={product.reviews}/>
            </details>
            <p><strong>return policy:</strong> {product.returnPolicy}</p>
            <p><strong>minimum order quantity:</strong> {product.minimumOrderQuantity}</p>
            <details>
                <summary><strong>meta</strong></summary>
                <div className={'details-meta'}>
                    <div>
                        <p><strong>createdAt:</strong> {createdAt}</p>
                        <p><strong>updatedAt:</strong> {updatedAt}</p>
                        <p><strong>barcode:</strong> {barcode}</p>
                    </div>
                    <div>
                        <img src={qrCode} alt="qr-code"/>
                    </div>
                </div>
            </details>
        </div>
    );
};
