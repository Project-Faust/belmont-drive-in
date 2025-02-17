import HomeButton from "./ui/Button";
// const cursorDefault = { cursor:"default" };


export default function Navbar() {
    return (
        <div className="navbar bg-neutral text-neutral-content shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="/">Home</a></li>
                        <li><a href="/nowplaying">Now Playing</a></li>
                        <li><a href="/comingsoon">Coming Soon</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/rules">Rules</a></li>
                        <li><a href="/faq">F.A.Q.</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-center">
                <a
                    className="btn btn-ghost text-xl"
                    href="/"
                >
                    Belmont Drive-In
                </a>
            </div>

            <div className="navbar-end"
            >
                {/* <button className="btn btn-ghost btn-circle"> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg> */}
                {/* </button> */}
                <HomeButton></HomeButton>
            </div>

        </div>
    )
}