import Link from "next/link";
import { useRef } from "react";
import { showAlert } from "../../../lib/showAlert";

const Forgot=()=>{
    const emailRef=useRef();
    const sendEmailHandler=async (e)=>{
        e.preventDefault();
        try{
            const response=await fetch(`http://127.0.0.1:3080/api/v1/users/forgotPassword`,{
                method:"POST",
                body: JSON.stringify({email:emailRef.current.value}),
                headers: { "Content-Type": "application/json" },
            });
            const result=await response.json();
            showAlert(result.message,result.status);
            if(!result.status==="success") throw new Error(result.message)
        }catch(err){
            console.log(err.message);
        }
    }
    return(
        <div className="p-12 max-w-2xl mx-auto card">
            <div className="relative">
                <img src="/icons/logo2.svg" className="w-60 mb-14 mx-auto"/>
                <a className="cursor-pointer"><Link href="/users/login"><img src="/icons/arrow-forward2.svg" className="w-10 absolute top-1/2 transform -translate-y-1/2"/></Link></a>
            </div>
            <h1 className="text-h4 text-neutral-900">تغییر رمز عبور</h1>
            <p className="text-body-2 text-neutral-700 my-4">برای تغییر رمز عبور، ایمیل خود را وارد کنید.</p>
            <form  onSubmit={sendEmailHandler}>
                <input type="text" ref={emailRef}/>
                <input type="submit" value="تایید" className="primary-button mt-14"/>
            </form>
        </div>
    )
}
export default Forgot;