const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-2 text-white h-fit bg-[#252525]">
            <div className="text-[24px]">WIDURA BLOG</div>
            <div>
                <ul className="flex items-center gap-4">
                    <li>Log in</li>
                    <li>Sign up</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;