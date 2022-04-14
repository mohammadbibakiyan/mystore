const CartPage=()=>{
    return(
        <section className="grid grid-cols-12 gap-3 p-5">
            <div className="col-span-12 lg:col-span-9 p-6 card">
                <div className="py-3">
                    <p className="text-h5">سبد خرید شما</p>
                    <p className="text-body-2 text-gray-500">2 کالا</p>
                </div>
                <div className="grid grid-cols-6 gap-10">
                    <div ><img src="./images/cart1.jpg" alt="laptop"/></div>
                    <div className="col-span-5">
                        <h3 className="text-body1-strong mb-10">المنت دستگاه پرس پلاستیک کد 70</h3>
                        <div className="text-gray-500 text-body-2 flex flex-col gap-5">
                            <div className="flex items-center">
                                <div className="ml-3"><img src="./icons/verify.svg" className="w-7 fill-red-500"/></div>
                                <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
                            </div>
                            <div className="flex items-center">
                                <div className="ml-3"><img src="./icons/store.svg" className="w-7"/></div>
                                <p >تامین گر</p>
                            </div>
                            <div className="flex items-center">
                                <div className="ml-3"><img src="./icons/check.svg" className="w-7"/></div>
                                <p >موجود در انبار دیجی کالا</p>
                            </div>
                            <div className="flex items-center">
                                <div className="ml-3"><img src="./icons/truck.svg" className="w-7"/></div>
                                <p>ارسال دیجی کالا</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-h5 text-red-500 flex justify-evenly border border-solid border-gray-300 rounded-2xl">
                        <button>+</button>
                        <span>1</span>
                        <button>-</button>
                    </div>
                    <div className="col-span-5 text-h5"><span>قیمت</span><span>140000 تومان</span></div>
                </div>
            </div>
            <div className="p-5 col-span-12 lg:col-span-3 card">
                <div className="flex justify-between">
                    <p className="text-body2-strong">جمع سبد خرید</p>
                    <p className="text-subtitle-strong">140000تومان</p>
                </div>
                <p className="text-caption">هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود</p>
                <button className="primary-button">ادامه</button>
            </div>
        </section>
    )
}

export default CartPage;