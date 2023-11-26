import { TextInput, Stack } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import Subtitles from "../Subtitles"
import thumbnail from "../../image/thumbnail1.png"

const videoParts = [
    {
        thumbnail: thumbnail,
        title: 'US and China agree to res...',
        time: '04:12',
    },
    {
        thumbnail: thumbnail,
        title: 'US and China agree to res...',
        time: '08:30',
    },
    {
        thumbnail: thumbnail,
        title: 'US and China agree to res...',
        time: '10:15',
    },
    {
        thumbnail: thumbnail,
        title: 'US and China agree to res...',
        time: '11:22',
    },
    {
        thumbnail: thumbnail,
        title: 'US and China agree to res...',
        time: '12:34',
    },
]


export default function Sidebar() {
    return (
        <Stack gap={"xl"}>
            <TextInput
                placeholder={"Search here"}
                leftSection={<IconSearch size={15} stroke={1.5} />}
                radius={"sm"}
            />
            <Stack gap={"xs"}>
                {videoParts.map((item) => (
                    <Subtitles thumbnail={item.thumbnail} title={item.title} time={item.time} />
                ))}
            </Stack>
        </Stack>
    )
}