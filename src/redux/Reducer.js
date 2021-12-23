import { SET_PRODUCT, SELET_PRODUCT, REMOVE_PRODUCT } from "./Constant";

const intialstate = {
    products: []
}

export const changereducer = (state = intialstate, { type, payload }) => {
    switch (type) {
        case SET_PRODUCT:
            return {
                ...state, products: payload
            }

        default:
            return state
    }
};


export const selectedreducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SELET_PRODUCT:
            return {
                ...state, ...payload
            };
        case REMOVE_PRODUCT:
            return {}
        default:
            return state
    }

};


