import {
  Image,
  Flex,
  Heading,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

interface HeaderProps {
  setHeaderHight(height: number | undefined): void
}

export function Header({ setHeaderHight }: HeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const isSm = useBreakpointValue({ base: false, sm: true })

  useEffect(() => {
    setHeaderHight(containerRef.current?.offsetHeight)
  }, [containerRef])

  return (
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
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8"
            py="8"
            borderRadius="10px"
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
            <Text fontSize="16px">login</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
