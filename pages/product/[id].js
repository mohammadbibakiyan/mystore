import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/db";
import ProductIntroduction from "../../component/product-page/product-introduction";
import ProductSpecifications from "../../component/product-page/product-specifications";

const ProductDetail=(props)=>{
        return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-5"> 
            <div><img src={props.product_image.cover} alt={props.title_alt}/></div>
            <div className="lg:col-span-2">
                <div><h1 className="text-h4 px-5">{props.title}</h1></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 px-0 lg:pr-5">
                    <div className="col-span-2 order-2 lg:order-1">{/* Product Description  */}
                        <div><span className="text-body-2 text-gray-300 hidden lg:block">{props.title_alt}</span></div>
                        <div className="flex text-body-2">{/* rate section */}
                            <div>4.2</div>
                            <div className="text-blue-400">143 دیدگاه</div>
                            <div className="text-blue-400">187 پرسش</div>
                        </div>
                        
                        <div>{/* product feature */}
                            <ul>
                                <div className="text-h4">ویژگی ها</div>
                                {props.product_attributes.map((e,i)=><li className="flex" key={i}><p className="text-body-1 text-gray-500 ml-2">{e[0]}:</p><p className="text-body1-strong">{e[1]}</p></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="order-1">{/* //seller Specifications */}
                        <div className="card divide-y-8 bg-gray-100  py-3 px-5">
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
                            <button className="primary-button">افزودن به سبد</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden md:flex justify-around">
            <div className="flex items-center text-caption-strong text-gray-400"><img className="ml-2" src="/icons/express-delivery.svg"/><p>امکان تحویل اکسپرس</p></div>
            <div className="flex items-center text-caption-strong text-gray-400"><img className="ml-2" src="/icons/support.svg"/><p>24ساعته، 7 روز هفته</p></div>
            <div className="flex items-center text-caption-strong text-gray-400"><img className="ml-2" src="/icons/days-return.svg"/><p>امکان پرداخت در محل</p></div>
            <div className="flex items-center text-caption-strong text-gray-400"><img className="ml-2" src="/icons/original-products.svg"/><p>هفت روز ضمانت برگشت وجه</p></div>
            <div className="flex items-center text-caption-strong text-gray-400"><img className="ml-2" src="/icons/cash-on-delivery.svg"/><p>ضمانت اصل بودن کالا</p></div>
        </div>
        <div>
            <ul className="text-body2-strong text-gray-500 flex">
                <div className="px-4 py-2"><li>معرفی</li></div>
                <div className="px-4 py-2"><li>مشخصات</li></div>
                <div className="px-4 py-2"><li>دیدگاه ها</li></div>
                <div className="px-4 py-2"><li>پرسش ها</li></div>
            </ul>
        </div>
        {props.introduction&&<ProductIntroduction introduction={props.introduction}/>}
        {props.specifications&&<ProductSpecifications specifications={props.specifications}/>}
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