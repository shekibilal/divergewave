import { Group, Button } from '@mantine/core';


export default function (Speaker) {
  return (
    <Group justify="center">
      <Button variant="default">
      Original
      </Button>

      <Button>English</Button>

      <Button
        variant="light"
              >
        Arabic
      </Button>
    </Group>
  );
}