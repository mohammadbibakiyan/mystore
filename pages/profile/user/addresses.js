import ProfileLayout from "../../../component/user-profile/profile-layout";
const Addresses = () => {
  return (
    <ProfileLayout>
      <div className="card px-10">
        <div className="py-7  flex justify-between items-center ">
          <p className="text-h5 border-0 border-b-2 border-solid border-primary-700">آدرس ها</p>
          <button className="text-body1-strong text-button-primary border border-solid border-button-primary px-7 py-5 rounded-xl">ثبت آدرس جدید</button>
        </div>
        <div className="py-7">
          <div className="text-body1-strong text-neutral-700">
            مهدیشهر، خیابان امام بالاتر از سه راه المهدی پلاک 33
          </div>
          <div className="text-neutral-500 text-body-1">
            <div className="flex gap-2 items-center"><img className="w-8 h-8 opacity-50" src="/icons/signpost.svg"></img><span>مهدیشهر</span></div>
            <div className="flex gap-2 items-center"><img className="w-8 h-8 opacity-50" src="/icons/mail.svg"></img><span>3561813383</span></div>
            <div className="flex gap-2 items-center"><img className="w-8 h-8 opacity-50" src="/icons/call.svg"></img><span>09924966440</span></div>
            <div className="flex gap-2 items-center"><img className="w-8 h-8 opacity-50" src="/icons/person.svg"></img><span>محمد بی باکیان</span></div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};
export default Addresses;
