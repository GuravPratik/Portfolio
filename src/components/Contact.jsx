import { useState } from "react";
import { toast } from "react-hot-toast";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formDetails, setFormDetails] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  function createPromise(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("inside timeout");
        resolve("Message is successfully send!");
      }, timeout);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formDetails.name || !formDetails.email || !formDetails.message) {
      toast.error("Please fill out all details");
      return;
    }

    setIsLoading(true);
    const result = await createPromise(3000);
    toast.success(result);
    console.log(result);
    setIsLoading(false);
    setFormDetails(initialState);
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  }

  return (
    <div id="contact" className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-3xl mt-1 mb-4 sm:text-4xl sm:font-bold">
        Contact
      </h1>
      <p className="text-lg text-zinc-500 px-3 text-center font-medium w-full">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="border border-indigo-600 shadow-lg shadow-indigo-500/30 rounded-xl max-w-96 flex flex-col justify-center items-center my-4 sm:m-7 sm:p-5">
          <h1 className="my-5 text-2xl font-bold">Email Me 🚀</h1>
          <input
            disabled={isLoading}
            onChange={handleOnChange}
            name="name"
            value={formDetails.name}
            type="text"
            placeholder="Your Name"
            className="bg-gray-800 p-2 w-80 m-2 rounded-lg border border-gray-300 focus:border-purple-500 outline-none"
          />
          <input
            disabled={isLoading}
            onChange={handleOnChange}
            value={formDetails.email}
            name="email"
            type="email"
            placeholder="Your Email"
            className="bg-gray-800 p-2 w-80 m-2 rounded-lg border border-gray-300 focus:border-purple-500 outline-none"
          />
          <input
            disabled={isLoading}
            onChange={handleOnChange}
            value={formDetails.subject}
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-gray-800 p-2 w-80 m-2 rounded-lg border border-gray-300 focus:border-purple-500 outline-none"
          />
          <textarea
            disabled={isLoading}
            onChange={handleOnChange}
            value={formDetails.message}
            name="message"
            type="text"
            placeholder="Message"
            className="bg-gray-800 p-2 w-80 m-2 rounded-lg border border-gray-300 focus:border-purple-500 outline-none"
          ></textarea>
          <button
            disabled={isLoading}
            style={{ width: "96%" }}
            className="my-3 mx-4 rounded-lg text-lg relative bg-gradient-to-r from-fuchsia-600 to-purple-800 text-white font-semibold px-4 py-2 shadow-md transition duration-300 ease-in-out transform"
          >
            {isLoading ? "Sending..." : `Send Message`}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
