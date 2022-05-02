const ProductViews = () => {
  const rate=5;
  return (
    <>
      <p className="text-h5">دیدگاه ها</p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex">
            <div className="flex relative" style={{WebkitMaskImage: "url(/icons/star.png)",maskImage:"url(/icons/star.svg)"}}>
              <div className={`bg-icon-rating-0-2 h-8 mr-3`} style={{width:`${rate*20}px`}}></div>
            </div>
            <p className="text-neutral-400 mr-2">6716 نفر امتیاز داده اند</p>
          </div>

          <article className="md:col-span-2 flex mt-8 md:m-0">
            <div className="bg-icon-rating-4-5 text-caption-strong h-10 p-5 text-white rounded-md flex items-center justify-center ml-8">5.0</div>
            <div className="divide-y-2 divide-solid divide-neutral-200 px-5 divide-x-0">
              <div className="text-caption text-neutral-400 flex">
                <p>۱۲ اردیبهشت ۱۳۹۹</p>
                <div className="w-7 h-7"></div>
                <p>حمید رضا کریمی لنگرگ</p>
              </div>
              <p className="text-body-1 pt-3 mb-1">من هم این رو از جایی دیگه خریداری کردم .ولی واقعا دقت قلم بالایی داره و نسبت به قیمتش واقعا خوبه.همچنین کیفیت عالی ای داره و نسبت به سایزش وزنش خیلی سبک و مناسبه.در کل واقعا ازش راضیم و هم برای مبتدی ها خوبه هم برای حرفه ای ها</p>
            </div>
          </article>

        </div>
    </>
  );
};

export default ProductViews;
