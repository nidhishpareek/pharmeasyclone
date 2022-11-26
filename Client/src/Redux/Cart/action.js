import * as types from "./actionTypes"

export const getCartTotal = ()=>{
    return({
        type:types.GET_TOTAL
    })
    
}
export const updateCart = (id,amount)=>({
    type:types.UPDATE,
    payload:{
        id,
        amount
    }
})
export const setCart = (data) =>{
  
    return ({
    type:types.SET_CART,
    payload:data
    
})}
export const remove = (id) =>({
    type:types.REMOVE,
    payload:id
})
export const addToCart = (data) =>({
    type:types.ADD_ITEM,
    payload:data
})
export const clearCart = () =>({
    type:types.CLEAR_CART,
})