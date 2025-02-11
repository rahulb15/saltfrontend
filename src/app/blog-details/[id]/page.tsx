import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
const BlogDetailsDynamicPage = ({ params }: { params: { id: any } }) => {
  const id = params.id;
  console.log(id);
  return (
    <>
      <MetaData pageTitle="Blog Details">
        <Wrapper>
          <main>
            <BlogDetailsMain id={id} />
          </main>
        </Wrapper>
      </MetaData>
    </>
  );
};

export default BlogDetailsDynamicPage;
