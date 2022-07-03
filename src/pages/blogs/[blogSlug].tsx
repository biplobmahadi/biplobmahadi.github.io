import { useRouter } from "next/router";
import { Fragment } from "react";
import { blogTitlesAndPaths } from "../../../blogs";
import { IBlogTitleAndPaths } from "../../interfaces/blogs";

const AllBlog = () => {
  const { query } = useRouter();
  const { blogSlug } = query;

  const renderedBlog = blogTitlesAndPaths.find((blog: IBlogTitleAndPaths) => {
    return blog.path === blogSlug;
  });
  const RenderedComponent = renderedBlog?.component;

  return (
    <Fragment>
      <h3>{renderedBlog?.title}</h3>
      {RenderedComponent && <RenderedComponent />}
    </Fragment>
  );
};
export default AllBlog;
