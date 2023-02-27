import { useEffect, useState } from "react";
import ProfileLayout from "../../../component/user-profile/profile-layout";
import ProductItem from "./../../../component/product-page/product-item";
import Loader from "../../../component/layout/loader";
import jwt_decode from "jwt-decode";

const Profile = () => {
  const [user, setUser] = useState(null);
  let items = [
    {
      _id: "62db78ed8d89659afa3aca7b",
      title: "لپ تاپ 16.1 اینچی اچ‌پی مدل OMEN 16-B0002TX-A",
      titleEn: "HP OMEN 16-B0002TX-A 16.1 inch laptop",
      price: 34989000,
      priceDiscount: 0,
      quantity: [Object],
      imageCover:
        "https://dkstatics-public.digikala.com/digikala-products/8f779ad10f9764dc8faa0fc45ec99f1b33fc774a_1652173130.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ratingsAverage: 4.5,
      user: "62d775fdd9e0d2322e43824a",
    },
    {
      _id: "62db7a1f8d89659afa3aca7c",
      title: "لپ تاپ 15.6 اینچی دل مدل VOSTRO 3510-A",
      titleEn: "Dell VOSTRO 3510-A 15.6 inch Laptop",
      price: 29300000,
      priceDiscount: 2,
      imageCover:
        "https://dkstatics-public.digikala.com/digikala-products/55de996e8456cbe8ea4779746402ff2d6f69a249_1639919404.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ratingsAverage: 3.2,
      user: "62d775fdd9e0d2322e43824a",
    },
    {
      _id: "62db72258d89659afa3aca79",
      createdAt: "2022-07-19T23:04:54.142Z",
      title: "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Gaming 3-15LHU6",
      titleEn: "Lenovo IdeaPad Gaming 3-15LHU6 15.6 inch laptop",
      price: 24940000,
      priceDiscount: 0,
      quantity: [Object],
      imageCover:
        "https://dkstatics-public.digikala.com/digikala-products/99fff58e2393fee11af1635106176ebc34790419_1638710729.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ratingsAverage: 4.5,
      user: "62d775fdd9e0d2322e43824a",
    },
  ];
  useEffect(async () => {
    const response = await fetch("http://127.0.0.1:3080/api/v1/users/me", {
      credentials: "include",
    });
    const result = await response.json();
    setUser(result.user);
  }, []);

  if (!user) return <Loader />;

  return (
    <>
      <div className="card flex justify-between items-center px-5 py-3 mb-4">
        <p className="text-body-2 text-hint-text-caution font-bold">
          برای افزایش امنیت حساب کاربری خود و جلوگیری از سوءاستفاده، لطفا هویت
          خود را تایید کنید
        </p>
        <span className="text-secondary-500 font-bold">تایید هویت &#62;</span>
      </div>
      <div className="card px-5 py-4 mb-4">
        <div className="flex justify-between items-center mb-10">
          <p className="text-h5 border-0 border-b-2 border-solid border-primary-700">
            سفارش های من
          </p>
          <span className="text-secondary-500 font-bold">مشاهده همه &#62;</span>
        </div>
        <div className="flex items-center">
          <div className="flex gap-3 items-center flex-grow">
            <img src="/images/order/status-processing.JPG" className="w-20" />
            <div className="text-neutral-700 ">
              <p className="text-subtitle-strong">0 سفارش</p>
              <p className="text-body2-strong">جاری</p>
            </div>
          </div>
          <div className="flex gap-3 items-center flex-grow">
            <img src="/images/order/status-delivered.JPG" className="w-20" />
            <div className="text-neutral-700 ">
              <p className="text-subtitle-strong">18 سفارش </p>
              <p className="text-body2-strong">تحویل شد</p>
            </div>
          </div>
          <div className="flex gap-3 items-center flex-grow">
            <img src="/images/order/status-returned.JPG" className="w-20" />
            <div className="text-neutral-700 ">
              <p className="text-subtitle-strong">2 سفارش</p>
              <p className="text-body2-strong">مرجوع شده</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card px-5 py-4">
        <div className=" mb-10">
          <p className="text-h5 border-0 border-b-2 border-solid border-primary-700">
            خریدهای پرتکرار شما
          </p>
        </div>
        <div className="grid grid-cols-3">
          {/* {items.map((e) => (
            <ProductItem key={e._id} {...e} />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  try {
    var decoded = jwt_decode(context.req?.cookies?.jwt);
    if (decoded.role !== "user") throw new Error("دسترسی غیر مجاز");
  } catch (err) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
