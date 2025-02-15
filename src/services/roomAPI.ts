import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IRoom {
    _id: string;
    hotelId: string;
    roomNumber: string;
    name: string;
    roomName: string;
    roomDescription: string;
    type: string;
    capacity: {
        baseAdults: number;
        maxAdults: number;
        baseChildren: number;
        maxChildren: number;
    };
    amenities: Array<{
        id: string;
        name: string;
        icon: string;
    }>;
    images: {
        mainImage: string;
        additionalImages: string[];
    };
    pricing: {
        basePrice: number;
        rackRate: number;
        currency: string;
        deals?: {
            type: string;
            value: number;
            unit: string;
        };
    };
    availability: {
        status: 'available' | 'booked' | 'maintenance';
        unavailableDates: Date[];
        availableRooms: Record<string, number>;
        minAvailableRooms?: number;
    };
    size: {
        value: number;
        unit: 'sqft' | 'sqm';
    };
    bedConfiguration: Array<{
        type: string;
        count: number;
    }>;
    policies: {
        checkInTime: string;
        checkOutTime: string;
        cancellationPolicy: string;
    };
    status: 'active' | 'inactive' | 'maintenance';
}

interface RoomResponse {
    status: string;
    message: string;
    data: {
        rooms: IRoom[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    };
}

interface RoomListingsResponse {
    status: string;
    message: string;
    data: {
        hotel: {
            id: string;
            name: string;
            code: string;
        };
        rooms: any[]; // Type from external API
    };
}

interface GetRoomsArgs {
    page?: number;
    limit?: number;
    sortField?: string;
    sortOrder?: 'asc' | 'desc';
    searchQuery?: string;
    hotelId?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
}

interface GetRoomListingsArgs {
    hotelId: string;
    check_in_date: string;
    check_out_date: string;
    number_adults: number;
    number_children?: number;
    promotion_code?: string;
}

interface CheckAvailabilityArgs {
    roomId: string;
    startDate: string;
    endDate: string;
}

export const roomApi = createApi({
    reducerPath: 'roomApi',
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
    tagTypes: ['Room'],
    endpoints: (builder) => ({
        getRooms: builder.query<RoomResponse, GetRoomsArgs>({
            query: (params = {}) => ({
                url: '/room',
                method: 'GET',
                params: {
                    page: params.page || 1,
                    limit: params.limit || 10,
                    sortField: params.sortField,
                    sortOrder: params.sortOrder,
                    search: params.searchQuery,
                    hotelId: params.hotelId,
                    status: params.status,
                    minPrice: params.minPrice,
                    maxPrice: params.maxPrice,
                },
            }),
            transformResponse: (response: RoomResponse) => response,
            serializeQueryArgs: ({ queryArgs }) => {
                const { page, ...rest } = queryArgs;
                return rest;
            },
            merge: (currentCache, newItems, { arg }) => {
                if (arg?.page === 1) {
                    return newItems;
                }
                return {
                    ...newItems,
                    data: {
                        ...newItems.data,
                        rooms: [
                            ...(currentCache.data.rooms || []),
                            ...newItems.data.rooms,
                        ],
                    },
                };
            },
            forceRefetch: ({ currentArg, previousArg }) => {
                return currentArg?.page !== previousArg?.page;
            },
            providesTags: ['Room'],
        }),

        getRoomById: builder.query<{ data: IRoom }, string>({
            query: (id) => `/room/${id}`,
            transformResponse: (response: { data: IRoom }) => response,
            providesTags: (result, error, id) => [{ type: 'Room', id }],
        }),

        getRoomsByHotel: builder.query<RoomResponse, { hotelId: string; page?: number; limit?: number }>({
            query: ({ hotelId, page = 1, limit = 10 }) => ({
                url: `/room/hotel/${hotelId}`,
                params: { page, limit },
            }),
            transformResponse: (response: RoomResponse) => response,
            providesTags: ['Room'],
        }),

        getRoomListings: builder.query<RoomListingsResponse, GetRoomListingsArgs>({
            query: (params) => ({
                url: `/room/compare-listings/${params.hotelId}`,
                params: {
                    check_in_date: params.check_in_date,
                    check_out_date: params.check_out_date,
                    number_adults: params.number_adults,
                    number_children: params.number_children || 0,
                    promotion_code: params.promotion_code || ''
                },
            }),
            transformResponse: (response: RoomListingsResponse) => response,
            providesTags: ['Room'],
        }),

        checkAvailability: builder.query<{ data: { isAvailable: boolean } }, CheckAvailabilityArgs>({
            query: ({ roomId, startDate, endDate }) => ({
                url: `/room/${roomId}/availability`,
                params: { startDate, endDate },
            }),
            transformResponse: (response: { data: { isAvailable: boolean } }) => response,
        }),

        // Mutations for admin operations
        createRoom: builder.mutation<{ data: IRoom }, FormData>({
            query: (data) => ({
                url: '/room',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Room'],
        }),

        updateRoom: builder.mutation<{ data: IRoom }, { id: string; data: FormData }>({
            query: ({ id, data }) => ({
                url: `/room/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Room', id }],
        }),

        deleteRoom: builder.mutation<void, string>({
            query: (id) => ({
                url: `/room/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Room'],
        }),

        updateRoomStatus: builder.mutation<{ data: IRoom }, { id: string; status: string }>({
            query: ({ id, status }) => ({
                url: `/room/${id}/status`,
                method: 'PATCH',
                body: { status },
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Room', id }],
        }),

        bulkDeleteRooms: builder.mutation<{ data: { deletedCount: number } }, string[]>({
            query: (ids) => ({
                url: '/room/bulk-delete',
                method: 'POST',
                body: { ids },
            }),
            invalidatesTags: ['Room'],
        }),
    }),
});

export const {
    useGetRoomsQuery,
    useGetRoomByIdQuery,
    useGetRoomsByHotelQuery,
    useGetRoomListingsQuery,
    useCheckAvailabilityQuery,
    useCreateRoomMutation,
    useUpdateRoomMutation,
    useDeleteRoomMutation,
    useUpdateRoomStatusMutation,
    useBulkDeleteRoomsMutation,
} = roomApi;