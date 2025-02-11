// src/redux/slices/reservationSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store';

// Types
export interface ReservationStatus {
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show';
  ipmsStatus?: any;
  localBooking?: any;
}

export interface ReservationPayment {
  status: 'pending' | 'partially_paid' | 'paid' | 'failed' | 'refunded';
  transactionId?: string;
  amount: number;
}

export interface ReservationResponse {
  status: string;
  message: string;
  data: {
    booking: any;
    reservationNumber: string;
  };
}

export interface ReservationState {
  currentReservation: any | null;
  reservationNumber: string | null;
  userReservations: any[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ReservationState = {
  currentReservation: null,
  reservationNumber: null,
  userReservations: [],
  loading: false,
  error: null,
};

// API base URL
const API_URL = 'http://localhost:5001/api/v1';

// Helper function to get auth token
const getAuthHeader = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  return {};
};

// Async Thunks
export const createReservation = createAsyncThunk<
  ReservationResponse,
  any,
  { state: RootState }
>(
  'reservation/create',
  async ({ bookingData, hotelId,roomData,discountedBookings }, { rejectWithValue }) => {
    try {
      const response = await axios.post<ReservationResponse>(
        `${API_URL}/bookings/create`,
        { bookingData, hotelId,roomData,discountedBookings },
        {
          headers: {
            ...getAuthHeader(),
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create reservation');
    }
  }
);

export const getUserReservations = createAsyncThunk<
  any[],
  void,
  { state: RootState }
>(
  'reservation/getUserReservations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/bookings/my-bookings`, {
        headers: getAuthHeader(),
      });
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch reservations');
    }
  }
);

export const getReservationStatus = createAsyncThunk<
  ReservationStatus,
  string,
  { state: RootState }
>(
  'reservation/getStatus',
  async (reservationNo, { rejectWithValue }) => {
    try {
      const response = await axios.get<ReservationStatus>(
        `${API_URL}/bookings/status/${reservationNo}`,
        {
          headers: getAuthHeader(),
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get reservation status');
    }
  }
);

export const cancelReservation = createAsyncThunk<
  any,
  { reservationNo: string; reason: string },
  { state: RootState }
>(
  'reservation/cancel',
  async ({ reservationNo, reason }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/bookings/cancel/${reservationNo}`,
        { reason },
        {
          headers: getAuthHeader(),
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to cancel reservation');
    }
  }
);

export const updatePaymentStatus = createAsyncThunk<
  any,
  { bookingNumber: string; paymentData: ReservationPayment },
  { state: RootState }
>(
  'reservation/updatePayment',
  async ({ bookingNumber, paymentData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_URL}/bookings/${bookingNumber}/payment`,
        paymentData,
        {
          headers: getAuthHeader(),
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update payment status');
    }
  }
);

// Slice
const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    clearReservation: (state) => {
      state.currentReservation = null;
      state.reservationNumber = null;
      state.error = null;
    },
    setReservationNumber: (state, action) => {
      state.reservationNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Create Reservation
    builder
      .addCase(createReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.currentReservation = action.payload.data.booking;
        state.reservationNumber = action.payload.data.reservationNumber;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

    // Get User Reservations
    builder
      .addCase(getUserReservations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.userReservations = action.payload;
      })
      .addCase(getUserReservations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

    // Get Reservation Status
    builder
      .addCase(getReservationStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReservationStatus.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentReservation) {
          state.currentReservation.status = action.payload.status;
        }
      })
      .addCase(getReservationStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

    // Cancel Reservation
    builder
      .addCase(cancelReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentReservation) {
          state.currentReservation.status = 'cancelled';
        }
      })
      .addCase(cancelReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

    // Update Payment Status
    builder
      .addCase(updatePaymentStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePaymentStatus.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentReservation) {
          state.currentReservation.payment = action.payload.data.payment;
        }
      })
      .addCase(updatePaymentStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions and reducer
export const { clearReservation, setReservationNumber } = reservationSlice.actions;

// Export selectors
export const selectReservation = (state: RootState) => state.reservation;
export const selectCurrentReservation = (state: RootState) => state.reservation.currentReservation;
export const selectReservationNumber = (state: RootState) => state.reservation.reservationNumber;
export const selectUserReservations = (state: RootState) => state.reservation.userReservations;
export const selectReservationLoading = (state: RootState) => state.reservation.loading;
export const selectReservationError = (state: RootState) => state.reservation.error;

export default reservationSlice.reducer;