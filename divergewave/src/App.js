import { useDisclosure } from '@mantine/hooks'
import { AppShell, MantineProvider, Stack } from '@mantine/core'
import '@mantine/core/styles.css'
import { fetchTheme } from './theme'
import Sidebar from './ui/Sidebar'
import classes from "./modules/portal.module.css"
import Header from './ui/Header'
import Accordion from './ui/Accordion'
import Accordion_Sum from './ui/Accordion_Sum'
import Accordion_Info from './ui/Accordion_Info'
import VideoPlayer from './ui/VideoPlayer'
import Speaker from './ui/Speaker'

export default function App() {
  const theme = fetchTheme()
  const [opened, { toggle }] = useDisclosure()

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{
          height: { base: 60, md: 70, lg: 100 },
          width: { base: "100%" }
        }}
        navbar={{
          width: { base: 200, md: 300, lg: 300 },
          height: { base: "100%" },
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
          <Header />
        </AppShell.Header>
        <AppShell.Navbar p="md" className={classes.sidebar}>
          <Sidebar />
        </AppShell.Navbar>
        <AppShell.Main className={classes.mainArea}>
        <Stack gap={"xl"}>
          <Accordion p="md" className={classes.accordionArea} w={100}>
          </Accordion>
          <Stack gap={"md"}>
          <VideoPlayer />
          </Stack>
          <Accordion_Sum p="md" className={classes.accordionArea} w={100}>
          </Accordion_Sum>
          
          <Stack gap={"md"}>
          <Accordion_Info p="md" className={classes.accordionArea} w={100}>
          </Accordion_Info>
          </Stack>
          </Stack>
        </AppShell.Main>
        <AppShell.Aside p="md" className={classes.sidebar}>
          <Speaker />
          Side Area (subtitles will be rendered)
        </AppShell.Aside>
      </AppShell>
    </MantineProvider>
  )
}