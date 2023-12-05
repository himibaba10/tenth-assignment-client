import { useLoaderData } from "react-router-dom";
import ProductForm from "../Components/Shared/ProductForm";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const UpdateProduct = () => {
  const { darkTheme } = useContext(ThemeContext);
  const product = useLoaderData();
  return (
    <div
      className={`py-20 ${
        darkTheme ? "bg-blue-950 text-white" : "bg-gray-200"
      }`}
    >
      <h1 className="text-center text-4xl font-medium">Update your product</h1>
      <ProductForm objective={"updateProduct"} product={product} />
    </div>
  );
};

export default UpdateProduct;
