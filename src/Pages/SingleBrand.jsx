import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../Components/SingleBrand/ProductCard";
import Banner from "../Components/Home/Banner";

const SingleBrand = () => {
  const { name } = useParams();
  const products = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="my-20 section">
        <h1 className="text-center text-4xl font-medium">
          Available products from {name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {products.length ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div className="text-center col-span-3">
              <h2 className="text-4xl text-red-500 font-bold mb-8">
                No Products Found
              </h2>
              <Link
                className="bg-primaryColor2 text-white px-10 py-3 rounded"
                to="/"
              >
                Go to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBrand;
