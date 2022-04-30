import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{totalPrice:0,products:[]},
    reducers:{
        addToCart:(state,action)=>{
            const existIndex=state.products.findIndex(e=>action.payload._id===e._id);
            if(existIndex!==-1){
                //درون سبد خرید وجود دارد
                const newProducts=[...state.products];
                newProducts[existIndex].quantity+=action.payload.quantity;
                state.products=newProducts;
            }else{
                //در سبد خرید موجود نیست
                state.products=state.products.concat(action.payload);
            }
            state.totalPrice+=action.payload.price*action.payload.quantity;
        },
        removeFromCart(state,action){
            const existIndex=state.products.findIndex(e=>action.payload._id===e._id);
            if(state.products[existIndex].quantity<=action.payload.quantity){
                // مقدار محصولی که نیاز است کم شود بیشتر از موجودی سبد خرید است محصول حذف می شود
                state.products=state.products.filter(e=>e._id!==state.products[existIndex]._id)
            }else{
                //میزان موجودی بیشتر از درخواست کاهش است
                const newProducts=[...state.products];
                newProducts[existIndex].quantity-=action.payload.quantity;
                state.products=newProducts;
            }
            state.totalPrice-=action.payload.price*action.payload.quantity;
        },
    }
})

export const {addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;