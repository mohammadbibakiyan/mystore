import { useRef, useState } from "react";
import Portal  from "../layout/portal";

const ProductViews = ({_id,comments}) => {
  const rate=comments.reduce((acc, cur) => {
    return acc+(+cur.rate);
  }, 0)/comments.length;
  const [show,setShow]=useState(false);
  const userName=useRef();
  const userComment=useRef();
  const userRate=useRef();
  const submitViewHandler=(e)=>{
    e.preventDefault();
    const name=userName.current.value;
    const comment=userComment.current.value;
    const rate=userRate.current.value;
    fetch("/api/product-comment",{method:"POST",body:JSON.stringify({name,comment,rate,_id}),headers:{"Content-Type":"Application/json"}}).then((e)=>{
      setShow(false);
    })
  }
  const getRateColor=(rate)=>{
    let rateClass="";
    switch (rate) {
      case "1":
        rateClass="icon-rating-0-2"
        break;
      case "2":
        rateClass="icon-rating-0-2"
        break;
      case "3":
        rateClass="icon-rating-2-3"
        break;
      case "4":
        rateClass="icon-rating-3-4"
        break;
      case "5":
        rateClass="icon-rating-4-5"
        break;
      default:
        break;
    }
    return rateClass
  }

  return (
    <div className="mt-5">
      <p className="text-h5 text-neutral-900 inline border-0 border-b-2 border-primary-500 border-solid">دیدگاه ها</p>

      <div className="grid grid-cols-1 lg:grid-cols-4">

        <div>
          <div className="flex items-center">
            <div className="" style={{WebkitMaskImage: "url(/icons/star.png)",maskImage:"url(/icons/star.png)", width:"100px"}}>
              <div className={`bg-icon-rating-0-2 h-8`} style={{width:`${rate*20}px`}}></div>
            </div>
            <p className="text-neutral-400 mr-2">{comments.length} نفر امتیاز داده اند</p>
          </div>
          <p className="text-neutral-400 mr-2 text-caption mt-4">شما هم درباره این کالا دیدگاه ثبت کنید</p>
          <div className="mt-5 max-w-md lg:max-w-none"><button className="primary-button-outline px-6 py-3" onClick={()=>setShow(true)}>ثبت دیدگاه</button></div>
        </div>

        <div className="lg:col-span-3  mt-8 lg:m-0 pr-5 flex flex-col gap-10">
          {comments.map((e,i)=><article className="flex" key={i}>
            <div className={`bg-${getRateColor(e.rate)} text-caption-strong h-10 p-5 text-white rounded-md flex items-center justify-center ml-8`}>{e.rate}</div>
            <div className="divide-y-2 divide-solid divide-neutral-200 divide-x-0">
              <div className="text-caption text-neutral-400 flex gap-12">
                <p>{new Intl.DateTimeFormat("fa-IR", { month: "long", day: "numeric", year: "numeric" }).format(new Date(e.date))}</p>
                <p>{e.name}</p>
              </div>
              <p className="text-body-1 pt-3 mb-1">{e.comment}</p>
            </div>
          </article>)}
        </div>

      </div>

      {show&&<Portal className="w-full md:w-1/2" closeHandler={()=>setShow(false)}>
        <div className="flex justify-between"><p className="text-h5">دیدگاه شما</p><img src="/icons/close.svg" className="cursor-pointer" onClick={()=>setShow(false)}/></div>
        <p className="text-neutral-500 text-body-2">در مورد سرویس پخت و پز 5 پارچه مدل basic</p>
        
        <form className="mt-16">
          <div className="flex gap-20">
            <label className="text-body1-strong">امتیاز دهید! </label>
            <input type="range" id="range" max={5} min={1} ref={userRate}/>
          </div>
          <p className="text-h5 mt-8">دیدگاه خود را شرح دهید</p>
          <div className="mt-4">
            <label className="text-body-1">نام شما</label>
            <input type="text" ref={userName}/>
          </div>
          <div className="mt-4">
            <label className="text-body-1">متن نظر</label>
            <textarea ref={userComment}/>
          </div>
          <button className="primary-button mt-16" onClick={submitViewHandler}>ثبت دیدگاه</button>
        </form>
      </Portal>}
    </div>
  );
};

export default ProductViews;
