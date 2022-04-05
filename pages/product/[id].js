const ProductDetail=()=>{
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-5"> 
            <div><img src="/images/cart1.jpg" alt="product-page"/></div>
            <div className="lg:col-span-2">
                <div><h1 className="text-h4 px-5">لپ تاپ 14 اینچی ایسوس مدل R465FA-EB028</h1></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 px-0 lg:pr-5">
                    <div className="col-span-2 order-2 lg:order-1">
                        <div><span className="text-body-2 text-gray-300 hidden lg:block">Asus R465FA-EB028 14 inch Laptop</span></div>
                        <div className="flex text-body-2">
                            <div>4.2</div>
                            <div className="text-blue-400">143 دیدگاه</div>
                            <div className="text-blue-400">187 پرسش</div>
                        </div>
                        <div>
                            <ul>
                                <div className="text-h4">ویژگی ها</div>
                                <li className="flex"><p className="text-body-1 text-gray-500">سری پردازنده:</p><p className="text-body1-strong">core i3</p></li>
                                <li className="flex"><p className="text-body-1 text-gray-500">ظرفیت حافظه:</p><p className="text-body1-strong">4 گیگ</p></li>
                                <li className="flex"><p className="text-body-1 text-gray-500">نوع حافظه رم:</p><p className="text-body1-strong">DDR4</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card divide-y-8 bg-gray-100 order-1 py-3 px-5">
                        <div><p className="text-h5">فروشنده</p></div>
                        <div className="flex">
                            <div className="ml-5"><img src="/icons/store.svg"/></div>
                            <div className="flex-1"><p className="text-subtitle">شرکت ایسوز ایران</p></div>
                        </div>
                        <div className="flex">
                            <div className="ml-5"><img src="/icons/verify.svg"/></div>
                            <div className="flex-1"><p className="text-body-2">گارانتی 24 ماه یکپارچه </p></div>
                        </div>
                        <div className="flex">
                            <div className="ml-5"><img src="/icons/check.svg"/></div>
                            <div className="flex-1"><p className="text-subtitle-strong">موجود در انبار دیجی کالا</p></div>
                        </div>
                        <div className="flex">
                            <div><span className="text-caption">قیمت فروشنده</span></div>
                            <div className="mr-auto"><span className="text-h5">35250000</span></div>
                        </div>
                        <button className="primary-button">افزودن به سبد</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;