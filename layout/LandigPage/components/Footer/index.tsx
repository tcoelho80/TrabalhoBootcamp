import { Container, Flex, Heading, HStack } from '@chakra-ui/react'
import Link from 'next/link'

import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa'

export function Footer() {
  return (
    <Flex justify="center" py="8" bg="#264653">
      <Flex maxW="75%" justify="space-between" w="100%">
        <Heading fontWeight="light" color="#E76F51">
          colaboraaí
        </Heading>

        <Flex align="center">
          <HStack spacing="8">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100073727481949"
            >
              <FaFacebook
                size={24}
                style={{ cursor: 'pointer' }}
                color="#E76F51"
              />
            </a>
            <a target="_blank" href="https://twitter.com/ColaboraaiM">
              <FaTwitter
                size={24}
                style={{ cursor: 'pointer' }}
                color="#E76F51"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/colaboraai_mba/">
              <FaInstagram
                size={24}
                style={{ cursor: 'pointer' }}
                color="#E76F51"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/colaboraai-mba-943915223/"
            >
              <FaLinkedin
                size={24}
                style={{ cursor: 'pointer' }}
                color="#E76F51"
              />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCOKfbQ2QbS54lzsz5dJukKw"
            >
              <FaYoutube
                size={24}
                style={{ cursor: 'pointer' }}
                color="#E76F51"
              />
            </a>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
