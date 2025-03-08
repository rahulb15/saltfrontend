import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import Blog from '@/components/blog';
const BlogPage = () => {
    return (
        <>
            <MetaData pageTitle="blog">
                <Wrapper>
                    <main>
                        <Blog/>
                    </main>
                </Wrapper>
            </MetaData>
        </>
    );
};

export default BlogPage;