import Slider from "react-slick";
import carousel1 from "../../assets/vivoCarousel.jpg";
import carousel2 from "../../assets/iphoneCarousel.jpg";
import carousel3 from "../../assets/realmeCarousel.png";
import carousel4 from "../../assets/samsungCarousel.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} className="overflow-hidden">
        <div>
          <div
            className="bg-cover py-20 sm:py-44"
            style={{ backgroundImage: `url(${carousel1})` }}
          >
            <div className="section">
              <h2 className="text-4xl sm:text-7xl font-light text-gray-600">
                Unleash your beauty
              </h2>
              <h2 className="text-4xl sm:text-7xl font-medium mt-2 mb-8">
                VIVO V15
              </h2>
              <p className="text-xl font-medium text-gray-600">
                Built with high quality material
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="bg-cover py-20 sm:py-44"
            style={{ backgroundImage: `url(${carousel2})` }}
          >
            <div className="section">
              <h2 className="text-4xl sm:text-7xl font-light text-gray-600">
                All Premium
              </h2>
              <h2 className="text-4xl sm:text-7xl font-medium mt-2 mb-8">
                APPLE PRODUCT
              </h2>
              <p className="text-xl font-medium text-gray-600">
                Built with high quality material
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="bg-contain py-20 sm:py-44 bg-no-repeat bg-right"
            style={{ backgroundImage: `url(${carousel3})` }}
          >
            <div className="section">
              <h2 className="text-4xl sm:text-7xl font-light text-gray-600">
                Best in class
              </h2>
              <h2 className="text-4xl sm:text-7xl font-medium mt-2 mb-8">
                REALME
              </h2>
              <p className="text-xl font-medium text-gray-600">
                Glossy finish, bigger battery, etc are amazing
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="bg-contain py-20 sm:py-44 bg-no-repeat bg-right bg-black"
            style={{ backgroundImage: `url(${carousel4})` }}
          >
            <div className="section">
              <h2 className="text-4xl sm:text-7xl font-light text-white">
                Boss of the boss
              </h2>
              <h2 className="text-4xl sm:text-7xl font-medium mt-2 mb-8 text-white">
                SAMSUNG
              </h2>
              <p className="text-xl font-medium text-gray-600">
                Flagship design, flagship diplay, and flagship camera. It&apos;s
                hot!
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
