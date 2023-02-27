
import {IoSunny, IoMoon} from "react-icons/io5"

import React, { useState } from 'react'
import {
    Flex,
    Box,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    useColorMode,
    useColorModeValue,
    Link as ChakraLink
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from '../components/Navitem'

export default function Sidebar() {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.200", "gray.700")
    const [toggle, setToggle] = useState(false)
  
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            top="0"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard." link_to={"/"} />
                <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active />
                
                <NavItem navSize={navSize} icon={FiUser} title="login" link_to={"../login"} />
                <NavItem navSize={navSize} icon={FiUser} title="signup" link_to={"../signup"} />
                <NavItem navSize={navSize} icon={FiUser} title="users" link_to={"../users"} />
                
                <NavItem navSize={navSize} icon={FiUser} title="Clients" />
                <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="blog" link_to={"../blog"} />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
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
            </Flex>
        </Flex>
    )
}
