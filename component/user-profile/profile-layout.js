import Link from "next/link";
import React from "react";
import { useCallback, useMemo } from "react";

const ProfileLayout=(props)=>{
    return (
        <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto px-7 lg:px-0">
          <div className="col-span-7 lg:col-span-2 card p-4 divide-y-2 divide-x-0 divide-solid divide-neutral-300">
            <div className="py-5">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <div>
                    <img
                      src="https://api.digikala.com/static/files/fd4840b2.svg"
                      className="w-20"
                    />
                  </div>
                  <div>
                    <p className="text-h5 text-neutral-800">
                      کاربر دیجی من
                    </p>
                    <p className="text-body-1 text-neutral-400">
                      09924966440
                    </p>
                  </div>
                </div>
                <img src="/icons/edit.svg" className="w-9" />
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-body-1 text-neutral-800">کیف پول</p>
                  <p className="text-subtitle-strong ">0تومان</p>
                </div>
                <span className="text-botton-2 text-secondary-500 font-bold">
                  افزایش موجودی &#62;
                </span>
              </div>
            </div>
            <div className=" divide-y-2 divide-x-0 divide-solid divide-neutral-100">
              <Link href="/profile/user">
                <div className="flex items-center py-3 cursor-pointer">
                    <div>
                    <img src="/icons/home.svg" className="w-10 ml-4" />
                    </div>
                    <div className="text-neutral-800 text-body1-strong">
                    خلاصه فعالیت ها
                    </div>
                </div>
              </Link>
              <Link href="/profile/user/orders">
              <div className="flex items-center py-3 cursor-pointer">
                <div>
                  <img src="/icons/shopping-bag.svg" className="w-10 ml-4" />
                </div>
                <div className="text-neutral-800 text-body1-strong">سفارش ها</div>
              </div>
              </Link>
              <Link href="/profile/user/lists">
              <div className="flex items-center py-3 cursor-pointer">
                <div>
                  <img src="/icons/favorite.svg" className="w-10 ml-4" />
                </div>
                <div className="text-neutral-800 text-body1-strong">
                  لیست های من
                </div>
              </div>
              </Link>
              <Link href="/profile/user/addresses">
              <div className="flex items-center py-3 cursor-pointer">
                <div>
                  <img src="/icons/signpost.svg" className="w-10 ml-4" />
                </div>
                <div className="text-neutral-800 text-body1-strong">آدرس ها</div>
              </div>
              </Link>
              <Link href="/profile/user/personal-info">
              <div className="flex items-center py-3 cursor-pointer">
                <div>
                  <img src="/icons/person.svg" className="w-10 ml-4" />
                </div>
                <div className="text-neutral-800 text-body1-strong">
                  اطلاعات حساب کاربری
                </div>
              </div>
              </Link>
              <div className="flex items-center py-3 cursor-pointer">
                <div>
                  <img src="/icons/logout.svg" className="w-10 ml-4" />
                </div>
                <div className="text-neutral-800 text-body1-strong">خروج</div>
              </div>
            </div>
          </div>
          <div className="col-span-7 lg:col-span-5">
            {props.children}
          </div>
        </div>
      );
}

export default React.memo(ProfileLayout);