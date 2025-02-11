import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfirmedBookingState {
  bookingDetails: any | null;
}

const initialState: ConfirmedBookingState = {
  bookingDetails: null,
};

export const confirmedBookingSlice = createSlice({
  name: "confirmedBooking",
  initialState,
  reducers: {
    setConfirmedBooking: (state, action: PayloadAction<any>) => {
      state.bookingDetails = action.payload;
    },
    clearConfirmedBooking: (state) => {
      state.bookingDetails = null;
    },
  },
});

export const { setConfirmedBooking, clearConfirmedBooking } = confirmedBookingSlice.actions;

export default confirmedBookingSlice.reducer;