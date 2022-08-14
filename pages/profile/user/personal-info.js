import ProfileLayout from "../../../component/user-profile/profile-layout";

const PersonalInfo=()=>{
    return(
        <ProfileLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 card">
                <div className="lg:p-7 p-5"><p className="text-body-1 text-neutral-500">نام و نام خانوادگی</p><p className="text-subtitle-strong text-neutral-700">محمد بی باکیان سنگسر</p></div>
                <div className="lg:p-7 p-5"><p className="text-body-1 text-neutral-500">کد ملی</p><p className="text-subtitle-strong text-neutral-700">5300052035</p></div>
                <div className="lg:p-7 p-5"><p className="text-body-1 text-neutral-500">شماره موبایل</p><p className="text-subtitle-strong text-neutral-700">09924966440</p></div>
                <div className="lg:p-7 p-5"><p className="text-body-1 text-neutral-500">ایمیل</p><p className="text-subtitle-strong text-neutral-700">mohammadbibakiya@gmail.com</p></div>
                <div className="lg:p-7 p-5"><p className="text-body-1 text-neutral-500">تاریخ تولد</p><p className="text-subtitle-strong text-neutral-700">1379/8/29</p></div>
                <div className="flex items-end justify-end lg:p-7 p-5">
                    <button className="text-body1-strong text-button-primary border border-solid border-button-primary px-7 py-5 rounded-xl">ویرایش مشخصات</button>
                </div>                
            </div>
        </ProfileLayout>
    )
}
export default PersonalInfo;