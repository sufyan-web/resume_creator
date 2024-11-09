import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className=" w-full h-20  bg-primary text-white">
        <nav className=" mx-auto flex justify-between px-8 items-center">
            {/* Logo and Title */}
            <div className="flex items-start gap-3">
                <Image
                    src="https://cdn-icons-png.flaticon.com/512/2788/2788002.png"
                    alt="Resume Generator Logo"
                    width={40}
                    height={50}
                    priority
                />
                <h1 className="text-lg font-semibold mt-2">C.V Generator</h1>
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-6 item-end">
                <li>
                    <Link href="/" legacyBehavior>
                        <a className="px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-base font-medium">
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior>
                        <a className="px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-base font-medium">
                            About
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;
