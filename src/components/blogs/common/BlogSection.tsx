import Link from "next/link";
import { Fragment } from "react";
import { IBlogTitleAndPaths } from "../../../interfaces/blogs";
import UIPaths from "../../../paths/uiPaths";
import { blogTitlesAndPaths } from "../../../utils/blogs";

export const BlogSection = () => {
  return (
    <Fragment>
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
