import { Center } from "@mantine/core";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { BlogSectionWithoutCurrent } from "../../components/blogs";
import { IBlogsDetails } from "../../interfaces/blogs";
import { blogsDetails } from "../../utils/blogs";

const Blog = () => {
  const { query } = useRouter();
  const { slug } = query;

  const renderedBlog = blogsDetails.find((blog: IBlogsDetails) => {
    return blog.path === slug;
  });
  const RenderedComponent = renderedBlog?.component;

  return (
    <Fragment>
      <Head>
        <title>{renderedBlog?.title}</title>
      </Head>
      <Center>
        <h3>{renderedBlog?.title}</h3>
      </Center>
      {RenderedComponent && <RenderedComponent />}
      <Center>
        <BlogSectionWithoutCurrent
          currentBlogTitle={renderedBlog ? renderedBlog.title : ""}
        />
      </Center>
    </Fragment>
  );
};
export default Blog;
