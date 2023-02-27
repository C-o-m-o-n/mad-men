import {
  Link as ChakraLink,Code,List,
  ListIcon,  ListItem, Box, Center,
  Flex, Badge, Text, Menu, MenuButton,IconButton,
  HamburgerIcon, AddIcon,ExternalLinkIcon, RepeatIcon, 
  EditIcon, MenuList, MenuItem,MenuItemOption,
  MenuGroup, Button,
  MenuOptionGroup,
  MenuDivider,
  
} from "@chakra-ui/react";
import Image from 'next/image'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/react'


import { Heading } from '@chakra-ui/react'
import { MdStar } from "react-icons/md";
import { Inter } from '@next/font/google'
import soybeans from './/../images/soybeans.jpg'

export default function Home() {

  return (
      <main>
        <section>
        
    <Box h="100vh">
        <Text mt={2} fontSize="xl" fontWeight="bold" lineHeight="short">
          welcome to comon soya no Center
        </Text>
      <Box>
          <Flex  mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="bold" lineHeight="short">
          welcome to comon soya
        </Text>
        <Text mt={2}>the best soya shop</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>4.84</b> (190)
          </Text>
        </Flex>
          </Box>
    </Box>
      </section>
       <Box 
          p="5" 
          m={3}
          maxW="620px" 
          borderWidth="1px"
          direction={"column"}
          background={"gray.100"}
          rounded={6}>
      <Image borderRadius="md" src={soybeans} alt="soybeans Image"/>
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>4.84</b> (190)
          </Text>
        </Flex>
      </Box>
      
      
       <Box 
          p="5" 
          m={3}
          maxW="620px" 
          borderWidth="1px"
          direction={"column"}
          background={"gray.100"}
          rounded={6}>
      <Image borderRadius="md" src={soybeans} alt="soybeans Image"/>
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>4.84</b> (190)
          </Text>
        </Flex>
      </Box>
      
      
       <Box 
          p="5" 
          m={4}
          maxW="620px" 
          borderWidth="1px"
          direction={"column"}
          background={"gray.100"}
          rounded={6}>
      <Image borderRadius="md" src={soybeans} alt="soybeans Image"/>
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>4.84</b> (190)
          </Text>
        </Flex>
      </Box>
      
      
      </main>
  )
}
