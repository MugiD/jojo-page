import { Image, Heading, Text, Button, Box } from "@chakra-ui/react";

const Cover = () => {
  return (
    <Box>
      <Box
        gap={8}
        flexDirection="row"
        display={{ md: "flex", base: "block" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image
          src="./jojo.jpg"
          alt="playlist cover"
          h={300}
          w={300}
          m={{ base: "auto", md: 0 }}
          objectFit="cover"
          borderRadius={10}
        />
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading
            fontSize={{ sm: 50, base: 40 }}
            bgGradient="linear(to-r, #FBBAAD, #A1828B)"
            bgClip="text"
            fontWeight="black"
          >
            JoJo Reference
          </Heading>
          <Text fontSize={18} my={6}>
            This playlist contains only songs and albums that were referenced in
            JoJo&apos;s. I hope you&apos;ll enjoy and add it to your library 💖
          </Text>
          <Text fontSize={14} my={6} fontWeight="bold">
            @sb22ek | 352 tracks | 27h. 11min
          </Text>
          <Button borderRadius="full" bg="spoti" fontSize={20} py={4}>
            <a href="https://open.spotify.com/playlist/3f4If4rUbBwHACmNVIet1A?si=b14639d627b84077">
              Open in Spotify
            </a>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cover;
