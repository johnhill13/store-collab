import React from "react";
import Product from '../components/Product';


const ProductList = ({ products, selectedCategory, onClickProduct, selectedProductObject }) => {
    const list = products.map(product => (
        <Product key={product.id} category={product.category} selectedProductObject={selectedProductObject} onClickProduct={onClickProduct} image={product.image} name={product.name} description={product.description} price={product.price} />
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
