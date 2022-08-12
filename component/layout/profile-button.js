import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutF } from "../../store/slice/auth-slice";

const ProfileButton=()=>{
    const [showDropDown,setShowDropDown]=useState(false);
    const dispatch=useDispatch();
    const auth=useSelector(state=>state.auth);
    const showDropDownToggle=()=>{
        setShowDropDown(prev=>!prev)
    };
    const signOut=()=>{
        dispatch(logoutF());
    }

    return(
        <div onMouseLeave={()=>setShowDropDown(false)}>
            <div className="flex relative cursor-pointer" onClick={showDropDownToggle}><img src="/icons/expend-more.svg" className="w-6"/><img src="/icons/person.svg"/></div>
            <div className={`${showDropDown?"block":"hidden"} absolute left-16 card`}>
                <ul className="w-96 cursor-pointer bg-white">
                    <Link href={`/profile/${auth.role}`}>
                        <li className="flex text-subtitle-strong items-center hover:bg-neutral-100 px-6">
                            <div><img src="/icons/account-circle.svg" className="pl-5"/></div>
                            <div><span>پروفایل کاربر</span></div>
                        </li>
                    </Link>
                    <li className="flex text-subtitle-strong items-center hover:bg-neutral-100 px-6" onClick={()=>signOut()}>
                        <div><img src="/icons/exit.svg" className="pl-5"/></div>
                        <div><span>خروج از حساب کاربری</span></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileButton;