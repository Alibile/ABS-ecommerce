"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HeaderTop from "./HeaderTop";
import NavMenu from "./NavMenu";

const Header = (

  borderStyle: string,
  headerPaddingClass: string,
  headerPositionClass: string,
  headerBgClass: string
):JSX.Element => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header: any = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <header
      className={`header-area clearfix ${headerBgClass ? headerBgClass : ""} ${
        headerPositionClass ? headerPositionClass : ""
      }`}
    >
      <div
        className={`${headerPaddingClass ? headerPaddingClass : ""}`}
      >
        <div className={"container"}>
          {/* header top */}
       <HeaderTop borderStyle={borderStyle} /> 
        </div>
      </div>

      <div
        className={` ${
          headerPaddingClass ? headerPaddingClass : ""
        } sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              {/*     <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
               */}
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              {/* Nav menu */}
               <NavMenu />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              {/* Icon group */}
              {/*   <IconGroup /> */}
            </div>
          </div>
        </div>
        {/* mobile menu */}
        {/*  <MobileMenu /> */}
      </div>
    </header>
  );
};
Header.propTypes = {
  children: PropTypes.any,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string,
};
export default Header;
