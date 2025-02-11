// components/RecentPosts.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useGetRecentPostsQuery } from '@/services/blogAPI';
import { imageLoader } from '@/hooks/image-loader';

const RecentPosts = () => {
  const { data: recentPosts, isLoading, error } = useGetRecentPostsQuery();

  if (isLoading) {
    return <div className="footer-widget-post mt-30">Loading...</div>;
  }

  if (error || !recentPosts?.data) {
    return null;
  }

  return (
    <div className="footer-widget-post mt-30">
      {recentPosts.data.map((blog) => (
        <article key={blog._id} className="blog-wrapper blog-footer has-white mb-30">
          <div className="footer-blog-thumb image-hover-effect">
            <Link href={`/blog/${blog.slug}`}>
              <Image
                src={blog.thumbnail}
                loader={imageLoader}
                width={100}
                height={100}
                style={{ width: '100%', height: '100%' }}
                alt={blog.title}
              />
            </Link>
          </div>
          <div className="blog-content">
            <div className="blog-meta-list mb-10">
              <div className="blog-meta-item">
                <span className="meta-icon">
                  <i className="icon-person"></i>
                </span>
                <span className="meta-text">
                  By{' '}
                  <Link className="meta-author" href={`/blog/${blog.slug}`}>
                    {blog.user.name}
                  </Link>
                </span>
              </div>
              <div className="blog-meta-item">
                <span className="meta-icon">
                  <i className="icon-cleander-check"></i>
                </span>
                <span className="meta-text">
                  <Link className="meta-date" href={`/blog/${blog.slug}`}>
                    {blog.createdAt}
                  </Link>
                </span>
              </div>
            </div>
            <h6 className="blog-title white-text small underline-two">
              <Link href={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </h6>
          </div>
        </article>
      ))}
    </div>
  );
};

export default RecentPosts;