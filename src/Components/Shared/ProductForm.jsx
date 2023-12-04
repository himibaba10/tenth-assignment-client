import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ProductForm = ({ objective, product }) => {
  const [rating, setRating] = useState(0);

  const {
    _id,
    name,
    brand,
    type,
    price,
    image,
    rating: rate,
    description,
  } = product;

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name?.value;
    const brand = form.brand?.value;
    const type = form.type?.value;
    const price = form.price?.value;
    const image = form.imageURL?.value;
    const description = form.description?.value;
    const product = { name, brand, type, price, image, rate, description };

    if (objective === "addProduct") {
      fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then(() => {
          toast("New Product added!");
          form.reset();
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      fetch(`http://localhost:5000/product/update/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast("Product updated!");
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div className="section mt-10">
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <input
          className="p-3 rounded placeholder:text-primaryColor2 text-primaryColor1 focus:outline-primaryColor1"
          type="text"
          name="name"
          defaultValue={name || ""}
          placeholder="Product Name"
          required
        />
        <select
          className="p-3 rounded text-primaryColor2 focus:text-primaryColor1 focus:outline-primaryColor1"
          name="brand"
          defaultValue={brand || ""}
          required
        >
          <option value="">Select a brand</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="Oneplus">Oneplus</option>
          <option value="Google">Google</option>
          <option value="Realme">Realme</option>
          <option value="Vivo">Vivo</option>
        </select>
        <select
          className="p-3 rounded text-primaryColor2 focus:text-primaryColor1 focus:outline-primaryColor1"
          name="type"
          defaultValue={type || ""}
          required
        >
          <option value="">Select a Type</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Laptop">Laptop</option>
          <option value="Watch">Watch</option>
        </select>
        <input
          className="p-3 rounded placeholder:text-primaryColor2 text-primaryColor1 focus:outline-primaryColor1"
          type="text"
          name="price"
          defaultValue={price || ""}
          placeholder="Product Price in Dollar"
          required
        />
        <input
          className="p-3 rounded placeholder:text-primaryColor2 text-primaryColor1 focus:outline-primaryColor1"
          type="text"
          name="imageURL"
          defaultValue={image || ""}
          placeholder="Product Image URL"
          required
        />
        <div className="flex items-center gap-1">
          <span className="text-primaryColor1">Rating: </span>
          <Rating
            style={{ maxWidth: 180 }}
            value={rate || rating}
            onChange={setRating}
          />
        </div>
        <textarea
          className="p-3 rounded placeholder:text-primaryColor2 text-primaryColor1 focus:outline-primaryColor1 col-span-2"
          name="description"
          defaultValue={description || ""}
          rows="5"
          placeholder="Write short description"
        ></textarea>
        <input
          className="col-span-2 bg-primaryColor2 hover:bg-[rgb(90,205,99)] transition duration-300 py-3 rounded shadow-md text-white font-medium text-lg cursor-pointer"
          type="submit"
          value="Add product"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

ProductForm.propTypes = {
  objective: PropTypes.string,
  product: PropTypes.object,
};

export default ProductForm;
