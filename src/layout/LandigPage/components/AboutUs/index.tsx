import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  Text,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

export function AboutUs() {
  const is2xl = useBreakpointValue({ base: false, '2xl': true })

  const isLg = useBreakpointValue({ base: false, lg: true })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Flex h={is2xl ? '600px' : '400px'}>
      {isLg && (
        <Box
          w="50%"
          bgImage="url('images/diversity.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        ></Box>
      )}

      <Flex
        w={isLg ? '50%' : '100%'}
        align="center"
        justify="center"
        direction="column"
        px="8"
        bg="#C59261"
      >
        <Box textAlign="center">
          <Heading color="white">QUEM SOMOS?</Heading>
        </Box>
        <Box textAlign="center" mt="4">
          <Heading color="white">Uma empressa sem fins lucrativos</Heading>
        </Box>
        <Box textAlign="center" mt="4">
          <Text color="gray.50">
            Viemos para unir pessoas em ações sociais, gerando uma maior conexão
            entre ONGs, Colaboradores e Bnefiários.
          </Text>
        </Box>

        <Button
          size="lg"
          mt="8"
          bg="#264653"
          color="white"
          ref={btnRef}
          onClick={onOpen}
        >
          Contato
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Nossos Contatos</DrawerHeader>

            <DrawerBody></DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  )
}
