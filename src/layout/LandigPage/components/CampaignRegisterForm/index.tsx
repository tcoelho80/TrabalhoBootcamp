import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface CampaignRegisterFormProps {
  registerType: string | string[]
}

export function CampaignRegisterForm({
  registerType
}: CampaignRegisterFormProps) {
  const router = useRouter()

  return (
    <Flex flex="1" w="100%" justify="center" py="8">
      <Flex as="form" direction="column" maxW="75%" w="100%">
        <VStack spacing="6">
          {registerType === 'creator' && (
            <SimpleGrid minChildWidth="280px" spacing="4" w="100%">
              <FormControl>
                <FormLabel color="gray.500">Nome da Campanha</FormLabel>

                <Input
                  placeholder="digite seu nome"
                  type="text"
                  focusBorderColor="blue.600"
                  _hover={{
                    bgColor: '#e6e6e6'
                  }}
                  size="lg"
                  onChange={(event) => {}}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="gray.500">Categoria</FormLabel>

                <Select
                  placeholder="Selecione uma opção"
                  value={'lalala'}
                  onChange={(event) => {}}
                >
                  <option value="1">Doação de alimentos</option>
                  <option value="2">Doação de brinquedos</option>
                  <option value="3">Doação de Materiais de Higiene</option>
                  <option value="4">
                    Doação de materiais de Higiene Pessoal
                  </option>
                  <option value="5">Doação de Animais</option>
                  <option value="6">Multirão de Limpeza</option>
                </Select>
              </FormControl>
            </SimpleGrid>
          )}
          <SimpleGrid minChildWidth="280px" spacing="4" w="100%">
            {registerType !== 'creator' && (
              <FormControl>
                <FormLabel color="gray.500">Campanha</FormLabel>
                <Select
                  placeholder="Selecione uma opção"
                  value={'lalala'}
                  onChange={(event) => {}}
                >
                  <option value="1">Campanha 1</option>
                  <option value="2">Campanha 2</option>
                  <option value="3">Campanha 3</option>
                </Select>
              </FormControl>
            )}
          </SimpleGrid>
          <SimpleGrid minChildWidth="280px" spacing="4" w="100%">
            <FormControl>
              <FormLabel color="gray.500">Descrição da Campanha</FormLabel>

              <Textarea
                placeholder="digite seu nome"
                type="text"
                focusBorderColor="blue.600"
                _hover={{
                  bgColor: '#e6e6e6'
                }}
                size="lg"
                value={'lalala'}
                onChange={(event) => {}}
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth="280px" spacing="4" w="100%">
            <FormControl>
              <FormLabel color="gray.500">Nome do Responsável</FormLabel>

              <Input
                placeholder="digite seu nome"
                type="text"
                focusBorderColor="blue.600"
                _hover={{
                  bgColor: '#e6e6e6'
                }}
                size="lg"
                onChange={(event) => {}}
              />
            </FormControl>
            {registerType !== 'creator' && (
              <FormControl>
                <FormLabel color="gray.500">{`Nome do ${
                  (registerType === 'collaborator' && 'Colaborador') ||
                  (registerType === 'recipient' && 'Beneficiário')
                }`}</FormLabel>

                <Input
                  placeholder="digite seu nome"
                  type="text"
                  focusBorderColor="blue.600"
                  _hover={{
                    bgColor: '#e6e6e6'
                  }}
                  size="lg"
                  onChange={(event) => {}}
                />
              </FormControl>
            )}
          </SimpleGrid>
          <SimpleGrid minChildWidth="280px" spacing="4" w="100%">
            <FormControl>
              <FormLabel color="gray.500">E-mail</FormLabel>

              <Input
                placeholder="digite seu nome"
                type="text"
                focusBorderColor="blue.600"
                _hover={{
                  bgColor: '#e6e6e6'
                }}
                size="lg"
                onChange={(event) => {}}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="gray.500">Telefone</FormLabel>

              <Input
                placeholder="digite seu nome"
                type="text"
                focusBorderColor="blue.600"
                _hover={{
                  bgColor: '#e6e6e6'
                }}
                size="lg"
                onChange={(event) => {}}
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth="280px" spacing="4" w="100%">
            <FormControl>
              <FormLabel color="gray.500">Local do Encontro</FormLabel>

              <Input
                placeholder="digite seu nome"
                type="text"
                focusBorderColor="blue.600"
                _hover={{
                  bgColor: '#e6e6e6'
                }}
                size="lg"
                value={'lalala'}
                onChange={(event) => {}}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="gray.500">Data do Encontro</FormLabel>

              <Input
                placeholder="digite seu nome"
                type="date"
                focusBorderColor="blue.600"
                _hover={{
                  bgColor: '#e6e6e6'
                }}
                size="lg"
                onChange={(event) => {}}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="gray.500">Hora do Encontro</FormLabel>

              <Input
                placeholder="digite seu nome"
                type="time"
                focusBorderColor="blue.600"
                _hover={{
                  bgColor: '#e6e6e6'
                }}
                size="lg"
                onChange={(event) => {}}
              />
            </FormControl>
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <Stack direction="row">
            <Button
              size="lg"
              colorScheme="red"
              onClick={() => router.push('/')}
            >
              Voltar
            </Button>
            <Button size="lg" bg="#E76F51" color="white">
              Registrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}
