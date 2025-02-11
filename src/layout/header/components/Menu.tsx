"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageLoader } from "@/hooks/image-loader";
import { MenuData, SubmenuItem, MegaMenuItem } from "@/types/menu.types";

const Menu = () => {
  const [menuData, setMenuData] = useState<MenuData>({
    menu: [],
    stats: {
      totalHotels: 0,
      totalCities: 0,
      totalEventCategories: 0
    }
  });

  console.log(menuData);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
            } ${item.title === "Hotels" ? "menu-item-hotels" : ""}`}
          >
            <Link href={item?.link}>{item?.title}</Link>
            {/* img menu */}
            {item.previewImg === true && (
              <ul className="mega-menu home-menu-grid">
                {item?.submenus?.length > 0 && (
                  <>
                    {item?.submenus.map((subItem:any, index:any) => (
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
                  </>
                )}
              </ul>
            )}

            {/* dropdown menu */}
            {item?.hasDropdown === true && item?.submenus?.length > 0 && (
              <ul className="submenu">
                {item?.submenus?.map((dropdownItem:any, index:any) => (
                  <li key={index} className="menu-item-has-children has-arrow">
                    <Link href={dropdownItem?.link}>{dropdownItem?.title}</Link>

                    {dropdownItem?.megaMenu?.length > 0 && (
                      <ul className="submenu">
                        {dropdownItem?.megaMenu?.map((megaDropDownItem:any, megaIndex:any) => (
                          <li key={megaIndex}>
                            <Link href={megaDropDownItem?.link}>
                              {megaDropDownItem?.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Hotels menu */}
            {item.title === "Hotels" && item?.submenus?.length > 0 && (
              <ul className="submenu submenu-hotels">
                {item.submenus.map((cityItem:any, cityIndex:any) => (
                  <li key={cityIndex}>
                    <Link href={cityItem.link}>
                      <Image
                        src={cityItem.prviewIMg || ""}
                        loader={imageLoader}
                        width={40}
                        height={40}
                        alt={cityItem.title}
                      />
                      {cityItem.title}
                    </Link>
                    {cityItem.megaMenu && cityItem.megaMenu.length > 0 && (
                      <ul className="mega-menu-hotels">
                        {cityItem.megaMenu.map((hotelItem:any, hotelIndex:any) => (
                          <li key={hotelIndex}>
                            <Link href={hotelItem.link}>
                              <Image
                                src={hotelItem.prviewIMg || ""}
                                loader={imageLoader}
                                width={70}
                                height={70}
                                alt={hotelItem.title}
                              />
                              {hotelItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* multi pages */}
            {item?.pageLayout === true && item?.submenus?.length > 0 && (
              <ul className="mega-menu mega-grid-4">
                {item?.submenus?.map((pageLayoutItem:any, pageLayoutIndex:any) => (
                  <li key={pageLayoutIndex}>
                    <Link href={pageLayoutItem?.link} className="title">
                      {pageLayoutItem?.title}
                    </Link>
                    {pageLayoutItem?.megaMenu?.length > 0 && (
                      <ul>
                        {pageLayoutItem?.megaMenu?.map((singlePageItem:any, singlePageItemIndex:any) => (
                          <li key={singlePageItemIndex}>
                            <Link href={singlePageItem?.link}>
                              {singlePageItem?.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;