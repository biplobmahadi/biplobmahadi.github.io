import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { blogTitlesAndPaths } from "../../utils/blogs";
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
      <Head>
        <title>{renderedBlog?.title}</title>
      </Head>
      <h3>{renderedBlog?.title}</h3>
      {RenderedComponent && <RenderedComponent />}
    </Fragment>
  );
};
export default AllBlog;
