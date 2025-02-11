// import menu_data from "@/data/menu/menu-data";
// import { imageLoader } from "@/hooks/image-loader";
// import useGlobalContext from "@/hooks/use-context";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// const MobileMenu = () => {
//   const { toggleSideMenu } = useGlobalContext();
//   const [openSubMenu, setopenSubMenu] = useState(false);
//   const [subMenuNum, setsubMenuNum] = useState(0);
//   const [openMegaMenu, setopenMegaMenu] = useState(false);
//   const [megaMenuNum, setmegaMenuNum] = useState(0);
//   const handleActiveSubMenu = (index: number) => {
//     setopenSubMenu(!openSubMenu);
//     setsubMenuNum(index);
//   };
//   const handleActiveMegaMenu = (index: number) => {
//     setopenMegaMenu(!openMegaMenu);
//     setmegaMenuNum(index);
//   };

//   return (
//     <>
//       <ul>
//         {menu_data?.map((item) => (
//           <li
//             key={item.id}
//             className={`${
//               item?.children === true
//                 ? "menu-item-has-children"
//                 : `${item?.children === false ? "has-mega-menu" : ""}`
//             } ${
//               openSubMenu && subMenuNum === item.id ? "dropdown-opened" : ""
//             } `}
//           >
//             <Link
//               onClick={(e) => {
//                 if (item?.hasDropdown === true) {
//                   e.preventDefault(); // Prevent the default behavior if the condition is met
//                   handleActiveSubMenu(item.id);
//                 }
//               }}
//               href={item.link}
//             >
//               {item?.title}
//             </Link>

//             {/* img dropdown */}

//             {item.previewImg === true && (
//               <ul
//                 className="mega-menu home-menu-grid"
//                 style={{
//                   display: openSubMenu && subMenuNum === item.id ? "" : "none",
//                 }}
//               >
//                 {item?.submenus?.map((subItem, index) => (
//                   <li key={index}>
//                     <div className="home-menu-item">
//                       <div className="home-menu-thumb">
//                         <Image
//                           src={subItem?.prviewIMg}
//                           loader={imageLoader}
//                           style={{ width: "100%", height: "auto" }}
//                           alt="thumb not found"
//                         />
//                         <div className="home-menu-buttons">
//                           <Link
//                             onClick={toggleSideMenu}
//                             href={subItem?.link}
//                             className="bd-primary-btn btn-style"
//                           >
//                             <span className="bd-primary-btn-text">
//                               {subItem?.title}
//                             </span>
//                             <span className="bd-primary-btn-circle"></span>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {/* dropdown menu */}
//             {item?.hasDropdown === true && item?.submenus?.length && (
//               <ul
//                 className="submenu"
//                 style={{
//                   display: openSubMenu && subMenuNum === item.id ? "" : "none",
//                 }}
//               >
//                 {item?.submenus?.map((dropdownItem, index) => (
//                   <li
//                     onClick={() => handleActiveMegaMenu(index)}
//                     key={index}
//                     className={`menu-item-has-children has-arrow ${
//                       openMegaMenu && megaMenuNum === index
//                         ? "dropdown-opened"
//                         : ""
//                     }`}
//                   >
//                     {item?.previewImg === true ? (
//                       <></>
//                     ) : (
//                       <Link href={dropdownItem?.link}>
//                         {dropdownItem?.title}
//                       </Link>
//                     )}

//                     {dropdownItem?.megaMenu?.length && (
//                       <ul
//                         className="submenu"
//                         style={{
//                           display:
//                             openMegaMenu && megaMenuNum === index ? "" : "none",
//                         }}
//                       >
//                         {dropdownItem?.megaMenu?.map(
//                           (megaMenuItem: any, megaMenuIndex: number) => (
//                             <li key={megaMenuIndex}>
//                               <Link
//                                 onClick={toggleSideMenu}
//                                 href={megaMenuItem?.link}
//                               >
//                                 {megaMenuItem?.title}
//                               </Link>
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     )}
//                     {dropdownItem?.megaMenu?.length && (
//                       <Link
//                         onClick={() => handleActiveMegaMenu(index)}
//                         className={`mean-expand ${
//                           openMegaMenu && megaMenuNum === index
//                             ? "mean-clicked"
//                             : ""
//                         }`}
//                         href="#"
//                         style={{ fontSize: "18px" }}
//                       >
//                         <i className="fa-solid fa-plus"></i>
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//             {item?.hasDropdown === true && (
//               <Link
//                 onClick={() => handleActiveSubMenu(item.id)}
//                 className={`mean-expand ${
//                   openSubMenu && subMenuNum === item.id ? "mean-clicked" : ""
//                 }`}
//                 href="#"
//                 style={{ fontSize: "18px" }}
//               >
//                 <i className="fa-solid fa-plus"></i>
//               </Link>
//             )}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default MobileMenu;





