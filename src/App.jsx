import { Flex, Box } from"@chakra-ui/react"
import Sidebar from "./components/Sidebar/sidebar"
import PageContent from "./components/PageContent/pagecontent"

function App() {
  return (
    <Flex>
      {/* Side bar */}
      <Box minWidth={"80px"} maxWidth={"80px"}>
      <Sidebar/>
      </Box>
      {/*Page Content */}
    <Box flex={1} w={{base:"calc(100%-70px)", md: "calc(100% - 240px"}} style={{backgroundColor: 'white'}}>
      <PageContent/>
    </Box>
    </Flex>
  )
}

export default App
