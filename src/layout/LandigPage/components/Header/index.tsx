import {
  Image,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../../hooks/auth'
import { FaSignOutAlt } from 'react-icons/fa'

interface HeaderProps {
  setHeaderHight(height: number | undefined): void
}

export function Header({ setHeaderHight }: HeaderProps) {
  const { signIn, signOut, user } = useAuth()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const containerRef = useRef<HTMLDivElement>(null)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const isSm = useBreakpointValue({ base: false, sm: true })

  useEffect(() => {
    console.log(user)
    setHeaderHight(containerRef.current?.offsetHeight)
  }, [containerRef])

  function handleLogin() {
    signIn({
      username,
      password
    })

    onClose()
  }

  return (
    <>
      <Flex
        w="100%"
        justify="center"
        position="fixed"
        top="0"
        left="0"
        bg="#264653"
        ref={containerRef}
        zIndex={1}
      >
        <Flex maxW="75%" w="100%" justify="space-between">
          <Flex py="6">
            <Image boxSize="75px" src="/images/logo.png" alt="Logo Furacão" />
            <Flex h="100%" align="center" ml="5">
              {isSm && (
                <Heading fontWeight="light" color="#E76F51">
                  colaboraaí
                </Heading>
              )}
            </Flex>
          </Flex>
          <Flex h="100%" align="center">
            <Flex
              align="center"
              as="button"
              onClick={onOpen}
              height="24px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              px="8"
              py="8"
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              fontSize="14px"
              fontWeight="semibold"
              bg="#E76F51"
              borderColor="#ccd0d5"
              color="white"
              _hover={{ bg: '#ebedf0' }}
              _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9'
              }}
              _focus={{
                FlexShadow:
                  '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
              }}
            >
              <Text fontSize="16px">{user.name ? user.name : 'login'}</Text>
            </Flex>
            <Flex
              align="center"
              as="button"
              onClick={signOut}
              height="24px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              px="2"
              py="8"
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              fontSize="14px"
              fontWeight="semibold"
              bg="#bd5940"
              borderColor="#ccd0d5"
              color="white"
              _hover={{ bg: '#ebedf0' }}
              _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9'
              }}
              _focus={{
                FlexShadow:
                  '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
              }}
            >
              <FaSignOutAlt />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleLogin}>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flex="1" direction="column">
              <FormControl>
                <FormLabel htmlFor="username" color="gray.500">
                  Usuário
                </FormLabel>

                <Input
                  name="username"
                  id="username"
                  placeholder="digite seu usuário"
                  type="text"
                  focusBorderColor="blue.600"
                  _hover={{
                    bgColor: '#e6e6e6'
                  }}
                  size="lg"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </FormControl>
              <FormControl mt="8">
                <FormLabel htmlFor="password" color="gray.500">
                  Senha
                </FormLabel>

                <Input
                  name="password"
                  id="password"
                  placeholder="digite seu usuário"
                  type="password"
                  focusBorderColor="blue.600"
                  _hover={{
                    bgColor: '#e6e6e6'
                  }}
                  size="lg"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose} w="100%">
              Close
            </Button>
            <Button colorScheme="green" w="100%" onClick={handleLogin}>
              Entrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
