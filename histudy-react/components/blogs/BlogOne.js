import Link from 'next/link';
import SectionTitle from '../global/SectionTitle';
import BlogPostWidget from '../widgets/BlogPostWidget';

const BlogOne = ({blogs}) => {
    return (
        <>
            <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
                <div className="container">
                    <div className="row g-5 align-items-center mb--30">
                        <div className="col-lg-6 col-md-6 col-12">
                            <SectionTitle
                                title="Post Popular Post."
                                subtitle="Blog Post"
                                subtitleColor="bg-pink-opacity"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="read-more-btn text-start text-md-end">
                                <Link className="rbt-btn btn-gradient hover-icon-reverse" href="/blog">
                                    <div className="icon-reverse-wrapper">
                                        <span className="btn-text">See All Articles</span>
                                        <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                        <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        {blogs?.map((post, index) => (
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
                            {blogs?.slice(1, 4).map((post, index) => (
                                <div key={`blog-post-${index}`}>
                                    <BlogPostWidget
                                        post={post}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlogOne;
