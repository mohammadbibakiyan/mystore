import { useEffect } from "react";
import Slider from "./../component/public/slider";
import ProductSlider from "../component/product-slider";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Slider items={["https://dkstatics-public.digikala.com/digikala-adservice-banners/a33c90bdb94080f97467c7be09bb38180e076c4e_1650096979.jpg?x-oss-process=image/quality,q_95","https://dkstatics-public.digikala.com/digikala-adservice-banners/c530056cb6b38c530515bf05aaaecb071b17b6af_1650368059.jpg?x-oss-process=image/quality,q_95","https://dkstatics-public.digikala.com/digikala-adservice-banners/fe9ce7ae05f4f4596b93de8397f3707e6e55914b_1650458623.jpg?x-oss-process=image/quality,q_95"]}/>
      <div className="lg:px-6 max-w-screen-2xl mx-auto">
        <div className="mt-10 px-5 py-3 grid grid-cols-4 lg:grid-cols-8 text-caption-strong">
          <div className="flex flex-col items-center">
            <img src="/images/home/digi-get.png" className="w-20"/>
            <span>دیجی من جت</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/home/digi-style.png" className="w-20"/>
            <span>دیجی استایل</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/home/digi-pay.png" className="w-20"/>
            <span>دیجی پی</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/home/digi-mehr.png" className="w-20"/>
            <span>دیجی من مهر</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/home/mission.png" className="w-20"/>
            <span>ماموریت</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/home/digi-plus.png" className="w-20"/>
            <span>دیجی پلاس</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/home/digi-club.png" className="w-20"/>
            <span>دیجی کلاب</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 bg-neutral-200 rounded-full h-20 flex justify-center items-center">
              <img src="/icons/more-horizantaly.svg" className="w-14"/>
            </div>
            <span>بیشتر</span>
          </div>
        </div>
        <ProductSlider/>
      </div>
    </div>
  )
}
 