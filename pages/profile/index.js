import ProductItem from "./../../component/product-page/product-item";

const Profile = () => {
    let items=[
      {
        _id: '62db78ed8d89659afa3aca7b',
        title: 'لپ تاپ 16.1 اینچی اچ‌پی مدل OMEN 16-B0002TX-A',
        titleEn: 'HP OMEN 16-B0002TX-A 16.1 inch laptop',
        price: 34989000,
        priceDiscount: 0,
        quantity: [Object],
        imageCover: 'https://dkstatics-public.digikala.com/digikala-products/8f779ad10f9764dc8faa0fc45ec99f1b33fc774a_1652173130.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
        ratingsAverage: 4.5,
        user: '62d775fdd9e0d2322e43824a'
      },
      {
        _id: '62db7a1f8d89659afa3aca7c',
        title: 'لپ تاپ 15.6 اینچی دل مدل VOSTRO 3510-A',
        titleEn: 'Dell VOSTRO 3510-A 15.6 inch Laptop',
        price: 29300000,
        priceDiscount: 2,
        imageCover: 'https://dkstatics-public.digikala.com/digikala-products/55de996e8456cbe8ea4779746402ff2d6f69a249_1639919404.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
        ratingsAverage: 3.2,
        user: '62d775fdd9e0d2322e43824a'
      },
      {
        _id: '62db72258d89659afa3aca79',
        createdAt: '2022-07-19T23:04:54.142Z',
        title: 'لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Gaming 3-15LHU6',
        titleEn: 'Lenovo IdeaPad Gaming 3-15LHU6 15.6 inch laptop',
        price: 24940000,
        priceDiscount: 0,
        quantity: [Object],
        imageCover: 'https://dkstatics-public.digikala.com/digikala-products/99fff58e2393fee11af1635106176ebc34790419_1638710729.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
        ratingsAverage: 4.5,
        user: '62d775fdd9e0d2322e43824a'
      }
    ];

  return (
    <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto">
      <div className="col-span-12 lg:col-span-2 card p-4 divide-y-2 divide-x-0 divide-solid divide-neutral-300">

        <div className="py-5">
        <div className="flex justify-between items-center">
            <div className="flex">
                <div><img src="https://api.digikala.com/static/files/fd4840b2.svg" className="w-20"/></div>
                <div>
                    <p className="text-h5 text-neutral-800">محمد بی باکیان سنگسر</p>
                    <p className="text-body-1 text-neutral-400">09924966666</p>
                </div>
            </div>
            <img src="/icons/edit.svg" className="w-9"/>
        </div>
        <div>
        <div className="flex justify-between"><p className="text-body-1 text-neutral-800">کیف پول</p><p className="text-subtitle-strong ">12,633تومان</p></div>
        <span className="text-botton-2 text-secondary-500 font-bold">افزایش موجودی &#62;</span> 
        </div>
        </div>
        <div className=" divide-y-2 divide-x-0 divide-solid divide-neutral-100">
            <div className="flex items-center py-3">
                <div><img src="/icons/home.svg" className="w-10 ml-4"/></div>
                <div className="text-neutral-800 text-body1-strong">خلاصه فعالیت ها</div>
            </div>
            <div className="flex items-center py-3">
                <div><img src="/icons/shopping-bag.svg" className="w-10 ml-4"/></div>
                <div className="text-neutral-800 text-body1-strong">سفارش ها</div>
            </div>
            <div className="flex items-center py-3">
                <div><img src="/icons/favorite.svg" className="w-10 ml-4"/></div>
                <div className="text-neutral-800 text-body1-strong">لیست های من</div>
            </div>
            <div className="flex items-center py-3">
                <div><img src="/icons/comment.svg" className="w-10 ml-4"/></div>
                <div className="text-neutral-800 text-body1-strong">دیدگاه ها</div>
            </div>
            <div className="flex items-center py-3">
                <div><img src="/icons/signpost.svg" className="w-10 ml-4"/></div>
                <div className="text-neutral-800 text-body1-strong">آدرس ها</div>
            </div>
            <div className="flex items-center py-3">
                <div><img src="/icons/person.svg" className="w-10 ml-4"/></div>
                <div className="text-neutral-800 text-body1-strong">اطلاعات حساب کاربری</div>
            </div>
            <div className="flex items-center py-3">
                <div><img src="/icons/logout.svg" className="w-10 ml-4"/></div>
                <div className="text-neutral-800 text-body1-strong">خروج</div>
            </div>
        </div>

      </div>
      <div className="col-span-12 lg:col-span-5">
        <div className="card flex justify-between items-center px-5 py-3 mb-4">
            <p className="text-body-2 text-hint-text-caution font-bold">برای افزایش امنیت حساب کاربری خود و جلوگیری از سوءاستفاده، لطفا هویت خود را تایید کنید</p>
            <span className="text-secondary-500 font-bold">تایید هویت &#62;</span>
        </div>
        <div className="card px-5 py-4 mb-4">
            <div className="flex justify-between items-center mb-10"><p className="text-h5 border-0 border-b-2 border-solid border-primary-700">سفارش های من</p><span className="text-secondary-500 font-bold">مشاهده همه &#62;</span></div>
            <div className="flex items-center">
                <div className="flex gap-3 items-center flex-grow"><img src="/images/order/status-processing.JPG" className="w-20"/><div className="text-neutral-700 "><p className="text-subtitle-strong">0 سفارش</p><p className="text-body2-strong">جاری</p></div></div>
                <div className="flex gap-3 items-center flex-grow"><img src="/images/order/status-delivered.JPG" className="w-20"/><div className="text-neutral-700 "><p className="text-subtitle-strong">18 سفارش </p><p className="text-body2-strong">تحویل شد</p></div></div>
                <div className="flex gap-3 items-center flex-grow"><img src="/images/order/status-returned.JPG" className="w-20"/><div className="text-neutral-700 "><p className="text-subtitle-strong">2 سفارش</p><p className="text-body2-strong">مرجوع شده</p></div></div>
            </div>
        </div>
        <div className="card px-5 py-4">
            <div className=" mb-10"><p className="text-h5 border-0 border-b-2 border-solid border-primary-700">خریدهای پرتکرار شما</p></div>
            <div className="grid grid-cols-3">{items.map(e=><ProductItem key={e._id} {...e}/>)}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
