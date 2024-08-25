import { createSlice } from "@reduxjs/toolkit";
const addDecimals=(num)=>{
    return (Math.round(num *100)/100).toFixed(2)
}


const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []}
;

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item =action.payload;
            const exitItem=state.cartItems.find((x)=>x._id === item._id)

            if(exitItem){
                state.cartItems=state.cartItems.map((x)=>x._id === exitItem._id ? item : x)
            }else{
                state.cartItems = [...state.cartItems,item]
            }
            //calculate items Price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc,item)=>acc + item.price * item.qty, 0 ))
            //calculate shipping  Price
            state.shippingPrice = addDecimals(state.itemsPrice > 2000 ? 0 : 100)
            //calculate tax Price
            state.taxPrice= addDecimals(Number((0.18 * state.itemsPrice).toFixed(2)))

            //calculate total Price
            state.totalPrice=(
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2)

            localStorage.setItem('cart', JSON.stringify(state))

        },
     },
})
export const {addToCart}= cartSlice.actions;
export default cartSlice.reducer;