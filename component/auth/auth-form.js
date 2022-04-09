import { useState,useRef } from "react";
import { signIn } from "next-auth/client"
import swal from "sweetalert";
import { useRouter } from "next/router";

const AuthForm=(props)=>{
    const router=useRouter();  
    const [login,setLogin]=useState(true);
    const [alert,setAlert]=useState(false);
    const emailRef=useRef();
    const passwordRef=useRef();

    const signinModeHandler=()=>{!login&&setLogin(true)};
    const signupModeHandler=()=>{login&&setLogin(false)};

    const submitHandler=async(e)=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        if(login){
          const result = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
          });
          !result.error&&swal({title: 'ورود با موفقیت انجام شد',text: '...درحال تغییر مسیر',icon: 'success',timer: 1000,buttons: false}).then(router.replace("/"))
          result.error&&setAlert(result.error)
        }else{
          fetch("/api/auth/signup",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({email,password})
          }).then(e=>e.json()).then(async e=>{
            if(e.status==="success"){
              const result = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password,
              });
              !result.error&&swal({title: 'ثبت نام و ورود با موفقیت انجام شد',text: '...درحال تغییر مسیر',icon: 'success',timer: 1000,buttons: false}).then(router.replace("/"))
            }else{
              setAlert(e.data.message)
            }
          })
        }
    }

    return(
    <div className="p-14 max-w-xl px-2 mx-auto">
      <h1 className="text-h4 flex gap-5">
          <div className={`text-center w-1/2 ${login&&"border-0 border-b border-solid border-red-500"}`} onClick={signinModeHandler}>ورود</div>
          <div className={`text-center w-1/2 ${!login&&"border-0 border-b border-solid border-red-500"}`} onClick={signupModeHandler}>ثبت نام</div>
      </h1>
      <form className="flex flex-col gap-5" onSubmit={submitHandler}>
        <div>
          <label id="email" className="text-body-2">ایمیل</label>
          <input type="text" htmlFor="email" ref={emailRef}/>
        </div>
        <div>
          <label id="password" className="text-body-2">پسورد</label>
          <input type="password" htmlFor="password" ref={passwordRef}/>
        </div>
        {alert&&<p>{alert}</p>}
        <button className="primary-button mt-8">
          {login?"ورود":"ثبت نام"}
        </button>
        <p>با ورود به سایت، شرایط و قوانین را می پذیرم</p>
      </form>
    </div>
    );
}

export default AuthForm;