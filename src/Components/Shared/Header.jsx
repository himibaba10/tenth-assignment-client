"use client";
import { Navbar, Button, Carousel } from "keep-react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
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
    <header>
      <div className="bg-primaryColor1">
        <div className="section text-center text-white text-xl">
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
      <Navbar className="section">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <img src={logo} className="w-28" />
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

          <Navbar.Container className="flex gap-2">
            <Button className="bg-primaryColor1 hover:bg-primaryColor2 transition duration-300 shadow-xl px-10 text-white">
              Login
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </header>
  );
};

export default Header;
