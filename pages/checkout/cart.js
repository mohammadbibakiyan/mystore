import { useSelector,useDispatch } from "react-redux";
import Link from "next/link";

import { addToCart,removeFromCart,removeCart } from "../../store/slice/cart-slice";
import {showAlert} from "./../../lib/showAlert"

const CartPage=()=>{
    const cart=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    const createOrderHandler=async()=>{
        const orderItems=cart.products.map(e=>{
            return {product:e._id,quantity:{black:e.quantity}}
        });
        try{
            const response=await fetch("http://127.0.0.1:3080/api/v1/orders",{method:"POST",body:JSON.stringify(orderItems),credentials:"include",headers: {'Content-Type': 'application/json'},});
            const result=await response.json();
            showAlert(result.message, result.status);
            if(!result.message==="success") throw new Error(result.message);
            dispatch(removeCart());
            localStorage.removeItem("cart")
        }catch(err){
            console.log(err);
        }
    }
    return(
        <>
            {cart.products.length>0&&<section className="grid grid-cols-12 gap-3 p-5">
            <div className="col-span-12 lg:col-span-9 p-6 card divide-x-0 divide-y divide-solid divide-neutral-200">
                <div className="py-3">
                    <p className="text-h5">سبد خرید شما</p>
                    <p className="text-body-2 text-gray-500">{cart.products.length} کالا</p>
                </div>
            
                {cart.products.map((e)=><div key={e._id} className="grid grid-cols-6 gap-10 my-5">
                    <div ><img src={e.images.main}/></div>
                    <div className="col-span-5">
                        <h3 className="text-body1-strong mb-10">{e.title_fa}</h3>
                        <div className="text-neutral-500 text-body-2 flex flex-col gap-5">
                            <div className="flex items-center">
                                <div className="ml-3 w-8 h-8 rounded-full" style={{backgroundColor:`${e.color.hex_code}`}}></div>
                                <p>{e.color.title}</p>
                            </div>
                            <div className="flex items-center">
                                <div className="ml-3"><img src="/icons/verify.svg" className="w-7 fill-red-500"/></div>
                                <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
                            </div>
                            <div className="flex items-center">
                                <div className="ml-3"><img src="/icons/store.svg" className="w-7"/></div>
                                <p >دیجی من</p>
                            </div>
                            <div className="flex items-center">
                                <div className="ml-3"><img src="/icons/check.svg" className="w-7"/></div>
                                <p >موجود در انبار دیجی کالا</p>
                            </div>
                            <div className="flex items-center">
                                <div className="ml-3"><img src="/icons/truck.svg" className="w-7"/></div>
                                <p>ارسال دیجی کالا</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-h5 text-primary-500 flex justify-evenly border border-solid border-gray-300 rounded-2xl">
                        <button onClick={()=>dispatch(addToCart({_id:e._id,color:e.color}))}>+</button>
                        <span>{e.quantity}</span>
                        <button onClick={()=>dispatch(removeFromCart({_id:e._id,color:e.color}))}>-</button>
                    </div>
                    <div className="col-span-5">
                        {e.price.discount_percent>0&&<div className="text-primary-700"><span>{(e.price.rrp_price*e.price.discount_percent/100).toLocaleString()}</span><span>تومان تخفیف</span></div>}
                        <div className="text-h5"><span>قیمت</span><span>{((e.price.rrp_price)-(e.price.rrp_price*e.price.discount_percent/100)).toLocaleString()} تومان</span></div>
                    </div>
                </div>)}
                
            </div>
            <div className="col-span-12 lg:col-span-3">
                <div className="card p-5">
                    <div className="flex justify-between">
                        <p className="text-body2-strong">قیمت کالاها({cart.products.length})</p>
                        <p className="text-subtitle-strong">{cart.originalPrice.toLocaleString()} تومان</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-body2-strong">جمع سبد خرید</p>
                        <p className="text-subtitle-strong">{((cart.originalPrice)-(cart.discountPrice)).toLocaleString()} تومان</p>
                    </div>
                    <p className="text-caption">هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود</p>
                    {cart.discountPrice>0&&<div className="flex justify-between text-primary-700">
                        <p className="text-body2-strong">سود شما از خرید</p>
                        <p className="text-subtitle-strong">{cart.discountPrice.toLocaleString()} تومان</p>
                    </div>}
                    <button className="primary-button" onClick={createOrderHandler}>ادامه</button>
                </div>
            </div>
            </section>}

            {cart.products.length==0&&<section>
                <>
                    <div className="py-3">
                        <p className="text-h5">سبد خرید شما</p>
                    </div>
                    <div className="flex flex-col items-center card py-10">
                        <img src="/images/cart/empty-cart.svg" className="max-w-3xl"/>
                        <p className="text-h4 text-neutral-800 mt-6">سبد خرید شما خالی است!</p>
                        <p className="text-body-2 mt-2">می توانید برای مشاهده محصولات بیشتر به صفحه اصلی بروید:</p>
                        <Link href="/">
                            <a className="text-button-2 mt-2 text-secondary-500"><span className="ml-5">صفحه اصلی</span><span>&gt;</span></a>
                        </Link>
                    </div>
                </>    
            </section>}
        </>
    )
}

export default CartPage;

