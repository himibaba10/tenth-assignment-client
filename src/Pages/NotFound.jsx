import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <img
        className="w-full h-[80vh] object-cover"
        src="https://i.imgur.com/BoGov5M.jpg"
      />
      <Link
        to="/"
        className="bg-primaryColor1 hover:bg-primaryColor2 transition duration-300 shadow-xl text-white inline-block mt-10 px-14 py-3 rounded-md"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
