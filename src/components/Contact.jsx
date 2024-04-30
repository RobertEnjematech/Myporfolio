import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = () => {
    // Your EmailJS Service ID, Template ID, and User ID
    const serviceId = "YOUR_EMAILJS_SERVICE_ID";
    const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
    const userId = "YOUR_EMAILJS_USER_ID";

    // Use the emailjs.send() function to send the email
    emailjs
      .send(serviceId, templateId, { message: "Your message here" }, userId)
      .then((response) => {
        console.log("Email sent!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form method="POST" className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              onClick={sendEmail()}
              className="text-white bg-gradient-to-b from-green-500 to-yellow-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
