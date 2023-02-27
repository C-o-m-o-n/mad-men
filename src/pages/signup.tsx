
import { Heading, Box, Center, Link as ChakraLink, Image, Flex, Badge, Text,Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {useState} from 'react'
import {IoSunny, IoMoon} from "react-icons/io5"

export default function Signup(){
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.700")
  const [toggle, setToggle] = useState(false)
  
  return(
    <>
        <Flex
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}>
          <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          background={formBackground}
          p={12}
          rounded={6}
          position={"relative"}
          >
            <Heading mb={3}>Signup</Heading>
            <Input
              type="text"
              mb={3}
              variant={"filled"}
              placeHolder={"enter username"}
            />
            <Input
              type="email"
              mb={3}
              variant={"filled"}
              placeHolder={"enter email"}
            />
            <Input
              type="password"
              mb={3}
              variant={"filled"}
              placeHolder={"enter password"}
            />
            <Input
              type="password"
              mb={3}
              variant={"filled"}
              placeHolder={"confirm password"}
            />
            <Button 
              m={3}
              colorScheme={"teal"}
            >Signup</Button>
            <Text
              mb={5}
            >already have an account?, 
              <ChakraLink href="/login">Login here</ChakraLink>
            </Text>
            <Box
              position={"absolute"}
              top={2}
              right={2}
              cursor={"pointer"}
              onClick={()=>{
                toggleColorMode();
                setToggle(!toggle)
              }}
            >
          {toggle ? <IoSunny/> : <IoMoon/>}
            </Box>
          </Flex>
        </Flex>
    </>
    )
}