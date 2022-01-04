import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text
} from '@chakra-ui/react'

export function NewsLetter() {
  return (
    <Flex py="8" justify="center">
      <Container maxW="75%">
        <Flex bg="#C58A47" h="400px" w="100%" borderRadius="5px">
          <Box position="relative" top="-25px" left="25px">
            <Image src="images/paperplane.svg" />
          </Box>
          <Flex direction="column" align="center" justify="center" flex="1">
            <Flex direction="column" w="100%" textAlign="center">
              <Heading color="white">FIQUE POR DENTRO DAS NOVIDADES</Heading>
              <Text color="white">Cadastre-se na nossa newsletter</Text>
            </Flex>
            <Flex mt="8">
              <Input />
              <Button px="16" ml="8" bg="white" color="#264653">
                cadastrar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
