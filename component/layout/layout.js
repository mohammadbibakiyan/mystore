import Link from "next/link";
import {useState} from "react";
import { useSelector } from "react-redux";
import { addFromLocalStorage } from "./../../store/slice/cart-slice";
import { setAuthFromLocalStorage } from "./../../store/slice/auth-slice";
import { useDispatch } from "react-redux";
import {useEffect} from "react";

import HamburgerMenu from "./hamburger-menu";
import ProfileButton from "./profile-button";
import Footer from "./footer";


let first=true
const Layout=(props)=>{
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart);
    const auth=useSelector(state=>state.auth);
    const [inputSearchValue,setInputSearchValue]=useState("");

    useEffect(()=>{
      if(first){
        const cartStorage=localStorage.getItem("cart");
        const authStorage=localStorage.getItem("auth");
        const cart=JSON.parse(cartStorage);
        const auth=JSON.parse(authStorage);
        if(cart?.products.length>0){
            dispatch(addFromLocalStorage(cart));
        }
        if(auth){
            dispatch(setAuthFromLocalStorage(auth));
        }
        first=false;
}
    },[]);

    return (
        <>
            <div className="block md:hidden">
                <HamburgerMenu/>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex items-center flex-grow py-5">
                    <Link href="/"><a className="hidden md:inline cursor-pointer"><img src="/icons/logo2.svg" alt="logo" className="w-60 ml-8"/></a></Link>
                    <div className="w-full max-w-5xl relative">
                        <img src="/icons/search.svg" className="w-10 opacity-50 absolute mt-5"/>
                        {inputSearchValue&&<img src="/icons/close.svg" onClick={()=>setInputSearchValue("")} className="absolute left-2 mt-6 opacity-50 w-7 border border-solid border-neutral-900 rounded-3xl"/>}
                        <input type="text" placeholder="جستجو" value={inputSearchValue} onChange={(e)=>{setInputSearchValue(e.target.value)}} className="pr-10"/>
                    </div>
                </div>
                
                <div className="flex gap-5">
                    {!auth.auth&&<Link href="/users/login"><a className="hover:cursor-pointer"><img src="/icons/login.svg"/></a></Link>}
                    {auth.auth&&<ProfileButton/>}
                    <Link href="/checkout/cart"><a className="hover:cursor-pointer relative"><img src="/icons/shopping-cart.svg" />{cart?.products.length>0&&<span className="absolute -right-3 top-5 w-7 h-7 flex justify-center items-end rounded-lg bg-primary-700 text-white">{cart.products.length}</span>}</a></Link>
                </div> 
            </div>

            <nav>
                <div className="flex justify-between items-center py-5">
                    <div className="hidden md:block">
                        <ul className="flex gap-8 items-center text-body-2">
                            <li className="text-body1-strong cursor-pointer"><Link href="/search/category-notebook-netbook-ultrabook"><div className="flex"><img src="/icons/hamburger-menu.svg" className="w-6"/>دسته بندی کالا ها</div></Link></li>
                            <li className="hover:text-primary-500"><Link href="/">پرفروش ترین ها</Link></li>
                            <li className="hover:text-primary-500"><Link href="/">تخفیف ها و پیشنهادها</Link></li>
                            <li className="hover:text-primary-500"><Link href="/">شگفت انگیزها</Link></li>
                            <li className="hover:text-primary-500"><Link href="/">سوالی دارید</Link></li>
                        </ul>
                    </div> 
                </div>
            </nav>

            {props.children}

            <Footer/>
        </>
    )
}

export default Layout;