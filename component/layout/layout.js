import Link from "next/link";
import ProfileButton from "./profile-button";
import { useSession } from 'next-auth/client';
import HamburgerMenu from "./hamburger-menu";

const Layout=(props)=>{
    const [session, loading] = useSession();
    return (
        <div className="relative">
        <nav className="flex justify-between items-center p-5">
            <div className="hidden md:block">
                <ul className="flex gap-8 items-center text-body-2">
                    <li className="text-body1-strong"><Link href="/search/category-notebook-netbook-ultrabook">دسته بندی کالا ها</Link></li>
                    <li className="hover:text-red-500"><Link href="/">پرفروش ترین ها</Link></li>
                    <li className="hover:text-red-500"><Link href="/">تخفیف ها و پیشنهادها</Link></li>
                    <li className="hover:text-red-500"><Link href="/">شگفت انگیزها</Link></li>
                    <li className="hover:text-red-500"><Link href="/">سوالی دارید</Link></li>
                </ul>
            </div>

            <div className="block md:hidden">
                <HamburgerMenu/>
            </div>

            <div className="flex gap-5">
                {!session&&<Link href="/users/login"><a className="hover:cursor-pointer"><img src="/icons/login.svg"/></a></Link>}
                {session&&<ProfileButton/>}
                <Link href="/cart"><a className="hover:cursor-pointer"><img src="/icons/shopping-cart.svg"/></a></Link>
            </div>
        </nav>
        {props.children}
        </div>
    )
}

export default Layout;