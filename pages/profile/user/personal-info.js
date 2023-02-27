import { useEffect, useRef, useState } from "react";

import Portal from "../../../component/layout/portal";
import LoaderLinear from "./../../../component/layout/loader-linear";
import { showAlert } from "../../../lib/showAlert";

const PersonalInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const formRef = useRef();
  
  useEffect(async () => {
    let isSubscribed = true;
    try {
      const response = await fetch(
        "http://127.0.0.1:3080/api/v1/users/me?fields=first_name,last_name,mobile,email,national_identity_number,birthday_iso",
        { credentials: "include" }
      );
      const result = await response.json();
      if (result.user) {
        setUserInfo(result.user);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      if (isSubscribed) {
        setUserInfo(null);
        setLoading(false);
    }}
    return () => {(isSubscribed = false)}
  }, []);

  const submitPersonalInfoHandler=async (e)=>{
    e.preventDefault();
    const personalInfo=Object.fromEntries([...new FormData(formRef.current)]);
    const birthday_iso=`${personalInfo.birthYear}/${personalInfo.birthMonth}/${personalInfo.birthDay}`
    delete personalInfo.birthYear,delete personalInfo.birthDay,delete personalInfo.birthMonth;
    try{
      const response = await fetch(
        `http://127.0.0.1:3080/api/v1/users/updateMe`,
        {
          method: "PATCH",
          body: JSON.stringify({...personalInfo,birthday_iso}),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const result = await response.json();

      showAlert(result.message, result.status);
      if (result.status !== "success") throw new Error(result.message);
      setOpenModal(false);
    }catch(err){
      console.log(err.message);
    }
  };

  const yearOption=[];
  const dayOption=[];

  for (let i = 1300; i <1399; i++) {
    yearOption.push(<option key={i} value={i}>{i}</option>);
  };
  for(let i=1;i<=31;i++){
    dayOption.push(<option key={i} value={i}>{i}</option>);
  };
  console.log(userInfo);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-7 gap-6 card relative">
      {loading&&<LoaderLinear />}
      {!loading&&<><div className="">
        <p className="text-body-1 text-neutral-500">نام و نام خانوادگی</p>
        <p className="text-subtitle-strong text-neutral-700">
          {userInfo?.first_name} {userInfo?.last_name}
        </p>
      </div>
      <div className="">
        <p className="text-body-1 text-neutral-500">کد ملی</p>
        <p className="text-subtitle-strong text-neutral-700">{userInfo?.national_identity_number||"اطلاعاتی در این خصوص وجود ندارد"}</p>
      </div>
      <div className="">
        <p className="text-body-1 text-neutral-500">شماره موبایل</p>
        <p className="text-subtitle-strong text-neutral-700">{userInfo?.mobile||"اطلاعاتی در این خصوص وجود ندارد"}</p>
      </div>
      <div className="">
        <p className="text-body-1 text-neutral-500">ایمیل</p>
        <p className="text-subtitle-strong text-neutral-700">
          {userInfo.email}
        </p>
      </div>
      <div className="">
        <p className="text-body-1 text-neutral-500">تاریخ تولد</p>
        <p className="text-subtitle-strong text-neutral-700">{userInfo?.birthday_iso||"اطلاعاتی در این خصوص وجود ندارد"}</p>
      </div>
      <div className="flex items-end justify-end ">
        <button onClick={()=>setOpenModal(true)} className="text-body1-strong text-button-primary border border-solid border-button-primary px-7 py-5 rounded-xl">
          ویرایش مشخصات
        </button>
      </div>
      </>}
      {openModal&&<Portal closeHandler={()=>setOpenModal(false)} className="w-full lg:w-1/3 md:w-1/2">
        <div className="flex justify-between mb-8">
              <p className="text-h5">ویرایش اطلاعات حساب کاربری</p>
              <img
                src="/icons/close.svg"
                className="cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
        </div>
        <form className="grid gap-6 text-body-1" ref={formRef} onSubmit={submitPersonalInfoHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="require" id="firstName" >نام</label>
                <input type="text" htmlFor="firstName" name="first_name" disabled defaultValue={userInfo.first_name}/>
              </div>
              <div>
                <label className="require" id="lastName">نام خانوادگی</label>
                <input type="text" htmlFor="lastName" name="last_name" disabled defaultValue={userInfo.last_name}/>
              </div>
            </div>
            <div>
                <label className="require" id="nationalIdentityNumber" >کدملی</label>
                <input type="text" htmlFor="nationalIdentityNumber" name="national_identity_number" defaultValue={userInfo.national_identity_number}/>
            </div>
            <div>
                <label className="require" id="mobile" >شماره موبایل</label>
                <input type="text" htmlFor="mobile" name="mobile" defaultValue={userInfo.mobile}/>
            </div>
            <div>
                <label className="require" id="email" >ایمیل</label>
                <input type="text" htmlFor="email" name="email" disabled defaultValue={userInfo.email}/>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="require" id="birthYear" >سال</label>
                    <select id="birthYear" name="birthYear">
                        {yearOption}
                    </select>
                </div> 
                <div>
                    <label className="require" id="birthMonth" >ماه</label>
                    <select id="birthMonth" name="birthMonth">
                        <option value="1">فروردین</option>
                        <option value="2">اردیبهشت</option>
                        <option value="3">خرداد</option>
                        <option value="4">تیر</option>
                        <option value="5">مرداد</option>
                        <option value="6">شهریور</option>
                        <option value="7">مهر</option>
                        <option value="8">آبان</option>
                        <option value="9">آذر</option>
                        <option value="10">دی</option>
                        <option value="11">بهمن</option>
                        <option value="12">اسفند</option>
                    </select>
                </div> 
                <div>
                    <label className="require" id="birthDay" >روز</label>
                    <select id="birthDay" name="birthDay">
                        {dayOption}
                    </select>
                </div> 
            </div>          
            <input type="submit" className="primary-button mt-6" value="ثبت اطلاعات"/>
        </form>
      </Portal>}
    </div>
  );
};
export default PersonalInfo;
