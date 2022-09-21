import { useEffect,useState } from "react";
import Link from "next/link";
import LoaderLinear from "../../../component/layout/loader-linear";

const Orders = () => {
  const [orders,setOrders]=useState(false);
  useEffect(async()=>{
    const response=await fetch("http://127.0.0.1:3080/api/v1/users/me?fields=orders",{
      credentials:"include",
      headers: { "Content-Type": "application/json" },
    });
    const result=await response.json();
    setOrders(result.user.orders);
  },[]);

  return (
    <div className={`card relative ${!orders&&"p-6"}`}>
      {!orders&&<LoaderLinear/>}
      {orders&&<div>
      <div className="text-h5 text-neutral-900 p-9">تاریخچه سفارشات</div>
      <div className="p-6 flex flex-col gap-6">
        {orders.map(e=><div key={e._id} className="card p-6">
          <div>
            <div className="text-body1-strong">تحویل شده</div>
            <div className="flex gap-8 py-6">
              <p className="text-body-1 text-neutral-500">{new Intl.DateTimeFormat("fa-IR", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                }).format(new Date(e.createdAt))}</p>
              <div className="flex gap-3"><p className="text-body-1 text-neutral-500">کدسفارش</p><p className="text-body1-strong">{e._id.slice(-8)}</p></div>
              <div className="flex gap-3"><p className="text-body-1 text-neutral-500">مبلغ</p><p className="text-body1-strong">{e.totalPrice.toLocaleString()} تومان</p></div>
              <div className="flex gap-3"><p className="text-body-1 text-neutral-500">تخفیف</p><p className="text-body1-strong">{(e.totalPrice-e.payableAmount).toLocaleString()} تومان</p></div>
            </div>
          </div>
          <div className="flex gap-8 overflow-hidden border-0 border-solid border-t border-b border-neutral-200 p-7">
            {e.orderItems.map((e,i)=><Link href={`/product/${e.product._id}`}><img key={i} className="w-28" src={`${e.product.imageCover}`}/></Link>)}
          </div>
          <div className="py-5 px-7 pb-0 flex justify-end items-center text-body2-strong text-secondary-500"><img src="/icons/receipt.svg" className="w-8 h-8"/>مشاهده فاکتور</div>
        </div>)}
      </div>
    </div>} 
    </div>
     
  );
};
export default Orders;
