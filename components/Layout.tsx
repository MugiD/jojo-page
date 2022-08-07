import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>JoJo Reference Playlist</title>
        <meta property="og:image" content="https://i.imgur.com/imagelink.jpg" />
        <meta property="og:title" content="Website Title" />
        <meta
          property="og:description"
          content="JoJo Reference Playlist is the only playlist you ever need. View some examples of tracks in the Landing Page of this music collection"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jojo.dosek.xyz/" />
      </Head>
      <Container maxW="container.md" color="white">
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
