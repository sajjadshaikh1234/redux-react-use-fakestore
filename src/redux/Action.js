
import { SET_PRODUCT, SELET_PRODUCT, REMOVE_PRODUCT } from '../redux/Constant'
export const setproduct = (products) => {
    return {
        type: SET_PRODUCT,
        payload: products
    }
}

export const selectproduct = (product) => {
    return {
        type: SELET_PRODUCT,
        payload: product
    }
}

export const removeproduct = (product) => {
    return {
        type: REMOVE_PRODUCT
    }
}