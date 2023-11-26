import { Accordion, Stack, Select, NumberInput, Checkbox, Flex } from '@mantine/core';
import classes from "./accordion-info.module.css"

const groceries = [
    {
    //   emoji: '🍎',
      value: 'Video Summary',
      description:
        'In the era of digital proliferation, the volume of video content generated and consumed across various sectors has escalated exponentially. This surge has underscored the necessity for efficient, accurate, and scalable methods of content analysis. Traditional approaches, predominantly manu.',
    },
  ];


export default function Demo() {

  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control style={{ fontWeight: 'bold', color: '#555555' }}>
        {item.value}
        </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" className={classes.accordioninfoArea}>
      {items}
    </Accordion>
  );

}