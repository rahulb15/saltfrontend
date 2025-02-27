// types.ts
export interface Amenity {
    icon: string;
    text: string;
  }
  
  export interface RoomCategory {
    type: string;
    image: string;
    amenities: Amenity[];
  }