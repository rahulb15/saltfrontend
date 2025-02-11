// "use client";
// import { blogData } from "@/data/blog-data";
// import { imageLoader } from "@/hooks/image-loader";
// import RightArrowIcon from "@/svg/RightArrowIcon";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import BlogSIngleCard from "../common/blogElement/BlogSIngleCard";

// const BlogAreaFour = () => {
//   return (
//     <>
//       <section className="bd-blog-area section-space flash-white">
//         <div className="container">
//           <div className="row gy-24 align-items-center justify-content-center section-title-space">
//             <div className="col-xl-6 col-md-8">
//               <div className="section-title-wrapper text-center">
//                 <span className="section-subtitle mb-10">Our Blog</span>
//                 <h2 className="section-title">Blog For Hotels Updates</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row gy-24">
//             {blogData &&
//               blogData
//                 .slice(9, 12)
//                 .map((item) => (
//                   <BlogSIngleCard
//                     key={item?.id}
//                     item={item}
//                     className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow bdFadeInUp"
//                     blogWrapperClass="blog-wrapper blog-default blog-style-six"
//                     isparentClass={true}
//                   />
//                 ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogAreaFour;
// BlogAreaFour.tsx
"use client";
import { useGetBlogsQuery, IBlogResponse } from "@/services/blogAPI";
import React from "react";
import BlogSIngleCard from "../common/blogElement/BlogSIngleCard";

const BlogAreaFour: React.FC = () => {
  const { data: blogsData, isLoading, error } = useGetBlogsQuery();

  if (isLoading) {
    return (
      <div className="section-space flash-white">
        <div className="container">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-space flash-white">
        <div className="container">
          <div className="text-center text-danger">
            Error loading blogs. Please try again later.
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bd-blog-area section-space flash-white">
      <div className="container">
        <div className="row gy-24 align-items-center justify-content-center section-title-space">
          <div className="col-xl-6 col-md-8">
            <div className="section-title-wrapper text-center">
              <span className="section-subtitle mb-10">Our Blog</span>
              <h2 className="section-title">Blog For Hotels Updates</h2>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default BlogAreaFour;