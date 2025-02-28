"use client";
import { imageLoader } from "@/hooks/image-loader";
import Image from "next/image";
import React from "react";
import HeaderLogo from "../../../public/assets/logo/Logo.png";
import Link from "next/link";
import Menu from "./components/Menu";
import AuthButton from "./components/AuthButton";
import useGlobalContext from "@/hooks/use-context";

const Header = () => {
  const { toggleSideMenu, scrollDirection } = useGlobalContext();

  return (
    <header>
      <div
        className={`ss-header header-area header-style header-style-two ${
          scrollDirection === "down" ? "bd-sticky" : ""
        }`}
        id="header-sticky"
      >
          <div className="header-inner">
            <div className="header-logo">
              <Link href="/">
                <Image
                  loader={imageLoader}
                  style={{ width: "100%", height: "auto" }}
                  src={HeaderLogo}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="header-menu">
              <nav className="main-menu main-menu-two" id="mobile-menu">
                <Menu />
                <ul className="st-nav">
                  <li>
                    <a href="#" className="link">
                    Day Use Room
                    </a>
                    </li>
                    <li>
                    <a href="#" className="link">
                    Events
                    </a>
                    </li>
                    <li>
                    <a href="#" className="link">
                    Hotels
                    </a>
                    </li>
                    <li>
                    <a href="#" className="link">
                    About Us
                    </a>
                    </li>
                    <li>
                    <a href="#" className="link">
                    Blogs
                    </a>
                    </li>
                    <li>
                    <a href="#" className="link">
                    Contact Us
                    </a>
                    </li>
                </ul>
              </nav>
            </div>
            <div className="header-right d-flex align-items-center gap-24">
              {/* <AuthButton />
              <div
                onClick={toggleSideMenu}
                className="header-hamburger ml-20 d-xl-none"
              >
                <div className="sidebar-toggle">
                  <Link className="bar-icon" href="/#">
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;