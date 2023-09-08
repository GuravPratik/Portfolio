import { Link } from "react-router-dom";
import Typing from "./Typing";
function About() {
  return (
    <div
      id="about"
      className="flex flex-col tablet:flex-row tablet:justify-around tablet:m-28 tablet:flex-wrap"
    >
      <div className="py-3 px-4 flex flex-col justify-center items-center tablet:justify-start tablet:items-start tablet:w-[50rem]">
        <h1 className="text-center tablet:text-start font-bold text-4xl">
          Hi, I am
          <br />
          <span>Pratik Gurav</span>
        </h1>
        <h2 className="flex justify-start font-semibold text-xl my-4">
          I am a
          <span className="pl-2 text-purple-700">
            <Typing />
          </span>
        </h2>
        <p className="text-zinc-500 font-medium p-2 text-center mb-2 text-lg tablet:p-0 tablet:text-left">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
        <Link
          target="_blank"
          to="https://drive.google.com/file/d/19-czpQo3AL3Rd-dTBjRhjta0O-QkNt3X/view?usp=sharing"
          className="w-60 my-4 text-center text-lg relative bg-gradient-to-r from-fuchsia-600 to-purple-800 text-white font-semibold tablet:px-6 table:py-3 px-5 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          style={{ borderRadius: "18px" }}
        >
          Check Resume
        </Link>
      </div>
      <div className="order-first tablet:order-last flex justify-center items-center tablet:w-[20rem]">
        <img
          src="/developer.png"
          alt="Profile-Pic"
          className="w-56 h-56 my-6 tablet:my-0 tablet:w-full tablet:h-full"
        />
      </div>
    </div>
  );
}
export default About;

// import Typing from "./Typing";

// function About() {
//   return (
//     <div className="flex flex-col tablet:flex-row tablet:justify-around tablet:m-28 tablet:flex-wrap">
//       <div className="py-3 px-4 flex flex-col justify-center items-center tablet:justify-start tablet:items-start tablet:w-1/2">
//         <h1 className="text-center tablet:text-start font-bold text-4xl">
//           Hi, I am
//           <br />
//           <span>Pratik Gurav</span>
//         </h1>
//         <h2 className="flex justify-start font-semibold text-xl my-4">
//           I am a
//           <span className="pl-2 text-purple-700">
//             <Typing />
//           </span>
//         </h2>
//         <p className="text-zinc-500 font-medium p-2 mb-2 text-lg tablet:p-0 tablet:w-[35rem]">
//           I am a motivated and versatile individual, always eager to take on new
//           challenges. With a passion for learning I am dedicated to delivering
//           high-quality results. With a positive attitude and a growth mindset, I
//           am ready to make a meaningful contribution and achieve great things.
//         </p>
//         <button
//           className="w-60 my-4 text-lg relative bg-gradient-to-r from-fuchsia-600 to-purple-800 text-white font-semibold tablet:px-6 table:py-3 px-4 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
//           style={{ borderRadius: "18px" }}
//         >
//           Check Resume
//         </button>
//       </div>
//       <div className="order-first tablet:order-last flex justify-center items-center tablet:w-1/2">
//         <img
//           src="/developer.png"
//           alt="Profile-Pic"
//           className="w-56 h-56 my-6 tablet:my-0 tablet:w-60"
//         />
//       </div>
//     </div>
//   );
// }
// // h-56	height: 14rem; /* 224px */
// export default About;
