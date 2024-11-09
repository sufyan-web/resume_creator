'use client'
import { useState } from "react";
import Footer from "@/components/ui/footer";
import banner from "@/lib/banner.png";
import Image from "next/image";

// to convert generated cv into pdf formate
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Form = () => {
  // Form state to capture the user's input for the CV
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
    experience: "",
    skills: "",
    education: "",
    profileImage: "",
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image change and update state with the image URL
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      // Use FileReader to create a URL for the image
      const imageUrl = URL.createObjectURL(file);
      setFormData({
        ...formData,
        profileImage: imageUrl, // Store the image URL
      });
    }
  };

  // Function to generate and download PDF
  const generatePDF = () => {
    const input = document.getElementById("cv-template"); // The div containing the CV

    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const pdf = new jsPDF("p", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("cv-template.pdf");
      });
    }
  };

  // Reset the form data
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      jobTitle: "",
      experience: "",
      skills: "",
      education: "",
      profileImage: "",
    });
  };

  return (
    <>
      <div className="bg-primary text-white lg:font-bold py-5 flex gap-2 justify-center">
      <Image
              className="filter invert " // This will make the logo white
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={70}
              height={20}
              priority
            />
            <p style={{letterSpacing:"3px"}}> + TypeScript</p>
        </div>
       
      {/* banner */}
      <img
        className="h-auto lg:h-64 w-full"
        src={banner.src} alt="banner" />


      <section className="w-full flex flex-col xl:flex-row items-center justify-around p-2 bg-primary text-white pt-5">

        {/* ******************* Left Section - Form  **********************/}
        <div className="max-w-lg w-full pt-4">

          <form className="space-y-6 mb-10 text-sm sm:text-sm md:text-lg">
            <div>
              <label htmlFor="name" className="block font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md mt-2 bg-white text-gray-900"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md mt-2 bg-white text-gray-900"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-md mt-2 bg-white text-gray-900"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="address" className="block font-medium">address</label>
              <input
                type="string"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 rounded-md mt-2 bg-white text-gray-900"
                placeholder="Enter your address "
              />
            </div>

            <div>
              <label htmlFor="jobTitle" className="block font-medium">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full p-3 rounded-md mt-2 bg-white text-gray-900"
                placeholder="Enter your job title"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block font-medium">Experience</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 rounded-md mt-2 bg-white text-gray-900"
                placeholder="Describe your work experience"
                rows={2}
              />
            </div>

            <div>
              <label htmlFor="skills" className="block font-medium">Skills</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full p-3 rounded-md mt-2 bg-white text-gray-900"
                placeholder="List your skills"
                rows={2}
              />
            </div>

            <div>
              <label htmlFor="education" className="block font-medium">Education</label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full p-3 rounded-md mt-2 bg-white text-gray-900"
                placeholder="Enter your education history"
                rows={2}
              />
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="profileImage" className="block font-medium">Profile Image</label>
              <input
                type="file"
                name="profileImage"
                onChange={handleImageChange}
                className="w-full p-3 rounded-md mt-2 bg-white text-gray-900"
              />
            </div>

          </form>
        </div>

        {/* *********************** Right Section  **********************/}
        <div className=" sm:w-full md:w-full xl:w-1/2 max-w-3xl w-full">
          <div id="cv-template" className="text-sm sm:text-sm md:text-lg border border-gray-300 p-1 md:p-8 rounded-lg shadow-xl bg-white text-gray-900">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">{formData.name || "Ather Ali"}</h2>

            {/* Profile Section with Image and Bio Data */}
            <div className="w-auto flex flex-row items-center">
              {/* Profile Image */}
              <div className="w-32 h-32 md:rounded-full  overflow-hidden border-4 border-blue-600 mb-4 md:mb-0 md:mr-6">
                <img
                  src={formData.profileImage || "https://via.placeholder.com/100"} // Placeholder if no image is uploaded
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Bio Data Section */}
              <div className="text-center md:text-left">
                <p className=" text-gray-600">{formData.jobTitle || "Software Developer"}</p>
                <p className=""><strong>Email:</strong> {formData.email || "engr.ather.93@gmail.com"}</p>
                <p className=""><strong>Phone:</strong> {formData.phone || "+923320145410"}</p>
                <p className=""><strong>Address:</strong> {formData.address || "Provide your address"}</p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Experience</h4>
              <p className="">{formData.experience || "Enter your work experience here."}</p>
            </div>

            {/* Skills Section */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Skills</h4>
              <p className="">{formData.skills || "List your skills here."}</p>
            </div>

            {/* Education Section */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Education</h4>
              <p className="">{formData.education || "Enter your education history here."}</p>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>{formData.address || "Provide your address"}</p>
            </div>
          </div>

          {/* download image */}
          <img
           onClick={generatePDF}
            className="h-60 w-full my-10 rounded-md hover:cursor-pointer"
            src="https://img.freepik.com/premium-photo/free-download-text-words-typography-written-smart-phone-against-blue-background_21336-8034.jpg" alt="banner" />

          {/* Generate PDF Button */}
          <button
            onClick={generatePDF}
            className="w-full mb-10 mx-auto px-6 py-3 btn-color text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            Download PDF
          </button>

          {/* Form Reset Button */}
          <button
            onClick={resetForm}
            className="w-full my-5 mx-auto px-6 py-3 btn-color text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            Reset Form
          </button>

        </div>


      </section>



      <Footer />
    </>
  );
};

export default Form;
