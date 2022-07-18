import { createStyles } from "@mantine/core";

const useNavbarLinksGroupStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");

  return {
    control: {
      fontWeight: 500,
      display: "block",
      width: "100%",
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      fontSize: theme.fontSizes.sm,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },

    link: {
      fontWeight: 500,
      display: "block",
      textDecoration: "none",
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      paddingLeft: 31,
      marginLeft: 30,
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      borderLeft: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },

    chevron: {
      transition: "transform 200ms ease",
    },
    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },
  };
});

export default useNavbarLinksGroupStyles;
