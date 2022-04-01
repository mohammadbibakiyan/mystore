import Link from "next/link";

const Layout=(props)=>{
    return (
        <>
        <nav className="flex justify-between items-center p-5">
            <div className="hidden md:block">
                <ul className="flex gap-8 items-center text-body-2">
                    <li className="text-body1-strong">دسته بندی کالا ها</li>
                    <li className="hover:text-red-500"><Link href="/">پرفروش ترین ها</Link></li>
                    <li className="hover:text-red-500"><Link href="/">تخفیف ها و پیشنهادها</Link></li>
                    <li className="hover:text-red-500"><Link href="/">شگفت انگیزها</Link></li>
                    <li className="hover:text-red-500"><Link href="/">سوالی دارید</Link></li>
                </ul>
            </div>

            <div className="block md:hidden">
                <img src="/icons/hamburger-menu.svg"/>
            </div>

            <div className="flex gap-5">
                <Link href="users/login"><a className="hover:cursor-pointer"><img src="/icons/login.svg"/></a></Link>
                <Link href="cart"><a className="hover:cursor-pointer"><img src="/icons/shopping-cart.svg"/></a></Link>
            </div>
        </nav>
        {props.children}
        </>
    )
}

export default Layout;