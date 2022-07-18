import React, { FC, useEffect, useState } from "react";
import { Box, Text, Group } from "@mantine/core";
import { ListSearch } from "tabler-icons-react";
import { useRouter } from "next/router";
import useTableOfContentStyles from "./hooks/useTableOfContentStyles";
import { INDICATOR_OFFSET, LINK_HEIGHT } from "../consts/tableOfContent";
import { ITableOfContentProps } from "../interfaces/layout";

const TableOfContent: FC<ITableOfContentProps> = ({ links }) => {
  const { classes, cx } = useTableOfContentStyles();
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
};

export default TableOfContent;
