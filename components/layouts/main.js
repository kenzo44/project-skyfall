import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
  return (
    <Box as="main" pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Helping Develop the Amazing Everyday!" />
            <meta name="author" content="Kenish Suri" />
            <title>Kenish Suri</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
    </Box>
  )
}

export default Main