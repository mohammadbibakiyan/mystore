// import Link from "next/Link"

const sellerProfile = () => {
  return (
    <>
      <header>
        <div className="px-12 flex justify-between items-center">
          <h2 className="text-h2">مرکز فروشندگان</h2>
          <h1>
            <img src="/icons/logo2.svg" className="w-64" />
          </h1>
        </div>
      </header>
      <div style={{ backgroundColor: "#f5f7fa" }}>
        <div className="grid grid-cols-12 py-10 max-w-screen-xl mx-auto gap-10">
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-10 ">
            <div className="w-full p-6 flex flex-col items-center bg-white rounded-2xl">
              <div className="p-3 w-24 bg-hint-object-caution my-6 h-24 rounded-full flex items-center justify-center">
                <img src="/icons/person.svg" />
              </div>
              <h2 className="text-h5 text-center mt-8 mb-12 text-neutral-800">
                دیجی من
              </h2>
              <div className="flex w-full gap-2">
                <div className="flex flex-col justify-center items-center flex-grow h-20 card">
                  <img src="/icons/chat.svg" className="w-10 opacity-40" />
                  <p>پرسش ها</p>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow h-20 card relative">
                  <img src="/icons/mail.svg" className="w-10 opacity-40" />
                  <p>پیام ها</p>
                  <span className="absolute bg-primary-500 w-8 h-8 top-0 right-0 text-center align-middle text-white rounded-full">
                    70
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow h-20 card">
                  <img src="/icons/person.svg" className="w-10 opacity-40" />
                  <p>پروفایل</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white text-neutral-500 p-8">
              <div>
                <h2 className="text-h4 ">امتیاز عملکرد شما</h2>
              </div>
              <div className="text-neutral-600">
                <div className="mt-12 mb-8 flex justify-center">
                  <img src="/icons/star.svg" className="w-8" />
                  <img src="/icons/star.svg" className="w-8" />
                  <img src="/icons/star.svg" className="w-8" />
                  <img src="/icons/star.svg" className="w-8" />
                  <img src="/icons/star.svg" className="w-8" />
                </div>
                <div className="text-h5 mb-16 text-center">
                  عضویت از 10 ماه، 1 روز پیش
                </div>
                <div className="flex w-full divide-x-reverse divide-x divide-neutral-100 divide-solid divide-y-0">
                  <div className="flex-grow p-2">
                    <div className="text-center font-bold">
                      تاخیر
                      <br />
                      در ارسال
                    </div>
                    <div className="bg-neutral-200 text-h2 text-center  text-primary-700 rounded-md">
                      %100
                    </div>
                  </div>
                  <div className="flex-grow p-2">
                    <div className="text-center font-bold">
                      لغو
                      <br />
                      سفارش
                    </div>
                    <div className="bg-neutral-200 text-h2 text-center  text-primary-700 rounded-md">
                      %100
                    </div>
                  </div>
                  <div className="flex-grow p-2">
                    <div className="text-center font-bold">
                      بازگشت کالا
                      <br />
                      از مشتری
                    </div>
                    <div className="bg-neutral-200 text-h2 text-center  text-primary-700 rounded-md">
                      %100
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-body-1">
                  <div className="flex justify-between">
                    <p>رضایت خرید مشتری از کالا</p>
                    <p>%0</p>
                  </div>
                  <div className="rounded-full bg-neutral-200 h-3 overflow-hidden">
                    <div className="bg-primary-700 w-1 h-full"></div>
                  </div>
                  <div>از 0 رای</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div></div>
            <div className="flex w-full gap-10">
                <div className="relative flex-grow w-8 p-8 bg-white rounded-2xl text-h5"><h2>افزودن محصول جدید</h2><div className="absolute -left-10 top-4 text-white rounded-2xl w-20 h-20 bg-secondary-500 center">+</div></div>
                <div className="flex-grow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sellerProfile;
