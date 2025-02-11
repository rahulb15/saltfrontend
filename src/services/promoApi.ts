// services/promoAPI.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/redux/store';

interface ValidatePromoRequest {
  code: string;
  roomType: string;
  bookingAmount: number;
}

interface PromoResponse {
  status: string;
  message: string;
  description: string;
  data: {
    discountAmount: number;
    discountType: 'PERCENTAGE' | 'FIXED';
    discountValue: number;
    validUntil: string;
  } | null;
}

export const promoApi = createApi({
  reducerPath: 'promoApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:5001/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    validatePromocode: builder.mutation<PromoResponse, ValidatePromoRequest>({
      query: (data) => ({
        url: '/promocodes/validate',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useValidatePromocodeMutation } = promoApi;