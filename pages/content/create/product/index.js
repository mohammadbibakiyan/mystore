const createProduct = () => {
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
        <div className="py-10 max-w-screen-xl mx-auto px-12">
          <div className="divide-y-0 divide-x divide-solid divide-x-reverse ">
            <span className="text-h5 pl-2 text-neutral-700"> درج محصول </span>
            <span className="text-body2-strong text-neutral-500 pr-2">
              اطلاعات محصول تان را در این صفحه وارد کنید
            </span>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <section>
              <h2 className="text-h5 inline-block">گام اول: انتخاب گروه کالا</h2>
              <div className="p-8">
              <select  id="divisionsSelect">
                <option className="px-8 py-6 rounded-xl text-body-2" value="" data-select2-id="110">دسته‌بندی کالا را انتخاب کنید</option>
                <option className="px-8 py-6 rounded-xl text-body-2" value="8588" data-select2-id="111">لپ تاپ</option>
              </select>
              </div>
            </section>
            <section>
              <h2 className="text-h5">گام دوم: درج اطلاعا کالا</h2>
              <div className="p-8">
                <div className="rounded-2xl p-8 text-caption" style={{backgroundColor:"#f3fbfd"}}>
                  <p>&#9673; گروه کالایی انتخابی شما <b>لپ تاپ</b> و تنوع مجاز برای این گروه کالایی <b>رنگ</b> است.</p>
                  <p>&#9673; ابعاد بسته‌بندی گروه کالایی <b>لپ تاپ</b> بر اساس <b>محصول</b> است. شما بایستی برای <b>محصول</b> خود در همین گام ابعاد بسته‌بندی وارد کنید.</p>
                  <p><b>تنوع رنگ:</b> تنوع رنگ برای کالاهایی استفاده می‌شود که ظاهر مشابه دارند اما در رنگ‌های مختلف فروخته می‌شوند. از این تنوع برای کالاهایی مثل گوشی موبایل استفاده می‌شود که طبقه‌بندی و فروش آن‌ها با استفاده از رنگ‌های مختلف ساده‌تر است. توجه داشته باشید که می‌توانید برای هر رنگ، قیمتی متفاوت درج کنید.</p>
                </div>
                <div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-h5">گام سوم: درج ویژگی های کالا</h2>
              <div></div>
            </section>
            <section>
              <h2 className="text-h5">گام چهارم: بارگذاری تصاویر</h2>
              <div></div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default createProduct;
