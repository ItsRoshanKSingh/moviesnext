import Search from "@/components/search"
import { getCart } from "@/db/cart"
import Link from "next/link"

const Logo = "RK"
const userProfile = ""
const newUser = false

const Navbar = async () => {

    const cart = await getCart()

    return (
        <div className={`navbar`}>

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/posters" className="">Poster</Link></li>
                        <li>
                            <Link href="/movies" className="">Movies</Link>
                            <ul className="p-2">
                                <li><Link href="/" className="">Genre</Link></li>
                                <li><Link href="/" className="">Latest</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/series" className="">Tv Series</Link></li>
                    </ul>
                </div>

                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    {Logo}
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/posters" className="">Poster</Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Movies</summary>
                            <ul className="p-2">
                                <li><Link href="/" className="">Genre</Link></li>
                                <li><Link href="/" className="">Latest</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="/series" className="">Tv Series</Link></li>
                </ul>
            </div>



            {/* User Profile */}
            <div className="navbar-end">

                <div className="mr-2">
                    <Search />
                </div>

                {/* Bell Icon */}
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>

                <div className="dropdown dropdown-end p-5">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userProfile} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href={"/profile"} className="justify-between">
                                Profile
                                {newUser && <span className="badge">New</span>}
                            </Link>
                        </li>
                        <li>
                            <Link href={"/setting"} className="justify-between">
                                Settings
                            </Link>
                        </li>
                        <li><Link href="/" className="">Logout</Link></li>
                    </ul>
                </div>

                {/* Cart */}
                <div className="flex-none">
                    <div className="dropdown dropdown-end">

                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cart?.size}</span>
                            </div>
                        </label>

                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{cart?.size} Items</span>
                                <span className="text-info">Subtotal: ${cart?.subtotal}</span>
                                <div className="card-actions">
                                    <Link href="/cart" className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar