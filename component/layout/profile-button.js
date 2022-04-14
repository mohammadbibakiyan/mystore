import Link from "next/link";

import { useState } from "react";
import { signOut } from "next-auth/client"


const ProfileButton=()=>{
    const [showDropDown,setShowDropDown]=useState(false);
    const showDropDownToggle=()=>{
        setShowDropDown(prev=>!prev)
    };

    return(
        <div onMouseLeave={()=>setShowDropDown(false)}>
            <div className="flex relative cursor-pointer" onClick={showDropDownToggle}><img src="/icons/expand_more.svg" className="w-6"/><img src="/icons/person.svg"/></div>
            <div className={`${showDropDown?"block":"hidden"} absolute left-16 card`}>
                <ul className="w-96 cursor-pointer bg-white">
                    <Link href="/profile">
                        <li className="flex text-subtitle-strong items-center hover:bg-gray-100 px-6">
                            <div><img src="/icons/account_circle.svg" className="pl-5"/></div>
                            <div><span>پروفایل کاربر</span></div>
                        </li>
                    </Link>
                    <li className="flex text-subtitle-strong items-center hover:bg-gray-100 px-6" onClick={()=>signOut()}>
                        <div><img src="/icons/exit.svg" className="pl-5"/></div>
                        <div><span>خروج از حساب کاربری</span></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileButton;