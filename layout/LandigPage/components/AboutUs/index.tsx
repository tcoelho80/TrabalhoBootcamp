import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

export function AboutUs() {
  return (
    <Flex>
      <Box
        h="600px"
        w="50%"
        bgImage="url('images/diversity.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      ></Box>
      <Flex
        w="50%"
        align="center"
        justify="center"
        direction="column"
        px="8"
        bg="#C59261"
      >
        <Box textAlign="center">
          <Heading color="white">Uma empressa sem fins lucrativos</Heading>
        </Box>
        <Box textAlign="center" mt="4">
          <Text color="gray.50">
            Viemos para unir pessoas em ações sociais, gerando uma maior conexão
            entre ONGs, Colaboradores e Bnefiários.
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
