import {
  Container,
  Flex,
  HStack,
  Box,
  Heading,
  Image,
  Text,
  useMediaQuery,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import { useEffect } from 'react'

export function Cards() {
  const is2xl = useBreakpointValue({ base: false, '2xl': true })

  const is1xl = useBreakpointValue({ base: false, '1xl': true })

  const isXl = useBreakpointValue({ base: false, xl: true })

  const isLg = useBreakpointValue({ base: false, lg: true })

  const isMd = useBreakpointValue({ base: false, md: true })

  const isSm = useBreakpointValue({ base: false, sm: true })

  useEffect(() => {
    console.log(isXl)
  }, [isXl])

  return (
    <Container maxW={isXl ? '75%' : '100%'}>
      <Flex w="100%" justify="center" py="16">
        <Stack
          spacing="16"
          h={isXl ? '450px' : 'auto'}
          direction={isXl ? 'row' : 'column'}
        >
          <Flex
            direction="column"
            w={isXl ? '300px' : '100%'}
            borderTopRightRadius="4"
            borderTopLeftRadius="4"
            borderBottomRightRadius="4"
            borderBottomLeftRadius="4"
            bg="#F0F0F0"
            _hover={{ boxShadow: '-1px 1px 15px 3px rgba(94,94,94,0.9);' }}
            boxShadow="-1px 1px 5px 3px rgba(94,94,94,0.5);"
            transition="all ease-in 0.2s"
          >
            <Image
              boxSize="100%"
              h={isXl ? '200px' : '400px'}
              src="images/create-campaign.jpg"
              borderTopRightRadius="4"
              borderTopLeftRadius="4"
            />
            <Flex
              w="100%"
              justify="center"
              direction="column"
              py="2"
              px="6"
              _hover={{ py: '8' }}
              transition="all ease-in 0.2s"
            >
              <Box textAlign="center" mt="4">
                <Heading size="md" color="#E76F51">
                  CRIAR CAMPANHA
                </Heading>
              </Box>
              <Box textAlign="center" py="8">
                <Text color="gray.600">
                  Você que deseja criar uma campanha social este é o lugar
                  certo, clique aqui...
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            w={isXl ? '300px' : '100%'}
            borderTopRightRadius="4"
            borderTopLeftRadius="4"
            borderBottomRightRadius="4"
            borderBottomLeftRadius="4"
            bg="#F0F0F0"
            _hover={{ boxShadow: '-1px 1px 15px 3px rgba(94,94,94,0.9);' }}
            boxShadow="-1px 1px 5px 3px rgba(94,94,94,0.5);"
            transition="all ease-in 0.2s"
          >
            <Image
              boxSize="100%"
              h={isXl ? '200px' : '400px'}
              src="images/collab.jpg"
              borderTopRightRadius="4"
              borderTopLeftRadius="4"
            />
            <Flex
              w="100%"
              justify="center"
              direction="column"
              py="2"
              px="6"
              _hover={{ py: '8' }}
              transition="all ease-in 0.2s"
            >
              <Box textAlign="center">
                <Heading size="md" mt="4" color="#E76F51">
                  COLABORAR
                </Heading>
              </Box>
              <Box textAlign="center" py="8">
                <Text color="gray.600">
                  Quer ser um colaborador de uma campanha social, clique aqui...
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            w={isXl ? '300px' : '100%'}
            borderTopRightRadius="4"
            borderTopLeftRadius="4"
            borderBottomRightRadius="4"
            borderBottomLeftRadius="4"
            bg="#F0F0F0"
            _hover={{ boxShadow: '-1px 1px 15px 3px rgba(94,94,94,0.9);' }}
            boxShadow="-1px 1px 5px 3px rgba(94,94,94,0.5);"
            transition="all ease-in 0.2s"
          >
            <Image
              boxSize="100%"
              h={isXl ? '200px' : '400px'}
              src="images/beneficiaries.jpg"
              borderTopRightRadius="4"
              borderTopLeftRadius="4"
            />
            <Flex
              w="100%"
              justify="center"
              direction="column"
              py="2"
              px="6"
              _hover={{ py: '8' }}
              transition="all ease-in 0.2s"
            >
              <Box textAlign="center">
                <Heading size="md" mt="4" color="#E76F51">
                  SER BENEFICIÁRIO
                </Heading>
              </Box>
              <Box textAlign="center" py="8">
                <Text color="gray.600">
                  Esta necessitando de auxilio, você veio ao lugar certo, clique
                  aqui...
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  )
}
