import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Brand = ({ brand = {} }) => {
  const { name, img } = brand;
  const navigate = useNavigate();
  const handleBrandClick = (name) => {
    navigate(`/brands/${name}`);
  };
  return (
    <div
      onClick={() => handleBrandClick(name)}
      className="group bg-primaryColor2 hover:bg-primaryColor1 transition-all duration-500 relative rounded-md overflow-hidden p-8 shadow-md cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-80 group-hover:opacity-30"></div>
      <div className="relative text-center">
        <img
          className="h-40 w-full object-contain mx-auto drop-shadow-md"
          src={img}
          alt={`Image of ${name} brand`}
        />
        <h3 className="group-hover:text-white text-4xl text-primaryColor1 font-semibold transition duration-300 mt-8 drop-shadow-lg">
          {name}
        </h3>
      </div>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
