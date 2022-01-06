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
  FormLabel,
  Select,
  VStack
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../../hooks/auth'
import { FaSignOutAlt } from 'react-icons/fa'
import { api } from '../../../../services/api'
import axios from 'axios'
import { useRouter } from 'next/router'

interface HeaderProps {
  setHeaderHight(height: number | undefined): void
}

type State = {
  id: number
  nome: string
  sigla: string
  regiao: {
    id: number
    nome: string
    sigla: string
  }
}

type City = {
  id: string
  nome: string
  municipio: {
    id: string
    nome: string
    microrregiao: {
      id: number
      nome: string
      mesorregiao: {
        id: number
        nome: string
        UF: {
          id: number
          sigla: string
          nome: string
          regiao: {
            id: number
            sigla: string
            nome: string
          }
        }
      }
    }
    'regiao-imediata': {
      id: number
      nome: string
      'regiao-intermediaria': {
        id: number
        nome: string
        UF: {
          id: number
          sigla: string
          nome: string
          regiao: {
            id: number
            sigla: string
            nome: string
          }
        }
      }
    }
  }
}

interface ViaCepRepsonse {
  bairro: string
  cep: string
  complemento: string
  ddd: string
  gia: string
  ibge: string
  localidade: string
  logradouro: string
  siafi: string
  uf: string
}

