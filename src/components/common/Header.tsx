import {
  createStyles,
  Header,
  Group,
  Container,
  Burger,
  Text,
  Button,
} from "@mantine/core";
import DarkmodeSwitch from "./DarkmodeSwitch";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
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

interface CustomHeaderProps {
  opened: boolean;
  setOpened: Function;
}

const CustomHeader = ({ opened, setOpened }: CustomHeaderProps) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Header height={80}>
      <Container className={classes.inner} size="lg">
        <Group position="apart">
          <Burger
            opened={opened}
            onClick={() => setOpened((prevState: boolean) => !prevState)}
            size="sm"
            className={classes.burger}
          />

          <Text weight={700} size="lg">
            BIPLOB
          </Text>

          <Group className={classes.links} spacing={20}>
            <Button
              variant="default"
              radius="xl"
              size="xs"
              onClick={() => router.push("/")}
            >
              Home
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="xs"
              onClick={() => router.push("/docs/welcome")}
            >
              Docs
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="xs"
              onClick={() => router.push("/blogs/advance-axios")}
            >
              Blogs
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="xs"
              onClick={() => router.push("/about")}
            >
              About
            </Button>
          </Group>

          <Group className={classes.social} position="right" noWrap>
            <DarkmodeSwitch />
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

export default CustomHeader;
