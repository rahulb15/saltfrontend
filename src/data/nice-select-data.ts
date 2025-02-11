interface niceSelectType {
  id: number;
  option: string;
}

//location data
const cityArray = [
  "Gurugram",
  "Noida",
  "Delhi",
  "Mumbai",
  "Ghaziabad",
  "All",
];

export const selectLocationData: niceSelectType[] = [
  ...cityArray.map((city, index) => ({
    id: index + 1, // Adjusting the ID to follow the existing data
    option: city,
  })),
];

//age data
export const selectAgeData: niceSelectType[] = [
  {
    id: 1,
    option: "11 Years",
  },
  {
    id: 2,
    option: "12 Years",
  },
  {
    id: 3,
    option: "13 Years",
  },
];

//tour type data
export const selectTourData: niceSelectType[] = [
  {
    id: 1,
    option: "Wild Tour",
  },
  {
    id: 2,
    option: "City Tour",
  },
  {
    id: 3,
    option: "Skydrive",
  },
];

// Room type data (replaced age data)
export const selectRoomTypeData: niceSelectType[] = [
  {
    id: 1,
    option: "Standard Room",
  },
  {
    id: 2,
    option: "Deluxe Room",
  },
  {
    id: 3,
    option: "Suite",
  },
  {
    id: 4,
    option: "Executive Room",
  },
  {
    id: 5,
    option: "Family Room",
  },
];

// Amenities data (replaced tour type data)
export const selectAmenitiesData: niceSelectType[] = [
  {
    id: 1,
    option: "Wi-Fi",
  },
  {
    id: 2,
    option: "Swimming Pool",
  },
  {
    id: 3,
    option: "Gym",
  },
  {
    id: 4,
    option: "Restaurant",
  },
  {
    id: 5,
    option: "Business Center",
  },
];

// Number of guests data (new category)
export const selectGuestsData: niceSelectType[] = [
  {
    id: 1,
    option: "1 Guest",
  },
  {
    id: 2,
    option: "2 Guests",
  },
  {
    id: 3,
    option: "3 Guests",
  },
  {
    id: 4,
    option: "4 Guests",
  },
  {
    id: 5,
    option: "5+ Guests",
  },
];


// New country data
const countryArray = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil",
  "Mexico",
  "South Africa",
  "Spain",
  "Italy",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "New Zealand",
  // Add more countries as needed
];

export const selectCountryData: niceSelectType[] = [
  ...countryArray.map((country, index) => ({
    id: index + 1,
    option: country,
  })),
];
