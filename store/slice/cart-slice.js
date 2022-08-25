import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{originalPrice:0,discountPrice:0,products:[]},
    reducers:{  
        addToCart(state,action){
            const existIndex=state.products.findIndex(e=>action.payload._id===e._id);
            if(existIndex!==-1){
                //درون سبد خرید وجود دارد
                state.products[existIndex].quantity+=1;
                state.originalPrice+=state.products[existIndex].price;
                state.discountPrice+=((state.products[existIndex].price)*(state.products[existIndex].priceDiscount))/100;
            }else{
                //در سبد خرید موجود نیست
                state.products=state.products.concat({...action.payload,quantity:1});
                state.originalPrice+=action.payload.price;
                state.discountPrice+=((action.payload.price)*(action.payload.priceDiscount))/100;
            }
        localStorage.setItem("cart",JSON.stringify(state))
        },
        removeFromCart(state,action){
            const existIndex=state.products.findIndex(e=>action.payload._id===e._id);
            state.originalPrice-=state.products[existIndex].price;
            state.discountPrice-=((state.products[existIndex].price)*(state.products[existIndex].priceDiscount))/100;
            if(state.products[existIndex].quantity<=1){
                // مقدار محصولی که نیاز است کم شود بیشتر از موجودی سبد خرید است محصول حذف می شود
                state.products=state.products.filter(e=>e._id!==state.products[existIndex]._id);
            }else{
                //میزان موجودی بیشتر از درخواست کاهش است
                state.products[existIndex].quantity-=1;
            }
            localStorage.setItem("cart",JSON.stringify(state))
        },
        addFromLocalStorage(state,action){
            state.originalPrice=action.payload.originalPrice;
            state.discountPrice=action.payload.discountPrice;
            state.products=action.payload.products; 
        },
        removeCart(state,action){
            state.originalPrice=0;
            state.discountPrice=0;
            state.products=[];  
        }
    }
})

export const {addToCart,removeFromCart,addFromLocalStorage,removeCart}=cartSlice.actions;
export default cartSlice.reducer;