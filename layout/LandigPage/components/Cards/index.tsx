import {
  Container,
  Flex,
  HStack,
  Box,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'

export function Cards() {
  return (
    <Container maxW="75%">
      <Flex w="100%" justify="center" py="8">
        <HStack spacing="8">
          <Flex direction="column" w="250px">
            <Image boxSize="100%" h="150px" src="images/fist-bump.jpg" />
            <Flex w="100%" justify="center" direction="column">
              <Box textAlign="center" mt="4">
                <Heading size="md">CRIAR CAMPANHA</Heading>
              </Box>
              <Box textAlign="center" mt="4">
                <Text>
                  Você que deseja criar uma campanha social este é o lugar
                  certo, clique aqui...
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex direction="column" w="250px">
            <Image boxSize="100%" h="150px" src="images/fist-bump.jpg" />
            <Flex w="100%" justify="center" direction="column">
              <Box textAlign="center">
                <Heading size="md" mt="4">
                  COLABORAR
                </Heading>
              </Box>
              <Box textAlign="center" mt="4">
                <Text>
                  Você que deseja criar uma campanha social este é o lugar
                  certo, clique aqui...
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex direction="column" w="250px">
            <Image boxSize="100%" h="150px" src="images/fist-bump.jpg" />
            <Flex w="100%" justify="center" direction="column">
              <Box textAlign="center">
                <Heading size="md" mt="4">
                  SER BENEFICIÁRIO
                </Heading>
              </Box>
              <Box textAlign="center" mt="4">
                <Text>
                  Você que deseja criar uma campanha social este é o lugar
                  certo, clique aqui...
                </Text>
              </Box>
            </Flex>
          </Flex>
        </HStack>
      </Flex>
    </Container>
  )
}
