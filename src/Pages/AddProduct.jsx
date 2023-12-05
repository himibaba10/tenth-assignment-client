import { useContext } from "react";
import ProductForm from "../Components/Shared/ProductForm";
import { ThemeContext } from "../providers/ThemeProvider";

const AddProduct = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`py-20 ${
        darkTheme ? "bg-blue-950 text-white" : "bg-gray-200"
      }`}
    >
      <h1 className="text-center text-4xl font-medium">Add your product</h1>
      <ProductForm objective={"addProduct"} />
    </div>
  );
};

export default AddProduct;
