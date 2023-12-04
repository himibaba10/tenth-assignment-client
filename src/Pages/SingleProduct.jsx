import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const SingleProduct = () => {
  const singleProduct = useLoaderData();
  const { name, type, price, description, image, rating } = singleProduct;
  const { user } = useContext(AuthContext);

  const handleAddToCart = (product) => {
    // eslint-disable-next-line no-unused-vars
    const { _id, ...rest } = product;
    const addedProduct = { ...rest, email: user.email };
    console.log(addedProduct);

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Product added succesfully!");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div
      className={`flex-1 py-10 w-full bg-gradient-to-r from-primaryColor2 from-30% to-white to-[0%]`}
    >
      <div className="flex section gap-10">
        <div className="flex-1">
          <img
            className="h-[500px] object-contain"
            src={image}
            alt={`Image of ${name}`}
          />
        </div>
        <div className="flex-1 mt-10">
          <span className="text-lg">Product &gt; {type}</span>
          <h1 className="mt-5 text-6xl font-semibold mb-3">{name}</h1>
          <div className="flex items-center gap-7">
            <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
            <span className="text-lg font-medium">{rating} / 5</span>
          </div>
          <h2 className="mt-10 text-4xl">Price: {price}$</h2>
          <p className="mt-3 text-lg text-gray-700">{description}</p>
          <button
            className="bg-primaryColor2 px-10 py-3.5 text-white rounded mt-10"
            onClick={() => handleAddToCart(singleProduct)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleProduct;
