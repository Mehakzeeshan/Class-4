import Link from "next/link";

function Header() {
    return(
        <header className="flex  justify-between bg-purple-900 h-20">
            {/* Logo */}
            <div>
                <h2 className="text-3xl font-semibold text-white">Lala's</h2>
            </div>
            {/* Links */}
            <div>
                <nav>
                    <ul className="flex gap-x-4 text-white mt-2 px-3">
                        <li>
                            <Link href="/">Home</Link>
                            </li>
                        <li>
                        <Link href="/about">About</Link>
                        </li>
                        <li>
                        <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>


             {/* Button  */}
        </header>
    )
}

export default Header