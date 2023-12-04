import PropTypes from "prop-types";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = ({ title, description }) => {
  return (
    <div className="overflow-hidden relative bg-gray-200 p-10 rounded-md flex flex-col">
      <FaQuoteRight className="text-8xl absolute -top-5 -right-4 text-gray-300" />
      <p className="relative text-lg text-gray-800 flex-1">
        &quot;{description}&quot;
      </p>
      <h1 className="self-end text-primaryColor1 drop-shadow-md text-2xl font-medium mt-4">
        - {title}
      </h1>
    </div>
  );
};

Testimonial.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Testimonial;
