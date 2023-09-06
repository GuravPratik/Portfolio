function Contact() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-3xl mt-1 mb-4 sm:text-4xl sm:font-bold">
        Contact
      </h1>
      <p className="text-lg text-zinc-500 px-3 text-center font-medium w-full">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("click");
        }}
      >
        <div className="border border-indigo-600 shadow-lg shadow-indigo-500/30 rounded-xl max-w-96 flex flex-col justify-center items-center my-4 sm:m-7 sm:p-5">
          <h1 className="my-5 text-2xl font-bold">Email Me 🚀</h1>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-800 p-2 w-80 m-2 rounded-lg border border-gray-300 focus:border-purple-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-800 p-2 w-80 m-2 rounded-lg border border-gray-300 focus:border-purple-500 outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-gray-800 p-2 w-80 m-2 rounded-lg border border-gray-300 focus:border-purple-500 outline-none"
          />
          <textarea
            type="text"
            placeholder="Message"
            className="bg-gray-800 p-2 w-80 m-2 rounded-lg border border-gray-300 focus:border-purple-500 outline-none"
          ></textarea>
          <button
            style={{ width: "96%" }}
            className="my-3 mx-4 rounded-lg text-lg relative bg-gradient-to-r from-fuchsia-600 to-purple-800 text-white font-semibold px-4 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
