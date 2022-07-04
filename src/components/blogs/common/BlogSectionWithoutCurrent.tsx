import Link from "next/link";
import { Fragment } from "react";
import {
  IBlogsDetails,
  IBlogSectionWithoutCurrent,
} from "../../../interfaces/blogs";
import UIPaths from "../../../paths/uiPaths";
import { blogsDetails } from "../../../utils/blogs";

export const BlogSectionWithoutCurrent = ({
  currentBlogTitle,
}: IBlogSectionWithoutCurrent) => {
  const blogTitlesAndPathsWithoutCurrent = blogsDetails.filter(
    (blog: IBlogsDetails) => {
      return blog.title !== currentBlogTitle;
    }
  );
  return (
    <Fragment>
      {blogTitlesAndPathsWithoutCurrent.map((blog: IBlogsDetails) => (
        <div key={blog.title}>
          <Link href={UIPaths.Blogs.GetSingleBlog(blog.path)}>
            {blog.title}
          </Link>
        </div>
      ))}
    </Fragment>
  );
};
