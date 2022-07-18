import { createStyles } from "@mantine/core";

const useHeaderStyles = createStyles((theme) => ({
  inner: {
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  social: {
    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },
  burger: {
    marginRight: theme.spacing.md,
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default useHeaderStyles;
