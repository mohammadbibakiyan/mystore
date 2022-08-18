import { useEffect, useRef, useState } from "react";
import Portal from "../../../component/layout/portal";
import LoaderLinear from "./../../../component/layout/loader-linear";

const PersonalInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const formRef = useRef();
  useEffect(async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:3080/api/v1/users/me?fields=firstName,lastName,mobile,email,nationalIdentityNumber,birthday",
        { credentials: "include" }
      );
      const result = await response.json();
      if (result.user) {
        setUserInfo(result.user);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const yearOption=[];
  const dayOption=[];
  for (let i = 1300; i <1399; i++) {
    yearOption.push(<option value={i}>{i}</option>);
  };
  for(let i=1;i<=31;i++){
    dayOption.push(<option value={i}>{i}</option>);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-7 gap-6 card relative">
      {loading&&<LoaderLinear />}
      {!loading&&<><div className="">
        <p className="text-body-1 text-neutral-500">نام و نام خانوادگی</p>
        <p className="text-subtitle-strong text-neutral-700">
          {userInfo?.firstName} {userInfo?.lastName}
        </p>
      </div>
      <div className="">
        <p className="text-body-1 text-neutral-500">کد ملی</p>
        <p className="text-subtitle-strong text-neutral-700">{userInfo?.nationalIdentityNumber||"اطلاعاتی در این خصوص وجود ندارد"}</p>
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
        <p className="text-subtitle-strong text-neutral-700">{userInfo.birthday||"اطلاعاتی در این خصوص وجود ندارد"}</p>
      </div>
      <div className="flex items-end justify-end ">
        <button onClick={()=>setOpenModal(true)} className="text-body1-strong text-button-primary border border-solid border-button-primary px-7 py-5 rounded-xl">
          ویرایش مشخصات
        </button>
      </div></>}
      {openModal&&<Portal closeHandler={()=>setOpenModal(false)} className="w-full lg:w-1/3 md:w-1/2">
        <div className="flex justify-between mb-8">
              <p className="text-h5">ویرایش اطلاعات حساب کاربری</p>
              <img
                src="/icons/close.svg"
                className="cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
        </div>
        <form className="grid gap-6 text-body-1" ref={formRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="require" id="firstName" >نام</label>
                <input type="text" htmlFor="firstName" name="firstName"/>
              </div>
              <div>
                <label className="require" id="lastName">نام خانوادگی</label>
                <input type="text" htmlFor="lastName" name="lastName"/>
              </div>
            </div>
            <div>
                <label className="require" id="nationalIdentityNumber" >کدملی</label>
                <input type="text" htmlFor="nationalIdentityNumber" name="nationalIdentityNumber"/>
            </div>
            <div>
                <label className="require" id="mobile" >شماره موبایل</label>
                <input type="text" htmlFor="mobile" name="mobile"/>
            </div>
            <div>
                <label className="require" id="email" >ایمیل</label>
                <input type="text" htmlFor="email" name="email"/>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="require" id="birthYear" >سال</label>
                    <select id="birthMonth" name="birthMonth">
                        {yearOption}
                    </select>
                </div> 
                <div>
                    <label className="require" id="birthMonth" >ماه</label>
                    <select id="birthMonth" name="birthMonth">
                        <option value="01">فروردین</option>
                        <option value="02">اردیبهشت</option>
                        <option value="03">خرداد</option>
                        <option value="04">تیر</option>
                        <option value="05">مرداد</option>
                        <option value="06">شهریور</option>
                        <option value="07">مهر</option>
                        <option value="08">آبان</option>
                        <option value="09">آذر</option>
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
            <input type="submit" className="primary-button mt-6" value="ثبت آدرس"/>
        </form>
      </Portal>}
    </div>
  );
};
export default PersonalInfo;
