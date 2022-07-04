import Link from "next/link";
import { Fragment } from "react";
import {
  IBlogSectionWithoutCurrent,
  IBlogTitleAndPaths,
} from "../../../interfaces/blogs";
import UIPaths from "../../../paths/uiPaths";
import { blogTitlesAndPaths } from "../../../utils/blogs";

export const BlogSectionWithoutCurrent = ({
  currentBlogTitle,
}: IBlogSectionWithoutCurrent) => {
  const blogTitlesAndPathsWithoutCurrent = blogTitlesAndPaths.filter(
    (blog: IBlogTitleAndPaths) => {
      return blog.title !== currentBlogTitle;
    }
  );
  return (
    <Fragment>
      {blogTitlesAndPathsWithoutCurrent.map((blog: IBlogTitleAndPaths) => (
        <div key={blog.title}>
          <Link href={UIPaths.Blogs.GetSingleBlog(blog.path)}>
            {blog.title}
          </Link>
        </div>
      ))}
    </Fragment>
  );
};
