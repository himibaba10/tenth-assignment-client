import { useState } from "react";
import { useEffect } from "react";
import Brand from "./Brand";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const Brands = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://tenth-assignment-server-xi.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className={`py-14 ${darkTheme && "bg-blue-950 text-white"}`}>
      <div className="section">
        <h2 className="text-4xl pb-1 border-b-2 border-primaryColor2">
          Our Brands
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {brands.map((brand) => (
            <Brand key={brand._id} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
