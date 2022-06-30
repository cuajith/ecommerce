import * as types from "./constants";

export const getCartTotal = () => ({
    type: types.GET_TOTALS
})

export const increase = (id) => ({
    type: types.INCREASE,
    payload: id
})

export const decrease = (id) => ({
    type: types.DECREASE,
    payload: id
})


export const remove = (id) => ({
    type: types.REMOVE,
    payload: id
})

export const clearItems = () => ({
    type: types.CLEAR_ITEMS
}) 

export const displayItem = () => ({
    type: types.DISPLAY_ITEMS
})