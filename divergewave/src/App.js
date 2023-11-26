import { useDisclosure } from '@mantine/hooks'
import { AppShell, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { fetchTheme } from './theme'
import Sidebar from './ui/Sidebar'
import classes from "./modules/portal.module.css"
import Header from './ui/Header'

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
        <AppShell.Main>
          Main Area
        </AppShell.Main>
        <AppShell.Aside p="md" className={classes.sidebar}>
          Side Area (subtitles will be rendered)
        </AppShell.Aside>
      </AppShell>
    </MantineProvider>
  )
}