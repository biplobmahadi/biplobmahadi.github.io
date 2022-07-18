import { FC } from "react";
import { Switch, Group, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import useDarkmodeSwitchStyles from "./hooks/useDarkmodeSwitchStyles";

const DarkmodeSwitch: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes, cx } = useDarkmodeSwitchStyles();

  return (
    <Group position="center" my={30}>
      <div className={classes.root}>
        <Sun className={cx(classes.icon, classes.iconLight)} size={18} />
        <MoonStars className={cx(classes.icon, classes.iconDark)} size={18} />
        <Switch
          checked={colorScheme === "dark"}
          onChange={() => toggleColorScheme()}
          size="md"
        />
      </div>
    </Group>
  );
};

export default DarkmodeSwitch;
