import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/db";
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addToCart,removeFromCart } from "../../store/slice/cart-slice";

import ProductIntroduction from "../../component/product-page/product-introduction";
import ProductSpecifications from "../../component/product-page/product-specifications";
import ProductViews from "../../component/product-page/product-views";
import ProductQuestion from "../../component/product-page/product-question";

const ProductDetail=(props)=>{    
    const cart=useSelector(state=>state.cart);
    const indexProductInCart=cart.products.findIndex(e=>e._id===props._id);
    const dispatch=useDispatch();
    let rate=(props.comments.reduce((acc, cur) => {
        return acc+(+cur.rate)
    }, 0)/props.comments?.length).toFixed(1);
    if(isNaN(rate)) rate=0;
    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-5"> 
                <div><img src={props.product_image.cover} alt={props.title_alt}/></div>
                <div className="lg:col-span-2">
                    <div><h1 className="text-h4 px-5">{props.title}</h1></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 lg:pr-5">
                        <div className="col-span-2 order-2 lg:order-1">{/* Product Description  */}
                            <div><span className="text-body-2 text-neutral-300 hidden lg:block">{props.title_alt}</span></div>
                            <div className="flex text-body-2 gap-6">{/* rate section */}
                                <div className="flex gap-2 items-center"><div><img src="/icons/star.png"/></div><p>{rate?rate:0}</p><p className="text-neutral-300 text-caption">({props.comments?.length})</p></div>
                                <div className="text-secondary-700">{props.comments?.length} دیدگاه</div>
                                <div className="text-secondary-700">{props.questions?.length} پرسش</div>
                            </div>
                            
                            <div>{/* product feature */}
                                <ul>
                                    <div className="text-h4">ویژگی ها</div>
                                    {props.product_attributes.map((e,i)=><li className="flex items-center" key={i}><p className="text-body-1 text-neutral-500 ml-2">&#9900; {e[0]}:</p><p className="text-body1-strong">{e[1]}</p></li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="order-1">{/* //seller Specifications */}
                            <div className="card divide-y-8 bg-neutral-100  py-3 px-5">
                                <div><p className="text-h5">فروشنده</p></div>
                                <div className="flex">
                                    <div className="ml-5"><img src="/icons/store.svg"/></div>
                                    <div className="flex-1"><p className="text-subtitle">{props.seller}</p></div>
                                </div>
                                <div className="flex">
                                    <div className="ml-5"><img src="/icons/verify.svg"/></div>
                                    <div className="flex-1"><p className="text-body-2">گارانتی 24 ماه یکپارچه </p></div>
                                </div>
                                <div className="flex">
                                    <div className="ml-5"><img src="/icons/check.svg"/></div>
                                    <div className="flex-1"><p className="text-subtitle-strong">موجود در انبار دیجی من</p></div>
                                </div>
                                <div className="flex">
                                    <div><span className="text-caption">قیمت فروشنده</span></div>
                                    <div className="mr-auto"><span className="text-h5">{props.price}</span></div>
                                </div>
                                {indexProductInCart<0&&<button className="primary-button" onClick={()=>dispatch(addToCart({...props,quantity:1}))}>افزودن به سبد</button>}
                                {indexProductInCart>-1&&<div className="flex items-center">
                                    <div className="w-32 h-16 text-h5 text-primary-500 flex justify-evenly border border-solid border-gray-300 rounded-2xl">
                                        <button onClick={()=>dispatch(addToCart({_id:props._id,quantity:1}))}>+</button>
                                        <span>{cart.products[indexProductInCart].quantity}</span>
                                        <button onClick={()=>dispatch(removeFromCart({_id:props._id,quantity:1}))}>-</button>
                                    </div>
                                    <div className="mr-6">
                                        <p className="text-neutral-700 text-body-1">در سبد شما</p>
                                        <div >مشاهده <Link  href="/checkout/cart/"><a className="text-secondary-500 mr-1 text-body-2">سبد خرید</a></Link>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex justify-around mt-5">
                <div className="flex items-center text-caption-strong text-neutral-400"><img className="ml-2" src="/icons/express-delivery.svg"/><p>امکان تحویل اکسپرس</p></div>
                <div className="flex items-center text-caption-strong text-neutral-400"><img className="ml-2" src="/icons/support.svg"/><p>24ساعته، 7 روز هفته</p></div>
                <div className="flex items-center text-caption-strong text-neutral-400"><img className="ml-2" src="/icons/days-return.svg"/><p>امکان پرداخت در محل</p></div>
                <div className="flex items-center text-caption-strong text-neutral-400"><img className="ml-2" src="/icons/original-products.svg"/><p>هفت روز ضمانت برگشت وجه</p></div>
                <div className="flex items-center text-caption-strong text-neutral-400"><img className="ml-2" src="/icons/cash-on-delivery.svg"/><p>ضمانت اصل بودن کالا</p></div>
            </div>
            <div className="mt-10 sticky top-0 bg-white z-10 border-b border-solid border-0 border-neutral-500">
                <ul className="text-body2-strong text-neutral-500 flex">
                    <div className="px-4 py-2"><li>معرفی</li></div>
                    <div className="px-4 py-2"><li>مشخصات</li></div>
                    <div className="px-4 py-2"><li>دیدگاه ها</li></div>
                    <div className="px-4 py-2"><li>پرسش ها</li></div>
                </ul>
            </div>
            {props.introduction&&<ProductIntroduction introduction={props.introduction}/>}
            {props.specifications&&<ProductSpecifications specifications={props.specifications}/>}
            <ProductViews _id={props._id} comments={props.comments}/>
            <ProductQuestion _id={props._id} questions={props.questions}/>
        </>
    )
}
export default ProductDetail;


export  async function getServerSideProps(context){
    const client=await connectToDatabase();
    const db= client.db();
    const item=await db.collection("laptop").findOne({_id:ObjectId(`${context.params.id}`)});
    let result=JSON.parse(JSON.stringify(item));
    return{
        props:{...result}
    }
}