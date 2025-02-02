import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, rating, price, image, type, brand } = product;
  return (
    <div className="bg-gray-200 p-2.5 sm:p-7 rounded-md shadow-lg flex flex-col">
      <img
        className="h-40 sm:h-72 w-full object-contain"
        src={image}
        alt={`Image of ${name}`}
      />
      <h3 className="text-center text-3xl font-medium mt-2">{name}</h3>
      <h4 className="text-center text-2xl font-medium text-primaryColor1 drop-shadow-lg my-2">
        {price}$
      </h4>
      <div className="flex justify-between items-center my-5 flex-1">
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        <div>
          <span className="block">Brand: {brand}</span>
          <span>Type: {type}</span>
        </div>
      </div>
      <Link
        to={`/products/${_id}`}
        className="bg-primaryColor1 w-full rounded py-3 text-white mt-4 block text-center"
      >
        See Details
      </Link>
      <Link
        to={`/products/update/${_id}`}
        className="bg-primaryColor1 w-full rounded py-3 text-white mt-4 block text-center"
      >
        Update Info
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
