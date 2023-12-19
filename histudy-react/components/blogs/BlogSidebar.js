import Link from 'next/link';
import Image from 'next/image';
import {getTags, sortingByLikes} from '../../helpers/utilities';

const BlogSidebar = ({posts}) => {
    const blogsByLikes = sortingByLikes(posts);
    const blogTags = getTags(posts);

    return (
        <>
            <aside className="rbt-sidebar-widget-wrapper rbt-gradient-border">
                <div className="rbt-single-widget rbt-widget-search">
                    <div className="inner">
                        <form action="#" className="rbt-search-style-1">
                            <input type="text" placeholder="Search Courses"/>
                            <button className="search-btn">
                                <i className="feather-search"/>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="rbt-single-widget rbt-widget-recent">
                    <div className="inner">
                        <h4 className="rbt-widget-title">Recent Post</h4>
                        <ul className="rbt-sidebar-list-wrapper recent-post-list">
                            {posts?.slice(0, 4).map((recentPost, recentPostIndex) => (
                                <li key={`recent-post-${recentPostIndex}`}>
                                    <div className="thumbnail">
                                        <Link href={`/blog/${recentPost.postData.id}`}>
                                            <Image
                                                width={450}
                                                height={267}
                                                src={recentPost.postData.thumbnail.large}
                                                alt={recentPost.postData.title}
                                            />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">
                                            <Link href={`/blog/${recentPost.postData.id}`}>
                                                {recentPost.postData.title}
                                            </Link>
                                        </h6>
                                        <ul className="rbt-meta">
                                            <li>
                                                <i className="feather-clock"/>
                                                {recentPost.postData.publishedAt}
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="rbt-single-widget rbt-widget-recent">
                    <div className="inner">
                        <h4 className="rbt-widget-title">Popular Post</h4>
                        <ul className="rbt-sidebar-list-wrapper recent-post-list">
                            {blogsByLikes?.slice(-4).reverse().map((popularPost, popularPostIndex) => (
                                <li key={`recent-post-${popularPostIndex}`}>
                                    <div className="thumbnail">
                                        <Link href={`/blog/${popularPost.id}`}>
                                            <Image
                                                width={450}
                                                height={267}
                                                src={popularPost.postData.thumbnail.large}
                                                alt={popularPost.postData.title}
                                            />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">
                                            <Link href={`/blog/${popularPost.postData.id}`}>
                                                {popularPost.postData.title}
                                            </Link>
                                        </h6>
                                        <ul className="rbt-meta">
                                            <li>
                                                <i className="feather-clock"/>
                                                {popularPost.postData.publishedAt}
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="rbt-single-widget rbt-widget-tag">
                    <div className="inner">
                        <h4 className="rbt-widget-title">Tags</h4>
                        <div className="rbt-sidebar-list-wrapper rbt-tag-list">
                            {blogTags?.map((tag, tagIndex) => (
                                <Link href={`/blog/tag/${tag.slug}`}
                                      key={`tag-${tagIndex}`}>
                                    {tag.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default BlogSidebar;