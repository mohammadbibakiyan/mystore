import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { showAlert } from "../../lib/showAlert";
import  {loginF}  from "./../../store/slice/auth-slice";
import Link from "next/link";

const AuthForm = (props) => {
  const router=useRouter();
  const dispatch=useDispatch();
  const [message,setMessage]=useState("");
  const [login, setLogin] = useState(true);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const signinModeHandler = () => {
    setLogin(true);setMessage("")
  };
  const signupModeHandler = () => {
   setLogin(false);setMessage("")
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (login) {
      try {
        const response = await fetch("http://127.0.0.1:3080/api/v1/users/login", {
          method: "POST",
          credentials:"include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const result=await response.json(); 
        showAlert(result.message,result.status);
        if(result.status!=="success") throw new Error(result.message);
        dispatch(loginF({role:result.data.role}));
        router.replace("/");
      } catch (err) {
        setMessage(err.message)
      }
    } else {
      const firstName = firstNameRef.current.value;
      const lastName = lastNameRef.current.value;
      const passwordConfirm = passwordConfirmRef.current.value;
      try {
        const response = await fetch("http://127.0.0.1:3080/api/v1/users/singup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials:"include",
          body: JSON.stringify({ email, password,firstName,lastName,passwordConfirm }),
        });
        const result=await response.json(); 
        showAlert(result.message,result.status);
        if(result.status!=="success") throw new Error(result.message);
        dispatch(loginF({role:result.data.role}));
        router.replace("/");
      } catch (err) {
        setMessage(err.message)
      }
    }
  };

  return (
    <div className="p-14 max-w-2xl mx-auto card">
      <h1 className="text-h4 flex gap-5 cursor-pointer">
        <div
          className={`text-center w-1/2 ${
            login && "border-0 border-b border-solid border-primary-500"
          }`}
          onClick={signinModeHandler}
        >
          ورود
        </div>
        <div
          className={`text-center w-1/2 ${
            !login && "border-0 border-b border-solid border-primary-500"
          }`}
          onClick={signupModeHandler}
        >
          ثبت نام
        </div>
      </h1>
      <form className="flex flex-col gap-5 mt-6" onSubmit={submitHandler}>
        {!login && (
          <>
            <div>
              <label id="firstName" className="text-body-2">
                نام
              </label>
              <input type="text" htmlFor="firstName" ref={firstNameRef} />
            </div>
            <div>
              <label id="lastName" className="text-body-2">
                نام خانوادگی
              </label>
              <input type="text" htmlFor="lastName" ref={lastNameRef} />
            </div>
          </>
        )}
        <div>
          <label id="email" className="text-body-2">
            ایمیل
          </label>
          <input type="text" htmlFor="email" ref={emailRef} />
        </div>
        <div>
          <label id="password" className="text-body-2">
            پسورد
          </label>
          <input type="password" htmlFor="password" ref={passwordRef} />
        </div>
        {login&&(
          <a className="cursor-pointer"><Link href="/users/password/forgot"><div className="text-button-secondary mt-5 flex font-bold">فراموشی رمز عبور <img src="/icons/arrow-back.svg" className="w-8 p-2"/></div></Link></a>
        )}
        {!login && (
          <div>
            <label id="passwordConfirm" className="text-body-2">
              تایید پسورد
            </label>
            <input
              type="password"
              htmlFor="passwordConfirm"
              ref={passwordConfirmRef}
            />
          </div>
        )}
        <p className="text-body-2 text-red-700 h-8">{message}</p>
        <button className="primary-button">{login ? "ورود" : "ثبت نام"}</button>
        <p>با ورود به سایت، شرایط و قوانین را می پذیرم.</p>
      </form>
    </div>
  );
};

export default AuthForm;
