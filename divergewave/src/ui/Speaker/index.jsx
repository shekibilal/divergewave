import { Group, Button } from '@mantine/core';


export default function (Speaker) {
  return (
    <Group justify="center">
      <Button variant="default">
        Gallery
      </Button>

      <Button>Download</Button>

      <Button
        variant="light"
              >
        Visit gallery
      </Button>
    </Group>
  );
}