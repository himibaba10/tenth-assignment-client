import { useState } from "react";
import { useEffect } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="section py-14">
      <h2 className="text-4xl pb-1 border-b-2 border-primaryColor2">
        Our Brands
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
        {brands.map((brand) => (
          <Brand key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
