import React, { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
} from "@mantine/core";
import {
  Icon as TablerIcon,
  ChevronLeft,
  ChevronRight,
} from "tabler-icons-react";
import { useRouter } from "next/router";

const useStyles = createStyles((theme, _params, getRef) => {
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

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  opened: boolean;
  setOpened: Function;
  active?: string;
  setActive?: Function;
  eachLink?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export default function LinksGroup({
  icon: Icon,
  label,
  opened,
  setOpened,
  active,
  setActive,
  eachLink,
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const router = useRouter();
  const { classes, theme, cx } = useStyles();
  const hasLinks = Array.isArray(links);
  const [open, setOpen] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;

  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      className={cx(classes.link, {
        [classes.linkActive]: link.link === active,
      })}
      href={link.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        setActive?.(link.link);
        router.push(link.link);
        if (opened) {
          setTimeout(() => {
            setOpened(false);
          }, 200);
        }
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpen((o) => !o);
          if (opened && eachLink) {
            router.push(eachLink);
            setTimeout(() => {
              setOpened(false);
            }, 200);
          }
        }}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>

          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              style={{
                transform: open
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={open}>{items}</Collapse> : null}
    </>
  );
}
