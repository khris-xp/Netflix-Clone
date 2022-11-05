function Header() {
    return (
        <header>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="/images/logo.png"
                    alt="logo-img"
                    height={100}
                    width={100}
                    className="cursor-pointer object-contain" />
                <ul className="hidden space-x-4 md:flex">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </div>

            <div></div>
        </header>
    )
}

export default Header