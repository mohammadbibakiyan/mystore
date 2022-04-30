import Link from "next/link";

const NotFoundPage=()=>{
    return(
        <div>
            <img src="/images/404/404.png" className="w-full max-w-3xl mx-auto"/>
            <div className="text-center">
                <h2 className="text-h4">صفحه مورد نظر پیدا نشد</h2>
                <Link href="/">
                    <a className="text-button-2 text-secondary-500"><span className="ml-5">صفحه اصلی</span><span>&gt;</span></a>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage;