import { Box, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AboutUs } from './components/AboutUs'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { NewsLetter } from './components/NewsLetter'
import { SuccessCampaigns } from './components/SuccessCampaigns'
import { TopBanner } from './components/TopBanner'

export function LandingPageLayout() {
  const [headerHight, setHeaderHight] = useState<number | undefined>(0)

  return (
    <>
      <Header setHeaderHight={setHeaderHight} />
      <Flex flex="1" justify="center" direction="column" mt={headerHight}>
        <Box w="100%">
          <TopBanner />
          <Cards />
          <AboutUs />
          <SuccessCampaigns />
          <NewsLetter />
          <Footer />
        </Box>
      </Flex>
    </>
  )
}
