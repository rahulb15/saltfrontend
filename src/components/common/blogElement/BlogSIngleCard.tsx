// import { imageLoader } from "@/hooks/image-loader";
// import { IBlogDataType } from "@/interFace/interFace";
// import RightArrowIcon from "@/svg/RightArrowIcon";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// interface IBlogPropsType {
//   item: IBlogDataType;
//   className: string;
//   blogWrapperClass: string;
//   isparentClass: boolean;
// }

// // col-xxl-4 col-xl-4 col-lg-4 col-md-6
// // blog-wrapper blog-default blog-style-six
// const BlogSIngleCard = ({
//   item,
//   className,
//   blogWrapperClass,
//   isparentClass,
// }: IBlogPropsType) => {
//   return (
//     <>
//       {isparentClass === true ? (
//         <>
//           <div className={className}>
//             <article className={blogWrapperClass}>
//               <div className="blog-thumb image-hover-effect">
//                 {/* <Link href={`/blog-details/${item?.id}`}> */}
//                 <Link href={`#`}>
//                   <Image
//                     src={item.img}
//                     loader={imageLoader}
//                     style={{ width: "100%", height: "auto" }}
//                     alt="image"
//                   />
//                 </Link>
//               </div>
//               <div className="blog-content">
//                 <div className="blog-meta-list">
//                   <div className="blog-meta-item has-seperator">
//                     <span className="meta-icon">
//                       <i className="icon-profile"></i>
//                     </span>
//                     <span className="meta-text">
//                       {/* <Link
//                         className="meta-author"
//                         href={`/blog-details/${item?.id}`}
//                       >
//                         {item.author}
//                       </Link> */}
//                       <Link
//                         className="meta-author"
//                         href={`#`}
//                       >
//                         {item.author}
//                       </Link>
//                     </span>
//                   </div>
//                   <div className="blog-meta-item">
//                     <span className="meta-icon">
//                       <i className="icon-cleander-check"></i>
//                     </span>
//                     <span className="meta-text">
//                       {/* <Link href={`/blog-details/${item?.id}`}>
//                         {item.calender}
//                       </Link> */}
//                         <Link
//                         className="meta-author"
//                         href={`#`}
//                       >
//                         {item.author}
//                       </Link>
//                     </span>
//                   </div>
//                 </div>
//                 <h5 className="blog-title mb-5 underline">
//                   {/* <Link href={`/blog-details/${item?.id}`}>{item.detail}</Link> */}
//                   <Link href={`#`}>{item.detail}</Link>
//                 </h5>
//                 <p>{item.description}</p>
//                 <div className="">
//                   <div className="icon-text-btn p-relative">
//                     <Link href={`#`}>
//                     {/* <Link href={`/blog-details/${item?.id}`}> */}
//                       <span>Read More </span>
//                       <i>
//                         <RightArrowIcon />
//                       </i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           </div>
//         </>
//       ) : (
//         <>
//           <article className={blogWrapperClass}>
//             <div className="blog-thumb image-hover-effect">
//               <Link href={`#`}>
//               {/* <Link href={`/blog-details/${item?.id}`}> */}
//                 <Image
//                   src={item.img}
//                   loader={imageLoader}
//                   style={{ width: "100%", height: "auto" }}
//                   alt="image"
//                 />
//               </Link>
//             </div>
//             <div className="blog-content">
//               <div className="blog-meta-list">
//                 <div className="blog-meta-item has-seperator">
//                   <span className="meta-icon">
//                     <i className="icon-profile"></i>
//                   </span>
//                   <span className="meta-text">
//                     <Link
//                       className="meta-author"
//                       href={`#`}
//                     >
//                       {item.author}
//                     </Link>
//                     {/* <Link
//                       className="meta-author"
//                       href={`/blog-details/${item?.id}`}
//                     >
//                       {item.author}
//                     </Link> */}
//                   </span>
//                 </div>
//                 <div className="blog-meta-item">
//                   <span className="meta-icon">
//                     <i className="icon-cleander-check"></i>
//                   </span>
//                   <span className="meta-text">
//                     {/* <Link href={`/blog-details/${item?.id}`}>
//                       {item.calender}
//                     </Link> */}
//                     <Link href={`#`}>
//                       {item.calender}
//                     </Link>
//                   </span>
//                 </div>
//               </div>
//               <h5 className="blog-title mb-5 underline">
//                 {/* <Link href={`/blog-details/${item?.id}`}>{item.detail}</Link> */}
//                 <Link href={`#`}>{item.detail}</Link>
//               </h5>
//               <p>{item.description}</p>
//               <div className="">
//                 <div className="icon-text-btn p-relative">
//                   {/* <Link href={`/blog-details/${item?.id}`}> */}
//                   <Link href={`#`}>
//                     <span>Read More </span>
//                     <i>
//                       <RightArrowIcon />
//                     </i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </article>
//         </>
//       )}
//     </>
//   );
// };

