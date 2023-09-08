import { BiAperture } from "react-icons/bi";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex sticky z-20 top-0 bg-gray-900 w-full p-2 mb-2  flex-col justify-center items-center sm:justify-around sm:flex-row">
      <div className="cursor-pointer">
        <BiAperture size="2.6rem" />
      </div>

      <div className="my-2 sm:my-0">
        <ul className="flex gap-5">
          <li className="font-medium hover:text-purple-300 cursor-pointer text-lg ">
            <a href="/#about">About</a>
          </li>
          <li className="font-medium hover:text-purple-300 cursor-pointer text-lg">
            <a href="/#skills">Skills</a>
          </li>
          <li className="font-medium hover:text-purple-300 cursor-pointer text-lg">
            <a href="/#project">Projects</a>
          </li>
          <li className="font-medium hover:text-purple-300 cursor-pointer text-lg">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="md:p-2">
        <Link
          target="_blank"
          to="https://github.com/GuravPratik"
          className="inline-flex items-center bg-transparent font-medium rounded-full border-2 py-2 px-4 focus:outline-none hover:bg-purple-700 hover:duration-500 text-base mt-3 sm:mt-0"
        >
          Github Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
