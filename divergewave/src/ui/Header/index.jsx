import { Button, Flex, Image, ThemeIcon, useMantineTheme, Text } from "@mantine/core"
import { IconArrowUp, IconDiscountCheck } from "@tabler/icons-react"
import Logo from "../../image/logo.png"

export default function Header() {
    const theme = useMantineTheme()

    return (
        <Flex align={"center"} justify={"space-between"} h={"100%"} px={"lg"}>
            <Image src={Logo} />
            <Flex align={"center"} gap={"xs"}>
                <Button
                    leftSection={
                        <ThemeIcon color={"white"} radius={"xl"}>
                            <IconDiscountCheck size={20} color={"green"} />
                        </ThemeIcon>}
                    color={theme.colors.green[5]}
                    radius={"sm"}
                    py={"lg"}
                    styles={{
                        label: {
                            overflow: "visible"
                        }
                    }}
                >
                    <Text fz={"sm"} fw={"bold"}>ACTIVATED</Text>
                </Button>
                <Button
                    leftSection={
                        <ThemeIcon color={"white"} radius={"xl"}>
                            <IconArrowUp size={15} color={"orange"} stroke={2} />
                        </ThemeIcon>}
                    color={theme.colors.orange[5]}
                    radius={"sm"}
                    py={"lg"}
                    styles={{
                        label: {
                            overflow: "visible"
                        }
                    }}
                >
                    <Text fz={"sm"} fw={"bold"}>UPLOAD</Text>
                </Button>

            </Flex>
        </Flex>
    )
}