// export default BlogSIngleCard;



// components/common/blogElement/BlogSIngleCard.tsx
import { imageLoader } from "@/hooks/image-loader";
import RightArrowIcon from "@/svg/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from 'moment';

// Interface matching your API response
interface IBlogItem {
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
}

interface IBlogPropsType {
  item: any;
  className: string;
  blogWrapperClass: string;
  isparentClass: boolean;
}

const BlogSIngleCard: React.FC<IBlogPropsType> = ({
  item,
  className,
  blogWrapperClass,
  isparentClass,
}) => {
  return (
    <>
      {isparentClass ? (
        <div className={className}>
          <article className={blogWrapperClass}>
            <div className="blog-thumb image-hover-effect">
              <Link href={`/blog-details/${item.slug}`}>
                <Image
                  src={item.thumbnail}
                  loader={imageLoader}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                  alt={item.title}
                />
              </Link>
            </div>
            <div className="blog-content">
              <div className="blog-meta-list">
                <div className="blog-meta-item has-seperator">
                  <span className="meta-icon">
                    <i className="icon-profile"></i>
                  </span>
                  <span className="meta-text">
                    <Link
                      className="meta-author"
                      href={`/blog-details/${item.slug}`}
                    >
                      {item.source}
                    </Link>
                  </span>
                </div>
                <div className="blog-meta-item">
                  <span className="meta-icon">
                    <i className="icon-cleander-check"></i>
                  </span>
                  <span className="meta-text">
                    <Link href={`/blog-details/${item.slug}`}>
                      {moment(item.date).format('MMMM D YYYY')}
                    </Link>
                  </span>
                </div>
              </div>
              <h5 className="blog-title mb-5 underline">
                <Link href={`/blog-details/${item.slug}`}>
                  {item.title}
                </Link>
              </h5>
              <p>{item.description}</p>
              <div className="">
                <div className="icon-text-btn p-relative">
                  <Link href={`/blog-details/${item.slug}`}>
                    <span>Read More </span>
                    <i>
                      <RightArrowIcon />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : (
        <article className={blogWrapperClass}>
          <div className="blog-thumb image-hover-effect">
            <Link href={`/blog/${item.slug}`}>
              <Image
                src={item.thumbnail}
                loader={imageLoader}
                width={400}
                height={300}
                style={{ width: "100%", height: "auto" }}
                alt={item.title}
              />
            </Link>
          </div>
          <div className="blog-content">
            <div className="blog-meta-list">
              <div className="blog-meta-item has-seperator">
                <span className="meta-icon">
                  <i className="icon-profile"></i>
                </span>
                <span className="meta-text">
                  <Link
                    className="meta-author"
                    href={`/blog/${item.slug}`}
                  >
                    {item.source}
                  </Link>
                </span>
              </div>
              <div className="blog-meta-item">
                <span className="meta-icon">
                  <i className="icon-cleander-check"></i>
                </span>
                <span className="meta-text">
                  <Link href={`/blog/${item.slug}`}>
                    {moment(item.date).format('MMMM D YYYY')}
                  </Link>
                </span>
              </div>
            </div>
            <h5 className="blog-title mb-5 underline">
              <Link href={`/blog/${item.slug}`}>
                {item.title}
              </Link>
            </h5>
            <p>{item.description}</p>
            <div className="">
              <div className="icon-text-btn p-relative">
                <Link href={`/blog/${item.slug}`}>
                  <span>Read More </span>
                  <i>
                    <RightArrowIcon />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default BlogSIngleCard;