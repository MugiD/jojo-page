import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>JoJo Reference Playlist</title>
      </Head>
      <Container maxW="container.md" color="white">
        {children}
      <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
