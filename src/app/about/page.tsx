// about/pages.tsx

import React from "react";
import Head from "next/head";
import Link from "next/link";
const About = () => {
  return (
    <>
      <Head>
        <title>About - Resume Generator</title>
        <meta name="description" content="Learn more about the Resume Generator app" />
      </Head>

      <div className="bg-primary text-white min-h-screen">
        {/* Header Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-semibold mb-4">About the Resume Generator</h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            The Resume Generator is a powerful tool to help you create professional resumes in just a few clicks. Whether you're updating your CV or creating a new one, our tool makes it quick and easy!
          </p>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-800">
          <h2 className="text-3xl font-semibold text-center text-blue-400 mb-6">Features</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Easy-to-Use Interface</h3>
              <p className="text-lg">The user-friendly interface makes it easy to fill in your details and generate your resume instantly.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Instant PDF Download</h3>
              <p className="text-lg">Download your resume as a PDF in just a few clicks, ready to send to potential employers.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <p className="text-md">
                This project uses TypeScript, Tailwind CSS, NEXT.js, and Canva for high performance, scalability, and maintainability, delivering a seamless and efficient development experience with an intuitive user interface.
              </p>
            </div>
          </div>
        </section>

        {/* About the Creator Section */}
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center text-blue-400 mb-6">About the Creator</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed mb-6">
              The Resume Generator was created by a ENGINEER'S PRODUCTON, with the goal of helping job seekers to create a polished resume in less time. this tool was built to make resume creation as easy as possible.
            </p>
            <p className="text-lg font-semibold">Created by: Sufyan Ahmed</p>
            <p>
              Contact us:{" "}
              <a
                href="mailto:engr.atherali@gmail.com"
                className="hover:underline"
              >
                sufiyan033130@gmail.com
              </a></p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gray-800 text-center py-12">
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Get Started</h2>
          <p className="text-lg mb-6">Ready to create your perfect resume? Start now and take the first step towards your next career opportunity!</p>
          <Link href="/resumeForm">
            <button className="inline-block btn-color text-white text-lg px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
              Create Resume
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default About;
