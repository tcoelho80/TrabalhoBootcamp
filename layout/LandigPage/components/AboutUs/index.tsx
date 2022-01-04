import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery
} from '@chakra-ui/react'

export function AboutUs() {
  const [isLargerThan1233] = useMediaQuery('(min-width: 1233px)')

  return (
    <Flex h={isLargerThan1233 ? '600px' : '400px'}>
      {isLargerThan1233 && (
        <Box
          w="50%"
          bgImage="url('images/diversity.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        ></Box>
      )}

      <Flex
        w={isLargerThan1233 ? '50%' : '100%'}
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
