import { motion } from "framer-motion";
import { useState } from "react";

export const Contact = () => {
  // Set up state for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  function prevent(e) {
    e.preventDefault(); // Prevent form from refreshing page
    alert("Submit Successful!"); // Display success alert
    console.log("Form Submitted"); // Log to the console

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{}} // Triggers every time the component comes into view
      className="About flex flex-col lg:flex-row m-4 mb-20 justify-around items-center lg:items-start"
    >
      {/* Image Section */}
      <img 
        className="w-full lg:w-[40%] xl:w-[30%] h-auto lg:h-[79vh] rounded-xl mb-8 lg:mb-0 shadow-2xl" 
        src="./about/chef.avif" 
        alt="Chef" 
      />

      {/* Form Section */}
      <form onSubmit={prevent} className="flex flex-col gap-4 w-full lg:w-[60%] xl:w-[50%]">
        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <p className="text-xl md:text-2xl font-medium">Name</p>
          <input 
            className="w-full h-[40px] border-[2px] rounded-lg border-black outline-black px-2" 
            type="text" 
            placeholder="Enter your Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <p className="text-xl md:text-2xl font-medium">Email</p>
          <input 
            className="w-full h-[40px] border-[2px] rounded-lg border-black outline-black px-2" 
            type="email" 
            placeholder="Enter your Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-2">
          <p className="text-xl md:text-2xl font-medium">Message</p>
          <textarea 
            className="w-full border-[2px] h-[150px] md:h-[200px] rounded-lg border-black outline-black px-2 py-2" 
            placeholder="Enter your Message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button className="bg-[#28daf9] text-black rounded-2xl w-36 h-12 m-auto border-black">
          Submit
        </button>
      </form>
    </motion.section>
  );
};
