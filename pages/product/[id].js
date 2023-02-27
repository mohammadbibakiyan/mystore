import Link from 'next/link'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart,removeFromCart } from "../../store/slice/cart-slice";

import ProductDescription from "../../component/product-page/product-description";
import ProductSpecifications from "../../component/product-page/product-specifications";
import ProductComments from "../../component/product-page/product-comments";
import ProductQuestion from "../../component/product-page/product-question";
import ProductImage from '../../component/product-page/product-image';

const ProductDetail=(props)=>{
    const cart=useSelector(state=>state.cart);
    const [colorSelected,setColorSelected]=useState(props?.inventory[0]?.color);
    const indexProductInCart=cart.products.findIndex(e=>e._id===props._id&&e.color._id===colorSelected._id);
    const dispatch=useDispatch();
    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-5">
                <div><ProductImage imageCover={props.images?.main} isFavorite={props.is_favorite} images={props.images?.list} productId={props._id} title={props.title_fa}/></div>
                <div className="lg:col-span-2">
                    <div><h1 className="text-h4 px-5">{props.title_fa}</h1></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 px-0 lg:pr-5">
                        <div className="col-span-2 order-2 lg:order-1">{/* Product Description  */}
                            <div><span className="text-body-2 text-neutral-300 hidden lg:block">{props.title_en}</span></div>
                            <div className="flex text-body-2 gap-6">{/* rate section */}
                                <div className="flex gap-2 items-center"><div><img src="/icons/star.png"/></div><p>{props.ratings_average}</p><p className="text-neutral-300 text-caption">({props.last_comment?.length||0})</p></div>
                                <div className="text-secondary-700">{props.last_comment?.length||0} دیدگاه</div>
                                <div className="text-secondary-700">{props.last_question?.length||0} پرسش</div>
                            </div>
                            <div>
                                <p className='text-h5 text-neutral-900'>رنگ:</p>
                                <div className='flex gap-3'>{props.inventory.map(e =><div title={e.color.title} key={e.color._id} className={`${e.color._id===colorSelected._id&&"variant-info-selected"} w-12 h-12 rounded-full`} onClick={()=>setColorSelected(e.color)} style={{backgroundColor:`${e.color.hex_code}`}}></div>)}
                                </div>
                            </div>
                            <div>{/* product feature */}
                                <ul>
                                    <div className="text-h4">ویژگی ها</div>
                                    {props.review?.map((e,i)=><li className="flex items-center" key={i}><p className="text-body-1 text-neutral-500 ml-2">&#9900; {e.title}:</p><p className="text-body1-strong">{e.value}</p></li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="order-1">{/* //seller Specifications */}
                            <div className="card divide-y-8 bg-neutral-100  py-3 px-5">
                                <div><p className="text-h5">فروشنده</p></div>
                                <div className="flex">
                                    <div className="ml-5"><img src="/icons/store.svg"/></div>
                                    <div className="flex-1"><p className="text-subtitle">دیجی من</p></div>
                                </div>
                                <div className="flex">
                                    <div className="ml-5"><img src="/icons/verify.svg"/></div>
                                    <div className="flex-1"><p className="text-body-2">گارانتی 24 ماه یکپارچه </p></div>
                                </div>
                                <div className="flex">
                                    <div className="ml-5"><img src="/icons/check.svg"/></div>
                                    <div className="flex-1"><p className="text-subtitle-strong">موجود در انبار دیجی من</p></div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div><span className="text-caption line">قیمت فروشنده</span></div>
                                    <div>
                                        {props.price.discount_percent>0&&<div className="flex items-center gap-4">
                                            <div className="line-through">{(props.price.rrp_price).toLocaleString()}</div>
                                            <div className="px-1 text-white bg-primary-700 text-body2-strong flex justify-center items-center rounded-full w-14 h-8">{props.price.discount_percent}%</div>
                                        </div>}
                                        <div className="text-left"><span className="text-h5">{((props.price.rrp_price)-(props.price.rrp_price*props.price.discount_percent/100)).toLocaleString()}</span><span>تومان</span></div>
                                    </div>
                                </div>
                                {(indexProductInCart<0)&&<button className="primary-button" onClick={()=>dispatch(addToCart({...props,color:colorSelected}))}>افزودن به سبد</button>}
                                {(indexProductInCart>-1)&&<div className="flex items-center">
                                    <div className="w-32 h-16 text-h5 text-primary-500 flex justify-evenly border border-solid border-gray-300 rounded-2xl">
                                        <button onClick={()=>dispatch(addToCart({_id:props._id,color:colorSelected}))}>+</button>
                                        <span>{cart.products[indexProductInCart].quantity}</span>
                                        <button onClick={()=>dispatch(removeFromCart({_id:props._id,color:colorSelected}))}>-</button>
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
            {props.description&&<ProductDescription introduction={props.description}/>}
            {props.specifications&&<ProductSpecifications specifications={props.specifications}/>}
            <ProductComments _id={props._id} ratingsAverage={props.ratings_average} title={props.title_fa} comments={props.last_comment}/>
            <ProductQuestion _id={props._id} questions={props.last_question}/>
        </>
    )
}
export default ProductDetail;

export  async function getServerSideProps(context){
    const items=await fetch(`http://127.0.0.1:3080/api/v1/products/${context.params.id}`,{ method:"GET",headers:{"cookie":context.req.headers.cookie}});
    const jsonItems=await items.json();
    return{
        props:{...jsonItems.data}
    }
}