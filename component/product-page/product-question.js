const ProductQuestion=(props)=>{
    return(
        <div className="mt-5">
        <p className="text-h5 text-neutral-900 inline border-0 border-b-2 border-primary-500 border-solid">پرسش ها</p>
  
        <div className="grid grid-cols-1 lg:grid-cols-4">
  
          <div>
            <p className="text-neutral-400 mr-2 text-caption mt-4">شما هم درباره این کالا پرسش ثبت کنید</p>
            <div className="mt-5 max-w-md lg:max-w-none"><button className="primary-button-outline px-6 py-3">ثبت پرسش</button></div>
          </div>
  
          <div className="lg:col-span-3  mt-8 lg:m-0 pr-5 flex flex-col gap-10">
            <article>
              <div className="flex"><span><img src="/icons/question.svg" className="w-10"/></span><p className="text-subtitle">سلام میشه روش یک ssd دیگه هم گذاشت</p></div>
              <div className="mt-4 mr-10"><button className="text-button-secondary text-button-2">ثبت پاسخ &#62;</button></div>
            </article>
            <article>
              <div className="flex"><span><img src="/icons/question.svg" className="w-10"/></span><p className="text-subtitle">Ssd رو ننوشتید که چند هست؟</p></div>
              <div><div className="mt-4 text-neutral-600 flex"><p className="text-caption ml-4">پاسخ</p><p className="text-body-1">فقظ یک ترابایت ssd داره و hdd نداره</p></div><div className="mr-10"><p className="text-caption text-neutral-400">حسین مقری</p></div></div>
              <div className="mt-4 mr-10"><button className="text-button-secondary text-button-2">ثبت پاسخ جدید &#62;</button></div>
            </article>
          </div>
  
        </div>
      </div>
    )
}
export default ProductQuestion;