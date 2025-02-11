// services/blogAPI.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export interface IBlogResponse {
//   id: string;
//   title: string;
//   description: string;
//   content: string;
//   thumbnail: string;
//   date: string;
//   author: string;
//   category: {
//     title: string;
//     slug: string;
//   };
//   source: string;
//   slug: string;
// }

export interface IBlogListResponse {
  status: string;
  message: string;
  data: {
    blogs: IBlogResponse[];
    pagination: {
      total: number;
      pages: number;
      currentPage: number;
      limit: number;
    };
  };
}


export interface IBlogItem {
    _id: string;
    user: string;
    url: string;
    title: string;
    slug: string;
    date: string;
    category: {
      title: string;
      slug: string;
    };
    description: string;
    thumbnail: string;
    content: string;
    source: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IBlogResponse {
    status: string;
    message: string;
    description: string;
    data: any;
  }

  export interface IRecentBlog {
    _id: string;
    title: string;
    thumbnail: string;
    createdAt: string;
    user: {
      _id: string;
      name: string;
    };
    slug: string;
  }

  export interface IRecentBlogsResponse {
    status: string;
    message: string;
    description: string;
    data: IRecentBlog[];
  }



const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Get all blogs
    getBlogs: builder.query<IBlogResponse, void>({
      query: () => '/blog/getAll/saltstayz',
    }),

    // Get blogs with pagination and search
    getBlogsList: builder.query<
      IBlogListResponse,
      { page?: number; limit?: number; search?: string }
    >({
      query: (params) => ({
        url: '/blog/getBlogList',
        params,
      }),
    }),

    // Get single blog by slug
    getBlogBySlug: builder.query<IBlogResponse, string>({
      query: (slug) => `/blog/${slug}`,
    }),

    // Create blog
    createBlog: builder.mutation<IBlogResponse, FormData>({
      query: (data) => ({
        url: '/blog',
        method: 'POST',
        body: data,
      }),
    }),

    // Update blog
    updateBlog: builder.mutation<
      IBlogResponse,
      { id: string; formData: FormData }
    >({
      query: ({ id, formData }) => ({
        url: `/blog/${id}`,
        method: 'PUT',
        body: formData,
      }),
    }),

    // Delete blog
    deleteBlog: builder.mutation<void, string>({
      query: (id) => ({
        url: `/blog/${id}`,
        method: 'DELETE',
      }),
    }),
    getRecentPosts: builder.query<IRecentBlogsResponse, void>({
        query: () => '/blog/recent-posts',
      }),

  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogsListQuery,
  useGetBlogBySlugQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetRecentPostsQuery
} = blogApi;