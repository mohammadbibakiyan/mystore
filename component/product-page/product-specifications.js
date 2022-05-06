import { useState } from "react";


const ProductSpecifications=(props)=>{
    const [more,setMore]=useState(false);
    let specifications;
    if(more){
        specifications=props.specifications;
    }else{
        specifications=props.specifications.slice(0,5);
    }
    return(
        <div className="mt-5">
            <div className="py-5 hidden md:block"><h2 className="text-h5 text-neutral-900 inline border-0 border-b-2 border-primary-500 border-solid">مشخصات</h2></div>
            <div className="flex flex-col md:flex-row">
                <p className="text-h5 ml-16">مشخصات</p>
                <div className="flex-grow">
                    {specifications.map((e,i)=><div className="flex items-center text-body-1" key={i}>
                        <div className="w-96">
                            <p className="py-3 px-2 text-neutral-500  ml-6">{e[0]}</p>
                        </div>
                        <div className="border-0 border-b-2 border-solid w-full max-w-4xl border-neutral-100">
                            <p className="color-gray-900">{e[1]}</p>
                        </div>
                    </div>)}
                    {!more&&<span className="text-body-2 text-secondary-700 cursor-pointer" onClick={()=>setMore(true)}>بیشتر&gt;</span>}
                    {more&&<span className="text-body-2 text-secondary-700 cursor-pointer" onClick={()=>setMore(false)}>بستن&gt;</span>}
                </div>
            </div>
        </div>
    )
}
export default ProductSpecifications;