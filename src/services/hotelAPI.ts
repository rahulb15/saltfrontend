// // // services/hotelAPI.ts
// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // interface Hotel {
// //   id: string;
// //   name: string;
// //   img: string;
// //   tourTitle: string;
// //   tourLocation: string;
// //   distanceFromLandmark: string;
// //   tourType: string;
// //   highlightFeature: string;
// //   tourRating: number;
// //   tourPrice: number;
// //   originalPrice?: number;
// //   taxesAndFees: number;
// // }

// // interface HotelResponse {
// //   hotels: Hotel[];
// //   pagination: {
// //     currentPage: number;
// //     totalPages: number;
// //     totalItems: number;
// //     hasMore: boolean;
// //   };
// // }

// // interface GetHotelsArgs {
// //   page?: number;
// //   limit?: number;
// //   search?: string;
// //   sortField?: string;
// //   sortOrder?: 'asc' | 'desc';
// //   filters?: Record<string, any>;
// // }

// // // Get the API URL from environment variables
// // const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// // export const hotelApi = createApi({
// //   reducerPath: 'hotelApi',
// //   baseQuery: fetchBaseQuery({
// //     baseUrl: API_URL,
// //     prepareHeaders: (headers) => {
// //       // For client-side requests
// //       if (typeof window !== 'undefined') {
// //         const token = localStorage.getItem('token');
// //         if (token) {
// //           headers.set('Authorization', `Bearer ${token}`);
// //         }
// //       }
      
// //       // Always set these headers
// //       headers.set('Content-Type', 'application/json');
// //       return headers;
// //     },
// //     // Add credentials if your API requires them
// //     credentials: 'include',
// //   }),
// //   tagTypes: ['Hotel'],
// //   endpoints: (builder) => ({
// //     getHotels: builder.query<HotelResponse, GetHotelsArgs>({
// //       query: (params = {}) => ({
// //         url: '/hotels',
// //         method: 'GET',
// //         params: {
// //           page: params.page || 1,
// //           limit: params.limit || 10,
// //           search: params.search,
// //           sortField: params.sortField,
// //           sortOrder: params.sortOrder,
// //           ...params.filters,
// //         },
// //       }),
// //       transformResponse: (response: HotelResponse) => {
// //         // You can transform the response here if needed
// //         return response;
// //       },
// //       serializeQueryArgs: ({ queryArgs }) => {
// //         // Remove page from cache key to support infinite scroll
// //         const { page, ...rest } = queryArgs;
// //         return rest;
// //       },
// //       merge: (currentCache, newItems, { arg }) => {
// //         if (arg?.page === 1) {
// //           return newItems;
// //         }
// //         return {
// //           ...newItems,
// //           hotels: [...currentCache.hotels, ...newItems.hotels],
// //         };
// //       },
// //       forceRefetch: ({ currentArg, previousArg }) => {
// //         return currentArg?.page !== previousArg?.page;
// //       },
// //       providesTags: (result) =>
// //         result
// //           ? [
// //               ...result.hotels.map(({ id }) => ({ type: 'Hotel' as const, id })),
// //               { type: 'Hotel', id: 'LIST' },
// //             ]
// //           : [{ type: 'Hotel', id: 'LIST' }],
// //     }),
    
// //     getHotelById: builder.query<Hotel, string>({
// //       query: (id) => `/hotels/${id}`,
// //       providesTags: (result, error, id) => [{ type: 'Hotel', id }],
// //     }),

// //     // Add search endpoint if needed
// //     searchHotels: builder.query<HotelResponse, string>({
// //       query: (searchTerm) => ({
// //         url: '/hotels/search',
// //         params: { q: searchTerm },
// //       }),
// //       providesTags: ['Hotel'],
// //     }),
// //   }),
// // });

// // // Export hooks
// // export const {
// //   useGetHotelsQuery,
// //   useGetHotelByIdQuery,
// //   useSearchHotelsQuery,
// //   util: { getRunningQueriesThunk },
// // } = hotelApi;

// // // Export for use in SSR
// // export const { getHotels, getHotelById } = hotelApi.endpoints;



