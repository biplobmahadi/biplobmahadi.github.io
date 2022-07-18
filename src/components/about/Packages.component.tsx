import { Button, Card, Group } from "@mantine/core";
import { FC } from "react";
import { Template } from "tabler-icons-react";

export const Packages: FC = () => {
  return (
    <Card mt="md" radius="lg" shadow="sm">
      <Group position="center">
        <Button
          leftIcon={<Template size={16} />}
          variant="light"
          radius="xl"
          size="xs"
        >
          React Template
        </Button>
        <Button
          leftIcon={<Template size={16} />}
          variant="light"
          radius="xl"
          size="xs"
        >
          Vite Template
        </Button>
      </Group>
    </Card>
  );
};
