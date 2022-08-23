import Link from "next/link";
import { useRef } from "react";
import { useRouter } from 'next/router'
import { showAlert } from "../../../../lib/showAlert";

const Reset=()=>{
    const formRef=useRef();
    const router=useRouter();

    const changePasswordFormHandler=async(e)=>{
        e.preventDefault();
        const passwordData=Object.fromEntries([...new FormData(formRef.current)]);
        try{
            const response=await fetch(`http://127.0.0.1:3080/api/v1/users/resetPassword/${router.query.passwordResetToken}`,{
                method:"POST",
                body: JSON.stringify(passwordData),
                headers: { "Content-Type": "application/json" },
            });
            const result=await response.json();
            showAlert(result.message,result.status);
            if (result.status !== "success") throw new Error(result.message);
            router.push("/users/login")
        }catch(err){
            console.log(err.message);
        }
    }

    return(
        <div className="p-12 max-w-2xl mx-auto card">
        <div className="relative">
            <img src="/icons/logo2.svg" className="w-60 mb-14 mx-auto"/>
            <a className="cursor-pointer"><Link href="/users/password/forgot"><img src="/icons/arrow-forward2.svg" className="w-10 absolute top-1/2 transform -translate-y-1/2"/></Link></a>
        </div>
        <h1 className="text-h4 text-neutral-900 mt-7">تغییر رمز عبور</h1>
        <p className="text-body-2 text-neutral-700 my-7">رمز عبور باید حداقل ۸ حرفی باشد</p>
        <form onSubmit={changePasswordFormHandler} ref={formRef}>
            <div>
                <label htmlFor="password" className="text-body-2 text-neutral-700 mr-7 require">رمز عبور جدید</label>
                <input type="password" id="password" name="password"/>
            </div>
            <div className="mt-7">
                <label htmlFor="passwordConfirm" className="text-body-2 text-neutral-700 mr-7 require">تکرار رمز عبور جدید</label>
                <input type="password" id="passwordConfirm" name="passwordConfirm"/>
            </div>
            <input type="submit" value="تغییر رمز" className="primary-button mt-14"/>
        </form>
    </div>
    )
};

export default Reset; 