export function Header({ setHeaderHight }: HeaderProps) {
  const { signIn, signOut, signUp, user } = useAuth()

  const [formMode, setFormMode] = useState<'signin' | 'signup'>('signin')

  const [userType, setUserType] = useState('')
  const [cep, setCep] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [states, setStates] = useState<State[]>([] as State[])
  const [state, setState] = useState('')
  const [cities, setCities] = useState<City[]>([] as City[])
  const [city, setCity] = useState('')
  const [publicPlace, setPublicPlace] = useState('')
  const [cpfCnpj, setCpfCnpj] = useState('')

  const containerRef = useRef<HTMLDivElement>(null)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const isSm = useBreakpointValue({ base: false, sm: true })

  const router = useRouter()

  useEffect(() => {
    async function statesResponse() {
      const statesResponse = await axios.get<State[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )

      setStates(statesResponse.data)
    }

    statesResponse()
  }, [])

  useEffect(() => {
    setHeaderHight(containerRef.current?.offsetHeight)
  }, [containerRef])

  function handleSignIn() {
    signIn({
      email,
      password
    })

    onClose()
  }

  function handleSignUp() {
    const data = {
      name,
      email,
      password,
      userType,
      cep,
      publicPlace,
      state,
      city,
      cpfCnpj
    }

    signUp(data)

    setFormMode('signin')
  }

  async function handleCep(cep: string) {
    const cleanCep = cep.replace('-', '')

    try {
      const viaCepResponse = await api.post<ViaCepRepsonse>('viacep', {
        cep: cleanCep
      })

      const address = viaCepResponse.data

      const citiesByStateResponse = await axios.get<City[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${address.uf}/distritos`
      )

      setState(address.uf.toLocaleLowerCase())
      setCities(citiesByStateResponse.data)

      const city = citiesByStateResponse.data.filter(
        (city) => city.nome === address.localidade
      )

      setCity(city[0].nome)
      setPublicPlace(address.logradouro)
    } catch (error) {
      console.log(error)
    }
  }

  function handleSignOut() {
    signOut()

    router.push('/')
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
              onClick={handleSignOut}
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
        {formMode === 'signin' ? (
          <ModalContent as="form">
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flex="1" direction="column">
                <FormControl>
                  <FormLabel htmlFor="email" color="gray.500">
                    E-mail
                  </FormLabel>

                  <Input
                    name="email"
                    id="email"
                    placeholder="digite seu usuário"
                    type="email"
                    focusBorderColor="blue.600"
                    _hover={{
                      bgColor: '#e6e6e6'
                    }}
                    size="lg"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
              <Button
                colorScheme="blue"
                mr={3}
                w="100%"
                onClick={() => setFormMode('signup')}
              >
                Cadastro
              </Button>
              <Button colorScheme="green" w="100%" onClick={handleSignIn}>
                Entrar
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent as="form">
            <ModalHeader>Cadastro</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flex="1" direction="column">
                <VStack>
                  <FormControl>
                    <FormLabel htmlFor="username" color="gray.500">
                      Tipo de Cadastro
                    </FormLabel>
                    <Select
                      placeholder="Selecione uma opção"
                      value={userType}
                      onChange={(event) => setUserType(event.target.value)}
                    >
                      <option value="creator">Criador</option>
                      <option value="collaborator">Colaborador</option>
                      <option value="recipient">Beneficiário</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="username" color="gray.500">
                      Nome
                    </FormLabel>

                    <Input
                      name="name"
                      id="name"
                      placeholder="digite seu nome"
                      type="text"
                      focusBorderColor="blue.600"
                      _hover={{
                        bgColor: '#e6e6e6'
                      }}
                      size="lg"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password" color="gray.500">
                      CEP
                    </FormLabel>

                    <Input
                      name="cep"
                      id="cep"
                      placeholder="digite seu CEP"
                      type="text"
                      focusBorderColor="blue.600"
                      _hover={{
                        bgColor: '#e6e6e6'
                      }}
                      size="lg"
                      value={cep}
                      onChange={(event) => setCep(event.target.value)}
                      onBlur={(event) => handleCep(event.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="username" color="gray.500">
                      Logradouro
                    </FormLabel>

                    <Input
                      name="public-place"
                      id="public-place"
                      type="text"
                      focusBorderColor="blue.600"
                      _hover={{
                        bgColor: '#e6e6e6'
                      }}
                      size="lg"
                      value={publicPlace}
                      onChange={(event) => setPublicPlace(event.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password" color="gray.500">
                      Estado
                    </FormLabel>

                    <Select
                      placeholder="Selecione uma opção"
                      value={state}
                      onChange={() => {}}
                    >
                      {states.map((state, index) => (
                        <option
                          key={index}
                          value={state.sigla.toLocaleLowerCase()}
                        >
                          {state.nome}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password" color="gray.500">
                      Cidade
                    </FormLabel>

                    <Select
                      placeholder="Selecione uma opção"
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                    >
                      {cities.map((city, index) => (
                        <option key={index} value={city.nome}>
                          {city.nome}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="cpf-cnpj" color="gray.500">
                      Documento CPF/CNPJ
                    </FormLabel>

                    <Input
                      name="cpf-cnpj"
                      id="cpf-cnpj"
                      type="text"
                      focusBorderColor="blue.600"
                      _hover={{
                        bgColor: '#e6e6e6'
                      }}
                      size="lg"
                      value={cpfCnpj}
                      onChange={(event) => setCpfCnpj(event.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email" color="gray.500">
                      E-mail
                    </FormLabel>

                    <Input
                      name="email"
                      id="email"
                      type="email"
                      focusBorderColor="blue.600"
                      _hover={{
                        bgColor: '#e6e6e6'
                      }}
                      size="lg"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password" color="gray.500">
                      Senha
                    </FormLabel>

                    <Input
                      name="password"
                      id="password"
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
                  <FormControl>
                    <FormLabel color="gray.500">Conformar Senha</FormLabel>

                    <Input
                      type="password"
                      focusBorderColor="blue.600"
                      _hover={{
                        bgColor: '#e6e6e6'
                      }}
                      size="lg"
                    />
                  </FormControl>
                </VStack>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="red"
                mr={3}
                onClick={() => setFormMode('signin')}
                w="100%"
              >
                Voltar
              </Button>
              <Button
                type="button"
                colorScheme="green"
                w="100%"
                onClick={handleSignUp}
              >
                Cadastrar
              </Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </>
  )
}
