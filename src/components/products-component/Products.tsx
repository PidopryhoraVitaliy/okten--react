import './Products.css';
import {useEffect, useState} from "react";
import {loadProducts} from "../../service/api.service.ts";
import type {ProductModel} from "../../models/ProductModel.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        loadProducts().then(data => setProducts(data));
    }, []);

    return (<>
            <div className='title-wrap'>
                <h2>Products:</h2>
            </div>
            <div className='products-wrap'>
                {
                    products.map((item) => <Product key={item.id} product={item}/>)
                }
            </div>
        </>
    );
};