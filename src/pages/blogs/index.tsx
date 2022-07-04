import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { blogTitlesAndPaths } from "../../utils/blogs";
import { IBlogTitleAndPaths } from "../../interfaces/blogs";
import UIPaths from "../../paths/uiPaths";

const WelcomeToBlog = () => {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
      </Head>
      <h4>Welcome to my blog</h4>
      {blogTitlesAndPaths.map((blog: IBlogTitleAndPaths) => (
        <div key={blog.title}>
          <Link href={UIPaths.Blogs.GetSingleBlog(blog.path)}>
            {blog.title}
          </Link>
        </div>
      ))}
    </Fragment>
  );
};
export default WelcomeToBlog;
