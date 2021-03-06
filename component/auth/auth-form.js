import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { showAlert } from "../../lib/showAlert";

const AuthForm = (props) => {
  const router=useRouter();
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
        router.replace("/");
      } catch (err) {
        setMessage(err.message)
      }
    }
  };

  return (
    <div className="p-14 max-w-xl px-2 mx-auto">
      <h1 className="text-h4 flex gap-5 cursor-pointer">
        <div
          className={`text-center w-1/2 ${
            login && "border-0 border-b border-solid border-primary-500"
          }`}
          onClick={signinModeHandler}
        >
          ????????
        </div>
        <div
          className={`text-center w-1/2 ${
            !login && "border-0 border-b border-solid border-primary-500"
          }`}
          onClick={signupModeHandler}
        >
          ?????? ??????
        </div>
      </h1>
      <form className="flex flex-col gap-5 mt-6" onSubmit={submitHandler}>
        {!login && (
          <>
            <div>
              <label id="firstName" className="text-body-2">
                ??????
              </label>
              <input type="text" htmlFor="firstName" ref={firstNameRef} />
            </div>
            <div>
              <label id="lastName" className="text-body-2">
                ?????? ????????????????
              </label>
              <input type="text" htmlFor="lastName" ref={lastNameRef} />
            </div>
          </>
        )}
        <div>
          <label id="email" className="text-body-2">
            ??????????
          </label>
          <input type="text" htmlFor="email" ref={emailRef} />
        </div>
        <div>
          <label id="password" className="text-body-2">
            ??????????
          </label>
          <input type="password" htmlFor="password" ref={passwordRef} />
        </div>
        {!login && (
          <div>
            <label id="passwordConfirm" className="text-body-2">
              ?????????? ??????????
            </label>
            <input
              type="password"
              htmlFor="passwordConfirm"
              ref={passwordConfirmRef}
            />
          </div>
        )}
        <p className="text-body-2 text-red-700 h-8">{message}</p>
        <button className="primary-button">{login ? "????????" : "?????? ??????"}</button>
        <p>???? ???????? ???? ?????????? ?????????? ?? ???????????? ???? ???? ??????????.</p>
      </form>
    </div>
  );
};

export default AuthForm;
