import { useState,useRef } from "react";

const AuthForm=(props)=>{
    const [login,setLogin]=useState(true);
    const emailRef=useRef();
    const passwordRef=useRef();

    const signinModeHandler=()=>{!login&&setLogin(true)}
    const signupModeHandler=()=>{login&&setLogin(false)}
    const submitHandler=(e)=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        fetch("/api/auth/signup",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({email,password})
        }).then(e=>e.json()).then(e=>console.log(e))
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
        <button className="primary-button mt-8">ورود</button>
        <p>با ورود به سایت، شرایط و قوانین را می پذیرم</p>
      </form>
    </div>
    );
}

export default AuthForm;