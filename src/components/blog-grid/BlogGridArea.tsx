"use client";
import { blogData } from "@/data/blog-data";
import React from "react";
import PaginationWrapper from "../shearedComponents/PaginationWrapper";
import BlogSIngleCard from "../common/blogElement/BlogSIngleCard";
import { useGetBlogsQuery, IBlogResponse } from "@/services/blogAPI";
const BlogGridArea: React.FC = () => {
    const { data: blogsData, isLoading, error } = useGetBlogsQuery();
  
  return (
    <>
      <div className="bd-blog-grid-area section-space">
        <div className="container">
          <div className="row gy-24">
          {blogsData?.data && blogsData.data.slice(0, 3).map((item:any) => (
            <BlogSIngleCard
              key={item._id}
              item={item}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow bdFadeInUp"
              blogWrapperClass="blog-wrapper blog-default blog-style-six"
              isparentClass={true}
            />
          ))}
          </div>
          <PaginationWrapper />
        </div>
      </div>
    </>
  );
};

export default BlogGridArea;