// // services/hotelAPI.ts
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export interface IHotel {
//   _id: string;
//   name: string;
//   type: string;
//   description: string;
//   address: {
//     street: string;
//     city: string;
//     state: string;
//     country: string;
//     zipCode: string;
//     coordinates?: {
//       latitude: number;
//       longitude: number;
//     };
//   };
//   contact: {
//     email: string;
//     phone: string;
//     website?: string;
//   };
//   amenities: string[];
//   images: string[];
//   rating: number;
//   policies: {
//     checkInTime: string;
//     checkOutTime: string;
//     cancellationPolicy: string;
//     childrenPolicy?: string;
//     petPolicy?: string;
//   };
//   status: 'active' | 'inactive' | 'maintenance';
// }

// interface HotelResponse {
//   status: string;
//   message: string;
//   description: string;
//   data: {
//     hotels: IHotel[];
//     pagination: {
//       page: number;
//       limit: number;
//       total: number;
//       pages: number;
//     };
//   };
// }

// interface GetHotelsArgs {
//   page?: number;
//   limit?: number;
//   search?: string;
//   status?: string;
//   sortField?: string;
//   sortOrder?: 'asc' | 'desc';
// }

// export const hotelApi = createApi({
//   reducerPath: 'hotelApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:5001/api/v1',
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ['Hotel'],
//   endpoints: (builder) => ({
//     getHotels: builder.query<HotelResponse, GetHotelsArgs>({
//       query: (params = {}) => ({
//         url: '/hotels',
//         method: 'GET',
//         params: {
//           page: params.page || 1,
//           limit: params.limit || 12,
//           search: params.search,
//           status: params.status,
//           sortField: params.sortField,
//           sortOrder: params.sortOrder,
//         },
//       }),
//       transformResponse: (response: HotelResponse) => response,
//       serializeQueryArgs: ({ queryArgs }) => {
//         const { page, ...rest } = queryArgs;
//         return rest;
//       },
//       merge: (currentCache, newItems, { arg }) => {
//         if (arg?.page === 1) {
//           return newItems;
//         }
//         return {
//           ...newItems,
//           data: {
//             ...newItems.data,
//             hotels: [
//               ...(currentCache.data.hotels || []),
//               ...newItems.data.hotels,
//             ],
//           },
//         };
//       },
//       forceRefetch: ({ currentArg, previousArg }) => {
//         return currentArg?.page !== previousArg?.page;
//       },
//       providesTags: ['Hotel'],
//     }),

//     getHotelById: builder.query<{ data: IHotel }, string>({
//       query: (id) => `/hotels/${id}`,
//       transformResponse: (response: { data: IHotel }) => response,
//       providesTags: (result, error, id) => [{ type: 'Hotel', id }],
//     }),

//     searchHotels: builder.query<HotelResponse, string>({
//       query: (searchTerm) => ({
//         url: '/hotels/search',
//         params: { query: searchTerm },
//       }),
//       transformResponse: (response: HotelResponse) => response,
//       providesTags: ['Hotel'],
//     }),

//     getHotelStats: builder.query<{ data: any }, void>({
//       query: () => '/hotels/stats',
//       transformResponse: (response: { data: any }) => response,
//     }),
//   }),
// });

// export const {
//   useGetHotelsQuery,
//   useGetHotelByIdQuery,
//   useSearchHotelsQuery,
//   useGetHotelStatsQuery,
// } = hotelApi;





import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface IHotel {
  _id: string;
  name: string;
  type: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  contact: {
    email: string;
    phone: string;
    website?: string;
  };
  amenities: string[];
  images: string[];
  rating: number;
  price: {  // Add this field
    amount: number;
    currency: string;
  };
  policies: {
    checkInTime: string;
    checkOutTime: string;
    cancellationPolicy: string;
    childrenPolicy?: string;
    petPolicy?: string;
  };
  status: 'active' | 'inactive' | 'maintenance';
}

interface HotelResponse {
  status: string;
  message: string;
  description: string;
  data: {
    hotels: IHotel[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
    filters?: {
      priceRange: {
        min: number;
        max: number;
      };
      availableAmenities: string[];
      locations: string[];
    };
  };
}

export interface GetHotelsArgs {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
  minPrice?: number;
  maxPrice?: number;
  amenities?: string[];
  city?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
}


// export const hotelApi = createApi({
//   reducerPath: 'hotelApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:5001/api/v1',
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ['Hotel', 'HotelList'],
//   keepUnusedDataFor: 300,
//   refetchOnMountOrArgChange: true,
//   refetchOnReconnect: true,
//   endpoints: (builder) => ({
//     getHotels: builder.query<HotelResponse, GetHotelsArgs>({
//       query: (params = {}) => ({
//         url: '/hotels',
//         method: 'GET',
//         params: {
//           page: params.page || 1,
//           limit: params.limit || 12,
//           search: params.search,
//           status: params.status,
//           sortField: params.sortField,
//           sortOrder: params.sortOrder,
//         },
//       }),
//       transformResponse: (response: HotelResponse) => response,
//       transformErrorResponse: (
//         response: FetchBaseQueryError | { status: number; data: unknown }
//       ) => {
//         return {
//           status: 'error',
//           error: (response as any).data?.message || 'An error occurred'
//         };
//       },
//       serializeQueryArgs: ({ queryArgs }) => {
//         const { page, ...rest } = queryArgs;
//         return rest;
//       },
//       merge: (currentCache, newItems, { arg }) => {
//         if (!arg?.page || arg.page === 1) {
//           return newItems;
//         }

//         const existingIds = new Set(currentCache.data.hotels.map(hotel => hotel._id));
//         const newUniqueHotels = newItems.data.hotels.filter(hotel => !existingIds.has(hotel._id));

//         return {
//           ...newItems,
//           data: {
//             ...newItems.data,
//             hotels: [...currentCache.data.hotels, ...newUniqueHotels],
//             pagination: newItems.data.pagination,
//           },
//         };
//       },
//       forceRefetch: ({ currentArg, previousArg, endpointState }) => {
//         // If no endpoint state exists, always fetch
//         if (!endpointState) return true;

//         // Check if arguments have changed
//         const hasArgChanged = 
//           currentArg?.page !== previousArg?.page ||
//           currentArg?.search !== previousArg?.search ||
//           currentArg?.sortField !== previousArg?.sortField ||
//           currentArg?.sortOrder !== previousArg?.sortOrder ||
//           currentArg?.status !== previousArg?.status;

//         if (hasArgChanged) return true;

//         // Check if we have a fulfilled timestamp
//         const lastFulfilled = endpointState.fulfilledTimeStamp ?? 0;
//         const dataAge = Date.now() - lastFulfilled;

//         // Refetch if data is older than 5 minutes
//         return dataAge > 300000;
//       },
//       providesTags: (result) =>
//         result
//           ? [
//               ...result.data.hotels.map(hotel => ({
//                 type: 'Hotel' as const,
//                 id: hotel._id
//               })),
//               { type: 'HotelList' as const, id: 'LIST' }
//             ]
//           : [{ type: 'HotelList' as const, id: 'LIST' }],
//     }),

export const hotelApi = createApi({
  reducerPath: 'hotelApi',
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
  tagTypes: ['Hotel', 'HotelList'],
  keepUnusedDataFor: 300,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getHotels: builder.query<HotelResponse, GetHotelsArgs>({
      query: (params = {}) => {
        console.log('params', params);
        const queryParams = new URLSearchParams();
        
        // Basic params
        queryParams.append('page', (params.page || 1).toString());
        queryParams.append('limit', (params.limit || 12).toString());
        if (params.status) queryParams.append('status', params.status);
        if (params.sortField) queryParams.append('sortField', params.sortField);
        if (params.sortOrder) queryParams.append('sortOrder', params.sortOrder);
        
        // Search and filters
        if (params.search) queryParams.append('search', params.search);
        if (params.city) queryParams.append('city', params.city);
        if (params.minPrice) queryParams.append('minPrice', params.minPrice.toString());
        if (params.maxPrice) queryParams.append('maxPrice', params.maxPrice.toString());
        if (params.amenities?.length) {
          queryParams.append('amenities', params.amenities.join(','));
        }
        if (params.checkIn) queryParams.append('checkIn', params.checkIn);
        if (params.checkOut) queryParams.append('checkOut', params.checkOut);
        if (params.adults) queryParams.append('adults', params.adults.toString());
        if (params.children) queryParams.append('children', params.children.toString());

        return {
          url: `/hotels/search?${queryParams.toString()}`,
          method: 'GET'
        };
      },
      transformResponse: (response: HotelResponse) => response,
      transformErrorResponse: (response: FetchBaseQueryError | { status: number; data: unknown }) => ({
        status: 'error',
        error: (response as any).data?.message || 'An error occurred'
      }),
      serializeQueryArgs: ({ queryArgs }) => {
        const { page, ...rest } = queryArgs;
        return rest;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (!arg?.page || arg.page === 1) {
          return newItems;
        }

        return {
          ...newItems,
          data: {
            ...newItems.data,
            hotels: [...currentCache.data.hotels, ...newItems.data.hotels],
            pagination: newItems.data.pagination,
            filters: newItems.data.filters
          },
        };
      },
      forceRefetch: ({ currentArg, previousArg, endpointState }) => {
        if (!endpointState) return true;

        const hasArgChanged = JSON.stringify(currentArg) !== JSON.stringify(previousArg);
        if (hasArgChanged) return true;

        const lastFulfilled = endpointState.fulfilledTimeStamp ?? 0;
        return Date.now() - lastFulfilled > 300000;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.hotels.map(hotel => ({
                type: 'Hotel' as const,
                id: hotel._id
              })),
              { type: 'HotelList' as const, id: 'LIST' }
            ]
          : [{ type: 'HotelList' as const, id: 'LIST' }],
    }),

    getHotelById: builder.query<{ data: IHotel }, string>({
      query: (id) => `/hotels/${id}`,
      transformResponse: (response: { data: IHotel }) => response,
      transformErrorResponse: (
        response: FetchBaseQueryError | { status: number; data: unknown }
      ) => {
        return {
          status: 'error',
          error: (response as any).data?.message || 'An error occurred'
        };
      },
      providesTags: (result, error, id) => [{ type: 'Hotel', id }],
    }),

    searchHotels: builder.query<HotelResponse, string>({
      query: (searchTerm) => ({
        url: '/hotels/search',
        params: { query: searchTerm },
      }),
      transformResponse: (response: HotelResponse) => response,
      transformErrorResponse: (
        response: FetchBaseQueryError | { status: number; data: unknown }
      ) => {
        return {
          status: 'error',
          error: (response as any).data?.message || 'An error occurred'
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.hotels.map(hotel => ({
                type: 'Hotel' as const,
                id: hotel._id
              })),
              { type: 'HotelList' as const, id: 'SEARCH' }
            ]
          : [{ type: 'HotelList' as const, id: 'SEARCH' }],
    }),

    getHotelStats: builder.query<{ data: any }, void>({
      query: () => '/hotels/stats',
      transformResponse: (response: { data: any }) => response,
      transformErrorResponse: (
        response: FetchBaseQueryError | { status: number; data: unknown }
      ) => {
        return {
          status: 'error',
          error: (response as any).data?.message || 'An error occurred'
        };
      },
      providesTags: ['HotelList'],
      keepUnusedDataFor: 600,
    }),

    createHotel: builder.mutation<{ data: IHotel }, FormData>({
      query: (data) => ({
        url: '/hotels',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'HotelList', id: 'LIST' }],
    }),

    updateHotel: builder.mutation<{ data: IHotel }, { id: string; data: FormData }>({
      query: ({ id, data }) => ({
        url: `/hotels/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Hotel', id },
        { type: 'HotelList', id: 'LIST' }
      ],
    }),

    deleteHotel: builder.mutation<void, string>({
      query: (id) => ({
        url: `/hotels/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Hotel', id },
        { type: 'HotelList', id: 'LIST' }
      ],
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelByIdQuery,
  useSearchHotelsQuery,
  useGetHotelStatsQuery,
  useCreateHotelMutation,
  useUpdateHotelMutation,
  useDeleteHotelMutation,
} = hotelApi;