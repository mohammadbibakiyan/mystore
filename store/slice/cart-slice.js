import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{originalPrice:0,discountPrice:0,products:[]},
    reducers:{  
        addToCart(state,action){
            const existIndex=state.products.findIndex(e=>action.payload._id===e._id&&e.color._id===action.payload.color._id);
            if(existIndex!==-1&&state.products[existIndex].color._id===action.payload.color._id){
                //exist in cart and was same color
                state.products[existIndex].quantity+=1;
                state.originalPrice+=state.products[existIndex].price.rrp_price;
                state.discountPrice+=((state.products[existIndex].price.rrp_price)*(state.products[existIndex].price.discount_percent))/100;
            }
            else{
                //not exist in cart
                state.products=state.products.concat({...action.payload,quantity:1});
                state.originalPrice+=action.payload.price.rrp_price;
                state.discountPrice+=((action.payload.price.rrp_price)*(action.payload.price.discount_percent))/100;
            }
            localStorage.setItem("cart",JSON.stringify(state))
        },
        removeFromCart(state,action){
            const existIndex=state.products.findIndex(e=>action.payload._id===e._id&&e.color._id===action.payload.color._id);
            state.originalPrice-=state.products[existIndex].price.rrp_price;
            state.discountPrice-=((state.products[existIndex].price.rrp_price)*(state.products[existIndex].price.discount_percent))/100;
            if(state.products[existIndex].quantity<=1){
                // مقدار محصولی که نیاز است کم شود بیشتر از موجودی سبد خرید است محصول حذف می شود
                state.products=state.products.filter(e=>!(e._id===state.products[existIndex]._id&&e.color._id===action.payload.color._id));
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