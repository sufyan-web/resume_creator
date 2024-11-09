import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <div
            className="w-full h-20 p-4 text-white text-center"
            style={{ backgroundColor: "var(--primary-color)" }} // You can also define this in Tailwind config
        >
            <ul className="flex justify-between items-center space-x-8">
                <li className="flex items-center gap-3 ">
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/2788/2788002.png"
                        alt="Resume Generator Logo"
                        width={40}
                        height={50}
                        priority
                    />
                    <h1 className="xl:text-lg lg:text-lg md:text-md text-sm font-semibold">C.V Generator</h1>
                </li>

                <li className="flex gap-2 xl:text-lg lg:text-lg md:text-md text-md py-5" >
                    <Link href="/about" className= " px-3 py-1 rounded-full hover:bg-blue-600 transition duration-300">
                        About
                    </Link>
                    <Link href="/" className= "px-3 py-1 rounded-full hover:bg-blue-600 transition duration-300">
                        Home
                    </Link>
                </li>
            </ul>

            
        </div>
    );
};

export default Header;
