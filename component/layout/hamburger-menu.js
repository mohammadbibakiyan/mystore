import { useState } from "react";

const HamburgerMenu=()=>{
    const [show,setShow]=useState(false);
    const showHandler=()=>{
        setShow(prev=>!prev)
    }
    const showHandler2=(e)=>{
        if(e.target===document.getElementById("overlay")){
            setShow(false);
        }
    }
    return(
        <div className="">
            <img src="/icons/hamburger-menu.svg" onClick={showHandler}/>
            <div id="overlay" onClick={showHandler2} className={`h-full w-full absolute right-0 top-0 ${show&&"block"} z-50 ${!show&&"hidden"}`}>
                <div id="item" className={`max-w-xl bg-white overflow-y-scroll w-96 h-full `}>
                    <img src="/icons/logo.svg" />
                    <details className="text-subtitle-strong px-8 text-neutral-700">
                        <summary className=" h-20 text">لپ تاپ</summary>
                        <p className="px-8 h-20 ">دل</p> 
                        <p className="px-8 h-20 ">ایسوز</p> 
                        <p className="px-8 h-20 ">اچ پی</p> 
                        <p className="px-8 h-20 ">اپل</p> 
                        <p className="px-8 h-20 ">لنوو</p> 
                    </details>   
                    <details className="text-subtitle-strong px-8 text-neutral-700">
                        <summary className=" h-20 text">گوشی موبایل</summary>
                        <p className="px-8 h-20 ">سامسونگ</p> 
                        <p className="px-8 h-20 ">هوآوی</p> 
                        <p className="px-8 h-20 ">اپل</p> 
                        <p className="px-8 h-20 ">شیائومی</p> 
                        <p className="px-8 h-20 ">آنر</p> 
                        <p className="px-8 h-20 ">نوکیا</p> 
                    </details>   
                    <details className="text-subtitle-strong px-8 text-neutral-700">
                        <summary className=" h-20 text">لوازم جانبی گوشی</summary>
                        <p className="px-8 h-20 ">کیف و کاورگوشی</p> 
                        <p className="px-8 h-20 ">پاور بانک</p> 
                        <p className="px-8 h-20 ">پایه نگهدارنده</p> 
                    </details>   
                    <details className="text-subtitle-strong px-8 text-neutral-700">
                        <summary className=" h-20 text">کامپیوتر و تجهیزات جانبی</summary>
                        <p className="px-8 h-20 ">تجهیزات مخصوص بازی</p> 
                        <p className="px-8 h-20 ">مانیتور</p> 
                        <p className="px-8 h-20 ">کیس های اسمبل شده</p> 
                        <p className="px-8 h-20 ">قطعات داخلی کامپیوتر</p> 
                    </details>   
                </div>
            </div>
        </div>
    )
}
export default HamburgerMenu;