const Login = () => {
  return (
    <div className="p-14 max-w-xl px-2 mx-auto">
      <form className="flex flex-col gap-5">
        <h1 className="text-h4 flex gap-5">
            <div>ورود</div>
            <div>ثبت نام</div>
        </h1>

        <div>
          <label id="email" className="text-body-2">ایمیل</label>
          <input type="text" htmlFor="email" />
        </div>

        <div>
          <label id="password" className="text-body-2">پسورد</label>
          <input type="password" htmlFor="password" />
        </div>

        <button className="primary-button mt-8">ورود</button>

        <p>با ورود به سایت، شرایط و قوانین را می پذیرم</p>
      </form>
    </div>
  );
};

export default Login;
