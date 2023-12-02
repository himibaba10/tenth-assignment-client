import { useLoaderData } from "react-router-dom";

const SingleBrand = () => {
  const brandName = useLoaderData();
  console.log(brandName);
  return (
    <div>
      <h1>This is a single brand</h1>
    </div>
  );
};

export default SingleBrand;
