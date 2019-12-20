const productReducer = (state = {
    products: [],
    product: {
        id: null,
        name: '',
        description: '', 
        category: '',
        keywords: '',
        image: '',
        quantity: null, 
        price: null

    },
    errors: null,
    message: null, 
}, action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS_SUCCESS":
            return { ...state, categories: action.payload }
        
        case "FETCH_PRODUCTS_FAILED":
            return { ...state, errors: action.payload.errors, message: action.payload.message}

        case "FETCH_PRODUCT_SUCCESS":
            return { ...state, category: action.payload}
            
        case "FETCH_PRODUCT_FAILED":
            return { ...state, errors: action.payload.errors, message: action.payload.message}

        default:
            return state;
        };
};

export default productReducer;
