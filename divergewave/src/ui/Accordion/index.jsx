import { Accordion, Stack, Select, NumberInput, Checkbox, Flex, Grid, Group } from '@mantine/core';
import classes from "./accordion.module.css"

const groceries = [
    {
    //   emoji: '🍎',
      value: 'Advanced Setting',
    //   description:
    //     'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
  ];


export default function Demo() {

  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>
        <Group>
        <Stack gap={"lg"}>
        <Group>
       <Stack gap={'xs'}>
      <Select
      label="Source Language"
      placeholder="Select Language"
      data={['Auto', 'English', 'Arabic', 'Urdu']}
      defaultValue="React"
      clearable
      className={classes.selectOption}
      />
      </Stack>
      <Stack gap={"xs"}>
      <NumberInput
      label="Input label"
      placeholder="Input placeholder"
      className={classes.selectOption}
    />
    </Stack>
    </Group>
    <Group>
    <Stack gap={"xs"}>
    <Checkbox
      defaultChecked
      label="Sentiment Analysis"
    />
    </Stack>
    <Stack gap={"xs"}>
    <Checkbox
      defaultChecked
      label="Video Summary"
    />
    </Stack>
    </Group>
    
    
    </Stack>
    </Group>
      </Accordion.Panel>
      </Accordion.Item>
  ));

  return (
    <Stack gap={"xl"}>
    <Accordion defaultValue="Apples" className={classes.accordionArea}>
      {items}
    
    {/* <Select
      label="Source Language"
      placeholder="Select Language"
      data={['Auto', 'English', 'Arabic', 'Urdu']}
      defaultValue="React"
      clearable
    /> */}
    </Accordion>
    </Stack>
  );

}