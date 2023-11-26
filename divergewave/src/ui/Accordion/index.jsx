import { Accordion, Stack } from '@mantine/core';
import { Select } from '@mantine/core';
import classes from "./accordion.module.css"

const groceries = [
    {
      emoji: '🍎',
      value: 'Apples',
      description:
        'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
  ];


export default function Demo() {

  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Stack gap={"xl"}>
    <Accordion defaultValue="Apples" className={classes.accordionArea}>
      {items}
    
    <Select
      label="Source Language"
      placeholder="Select Language"
      data={['Auto', 'English', 'Arabic', 'Urdu']}
      defaultValue="React"
      clearable
    />
    </Accordion>
    </Stack>
  );

}