import Image from "next/image";

const Footer = ()=>{

    return(
        <>
        <footer className="w-full flex flex-col items-center gap-4 py-5  text-white "
        style={{ backgroundColor: "var(--primary-color)" }}>
        <div className="flex flex-wrap items-center justify-center gap-6">
          
        <a
            className="flex items-center gap-2 hover:underline"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            className="filter invert" // This will make the logo white
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={70}
            height={20}
            priority
          />
          </a>
        </div>
        <div className="text-center">
          <p>© 2024 Engineer's Production. All rights reserved.</p>
          <p>
            Contact us:{" "}
            <a
              href="mailto:engr.atherali@gmail.com"
              className="hover:underline"
            >
             engr.atherali@gmail.com
            </a>
          </p>
          <p>Version 1.0.0</p>
        </div>
      </footer>
        
        </>
    )
}

export default Footer