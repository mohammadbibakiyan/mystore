import Link from "next/link";

const Forgot=()=>{
    return(
        <div className="p-12 max-w-2xl mx-auto card">
            <div className="relative">
                <img src="/icons/logo2.svg" className="w-60 mb-14 mx-auto"/>
                <a className="cursor-pointer"><Link href="/users/login"><img src="/icons/arrow-forward2.svg" className="w-10 absolute top-1/2 transform -translate-y-1/2"/></Link></a>
            </div>
            <h1 class="text-h4 text-neutral-900">تغییر رمز عبور</h1>
            <p class="text-body-2 text-neutral-700 my-4">برای تغییر رمز عبور، ایمیل خود را وارد کنید.</p>
            <form>
                <input type="text"/>
                <input type="submit" value="تایید" className="primary-button mt-14"/>
            </form>
        </div>
    )
}
export default Forgot;