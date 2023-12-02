import ProductForm from "../Components/Shared/ProductForm";

const AddProduct = () => {
  return (
    <div className="py-20 bg-gray-200">
      <h1 className="text-center text-4xl font-medium">Add your product</h1>
      <ProductForm objective={"addProduct"} />
    </div>
  );
};

export default AddProduct;
