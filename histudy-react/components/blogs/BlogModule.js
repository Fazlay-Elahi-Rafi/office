import Link from 'next/link';
import {useEffect, useState} from 'react';
import BlogPostWidget from '../widgets/BlogPostWidget';
import BlogSidebar from './BlogSidebar';
import Pagination from '../pagination/Pagination';

const BlogModule = (
    {
        blogPosts,
        blogStyle = 'list',
        blogPerPage = 7
    }) => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const startIndex = (page - 1) * blogPerPage;
    const selectedBlogs = blogs.slice(startIndex, startIndex + blogPerPage);

    const handleClick = (num) => {
        setPage(num);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const getBlogs = () => {
            setBlogs(blogPosts);
            setTotalPages(Math.ceil(blogPosts.length / blogPerPage));
        };

        getBlogs();
    }, [blogPosts, setBlogs, setTotalPages, blogPerPage]);


    return (
        <>
            <div className="rbt-page-banner-wrapper">
                <div className="rbt-banner-image"/>
                <div className="rbt-banner-content">
                    <div className="rbt-banner-content-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right"/>
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">All Blog</li>
                                    </ul>
                                    <div className=" title-wrapper">
                                        <h1 className="title mb--0">All Blog</h1>
                                        <Link href="/blog-list" className="rbt-badge-2">
                                            <div className="image">🎉</div>
                                            {blogPosts.length} Articles
                                        </Link>
                                    </div>
                                    <p className="description">
                                        Blog that help beginner designers become true unicorns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">
                    {blogStyle === 'list' && (
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt_dec--30">
                                {selectedBlogs?.map((post, index) => (
                                    (index === 0 ? (
                                        <div className="col-12 mt--30" key={`blog-post-${index}`}>
                                            <BlogPostWidget
                                                post={post}
                                                postStyle="grid"
                                            />
                                        </div>
                                    ) : (
                                        <div key={`blog-post-${index}`}>
                                            <BlogPostWidget
                                                post={post}
                                            />
                                        </div>
                                    ))
                                ))}
                            </div>
                        </div>
                    )}

                    {blogStyle === 'default' && (
                        <>
                            <div className="row g-5">
                                {selectedBlogs?.map((post, index) => (
                                    (index === 0 && (
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12"
                                             key={`blog-post-${index}`}>
                                            <BlogPostWidget
                                                post={post}
                                                postStyle="grid"
                                            />
                                        </div>
                                    ))
                                ))}

                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-0"
                                     data-sal-delay="150"
                                     data-sal="slide-up"
                                     data-sal-duration="800">
                                    {selectedBlogs?.slice(1, 4).map((post, index) => (
                                        <div key={`blog-post-${index}`}>
                                            <BlogPostWidget
                                                post={post}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="row g-5 mt--15">
                                {selectedBlogs?.slice(4).map((post, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12"
                                         key={`blog-post-${index}`}>
                                        <BlogPostWidget
                                            post={post}
                                            postStyle="grid"
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {blogStyle === 'grid-minimal' && (
                        <div className="row g-5">
                            {selectedBlogs?.map((post, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12"
                                     key={`blog-post-${index}`}>
                                    <BlogPostWidget
                                        post={post}
                                        postStyle="grid-minimal"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {blogStyle === 'blog-with-sidebar' && (
                        <div className="row row--30 gy-5">
                            <div className="col-lg-8">
                                <div className="row g-5">
                                    {selectedBlogs?.map((post, index) => (
                                        <div className="col-lg-6 col-md-6 col-12"
                                             key={`blog-post-${index}`}>
                                            <BlogPostWidget
                                                post={post}
                                                postStyle="grid-style-2"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt--60">
                                        <Pagination
                                            totalPages={totalPages}
                                            pageNumber={page}
                                            handleClick={handleClick}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <BlogSidebar posts={blogPosts}/>
                            </div>
                        </div>
                    )}

                    {blogStyle !== 'blog-with-sidebar' && (
                        <div className="row">
                            <div className="col-lg-12 mt--60">
                                <Pagination
                                    totalPages={totalPages}
                                    pageNumber={page}
                                    handleClick={handleClick}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default BlogModule;