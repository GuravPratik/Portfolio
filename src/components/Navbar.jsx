import { BiAperture } from "react-icons/bi";
function Navbar() {
  return (
    <nav className="flex p-2 my-2 mx-7 flex-col justify-center items-center sm:justify-around sm:flex-row">
      <div className="cursor-pointer">
        <BiAperture size="2.6rem" />
      </div>

      <div className="my-2 sm:my-0">
        <ul className="flex gap-5">
          <li className="font-medium hover:text-purple-300 cursor-pointer text-lg ">
            About
          </li>
          <li className="font-medium hover:text-purple-300 cursor-pointer text-lg">
            Skills
          </li>
          <li className="font-medium hover:text-purple-300 cursor-pointer text-lg">
            Education
          </li>
          <li className="font-medium hover:text-purple-300 cursor-pointer text-lg">
            Projects
          </li>
        </ul>
      </div>
      <div className="md:p-2">
        <button className="inline-flex items-center bg-transparent font-medium rounded-full border-2 py-2 px-4 focus:outline-none hover:bg-purple-700 hover:duration-500 text-base mt-3 sm:mt-0">
          Github Profile
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

// function Navbar() {
//   return (
//     <header className="text-gray-400 bg-gray-900 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//           <DiCssdeck size="3rem" />
//           <span className="ml-3 text-xl">Portfolio</span>
//         </a>
//         <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-white">First Link</a>
//           <a className="mr-5 hover:text-white">Second Link</a>
//           <a className="mr-5 hover:text-white">Third Link</a>
//           <a className="mr-5 hover:text-white">Fourth Link</a>
//         </nav>

//       </div>
//     </header>
//   );
// }

// export default Navbar;
