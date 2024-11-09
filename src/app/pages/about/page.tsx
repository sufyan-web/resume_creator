// pages/about.tsx

import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Resume Generator</title>
        <meta name="description" content="Learn more about the Resume Generator app." />
      </Head>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">About the Resume Generator</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the Resume Generator! This web application allows users to create and customize their resumes quickly and easily. Whether you're applying for a job, an internship, or just updating your CV, this tool is designed to make the process faster and more intuitive.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Simply fill in the required fields, choose a template, and generate your resume with just a few clicks. You can download it as a PDF or customize it further for your needs.
        </p>
        <div className="text-lg text-gray-700 mb-6">
          <strong>Features:</strong>
          <ul className="list-disc pl-5">
            <li>Customizable templates</li>
            <li>Easy-to-use form interface</li>
            <li>Instant PDF download</li>
            <li>Fast and responsive design</li>
          </ul>
        </div>
        <p className="text-center text-gray-600 mt-8">
          <strong>Created with ❤️ by YourName</strong>
        </p>
      </div>
    </>
  );
};

export default About;
