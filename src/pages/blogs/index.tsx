import Link from "next/link";
import { Fragment } from "react";
import { blogTitlesAndPaths } from "../../../blogs";
import { IBlogTitleAndPaths } from "../../interfaces/blogs";

const WelcomeToBlog = () => {
  return (
    <Fragment>
      <h4>Welcome to my blog</h4>
      {blogTitlesAndPaths.map((blog: IBlogTitleAndPaths) => (
        <div key={blog.title}>
          <Link href={`/${blog.path}`}>{blog.title}</Link>
        </div>
      ))}
    </Fragment>
  );
};
export default WelcomeToBlog;
