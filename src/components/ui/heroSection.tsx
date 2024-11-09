// components/Hero.tsx

import Link from "next/link"; // Correct import for Link in Next.js
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-between px-6 bg-primary text-white pt-20" style={{ minHeight: "calc(100vh - 5rem)" }}>
      {/* Left Section */}
      <div className="max-w-lg">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          Unlock Your Career Potential with a Professional Resume
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Create a standout resume in minutes using our powerful, easy-to-use resume builder. Whether you're entering the job market or advancing your career, we’ve got you covered.
        </p>

        <Link href="/resumeForm">
          <button className="inline-block btn-color text-white text-lg px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
            Start Your Resume
          </button>
        </Link>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden md:block md:w-1/2">
        <div>
          <Image
            src="https://play-lh.googleusercontent.com/DIlQTjHgkrGQflRN-op4iiziQjl1oDVUYdpjbmW4o8gCtSkxs4YXN1muaiCkf5220Q=w526-h296-rw"
            alt="resume"
            width={400}
            height={300}
            style={{ borderRadius: "30px" }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
