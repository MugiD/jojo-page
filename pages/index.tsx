import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Navigate from "../components/Navigate";
import Cover from "../components/Cover";

const Home: NextPage = () => {
  return (
    <Box my={16}>
      <Cover />
      <Navigate />
      <Box mt={16}>
        <iframe
          src="https://open.spotify.com/embed/playlist/3f4If4rUbBwHACmNVIet1A?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </Box>
    </Box>
  );
};

export default Home;
