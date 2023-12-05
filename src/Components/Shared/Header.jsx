"use client";
import { Navbar, Carousel } from "keep-react";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ThemeContext } from "../../providers/ThemeProvider";

const Header = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  const { darkTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navLinks = (
    <>
      <NavLink
        className="relative hover:text-primaryColor2 transition before:content-[''] before:block before:h-[2px] before:w-[0%] hover:before:w-[100%] before:transition-all before:absolute before:bottom-0 before:bg-primaryColor2"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="relative hover:text-primaryColor2 transition before:content-[''] before:block before:h-[2px] before:w-[0%] hover:before:w-[100%] before:transition-all before:absolute before:bottom-0 before:bg-primaryColor2"
        to="/add-product"
      >
        Add Product
      </NavLink>
      <NavLink
        className="relative hover:text-primaryColor2 transition before:content-[''] before:block before:h-[2px] before:w-[0%] hover:before:w-[100%] before:transition-all before:absolute before:bottom-0 before:bg-primaryColor2"
        to="/cart"
      >
        My Cart
      </NavLink>
    </>
  );
  return (
    <header className={`${darkTheme && "bg-blue-950"}`}>
      <div className="bg-primaryColor1">
        <div className="section text-center text-white text-sm sm:text-xl">
          <Carousel
            slideInterval={5000}
            showControls={true}
            className="min-h-0 !h-16"
          >
            <span>Free Delivery all over Bangladesh</span>
            <span>Buy products with 10% discount!</span>
          </Carousel>
        </div>
      </div>
      <Navbar className={`section ${darkTheme && "bg-blue-950"}`}>
        <Navbar.Container
          className={`flex flex-col sm:flex-row items-center justify-between ${
            darkTheme && "text-white"
          }`}
        >
          <Navbar.Container className="flex sm:items-center self-start">
            <Navbar.Brand>
              <img src={logo} className="w-20 sm:w-28 -mt-4 sm:mt-0" />
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              {navLinks}
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                {navLinks}
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex justify-between gap-2 w-full sm:w-auto">
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  className={`w-8 rounded-full ${darkTheme && "invert"}`}
                  src={user.photoURL || "https://i.imgur.com/WwXYofg.png"}
                  alt=""
                />
                <h5>{user.displayName}</h5>
                <button
                  className="bg-primaryColor1 hover:bg-primaryColor2 transition duration-300 shadow-xl text-white px-7 py-3 rounded-md"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-primaryColor1 hover:bg-primaryColor2 transition duration-300 shadow-xl text-white px-14 py-3 rounded-md"
              >
                Login
              </Link>
            )}
            <Navbar.Toggle className="bg-white self-center p-2 rounded" />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </header>
  );
};

export default Header;
