const Companies = () => {
  return (
    <div className="py-32 bg-slate-200">
      <div className="section">
        <h2 className="text-4xl pb-1 border-b-2 border-primaryColor2">
          Companies Support Us
        </h2>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 items-center gap-2 sm:gap-10">
          <img
            className="h-20 sm:h-44 hover:grayscale transition duration-300 w-full object-contain"
            src="https://i.imgur.com/41MwkgM.png"
          />
          <img
            className="h-20 sm:h-44 hover:grayscale transition duration-300 w-full object-contain"
            src="https://i.imgur.com/m1SXe7e.png"
          />
          <img
            className="h-20 sm:h-44 hover:grayscale transition duration-300 w-full object-contain"
            src="https://i.imgur.com/LBgCKDI.png"
          />
          <img
            className="h-28 sm:h-56 hover:grayscale transition duration-300 w-full object-contain"
            src="https://i.imgur.com/tbzsaVF.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
