const Companies = () => {
  return (
    <div className="section py-10">
      <h2 className="text-4xl pb-1 border-b-2 border-primaryColor2">
        Companies Support Us
      </h2>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 items-center gap-10">
        <img
          className="h-44 hover:grayscale transition duration-300 w-full object-contain"
          src="https://i.imgur.com/41MwkgM.png"
        />
        <img
          className="h-44 hover:grayscale transition duration-300 w-full object-contain"
          src="https://i.imgur.com/m1SXe7e.png"
        />
        <img
          className="h-44 hover:grayscale transition duration-300 w-full object-contain"
          src="https://i.imgur.com/LBgCKDI.png"
        />
        <img
          className="h-56 hover:grayscale transition duration-300 w-full object-contain"
          src="https://i.imgur.com/tbzsaVF.png"
        />
      </div>
    </div>
  );
};

export default Companies;
