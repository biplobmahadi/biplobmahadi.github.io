import { useMantineTheme } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { FC } from "react";
import { ICustomPrism } from "../interfaces/libs/prism.interface";

const CustomPrism: FC<ICustomPrism> = ({ code, language }) => {
  const { colorScheme } = useMantineTheme();

  return (
    <Prism
      sx={{ margin: "1% 0", border: "1px gray solid", borderRadius: "6px" }}
      language={language}
      withLineNumbers
      colorScheme={colorScheme === "dark" ? "dark" : "light"}
    >
      {code}
    </Prism>
  );
};

export default CustomPrism;
