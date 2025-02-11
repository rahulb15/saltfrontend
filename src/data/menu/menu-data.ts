import { MenuType } from "@/interFace/interFace";
import homeOneImg from "../../../public/assets/images/menu/menu-home-1.jpg";
import homeTowImg from "../../../public/assets/images/menu/menu-home-2.jpg";
import homeThreeImg from "../../../public/assets/images/menu/menu-home-3.jpg";
import homeFourImg from "../../../public/assets/images/menu/menu-home-4.jpg";
import homeFiveImg from "../../../public/assets/images/menu/menu-home-5.jpg";

const menu_data: MenuType[] = [
 
  {
    id: 4,
    hasDropdown: true,
    children: true,
    active: true,
    title: "Events",
    link: "/events",
    submenus: [
      {
        title: "Social Events",
        link: "/social-events",
      },
      {
        title: "Corporate Events",
        link: "/corporate-events",
      },
      {
        title: "Wedding Events",
        link: "/wedding-events",
      },
      {
        title: "Birthday Events",
        link: "/birthday-events",
      },
      {
        title: "Party Events",
        link: "/party-events",
      },

      {
        title: "Festival Events",
        link: "/festival-events",
      },
      {
        title: "Other Events",
        link: "/other-events",
      },
    ],
  },
  {
    id: 5,
    hasDropdown: true,
    children: true,
    active: true,
    title: "Hotels",
    link: "/hotels",
    submenus: [
      {
        title: "Delhi",
        link: "/hotels/delhi",
        prviewIMg: homeOneImg,
        megaMenu: [
          { title: "The Leela Palace", link: "/hotels/delhi/leela-palace", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Taj Palace", link: "/hotels/delhi/taj-palace", prviewIMg: "/assets/rooms/4.webp" },
          { title: "The Oberoi", link: "/hotels/delhi/the-oberoi", prviewIMg: "/assets/rooms/4.webp" },
          { title: "ITC Maurya", link: "/hotels/delhi/itc-maurya", prviewIMg: "/assets/rooms/4.webp" },
          { title: "The Lodhi", link: "/hotels/delhi/the-lodhi", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Hyatt Regency", link: "/hotels/delhi/hyatt-regency", prviewIMg: "/assets/rooms/4.webp" },
        ]
      },
      {
        title: "Gurugram",
        link: "/hotels/gurugram",
        prviewIMg: homeOneImg,
        megaMenu: [
          { title: "The Oberoi Gurugram", link: "/hotels/gurugram/oberoi", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Leela Ambience", link: "/hotels/gurugram/leela-ambience", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Taj City Centre", link: "/hotels/gurugram/taj-city-centre", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Hyatt Regency", link: "/hotels/gurugram/hyatt-regency", prviewIMg: "/assets/rooms/4.webp" },
          { title: "The Westin", link: "/hotels/gurugram/the-westin", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Trident Gurugram", link: "/hotels/gurugram/trident", prviewIMg: "/assets/rooms/4.webp" },
        ]
      },
      {
        title: "Mumbai",
        link: "/hotels/mumbai",
        prviewIMg: homeOneImg,
        megaMenu: [
          { title: "Taj Mahal Palace", link: "/hotels/mumbai/taj-mahal-palace", prviewIMg: "/assets/rooms/4.webp" },
          { title: "The Oberoi Mumbai", link: "/hotels/mumbai/oberoi", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Trident Nariman Point", link: "/hotels/mumbai/trident-nariman", prviewIMg: "/assets/rooms/4.webp" },
          { title: "ITC Maratha", link: "/hotels/mumbai/itc-maratha", prviewIMg: "/assets/rooms/4.webp" },
          { title: "The Leela Mumbai", link: "/hotels/mumbai/leela", prviewIMg: "/assets/rooms/4.webp" },
          { title: "JW Marriott Juhu", link: "/hotels/mumbai/jw-marriott-juhu", prviewIMg: "/assets/rooms/4.webp" },
        ]
      },
      {
        title: "Bangalore",
        link: "/hotels/bangalore",
        prviewIMg: homeOneImg,
        megaMenu: [
          { title: "The Leela Palace", link: "/hotels/bangalore/leela-palace", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Taj West End", link: "/hotels/bangalore/taj-west-end", prviewIMg: "/assets/rooms/4.webp" },
          { title: "ITC Gardenia", link: "/hotels/bangalore/itc-gardenia", prviewIMg: "/assets/rooms/4.webp" },
          { title: "The Oberoi", link: "/hotels/bangalore/oberoi", prviewIMg: "/assets/rooms/4.webp" },
          { title: "JW Marriott", link: "/hotels/bangalore/jw-marriott", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Shangri-La", link: "/hotels/bangalore/shangri-la", prviewIMg: "/assets/rooms/4.webp" },
        ]
      },
      {
        title: "Hyderabad",
        link: "/hotels/hyderabad",
        prviewIMg: homeOneImg,
        megaMenu: [
          { title: "Taj Falaknuma Palace", link: "/hotels/hyderabad/taj-falaknuma", prviewIMg: "/assets/rooms/4.webp" },
          { title: "ITC Kohenur", link: "/hotels/hyderabad/itc-kohenur", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Park Hyatt", link: "/hotels/hyderabad/park-hyatt", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Trident Hyderabad", link: "/hotels/hyderabad/trident", prviewIMg: "/assets/rooms/4.webp" },
          { title: "The Westin", link: "/hotels/hyderabad/westin", prviewIMg: "/assets/rooms/4.webp" },
          { title: "Novotel HICC", link: "/hotels/hyderabad/novotel-hicc", prviewIMg: "/assets/rooms/4.webp" },
        ]
      },
      {
        title: "Chennai",
        link: "/hotels/chennai",
        prviewIMg: homeOneImg,
        megaMenu: [
          { title: "ITC Grand Chola", link: "/hotels/chennai/itc-grand-chola", prviewIMg: "/assets/images/hotels/chennai-itc-grand-chola.jpg" },
          { title: "The Leela Palace", link: "/hotels/chennai/leela-palace", prviewIMg: "/assets/images/hotels/chennai-leela-palace.jpg" },
          { title: "Taj Coromandel", link: "/hotels/chennai/taj-coromandel", prviewIMg: "/assets/images/hotels/chennai-taj-coromandel.jpg" },
          { title: "Park Hyatt", link: "/hotels/chennai/park-hyatt", prviewIMg: "/assets/images/hotels/chennai-park-hyatt.jpg" },
          { title: "The Park Chennai", link: "/hotels/chennai/the-park", prviewIMg: "/assets/images/hotels/chennai-the-park.jpg" },
          { title: "Trident Chennai", link: "/hotels/chennai/trident", prviewIMg: "/assets/images/hotels/chennai-trident.jpg" },
        ]
      },
    ],
  },
  {
    id: 1,
    hasDropdown: true,
    children: true,
    active: true,
    title: "About Us",
    link: "/about",
  },
  {
    id: 2,
    hasDropdown: true,
    children: true,
    active: true,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 3,
    hasDropdown: true,
    children: true,
    active: true,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;
