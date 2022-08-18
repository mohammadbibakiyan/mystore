import { useEffect,useRef,useState } from "react";

import LoaderLinear from "./../../../component/layout/loader-linear";
import Portal from "./../../../component/layout/portal";
import { showAlert } from "../../../lib/showAlert";

const Addresses = () => {
  const [userInfo,setUserInfo]=useState(null);
  const [loading,setLoading]=useState(true);
  const [openModal,setOpenModal]=useState(false);
  const formRef=useRef();
  useEffect(async()=>{
    try{const response=await fetch("http://127.0.0.1:3080/api/v1/users/me?fields=postalAddress",{
      credentials:"include"
    });
    const result=await response.json();
    if(result.user.postalAddress) {setUserInfo(result.user.postalAddress);}
    setLoading(false);
  }catch(err){
      console.log(err);
    }
  },[]);

  const submitAddressHandler=async(e)=>{
    e.preventDefault(); 
    const addressData=Object.fromEntries([...new FormData(formRef.current)]);
    console.log(addressData);
    try{
      const response = await fetch(
        `http://127.0.0.1:3080/api/v1/users/updateMe`,
        {
          method: "PATCH",
          body: JSON.stringify({postalAddress:{...addressData}}),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const result = await response.json();
      console.log(result);
      showAlert(result.message, result.status);
      if (result.status !== "success") throw new Error(result.message);
      setOpenModal(false);
    }catch(err){
      console.log(err.message);
    }
  }

  return (
      <div className="card px-10 py-7 relative">
        {loading&&<LoaderLinear/>}
        {!loading&&(<><div className="pb-7  flex justify-between items-center ">
          <p className="text-h5 border-0 border-b-2 border-solid border-primary-700">آدرس </p>
          <button onClick={()=>setOpenModal(true)} className="text-body1-strong text-button-primary border border-solid border-button-primary px-7 py-5 rounded-xl">ویرایش و ثبت آدرس</button>
        </div>
        {!loading&&!userInfo&&<p>آدرسی برای شما ثبت نشده است</p>}
        {userInfo&&<div className="pt-7">
          <div className="text-body1-strong text-neutral-700">{userInfo?.address}</div>
          <div className="text-neutral-500 text-body-1">
            <div className="flex gap-2 items-center"><img className="w-8 h-8 opacity-50" src="/icons/signpost.svg"></img><span>{userInfo?.city}</span></div>
            <div className="flex gap-2 items-center"><img className="w-8 h-8 opacity-50" src="/icons/mail.svg"></img><span>{userInfo?.postalCode}</span></div>
            <div className="flex gap-2 items-center"><img className="w-8 h-8 opacity-50" src="/icons/call.svg"></img><span>{userInfo?.mobile}</span></div>
            <div className="flex gap-2 items-center"><img className="w-8 h-8 opacity-50" src="/icons/person.svg"></img><span>{userInfo?.firstName} {userInfo?.lastName}</span></div>
          </div>
        </div>}</>)}
        {openModal&&<Portal className="w-full lg:w-1/3 md:w-1/2"closeHandler={() => setOpenModal(false)}>
          <div className="flex justify-between mb-8">
              <p className="text-h5">جزئیات آدرس</p>
              <img
                src="/icons/close.svg"
                className="cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
          </div>
          <form className="grid gap-6 text-body-1" ref={formRef} onSubmit={submitAddressHandler}>
            <div>
              <label className="require" id="address">نشانی پستی</label>
              <input type="text" htmlFor="address" name="address"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="require" id="state" >استان</label>
                <input type="text" htmlFor="state" name="state"/>
              </div>
              <div>
                <label className="require" id="city">شهر</label>
                <input type="text" htmlFor="city" name="city"/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="require" id="buildingNumber">پلاک</label>
                <input type="text" htmlFor="buildingNumber" name="buildingNumber"/>
              </div>
              <div>
                <label id="unit">واحد</label>
                <input type="text" htmlFor="unit" name="unit"/>
              </div>
              <div className="col-span-2">
                <label className="require" id="postalCode">کدپستی</label>
                <input type="text" htmlFor="postalCode" name="postalCode"/>
              </div>
            </div>
            <p className="mr-2 text-body1-strong">اطلاعات گیرنده سفارش</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="require" id="firstName">نام گیرنده</label>
                <input type="text" htmlFor="firstName" name="firstName"/>
              </div>
              <div>
                <label className="require" id="lastName">نام خانوادگی گیرنده</label>
                <input type="text" htmlFor="lastName" name="lastName"/>
              </div>
              <div>
                <label className="require" id="mobile">شماره موبایل</label>
                <input type="text" htmlFor="mobile" name="mobile"/>
              </div>
            </div>
            <input type="submit" className="primary-button mt-6" value="ثبت آدرس"/>
          </form>
        </Portal>}
      </div>
  );
};

export default Addresses;
