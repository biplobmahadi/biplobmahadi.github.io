import { Badge, Card } from "@mantine/core";
import { FC } from "react";

export const Enjoy: FC = () => {
  return (
    <Card mt="md" mb="xl" radius="lg" shadow="sm">
      <Badge mr={5}>Family</Badge>
      <Badge mr={5}>Friends</Badge>
      <Badge mr={5}>Bike</Badge>
      <Badge mr={5}>Travel</Badge>
      <Badge mr={5}>Learn</Badge>
      <Badge mr={5}>Improve</Badge>
      <Badge mr={5}>Sleep</Badge>
    </Card>
  );
};
