"use client";
import { useState } from "react";
import { imageLoader } from "@/hooks/image-loader";
import Image from "next/image";
import Link from "next/link";
import Menu from "./components/Menu";
import AuthButton from "./components/AuthButton";
import useGlobalContext from "@/hooks/use-context";
import HeaderLogo from "../../../public/assets/logo/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { scrollDirection } = useGlobalContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

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
        <div className="mobile-menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
        <div className={`header-menu ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <button className="close-btn" onClick={toggleSidebar}><FiX size={24} /></button>
          <nav className="main-menu main-menu-two" id="mobile-menu">
            <Menu />
            <ul className="st-nav">
              <li><Link href="#" onClick={toggleSidebar}>Day Use Room</Link></li>
              <li><Link href="#" onClick={toggleSidebar}>Events</Link></li>
              <li><Link href="#" onClick={toggleSidebar}>Hotels</Link></li>
              <li><Link href="#" onClick={toggleSidebar}>About Us</Link></li>
              <li><Link href="#" onClick={toggleSidebar}>Blogs</Link></li>
              <li><Link href="#" onClick={toggleSidebar}>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
