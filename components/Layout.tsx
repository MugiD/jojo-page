import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Bek Slambek" />
        <title>JoJo Reference Playlist</title>
        <link rel="shortcut icon" href="/jojo.jpg" type="image/x-icon" />
        <meta
          property="description"
          content="JoJo Reference Playlist is the only playlist you ever need. View example of some tracks in the Landing Page of this music collection"
        />
        <meta property="og:image" content="https://jojo.dosek.xyz/card.png" />
        <meta property="og:title" content="JoJo Reference Playlist" />
        <meta
          property="og:description"
          content="JoJo Reference Playlist is the only playlist you ever need. View example of some tracks in the Landing Page of this music collection"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="JoJo Reference Playlist" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@sbek22_" />
        <meta
          name="twitter:image"
          content="https://jojo.dosek.xyz/card.png"
        />
      </Head>
      <Container maxW="container.md" color="white">
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
