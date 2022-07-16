import Link from "next/link";
import { Fragment } from "react";
import { IBlogsDetails } from "../../interfaces/blogs";
import UIPaths from "../../paths/uiPaths";
import { blogsDetails } from "../../consts";
import { Card, SimpleGrid, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.01)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[4]),
    },
  },
}));

export const AllBlogs = () => {
  const { classes } = useStyles();

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
