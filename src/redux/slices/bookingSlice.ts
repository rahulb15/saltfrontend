import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

interface BookingState {
  bookings: any[];
  bookingNumber: string | null;
  discountedBookings: any[];
}

const initialState: BookingState = {
  bookings: [],
  bookingNumber: null,
  discountedBookings: [],
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      const existingBookingIndex = state.bookings.findIndex(
        (booking) => booking.Package_Id === action.payload.Package_Id
      );

      if (existingBookingIndex !== -1) {
        state.bookings[existingBookingIndex].quantity += 1;
        toast.success(`Added another ${action.payload.Room_Name}`, {
          duration: 2000,
        });
      } else {
        state.bookings.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.Room_Name} added to bookings`, {
          duration: 2000,
        });
      }
    },
    removeBooking: (state, action: PayloadAction<string>) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.Package_Id !== action.payload
      );
      // toast.error("Booking removed", { duration: 2000 });
    },
    clearBookings: (state) => {
      state.bookings = [];
      // toast.success("All bookings cleared", { duration: 2000 });
    },
    updateBookingQuantity: (
      state,
      action: PayloadAction<{ Package_Id: string; quantity: number }>
    ) => {
      const bookingIndex = state.bookings.findIndex(
        (b) => b.Package_Id === action.payload.Package_Id
      );
      if (bookingIndex !== -1) {
        state.bookings[bookingIndex].quantity = action.payload.quantity;
        toast.success("Booking quantity updated", { duration: 2000 });
      }
    },
    setBookingNumber: (state, action: PayloadAction<string>) => {
      state.bookingNumber = action.payload;
    },
    setDiscountedBookings: (state, action: PayloadAction<any[]>) => {
      state.discountedBookings = action.payload;
    },
    removeCoupon: (state) => {
      state.discountedBookings = [];
    },
  },
});

export const {
  addBooking,
  removeBooking,
  clearBookings,
  updateBookingQuantity,
  setBookingNumber,
  setDiscountedBookings,
  removeCoupon,
} = bookingSlice.actions;

export default bookingSlice.reducer;
