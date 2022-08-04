import { createStyles } from "@mantine/core";

const useDocsStyles = createStyles((theme) => ({
  containerClass: {
    margin: "2% 15% 2% 10%",
    [theme.fn.smallerThan("md")]: {
      margin: "2%",
    },
    [theme.fn.smallerThan("sm")]: {
      margin: "1%",
    },
  },
}));

export default useDocsStyles;
