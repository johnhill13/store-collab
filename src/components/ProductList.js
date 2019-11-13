import React from "react";
import Product from '../components/Product';

const ProductList = ({ products }) => {
    console.log("This is the productList page", products)

    const list = products.map(product => (
        <Product image={product.image} name={product.name} description={product.description} price={product.price} />
    ));

    return (
        <>
            {list}
        </>
    );
}

export default ProductList;
