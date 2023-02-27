import {Flex, Box, Link as ChakraLink} from "@chakra-ui/react";

import Head from 'next/head'
import type { AppProps, theme } from 'next/app'
import Sidebar from '../components/Sidebar'

// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider >
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      </Head>
      <Flex >
      <Box>
        <Sidebar />
      </Box>
      <Box m={5}>
        <Component {...pageProps} />
      </Box>
      </Flex>
    </>
    </ChakraProvider>
  )
}

export default App
          
        