"use client";
import { imageLoader } from "@/hooks/image-loader";
import useGlobalContext from "@/hooks/use-context";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MenuData, MenuItem } from "@/types/menu.types";

const MobileMenu = () => {
  const { toggleSideMenu } = useGlobalContext();
  const [openSubMenu, setopenSubMenu] = useState(false);
  const [subMenuNum, setsubMenuNum] = useState(0);
  const [openMegaMenu, setopenMegaMenu] = useState(false);
  const [megaMenuNum, setmegaMenuNum] = useState(0);

  // Add state for menu data
  const [menuData, setMenuData] = useState<MenuData>({
    menu: [],
    stats: {
      totalHotels: 0,
      totalCities: 0,
      totalEventCategories: 0
    }
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Add data fetching
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/header/header-data`);
        const data = await response.json();
        if (data.status === 'success') {
          setMenuData(data.data);
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const handleActiveSubMenu = (index: number) => {
    setopenSubMenu(!openSubMenu);
    setsubMenuNum(index);
  };
  
  const handleActiveMegaMenu = (index: number) => {
    setopenMegaMenu(!openMegaMenu);
    setmegaMenuNum(index);
  };

  if (isLoading) return null;
  if (error) return null;

  return (
    <>
      <ul>
        {menuData.menu.map((item:any) => (
          <li
            key={item.id}
            className={`${
              item?.children === true
                ? "menu-item-has-children"
                : `${item?.children === false ? "has-mega-menu" : ""}`
            } ${
              openSubMenu && subMenuNum === item.id ? "dropdown-opened" : ""
            } `}
          >
            <Link
              onClick={(e) => {
                if (item?.hasDropdown === true) {
                  e.preventDefault();
                  handleActiveSubMenu(item.id);
                }
              }}
              href={item.link}
            >
              {item?.title}
            </Link>

            {/* img dropdown */}
            {item.previewImg === true && (
              <ul
                className="mega-menu home-menu-grid"
                style={{
                  display: openSubMenu && subMenuNum === item.id ? "" : "none",
                }}
              >
                {item?.submenus?.map((subItem:any, index:any) => (
                  <li key={index}>
                    <div className="home-menu-item">
                      <div className="home-menu-thumb">
                        <Image
                          src={subItem?.prviewIMg || ""}
                          loader={imageLoader}
                          style={{ width: "100%", height: "auto" }}
                          alt="thumb not found"
                        />
                        <div className="home-menu-buttons">
                          <Link
                            onClick={toggleSideMenu}
                            href={subItem?.link}
                            className="bd-primary-btn btn-style"
                          >
                            <span className="bd-primary-btn-text">
                              {subItem?.title}
                            </span>
                            <span className="bd-primary-btn-circle"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* dropdown menu */}
            {item?.hasDropdown === true && item?.submenus?.length > 0 && (
              <ul
                className="submenu"
                style={{
                  display: openSubMenu && subMenuNum === item.id ? "" : "none",
                }}
              >
                {item?.submenus?.map((dropdownItem:any, index:any) => (
                  <li
                    onClick={() => handleActiveMegaMenu(index)}
                    key={index}
                    className={`menu-item-has-children has-arrow ${
                      openMegaMenu && megaMenuNum === index
                        ? "dropdown-opened"
                        : ""
                    }`}
                  >
                    {item?.previewImg === true ? (
                      <></>
                    ) : (
                      <Link href={dropdownItem?.link}>
                        {dropdownItem?.title}
                      </Link>
                    )}

                    {dropdownItem?.megaMenu?.length > 0 && (
                      <ul
                        className="submenu"
                        style={{
                          display:
                            openMegaMenu && megaMenuNum === index ? "" : "none",
                        }}
                      >
                        {dropdownItem?.megaMenu?.map((megaMenuItem:any, megaMenuIndex:any) => (
                          <li key={megaMenuIndex}>
                            <Link
                              onClick={toggleSideMenu}
                              href={megaMenuItem?.link}
                            >
                              {megaMenuItem?.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    {dropdownItem?.megaMenu?.length > 0 && (
                      <Link
                        onClick={() => handleActiveMegaMenu(index)}
                        className={`mean-expand ${
                          openMegaMenu && megaMenuNum === index
                            ? "mean-clicked"
                            : ""
                        }`}
                        href="#"
                        style={{ fontSize: "18px" }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {item?.hasDropdown === true && (
              <Link
                onClick={() => handleActiveSubMenu(item.id)}
                className={`mean-expand ${
                  openSubMenu && subMenuNum === item.id ? "mean-clicked" : ""
                }`}
                href="#"
                style={{ fontSize: "18px" }}
              >
                <i className="fa-solid fa-plus"></i>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
