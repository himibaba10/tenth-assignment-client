import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-primaryColor1 relative">
      <div className="w-full h-full bg-white absolute opacity-10"></div>
      <div className="section text-white flex justify-between items-center">
        <span className="flex-1">Copyright@TenthAssignment,2023</span>
        <div className="flex-1">
          <img className="w-32 mx-auto drop-shadow-2xl" src={logo} />
        </div>
        <div className="flex-1 flex justify-end gap-5 text-3xl">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
