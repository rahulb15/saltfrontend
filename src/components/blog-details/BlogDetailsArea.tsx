import React from "react";
import BlogDetailsWrapper from "../shearedComponents/BlogDetailsWrapper";
interface BlogDetailsWrapperProps {
  id: string;
}
const BlogDetailsArea = ({ id }: BlogDetailsWrapperProps) => {
  return (
    <>
      <section className="bd-blog-details-area section-space">
        <div className="container">
          <div className="row gy-24 justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <BlogDetailsWrapper id={id} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;
