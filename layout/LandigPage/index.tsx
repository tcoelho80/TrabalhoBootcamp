import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Header } from './components/Header'

export function LandingPageLayout() {
  return (
    <Flex h="100%" w="100%" justify="center" direction="column">
      <Header />
      <Box w="100%">
        <Box
          bgImage="url('images/fist-bump.jpg')"
          bgPosition="top"
          bgRepeat="no-repeat"
          bgSize="cover"
          h="520px"
        >
          <Flex
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.5)"
            justify="center"
            align="center"
          >
            <Flex h="100%" maxW="75%" w="100%">
              lalas
            </Flex>
          </Flex>
        </Box>
        <Container maxW="75%">hrllo</Container>
      </Box>
    </Flex>
  )
}
