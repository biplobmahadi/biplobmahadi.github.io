import { createStyles } from "@mantine/core";

const useBlogsStyles = createStyles((theme) => ({
  containerClass: {
    margin: "3% 15%",
    [theme.fn.smallerThan("md")]: {
      margin: "2%",
    },
    [theme.fn.smallerThan("sm")]: {
      margin: "1%",
    },
  },
}));

export default useBlogsStyles;
