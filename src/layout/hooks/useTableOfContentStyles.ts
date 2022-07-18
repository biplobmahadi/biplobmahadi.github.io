import { createStyles } from "@mantine/core";
import { INDICATOR_SIZE, LINK_HEIGHT } from "../../consts/tableOfContent";

const useTableOfContentStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: `${LINK_HEIGHT}px`,
    fontSize: theme.fontSizes.sm,
    height: LINK_HEIGHT,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
  },

  links: {
    position: "relative",
  },

  indicator: {
    transition: "transform 150ms ease",
    border: `2px solid ${
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7]
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: INDICATOR_SIZE,
    width: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE,
    position: "absolute",
    left: -INDICATOR_SIZE / 2 + 1,
  },
}));

export default useTableOfContentStyles;
