import React from "react";
import Product from '../components/Product';


const ProductList = ({ products, selectedCategory }) => {
    const list = products.map(product => (
        <Product key={product.id} category={product.category} image={product.image} name={product.name} description={product.description} price={product.price} />
    ));

    const filteredList = list.filter(category => {
        return category.props.category === selectedCategory
    })

    return (
        <>
            {filteredList}
        </>
    );
}

export default ProductList;
