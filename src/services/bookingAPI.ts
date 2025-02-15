// services/bookingAPI.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface IBooking {
  bookingNumber: string;
  userId: string | null;
  hotelId: string;
  hotelCode: string;
  roomId: string;
  roomDetails: {
    roomTypeId: string;
    rateplanId: string;
    ratetypeId: string;
    roomName: string;
    roomType: string;
  };
  guestDetails: {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      zipCode: string;
    };
  };
  checkIn: string;
  checkOut: string;
  numberOfNights: number;
  guests: {
    adults: number;
    children: number;
    extraAdults: number;
    extraChildren: number;
  };
  pricing: {
    baseRate: number;
    extraAdultRate: number;
    extraChildRate: number;
    taxAmount: number;
    discountAmount?: number;
    totalAmount: number;
    currency: string;
    isCouponApplied: boolean;
    promotionCode?: string;
    promocodeId?: string;
  };
  payment: {
    status: 'pending' | 'paid' | 'failed';
    mode: string;
    paidAmount: number;
    transactionId?: string;
    paymentDate?: string;
  };
  status: 'pending' | 'confirmed' | 'cancelled';
  thirdPartyReservationNo: string;
  subReservationNumbers: string[];
}

interface BookingResponse {
  status: string;
  message: string;
  data: {
    booking: IBooking;
  };
}

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:5001/api/v1',
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api/v1',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Booking'],
  endpoints: (builder) => ({
    getBookingByNumber: builder.query<BookingResponse, string>({
      query: (bookingNumber) => `/bookings/${bookingNumber}`,
      transformResponse: (response: BookingResponse) => response,
      transformErrorResponse: (
        response: FetchBaseQueryError | { status: number; data: unknown }
      ) => {
        return {
          status: 'error',
          error: (response as any).data?.message || 'An error occurred'
        };
      },
      providesTags: (result, error, bookingNumber) => [
        { type: 'Booking', id: bookingNumber }
      ]
    }),

    getUserBookings: builder.query<{ data: IBooking[] }, void>({
      query: () => '/bookings/my-bookings',
      transformResponse: (response: { data: IBooking[] }) => response,
      providesTags: ['Booking']
    }),

    updatePaymentStatus: builder.mutation<
      BookingResponse, 
      { bookingNumber: string; paymentData: { status: string; transactionId: string; amount: number } }
    >({
      query: ({ bookingNumber, paymentData }) => ({
        url: `/bookings/${bookingNumber}/payment`,
        method: 'PATCH',
        body: paymentData
      }),
      invalidatesTags: (result, error, { bookingNumber }) => [
        { type: 'Booking', id: bookingNumber }
      ]
    }),

    cancelBooking: builder.mutation<
      BookingResponse,
      { reservationNo: string; reason: string }
    >({
      query: ({ reservationNo, reason }) => ({
        url: `/bookings/cancel/${reservationNo}`,
        method: 'POST',
        body: { reason }
      }),
      invalidatesTags: ['Booking']
    })
  })
});

export const {
  useGetBookingByNumberQuery,
  useGetUserBookingsQuery,
  useUpdatePaymentStatusMutation,
  useCancelBookingMutation
} = bookingApi;