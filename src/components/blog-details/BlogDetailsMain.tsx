import React from "react";
import Breadcrumb from "../common/breadcrumb/BreadCrumb";
import BlogDetailsArea from "./BlogDetailsArea";
interface BlogDetailsWrapperProps {
  id: string;
}
const BlogDetailsMain = ({ id }: BlogDetailsWrapperProps) => {
  return (
    <>
      <Breadcrumb titleOne="Blog Details" titleTwo="Blog Details" />
      <BlogDetailsArea id={id} />
    </>
  );
};

export default BlogDetailsMain;
