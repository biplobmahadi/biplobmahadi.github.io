import Link from "next/link";
import { FC, Fragment } from "react";
import { IBlogsDetails } from "../../interfaces/blogs";
import UIPaths from "../../paths/uiPaths";
import { blogsDetails } from "../../consts";
import { Card, SimpleGrid, Text } from "@mantine/core";
import useAllBlogsStyles from "./hook/useAllBlogsStyles";

export const AllBlogs: FC = () => {
  const { classes } = useAllBlogsStyles();

  return (
    <Fragment>
      <div style={{ margin: "2% 5%" }}>
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: "sm", cols: 1, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {blogsDetails.map((blog: IBlogsDetails) => (
            <div key={blog.title}>
              <Link href={UIPaths.Blogs.GetSingleBlog(blog.path)}>
                <Card className={classes.card}>
                  <Text weight={700}>{blog.title}</Text>
                </Card>
              </Link>
            </div>
          ))}
        </SimpleGrid>
      </div>
    </Fragment>
  );
};
