import Link from "next/link";

const Footer=()=>{
    return(
        <footer className="mt-10">
            <div className="flex justify-between items-center"><img className="w-72" src="/icons/logo2.svg"/><a href="#" ><button className="primary-button bg-white text-neutral-400 text-body-1 border border-solid p-0 px-5"> برگشت به بالا &#94;</button></a></div>
            <div className="flex text-body-2 mt-4 gap-6 text-neutral-700"><p>تلفن پشتیبانی ۰۰۰۰۰۰۰۰ - ۰۲۱</p><p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p></div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 ">
                <div className="mt-8 flex flex-col text-neutral-500 gap-2 text-body-1">
                    <p className="text-neutral-700 text-h5">با دیجی‌من</p>
                    <a href="https://www.digikala.com/mag/newsroom/">اتاق خبر دیجی‌من</a>
                    <a href="/landings/seller-introduction/">فروش در دیجی‌من</a>
                    <a href="https://careers.digikala.com/">فرصت‌های شغلی</a>
                    <a href="/page/contact-us/">تماس با دیجی‌من</a>
                    <a href="https://about.digikala.com/">درباره دیجی‌من</a>
                </div>

                <div className=" mt-8 flex flex-col text-neutral-500 gap-2 text-body-1">
                    <p className="text-neutral-700 text-h5">خدمات مشتریان</p>
                    <a href="https://www.digikala.com/mag/newsroom/">پاسخ به پرسش های متداول</a>
                    <a href="/landings/seller-introduction/">رویه های بازگردان کالا</a>
                    <a href="https://careers.digikala.com/">شرایط استفاده</a>
                    <a href="/page/contact-us/">حریم خصوصی</a>
                    <a href="https://about.digikala.com/">گزارش باگ</a>
                </div>

                <div className=" mt-8 flex-col text-neutral-500 gap-2 text-body-1 hidden md:flex">
                    <p className="text-neutral-700 text-h5">راهنمای خرید از دیجی من</p>
                    <a href="https://www.digikala.com/mag/newsroom/">نحوه ثبت سفارش</a>
                    <a href="/landings/seller-introduction/">رویه ارسال سفارش</a>
                    <a href="https://careers.digikala.com/">شیوه های پرداخت</a>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <div>
                        <h4 className="mb-3 text-h5 text-neutral-700">همراه ما باشید!</h4>
                        <div className="flex justify-between">
                            <img className="w-10 filter grayscale" src="/icons/social-icons/twitter.webp"/>
                            <img className="w-10 filter grayscale" src="/icons/social-icons/instagram.webp"/>
                            <img className="w-10 filter grayscale" src="/icons/social-icons/linkedin.webp"/>
                            <img className="w-10 filter grayscale" src="/icons/social-icons/aparat.webp"/>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h4 className="text-h5 text-neutral-700 mb-3">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h4>
                        <form className="flex">
                          <input type="text" placeholder="ایمیل شما"/>
                          <button type="button" className="px-5 mr-3 bg-neutral-200 rounded-xl text-white text-body-1">ثبت</button>  
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;