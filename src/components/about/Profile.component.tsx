import { Center, Text, Image, useMantineTheme } from "@mantine/core";
import { FC, Fragment } from "react";
import { BrandFacebook, BrandGithub, BrandLinkedin } from "tabler-icons-react";

export const Profile: FC = () => {
  const { colorScheme } = useMantineTheme();

  return (
    <Fragment>
      <Center>
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image src="/me.jpg" alt="Profile picture" width={110} height={110} />
        </div>
      </Center>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Text weight={700} size="xl">
          Mahadi Hasan Biplob
        </Text>
        <Text weight={700} size="sm">
          Software Engineer
        </Text>
        <a
          href="https://github.com/biplobmahadi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0px 3px" }}
        >
          <BrandGithub
            size={20}
            color={colorScheme === "dark" ? "gray" : "#171515"}
          />
        </a>
        <a
          href="https://linkedin.com/in/mahadi-hasan-biplob-a56535161"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0px 3px" }}
        >
          <BrandLinkedin size={20} color="#0072b1" />
        </a>
        <a
          href="https://facebook.com/profile.php?id=100014558505131"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "0px 3px" }}
        >
          <BrandFacebook size={20} color="#4267B2" />
        </a>
        <div>
          <Text size="xs">+8801753183119 | biplob.ruet15@gmail.com</Text>
          <Text size="xs" color="dimmed">
            Dhaka, Bangladesh
          </Text>
        </div>
      </div>
    </Fragment>
  );
};
