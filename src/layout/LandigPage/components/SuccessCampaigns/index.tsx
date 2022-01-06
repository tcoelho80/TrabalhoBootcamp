import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useMediaQuery
} from '@chakra-ui/react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react'

export function SuccessCampaigns() {
  const is2xl = useBreakpointValue({ base: false, '2xl': true })

  const isMd = useBreakpointValue({ base: false, md: true })

  const isSm = useBreakpointValue({ base: false, sm: true })

  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: is2xl ? 2 : 1,
    slidesToScroll: is2xl ? 2 : 1,
    autoplay: true
  }

  const depositions = [
    {
      testimonial:
        'Maravilhoso conhecer a pessoa que estamos doando, acabamos nos tornando amigos onde até consegui um emprego melhor para o beneficiado.',
      name: 'José da Silva',
      occupation: 'Colaborador(a)'
    },
    {
      testimonial:
        'Participei de uma campanha de limpeza da praia no litoral de São Paulo e foi maravilhoso a forma como todos estavam conectados.',
      name: 'Ana',
      occupation: 'Colaborador(a)'
    },
    {
      testimonial:
        'No inicio nós da ONG achamos que não seria legal fazer com o colaboraaí, mas no fim vimos que foi muito mais proveitoso e divertido.',
      name: 'ONG Ser Feliz',
      occupation: 'Criador de Campanha'
    },
    {
      testimonial:
        'No inicio desconfiei do site, mas mesmo assim me inscrevi e no fim encontrei o meu Colaborador direto e foi muito bom a experiência.',
      name: 'Maria de Jesus',
      occupation: 'Beneficiário(a)'
    }
  ]

  return (
    <Container maxW={isSm ? '75%' : '90%'} py="8">
      <Box textAlign="center">
        <Heading color="#C58A47">ÚTIMAS CAMPANHAS DE SUCESSO</Heading>
        <Text color="#DBAE5D" fontSize="18px">
          Depoimentos
        </Text>
      </Box>
      <Slider {...sliderSettings}>
        {depositions.map((testimonial, index) => (
          <Flex p="8" key={index}>
            <Flex
              bg="#F0F0F0"
              h={isMd ? '230px' : '500px'}
              borderRadius="5px"
              boxShadow="-1px 1px 5px 3px rgba(94,94,94,0.5);"
              direction={isMd ? 'row' : 'column'}
              py={isMd ? 0 : 4}
              px={8}
              justify="center"
            >
              <Flex align="center" justify="center" px="4">
                <Avatar size="2xl" src="images/user.png" />
              </Flex>
              <Flex
                justify="center"
                align="center"
                direction="column"
                mt={isMd ? 0 : 4}
                textAlign={isMd ? 'inherit' : 'center'}
              >
                <Text color="gray.600" fontSize="md">
                  {testimonial.testimonial}
                </Text>
                <Flex w="100%" mt="4" direction={isMd ? 'row' : 'column'}>
                  <Text fontWeight="bold" color="#264653">
                    {testimonial.name}
                  </Text>
                  <Text ml="2" color="gray.600">{`${isMd ? '/ ' : ''}${
                    testimonial.occupation
                  }`}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Slider>
    </Container>
  )
}
