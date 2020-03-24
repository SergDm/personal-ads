import { ProductApi } from '../api/api'

const SET_PRODUCTS = 'SET_PRODUCTS'
const TOGGLE_IS_LOAD = 'TOGGLE_IS_LOAD'

const initialState = {
    products: [],
    isLoad: true
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PRODUCTS:
            return {
                ...state, products: action.products
            };
        case TOGGLE_IS_LOAD:
            return {
                ...state, isLoad: action.isLoad
            };
        default:
            return state;
    }
}

export const setProductAC = (products) => ({ type: SET_PRODUCTS, products })

export const toggleIsLoad = (isLoad) => ({ type: TOGGLE_IS_LOAD, isLoad })

export const getProducts = () => {
    return async (dispatch) => {
        dispatch(toggleIsLoad(true));
        let data = await ProductApi.getProduct()
        dispatch(toggleIsLoad(false));
        dispatch(setProductAC(data.products));
    }
}

export default productReducer