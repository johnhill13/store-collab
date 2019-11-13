import React from "react";
import Product from '../components/Product';

// const filteredItems = (arr, selected) => {
//     return arr.filter(selected);
// }

const ProductList = ({ products, selectedCategory }) => {
    // console.log("This is the productList page", products)
    console.log("Product List Page", selectedCategory)
    const list = products.map(product => (
        <Product key={product.id} image={product.image} name={product.name} description={product.description} price={product.price} />
    ));

    return (

        <>
            {/* {console.log(list, selectedCategory)} */}
            {list}
            {/* {filteredItems(list, selectedCategory)} */}
        </>
    );
}

export default ProductList;
