import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { Header } from './components/Header'

interface LandingPageLayoutProps {
  children: React.ReactNode
}

export function LandingPageLayout({ children }: LandingPageLayoutProps) {
  const [headerHight, setHeaderHight] = useState<number | undefined>(0)

  return (
    <>
      <Header setHeaderHight={setHeaderHight} />
      <Flex flex="1" justify="center" direction="column" mt={headerHight}>
        <Box w="100%">{children}</Box>
      </Flex>
    </>
  )
}
