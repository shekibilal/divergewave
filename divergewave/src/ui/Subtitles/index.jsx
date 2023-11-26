import { ActionIcon, Flex, Stack, Image, Text } from "@mantine/core"
import { IconDots } from "@tabler/icons-react"
import classes from "./subtitles.module.css"

export default function (props) {
    return (
        <>
            <Flex align={"center"} justify={"space-evenly"} className={classes.card}>
                <Image
                    src={props.thumbnail}
                    w={"40px"}
                    h={"40px"}
                />
                <Stack gap={5} ml={10} mr={10}>
                    <Text fz={"xs"} fw={600}>{props.title}</Text>
                    <Text fz={"xs"} fw={600}>{props.time}</Text>
                </Stack>
                <ActionIcon variant={"subtle"}>
                    <IconDots color={"orange"} />
                </ActionIcon>
            </Flex>
        </>
    )
}