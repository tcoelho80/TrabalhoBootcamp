import { Avatar, Box, Container, Flex, Text } from '@chakra-ui/react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function SuccessCampaigns() {
  const sliderSettings: Settings = {
    dots: false,
    customPaging: () => (
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: '#ED64A6',
          borderRadius: '50%'
        }}
      ></div>
    ),
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true
  }
  return (
    <Container maxW="90%" py="8">
      <Slider {...sliderSettings}>
        <Flex p="8">
          <Flex bg="#F0F0F0" h="230px" borderRadius="5px">
            <Flex align="center" justify="center" px="4">
              <Avatar size="2xl" src="images/user.png" />
            </Flex>
            <Flex justify="center" align="center" px="6" direction="column">
              <Text>
                Maravilhoso conhecer a pessoa que estamos doando, acabamos nos
                tornando amigos onde até consegui um emprego melhor para o
                beneficiado.
              </Text>
              <Flex w="100%" mt="4">
                <Text fontWeight="bold">José da Silva</Text>
                <Text ml="2">/ Colaborador(a)</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex p="8">
          <Flex bg="#F0F0F0" h="230px" borderRadius="5px">
            <Flex align="center" justify="center" px="4">
              <Avatar size="2xl" src="images/user.png" />
            </Flex>
            <Flex justify="center" align="center" px="6" direction="column">
              <Text>
                Participei de uma campanha de limpeza da praia no litoral de São
                Paulo e foi maravilhoso a forma como todos estavam conectados.
              </Text>
              <Flex w="100%" mt="4">
                <Text fontWeight="bold">Ana</Text>
                <Text ml="2">/ Colaborador(a)</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex p="8">
          <Flex bg="#F0F0F0" h="230px" borderRadius="5px">
            <Flex align="center" justify="center" px="4">
              <Avatar size="2xl" src="images/user.png" />
            </Flex>
            <Flex justify="center" align="center" px="6" direction="column">
              <Text>
                No inicio nós da ONG achamos que não seria legal fazer com o
                colaboraaí, mas no fim vimos que foi muito mais proveitoso e
                divertido.
              </Text>
              <Flex w="100%" mt="4">
                <Text fontWeight="bold">ONG Ser Feliz</Text>
                <Text ml="2">/ Criador de Campanha</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex p="8">
          <Flex bg="#F0F0F0" h="230px" borderRadius="5px">
            <Flex align="center" justify="center" px="4">
              <Avatar size="2xl" src="images/user.png" />
            </Flex>
            <Flex justify="center" align="center" px="6" direction="column">
              <Text>
                No inicio desconfiei do site, mas mesmo assim me inscrevi e no
                fim encontrei o meu Colaborador direto e foi muito bom a
                experiência.
              </Text>
              <Flex w="100%" mt="4">
                <Text fontWeight="bold">Maria de Jesus</Text>
                <Text ml="2">/ Beneficiário(a)</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Slider>
    </Container>
  )
}
