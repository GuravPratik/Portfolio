import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        <h1 className="text-4xl font-semibold text-red-500 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600">
          The page you are looking for could not be found 😢
        </p>
        <Link
          to="/"
          className="mt-4 inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
