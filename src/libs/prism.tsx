import { useMantineTheme } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { FC } from "react";
import { ICustomPrism } from "../interfaces/libs/prism.interface";

const CustomPrism: FC<ICustomPrism> = ({ code }) => {
  const { colorScheme } = useMantineTheme();

  return (
    <Prism
      sx={{ margin: "1% 0" }}
      language="tsx"
      withLineNumbers
      colorScheme={colorScheme === "dark" ? "light" : "dark"}
    >
      {code}
    </Prism>
  );
};

export default CustomPrism;
