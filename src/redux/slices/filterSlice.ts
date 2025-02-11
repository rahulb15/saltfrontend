// redux/slices/filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  priceRange: [number, number];
  amenities: string[];
  search: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  city: string;
  sortField: string;
  sortOrder: "asc" | "desc";
}

const initialState: FilterState = {
  priceRange: [0, 5000],
  amenities: [],
  search: "",
  checkIn: undefined,
  checkOut: undefined,
  adults: undefined,
  children: undefined,
  city: "",
  sortField: "createdAt",
  sortOrder: "desc"
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FilterState>>) => {
      return { ...state, ...action.payload };
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setAmenities: (state, action: PayloadAction<string[]>) => {
      state.amenities = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setDates: (state, action: PayloadAction<{ checkIn?: string; checkOut?: string }>) => {
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
    },
    setGuests: (state, action: PayloadAction<{ adults?: number; children?: number }>) => {
      state.adults = action.payload.adults;
      state.children = action.payload.children;
    },
    setSorting: (state, action: PayloadAction<{ field: string; order: "asc" | "desc" }>) => {
      state.sortField = action.payload.field;
      state.sortOrder = action.payload.order;
    },
    resetFilters: (state) => {
      return initialState;
    }
  }
});

export const {
  setFilters,
  setPriceRange,
  setAmenities,
  setSearch,
  setDates,
  setGuests,
  setSorting,
  resetFilters
} = filterSlice.actions;

export default filterSlice.reducer;