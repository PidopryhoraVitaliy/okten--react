import './Products.css';
import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {loadAuthProducts, refresh} from "../../services/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        loadAuthProducts()
            .then((products) => {
                setProducts(products);
            })
            .catch((error) => {
                console.log(error);
                refresh().then(() => {
                    loadAuthProducts().then((products) => setProducts(products));
                })
            });
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