// services/featuredAPI.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Interface for the display price
export interface IDisplayPrice {
  basePrice: number;
  discountedPrice: number;
  discountPercentage: number;
  currency: string;
}

// Interface for featured hotel data
export interface IFeaturedHotel {
  _id: string;
  hotelId: {
    name: string;
    type: string;
    description: string;
    address: string;
    images: string[];
    mainImage: string;
    rating: number;
    hotelCode: string;
  };
  position: number;
  sectionType: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  customTitle: string;
  customDescription: string;
  customImages: string[];
  mainImage: string;
  highlightTags: string[];
  promotionalOffer: string;
  customAmenities: Array<{
    name: string;
    icon: string;
    description: string;
  }>;
  displayPrice: IDisplayPrice;
  specialFeatures: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

// Interface for the API response
export interface IFeaturedResponse {
  status: string;
  message: string;
  description: string;
  data: {
    hotels: IFeaturedHotel[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const featuredApi = createApi({
  reducerPath: 'featuredApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getFeaturedHotels: builder.query<
      IFeaturedResponse,
      { page?: number; limit?: number; sectionType?: string; status?: string }
    >({
      query: (params) => ({
        url: '/featured-hotels',
        params,
      }),
    }),

    getFeaturedHotelById: builder.query<IFeaturedResponse, string>({
      query: (id) => `/featured-hotels/${id}`,
    }),
  }),
});

export const {
  useGetFeaturedHotelsQuery,
  useGetFeaturedHotelByIdQuery,
} = featuredApi;