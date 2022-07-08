import { useMantineTheme } from "@mantine/core";
import React from "react";
import GiscusDiscussion from "../../libs/giscus";

const Welcome = () => {
  const { colorScheme } = useMantineTheme();
  return (
    <div>
      Welcome
      <GiscusDiscussion theme={colorScheme === "dark" ? "dark" : "light"} />
    </div>
  );
};

export default Welcome;
