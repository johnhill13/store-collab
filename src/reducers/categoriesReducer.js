const categoriesReducer = (state = {
    categories: [],
    category: {
        name: '',
        image: ''
    },
    errors: null,
    message: null, 
}, action) => {
    switch(action.type) {
        case "FETCH_CATEGORIES_SUCCESS":
            return { ...state, categories: action.payload }
        
        case "FETCH_CATEGORIES_FAILED":
            return { ...state, errors: action.payload.errors, message: action.payload.message}

        case "FETCH_CATEGORY_SUCCESS":
            return { ...state, category: action.payload}
            
        case "FETCH_CATEGORY_FAILED":
            return { ...state, errors: action.payload.errors, message: action.payload.message}

        default:
            return state;
        };
};

export default categoriesReducer;
