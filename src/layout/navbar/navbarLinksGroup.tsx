import React, { FC, Fragment, useEffect, useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import { useRouter } from "next/router";
import useNavbarLinksGroupStyles from "../hooks/useNavbarLinksGroupStyles";
import { INavbarLinksGroupProps } from "../../interfaces/layout";

const LinksGroup: FC<INavbarLinksGroupProps> = ({
  icon: Icon,
  label,
  opened,
  setOpened,
  active,
  setActive,
  eachLink,
  initiallyOpened,
  links,
  setTableOfContent,
}) => {
  const router = useRouter();
  const { classes, theme, cx } = useNavbarLinksGroupStyles();
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;

  const [open, setOpen] = useState(initiallyOpened || false);

  const { pathname } = router;

  useEffect(() => {
    links?.forEach((link) => {
      if (pathname === link.link) {
        setOpen(true);
        setTableOfContent?.(link.tableOfContent ? link.tableOfContent : []);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasLinks = Array.isArray(links);

  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      className={cx(classes.link, {
        [classes.linkActive]: link.link === active,
      })}
      href={link.link}
      key={link.label}
      onClick={(event) => {
        setTableOfContent?.(link.tableOfContent ? link.tableOfContent : []);
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
    <Fragment>
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
    </Fragment>
  );
};

export default LinksGroup;
