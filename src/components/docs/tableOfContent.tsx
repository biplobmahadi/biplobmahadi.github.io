import React, { useEffect, useState } from "react";
import { createStyles, Box, Text, Group } from "@mantine/core";
import { ListSearch } from "tabler-icons-react";
import { ITableOfContent } from "../../interfaces/docs";
import { useRouter } from "next/router";

const LINK_HEIGHT = 38;
const INDICATOR_SIZE = 10;
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;

const useStyles = createStyles((theme) => ({
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

interface TableOfContentProps {
  links: ITableOfContent[];
}

export function TableOfContent({ links }: TableOfContentProps) {
  const { classes, cx } = useStyles();

  const router = useRouter();
  const { asPath, pathname } = router;
  const hashPath = asPath.includes("#")
    ? asPath.substring(asPath.indexOf("#"))
    : "";

  const [active, setActive] = useState<string>();
  const [activeIndex, setActiveIndex] = useState<number>();

  useEffect(() => {
    if (hashPath) {
      setActive(hashPath);
      links.forEach((element, index) => {
        if (element.link === hashPath) {
          setActiveIndex(index);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!hashPath) {
      setActive(undefined);
      setActiveIndex(undefined);
    }
  }, [asPath, hashPath]);

  const items = links.map((item, index) => (
    <Box<"a">
      component="a"
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.link);
        setActiveIndex(index);
        router.push(
          { pathname: pathname, hash: item.link },
          pathname + item.link,
          { scroll: false, shallow: true }
        );
      }}
      key={item.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === item.link,
      })}
      sx={(theme) => ({ paddingLeft: item.order * theme.spacing.lg })}
    >
      {item.label}
    </Box>
  ));

  return (
    <div>
      <Group mb="md">
        <ListSearch size={18} />
        <Text>Table of contents</Text>
      </Group>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(${
              active ? activeIndex! * LINK_HEIGHT + INDICATOR_OFFSET : 0
            }px)`,
          }}
        />
        {items}
      </div>
    </div>
  );
}
