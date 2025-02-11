// services/eventAPI.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Interface for the tour display data
export interface IDayTourDataType {
  id: string;
  img: string;
  tourTitle: string;
  tourLocation: string;
  tourTime: number;
  description: string;
}

// Interface for event type from API
export interface IEventType {
  _id: string;
  name: string;
  description: string;
  images: string[];
  slug: string;
  banquetHalls: any[]; // Updated to match actual response
  amenities: string[];
  maxCapacity: number;
  priceRange: {
    min: number;
    max: number;
  };
}

// Interface for event category from API
export interface IEventCategory {
  _id: string;
  name: string;
  description: string;
  slug: string;
  banner: string;
  eventTypes: IEventType[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Updated to match actual API response
export interface IEventResponse {
  status: string;
  message: string;
  description: string;
  data: IEventCategory[]; // Direct array instead of nested categories
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getEventCategories: builder.query<
      { 
        tours: IDayTourDataType[]; 
        pagination: {
          total: number;
          pages: number;
          currentPage: number;
          limit: number;
        }
      },
      { page?: number; limit?: number }
    >({
      query: (params) => ({
        url: '/events/categories',
        params,
      }),
      transformResponse: (response: IEventResponse) => {
        // Transform the direct array of categories
        const tours = response.data.flatMap(category =>
          category.eventTypes.map(eventType => ({
            id: eventType._id,
            img: eventType.images[0],
            tourTitle: eventType.name,
            tourLocation: category.name,
            tourTime: eventType.maxCapacity,
            description: eventType.description
          }))
        );

        // Since the API doesn't return pagination info, we'll create default values
        return {
          tours,
          pagination: {
            total: response.data.length,
            pages: 1,
            currentPage: 1,
            limit: response.data.length
          }
        };
      }
    }),

    // Get single category by slug
    getEventCategoryBySlug: builder.query<IEventResponse, string>({
      query: (slug) => `/events/categories/${slug}`,
    }),

    // Search event types
    searchEventTypes: builder.query<IEventResponse, string>({
      query: (query) => ({
        url: '/events/event-types/search',
        params: { query },
      }),
    }),
  }),
});

export const {
  useGetEventCategoriesQuery,
  useGetEventCategoryBySlugQuery,
  useSearchEventTypesQuery,
} = eventApi;