import Link from 'next/link';
import SectionTitle from '../global/SectionTitle';

const BlogTwo = ({blogs}) => {
    return (
        <>
            <div className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape">
                <div className="wrapper pb--50 rbt-index-upper">
                    <div className="container">
                        <div className="row g-5 align-items-end mb--60">
                            <div className="col-lg-6 col-md-12 col-12">
                                <SectionTitle
                                    title="Latest News"
                                    titleClass="color-white"
                                    description="Learning communicate to global world and build a bright future and career development, increase your skill with our histudy."
                                    descriptionClass="description color-white-off mt--20"
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="load-more-btn text-start text-lg-end">
                                    <Link className="rbt-btn btn-border icon-hover radius-round color-white-off"
                                          href="/blog">
                                        <span className="btn-text">See All Articles</span>
                                        <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            {blogs?.slice(0, 3).map((post, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                                     data-sal-delay="150"
                                     data-sal="slide-up"
                                     data-sal-duration="800"
                                     key={`blog-post-${index}`}>
                                    <div className="rbt-card variation-02 rbt-hover card-minimal">
                                        <div className="rbt-card-body">
                                            <ul className="meta-list justify-content-start mb--30">
                                                <li className="list-item">
                                                    <i className="feather-clock"/>
                                                    <span>{post.postData.publishedAt}</span>
                                                </li>
                                            </ul>
                                            <h4 className="rbt-card-title">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.postData.title}
                                                </Link>
                                            </h4>
                                            <div className="rbt-card-bottom mt--40">
                                                <Link className="transparent-button" href={`/blog/${post.slug}`}>
                                                    Learn More
                                                    <i>
                                                        <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                            <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                                <path d="M10.614 0l5.629 5.629-5.63 5.629"/>
                                                                <path strokeLinecap="square" d="M.663 5.572h14.594"/>
                                                            </g>
                                                        </svg>
                                                    </i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogTwo;
