import { useState } from "react";
const ProductIntroduction=(props)=>{
    const [more,setMore]=useState(false);
    return(
        <div className="mt-5">
            <article>
                <div className="py-5"><h2 className="text-h5 inline p-2  border-b-2 md:border-solid border-0 border-primary-500">معرفی</h2></div>
                <div className={`text-body-1 text-neutral-800  ${!more&&"line-clamp-2"}`}>{props.introduction}</div>
                {!more&&<span className="text-body-2 text-secondary-500 cursor-pointer" onClick={()=>setMore(true)}>بیشتر&gt;</span>}
                {more&&<span className="text-body-2 text-secondary-500 cursor-pointer" onClick={()=>setMore(false)}>بستن&gt;</span>}
            </article>
        </div>
    )
}
export default ProductIntroduction;