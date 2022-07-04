import Link from "next/link";
import { Fragment } from "react";
import { IBlogsDetails } from "../../../interfaces/blogs";
import UIPaths from "../../../paths/uiPaths";
import { blogsDetails } from "../../../utils/blogs";

export const BlogSection = () => {
  return (
    <Fragment>
      {blogsDetails.map((blog: IBlogsDetails) => (
        <div key={blog.title}>
          <Link href={UIPaths.Blogs.GetSingleBlog(blog.path)}>
            {blog.title}
          </Link>
        </div>
      ))}
    </Fragment>
  );
};
