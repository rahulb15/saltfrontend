// services/authAPI.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { RootState } from '@/redux/store';

interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface LoginRequest {
    email: string;
    password: string;
  }

interface AuthResponse {
  status: string;
  message: string;
  description: string;
  data: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    createdAt: string;
  };
  token: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    // baseUrl: 'http://localhost:5001/api/v1',
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api/v1',
    prepareHeaders: (headers, { getState }) => {
      // Get token from state
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // register: builder.mutation<AuthResponse, RegisterRequest>({
    //   query: (credentials) => ({
    //     url: '/user/register',
    //     method: 'POST',
    //     body: credentials,
    //   }),
    // }),
    login: builder.mutation<AuthResponse, LoginRequest>({
        query: (credentials) => ({
          url: '/user/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      register: builder.mutation<AuthResponse, RegisterRequest>({
        query: (credentials) => ({
          url: '/user/register',
          method: 'POST',
          body: credentials,
        }),
      }),
  }),
});

export const {useLoginMutation, useRegisterMutation } = authApi;