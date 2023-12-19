import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {marked} from 'marked';
import Head from 'next/head';
import Layout from '../../components/layouts/Layout';
import Image from "next/image";
import Link from "next/link";

const BlogDetails = ({blogData, slug, content, allPosts}) => {
    const getAuthorInfo = (id, type) => {
        const author = AuthorData.find((author) => {
            return author.id === id;
        });

        if (type === "name") {
            return author.name;
        } else if (type === "avatar") {
            return author.avatar;
        } else if (type === "message") {
            return author.message;
        } else if (type === "socialLinks") {
            return author.socialLinks;
        }
    };

    return (
        <>
            <Head>
                <title>Blog Details - Online Courses & Education Bootstrap5 Template</title>
            </Head>

            <Layout>
                <div className="rbt-overlay-page-wrapper">
                    <div className="breadcrumb-image-container breadcrumb-style-max-width">
                        <div className="breadcrumb-image-wrapper">
                            <Image
                                width={1920}
                                height={1408}
                                src="/images/bg/bg-image-10.jpg"
                                alt="Background image"
                                priority
                            />
                        </div>
                        <div className="breadcrumb-content-top text-center">
                            <ul className="meta-list justify-content-center mb--10">
                                <li className="list-item">
                                    <div className="author-thumbnail">
                                        <Image
                                            width={494}
                                            height={494}
                                            src="/images/testimonial/client-06.png"
                                            alt="blog-image"
                                        />
                                    </div>
                                    <div className="author-info">
                                        <a href="#"><strong>Jone Song</strong></a> in
                                        <a href="#"><strong>Design</strong></a>
                                    </div>
                                </li>
                                <li className="list-item">
                                    <i className="feather-clock"/>
                                    <span>20 Aug 2021</span>
                                </li>
                            </ul>
                            <h1 className="title">
                                {blogData.title}
                            </h1>
                            <p>
                                {blogData.excerpt}
                            </p>
                        </div>
                    </div>

                    <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
                        <div className="blog-content-wrapper rbt-article-content-wrapper">
                            <div className="content">
                                <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                                    <figure>
                                        <Image
                                            width={1085}
                                            height={645}
                                            src={blogData.thumbnail.large}
                                            alt={blogData.title}
                                        />
                                        <figcaption>
                                            Business and core management app are for enterprise.
                                        </figcaption>
                                    </figure>
                                </div>
                                <p>{blogData.description}</p>

                                <blockquote className="wp-block-quote">
                                    <p>
                                        {blogData.blockquote}
                                    </p>
                                    <cite>
                                        <a href="https://themeforest.net/user/rainbow-themes/portfolio">Mark Twain</a>
                                    </cite>
                                </blockquote>

                                <div className="wp-block-gallery columns-3 is-cropped">
                                    <ul className="blocks-gallery-grid">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <Image
                                                    width={255}
                                                    height={143}
                                                    className="radius-4"
                                                    src="/images/blog/blog-gallery-01.jpg"
                                                    alt="Blog Images"
                                                />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <Image
                                                    width={255}
                                                    height={143}
                                                    className="radius-4"
                                                    src="/images/blog/blog-gallery-02.jpg"
                                                    alt="Blog Images"
                                                />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <Image
                                                    width={255}
                                                    height={143}
                                                    className="radius-4"
                                                    src="/images/blog/blog-gallery-03.jpg"
                                                    alt="Blog Images"
                                                />
                                            </figure>
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    dangerouslySetInnerHTML={{__html: marked(content)}}
                                />

                                <div className="tagcloud mt--30">
                                    {blogData.tags?.map((tag, tagIndex) => (
                                        <a href="#" className="text-capitalize" key={`tag-${tagIndex}`}>
                                            {tag}
                                        </a>
                                    ))}
                                </div>

                                <div className="social-share-block">
                                    <div className="post-like">
                                        <a href="#">
                                            <i className="feather feather-thumbs-up"/>
                                            <span>{blogData.likes}k Like</span>
                                        </a>
                                    </div>
                                    <ul className="social-icon social-default transparent-with-border">
                                        <li>
                                            <a href="https://www.facebook.com/">
                                                <i className="feather-facebook"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com">
                                                <i className="feather-twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <i className="feather-instagram"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkdin.com/">
                                                <i className="feather-linkedin"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="about-author">
                                    <div className="media">
                                        <div className="thumbnail">
                                            <a href="#">
                                                <Image
                                                    width={494}
                                                    height={494}
                                                    src="/images/testimonial/testimonial-4.jpg"
                                                    alt="Author Images"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div className="author-info">
                                                <h5 className="title">
                                                    <Link className="hover-flip-item-wrapper" href="#">
                                                        Farjana Bawnia
                                                    </Link>
                                                </h5>
                                                <span className="b3 subtitle">Sr. UX Designer</span>
                                            </div>
                                            <div className="content">
                                                <p className="description">
                                                    At 29 years old, my favorite compliment is being told that I look
                                                    like my mom. Seeing myself in her image, like this daughter up top.
                                                </p>
                                                <ul className="social-icon social-default icon-naked justify-content-start">
                                                    <li>
                                                        <a href="https://www.facebook.com/">
                                                            <i className="feather-facebook"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.twitter.com">
                                                            <i className="feather-twitter"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/">
                                                            <i className="feather-instagram"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.linkdin.com/">
                                                            <i className="feather-linkedin"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rbt-comment-area">
                                    <div className="rbt-total-comment-post">
                                        <div className="title">
                                            <h4 className="mb--0">30+ Comments</h4>
                                        </div>
                                        <div className="add-comment-button">
                                            <a className="rbt-btn btn-gradient icon-hover radius-round btn-md" href="#">
                                                <span className="btn-text">Add Your Comment</span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right"/>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="comment-respond">
                                        <h4 className="title">Post a Comment</h4>
                                        <form action="#">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked <span className="required">*</span>
                                            </p>
                                            <div className="row row--10">
                                                <div className="col-lg-4 col-md-4 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Your Name</label>
                                                        <input id="name" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="bl-email">Your Email</label>
                                                        <input id="bl-email" type="email"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="website">Your Website</label>
                                                        <input id="website" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="message">Leave a Reply</label>
                                                        <textarea id="message" name="message"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <p className="comment-form-cookies-consent">
                                                        <input
                                                            id="wp-comment-cookies-consent"
                                                            name="wp-comment-cookies-consent"
                                                            type="checkbox"
                                                            value="yes"
                                                        />
                                                        <label htmlFor="wp-comment-cookies-consent">
                                                            Save my name, email, and website in this browser for the
                                                            next time I comment.
                                                        </label>
                                                    </p>
                                                </div>
                                                <div className="col-lg-12">
                                                    <a className="rbt-btn btn-gradient icon-hover radius-round btn-md"
                                                       href="#">
                                                        <span className="btn-text">Post Comment</span>
                                                        <span className="btn-icon">
                                                            <i className="feather-arrow-right"/>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="rbt-comment-area">
                                    <h4 className="title">2 comments</h4>
                                    <ul className="comment-list">
                                        <li className="comment">
                                            <div className="comment-body">
                                                <div className="single-comment">
                                                    <div className="comment-img">
                                                        <Image
                                                            width={494}
                                                            height={494}
                                                            src="/images/testimonial/testimonial-1.jpg"
                                                            alt="Author Images"
                                                        />
                                                    </div>
                                                    <div className="comment-inner">
                                                        <h6 className="commenter">
                                                            <a href="#">Cameron Williamson</a>
                                                        </h6>
                                                        <div className="comment-meta">
                                                            <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
                                                            <div className="reply-edit">
                                                                <div className="reply">
                                                                    <a className="comment-reply-link" href="#">Reply</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p className="b2">
                                                                Duis hendrerit velit scelerisque felis tempus, id porta
                                                                libero venenatis. Nulla facilisi. Phasellus viverra
                                                                magna commodo dui lacinia tempus. Donec malesuada nunc
                                                                non dui posuere, fringilla vestibulum urna mollis.
                                                                Integer condimentum ac sapien quis maximus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="single-comment">
                                                            <div className="comment-img">
                                                                <Image
                                                                    width={494}
                                                                    height={494}
                                                                    src="/images/testimonial/testimonial-2.jpg"
                                                                    alt="Author Images"
                                                                />
                                                            </div>
                                                            <div className="comment-inner">
                                                                <h6 className="commenter">
                                                                    <a href="#">John Due</a>
                                                                </h6>
                                                                <div className="comment-meta">
                                                                    <div className="time-spent">Nov 23, 2018 at 12:23 pm
                                                                    </div>
                                                                    <div className="reply-edit">
                                                                        <div className="reply">
                                                                            <a className="comment-reply-link"
                                                                               href="#">Reply</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-text">
                                                                    <p className="b2">
                                                                        Pellentesque habitant morbi
                                                                        tristique senectus et netus et malesuada fames
                                                                        ac turpis egestas. Suspendisse lobortis cursus
                                                                        lacinia. Vestibulum vitae leo id diam
                                                                        pellentesque ornare.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment">
                                            <div className="comment-body">
                                                <div className="single-comment">
                                                    <div className="comment-img">
                                                        <Image
                                                            width={494}
                                                            height={494}
                                                            src="/images/testimonial/testimonial-3.jpg"
                                                            alt="Author Images"
                                                        />
                                                    </div>
                                                    <div className="comment-inner">
                                                        <h6 className="commenter">
                                                            <a href="#">Rafin Shuvo</a>
                                                        </h6>
                                                        <div className="comment-meta">
                                                            <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
                                                            <div className="reply-edit">
                                                                <div className="reply">
                                                                    <a className="comment-reply-link" href="#">Reply</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p className="b2">
                                                                Duis hendrerit velit scelerisque felis
                                                                tempus, id porta
                                                                libero venenatis. Nulla facilisi. Phasellus viverra
                                                                magna commodo dui lacinia tempus. Donec malesuada nunc
                                                                non dui posuere, fringilla vestibulum urna mollis.
                                                                Integer condimentum ac sapien quis maximus.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="related-post pt--60">
                                <div className="section-title text-start mb--40">
                                    <span className="subtitle bg-primary-opacity">Related Post</span>
                                    <h4 className="title">Similar Post</h4>
                                </div>
                                <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                                    <div className="rbt-card-img">
                                        <a href="blog-details.html">
                                            <Image width={290} height={150} src="/images/blog/blog-card-02.jpg"
                                                   alt="Card image"/>
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title">
                                            <a href="blog-details.html">Why Is Education So
                                                Famous?
                                            </a>
                                        </h5>
                                        <div className="rbt-card-bottom">
                                            <a className="transparent-button" href="blog-details.html">Read
                                                Article<i>
                                                    <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                        <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                            <path d="M10.614 0l5.629 5.629-5.63 5.629"/>
                                                            <path strokeLinecap="square" d="M.663 5.572h14.594"/>
                                                        </g>
                                                    </svg>
                                                </i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                                    <div className="rbt-card-img">
                                        <a href="blog-details.html">
                                            <Image width={290} height={150} src="/images/blog/blog-card-03.jpg"
                                                   alt="Card image"/> </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title"><a href="blog-details.html">Difficult Things
                                            About
                                            Education.</a></h5>
                                        <div className="rbt-card-bottom">
                                            <a className="transparent-button" href="blog-details.html">Read
                                                Article<i>
                                                    <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                        <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                            <path d="M10.614 0l5.629 5.629-5.63 5.629"/>
                                                            <path strokeLinecap="square" d="M.663 5.572h14.594"/>
                                                        </g>
                                                    </svg>
                                                </i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                                    <div className="rbt-card-img">
                                        <a href="blog-details.html">
                                            <Image
                                                width={290}
                                                height={150}
                                                src="/images/blog/blog-card-04.jpg"
                                                   alt="Card image"/>
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title"><a href="blog-details.html">Education Is So
                                            Famous, But
                                            Why?</a></h5>
                                        <div className="rbt-card-bottom">
                                            <a className="transparent-button" href="blog-details.html">Read
                                                Article<i>
                                                    <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                        <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                            <path d="M10.614 0l5.629 5.629-5.63 5.629"/>
                                                            <path strokeLinecap="square" d="M.663 5.572h14.594"/>
                                                        </g>
                                                    </svg>
                                                </i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row g-3">
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="instagram-grid">
                                <a href="#">
                                    <Image
                                        width={384}
                                        height={434}
                                        src="/images/instagram/instagram-01.jpg"
                                        alt="instagram"
                                    />
                                    <span className="user-info">
                                        <span className="icon"><i className="icon-instagram"/></span>
                                        <span className="user-name">@Histudy</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="instagram-grid">
                                <a href="#">
                                    <Image width={384}
                                           height={434}
                                           src="/images/instagram/instagram-02.jpg"
                                           alt="instagram"
                                    />
                                    <span className="user-info">
                                        <span className="icon"><i className="icon-instagram"/></span>
                                        <span className="user-name">@Histudy</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="instagram-grid">
                                <a href="#">
                                    <Image
                                        width={384}
                                        height={434}
                                        src="/images/instagram/instagram-03.jpg"
                                        alt="instagram"
                                    />
                                    <span className="user-info">
                                        <span className="icon"><i className="icon-instagram"/></span>
                                        <span className="user-name">@Histudy</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="instagram-grid">
                                <a href="#">
                                    <Image
                                        width={384}
                                        height={434}
                                        src="/images/instagram/instagram-04.jpg"
                                        alt="instagram"
                                    />
                                    <span className="user-info">
                                        <span className="icon"><i className="icon-instagram"/></span>
                                        <span className="user-name">@Histudy</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="instagram-grid">
                                <a href="#">
                                    <Image
                                        width={384}
                                        height={434}
                                        src="/images/instagram/instagram-05.jpg"
                                        alt="instagram"
                                    />
                                    <span className="user-info">
                                        <span className="icon"><i className="icon-instagram"/></span>
                                        <span className="user-name">@Histudy</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="instagram-grid">
                                <a href="#">
                                    <Image
                                        width={384}
                                        height={434}
                                        src="/images/instagram/instagram-06.jpg"
                                        alt="instagram"
                                    />
                                    <span className="user-info">
                                        <span className="icon"><i className="icon-instagram"/></span>
                                        <span className="user-name">@Histudy</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default BlogDetails;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("data/posts"));
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(
        path.join("data/posts", `${slug}.md`),
        "utf-8"
    );

    const {data: blogData, content} = matter(markdownWithMeta);

    const files = fs.readdirSync(path.join("data/posts"));
    const allPosts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join("data/posts", filename),
            "utf-8"
        );

        const blogSlug = filename.replace(".md", "");
        const {data: postData} = matter(markdownWithMeta);

        return {
            slug: blogSlug,
            postData,
        };
    });

    return {
        props: {
            blogData,
            slug,
            content,
            allPosts,
        },
    };
}