// data/hotelData.ts
import { RoomCategory } from '../types/types';

export const roomCategories: RoomCategory[] = [
  {
    type: "PREMIER",
    image: "/assets/rooms/4.webp",
    amenities: [
      { icon: "/svgs/SVGs (12).svg", text: "Buffet Breakfast with Healthy Options" },
      { icon: "/svgs/SVGs (13).svg", text: "Complimentary coffee station with snacks" },
      { icon: "/svgs/SVGs (14).svg", text: "Located at Prime Business Hubs" },
      { icon: "/svgs/SVGs (16).svg", text: "Gym" },
      { icon: "/svgs/SVGs (17).svg", text: "Premium Toiletries" },
      { icon: "/svgs/SVGs (18).svg", text: "Large Size Room" }
    ]
  },
  {
    type: "SELECT",
    image: "/assets/rooms/5.webp",
    amenities: [
        { icon: "/svgs/SVGs (12).svg", text: "Buffet Breakfast with Healthy Options" },
        { icon: "/svgs/SVGs (13).svg", text: "Complimentary coffee station with snacks" },
        { icon: "/svgs/SVGs (14).svg", text: "Located at Prime Business Hubs" },
        { icon: "/svgs/SVGs (16).svg", text: "Gym" },
        { icon: "/svgs/SVGs (17).svg", text: "Premium Toiletries" },
        { icon: "/svgs/SVGs (18).svg", text: "Large Size Room" }
      ]
  },
  {
    type: "EXPRESS",
    image: "/assets/rooms/6.webp",
    amenities: [
      { icon: "/svgs/SVGs (19).svg", text: "24/7 Reception" },
      { icon: "/svgs/SVGs (12).svg", text: "Breakfast" },
      { icon: "/svgs/SVGs (21).svg", text: "Smart TV + DTH" },
      { icon: "/svgs/SVGs (14).svg", text: "Located at City Center" },
      { icon: "/svgs/SVGs (17).svg", text: "Complimentary Toiletries" },
      { icon: "/svgs/SVGs (27).svg", text: "Power backup" },
      { icon: "/svgs/SVGs (18).svg", text: "Compact Room size" }
    ]
  }
];