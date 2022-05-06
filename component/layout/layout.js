import Link from "next/link";
import { useSession } from 'next-auth/client';
import {useState} from "react";
import HamburgerMenu from "./hamburger-menu";
import ProfileButton from "./profile-button";

const Layout=(props)=>{
    const [session, loading] = useSession();
    const [inputSearchValue,setInputSearchValue]=useState("");
    return (
        <>

            <div className="block md:hidden">
                <HamburgerMenu/>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex items-center flex-grow">
                    <Link href="/"><a className="hidden md:inline cursor-pointer"><img src="/icons/logo2.svg" alt="logo" className="w-64"/></a></Link>
                    <div className="w-full max-w-5xl relative">
                        <img src="/icons/search.svg" className="w-10 opacity-50 absolute mt-5"/>
                        {inputSearchValue&&<img src="/icons/close.svg" onClick={()=>setInputSearchValue("")} className="absolute left-2 mt-6 opacity-50 w-7 border border-solid border-neutral-900 rounded-3xl"/>}
                        <input type="text" placeholder="جستجو" value={inputSearchValue} onChange={(e)=>{setInputSearchValue(e.target.value)}} className="pr-10"/>
                    </div>
                </div>
                
                <div className="flex gap-5">
                    {!session&&<Link href="/users/login"><a className="hover:cursor-pointer"><img src="/icons/login.svg"/></a></Link>}
                    {session&&<ProfileButton/>}
                    <Link href="/checkout/cart"><a className="hover:cursor-pointer"><img src="/icons/shopping-cart.svg"/></a></Link>
                </div> 
            </div>

            <nav>
                <div className="flex justify-between items-center p-5">
                    <div className="hidden md:block">
                        <ul className="flex gap-8 items-center text-body-2">
                            <li className="text-body1-strong"><Link href="/search/category-notebook-netbook-ultrabook">دسته بندی کالا ها</Link></li>
                            <li className="hover:text-primary-500"><Link href="/">پرفروش ترین ها</Link></li>
                            <li className="hover:text-primary-500"><Link href="/">تخفیف ها و پیشنهادها</Link></li>
                            <li className="hover:text-primary-500"><Link href="/">شگفت انگیزها</Link></li>
                            <li className="hover:text-primary-500"><Link href="/">سوالی دارید</Link></li>
                        </ul>
                    </div>

                    
                </div>
            </nav>

            {props.children}
        </>
    )
}

export default Layout;