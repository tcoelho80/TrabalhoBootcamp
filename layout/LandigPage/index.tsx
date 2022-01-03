import { Box, Flex } from '@chakra-ui/react'
import { AboutUs } from './components/AboutUs'
import { Cards } from './components/Cards'
import { Header } from './components/Header'
import { SuccessCampaigns } from './components/SuccessCampaigns'
import { TopBanner } from './components/TopBanner'

export function LandingPageLayout() {
  return (
    <Flex h="100%" w="100%" justify="center" direction="column">
      <Header />
      <Box w="100%">
        <TopBanner />
        <Cards />
        <AboutUs />
        <SuccessCampaigns />
      </Box>
    </Flex>
  )
}
