import { Image, Heading, Box, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Section = styled(Box)`
  justify-content: space-between;
  width: 300px;
  display: flex;
  margin: 0 auto;
`;

const Num = styled.span`
  font-weight: bold;
  margin-right: 1em;
  color: #1db954;
  width: 100px;
  text-align: right;

  @media (max-width: 764px) {
    text-align: left;
  }
`;

const Navigate = () => {
  return (
    <Box mt={10}>
      <Flex
        gap={8}
        flexDirection="row"
        display={{ md: "flex", base: "block" }}
        alignItems="center"
        justify={{md: "space-between", base: "center"}}
      >
        <Flex direction="column">
          <Heading
            fontSize={{ sm: 50, base: 40 }}
            bgGradient="linear(to-r, #FBBAAD, #A1828B)"
            bgClip="text"
            fontWeight="black"
            mb={6}
            mx={{base: "auto", md: 0}}
            textAlign="right"
          >
            Navigation
          </Heading>
          <Section>
            <Num>1-8:</Num>
            Phantom Blood
          </Section>

          <Section>
            <Num>9-17:</Num>
            Battle Tendency
          </Section>

          <Section>
            <Num>18-86:</Num>
            Stardust Crusaders
          </Section>

          <Section>
            <Num>87-139:</Num>
            Diamond Is Unbreakable
          </Section>
          <Section>
            <Num>140-213:</Num>
            Golden Wind
          </Section>
          <Section>
            <Num>214-254:</Num>
            Stone Ocean
          </Section>
          <Section>
            <Num>255-345:</Num>
            Steel Ball Run
          </Section>
          <Section>
            <Num>346-352:</Num>
            Jojolion
          </Section>
        </Flex>
        <Image
          src="https://flxt.tmsimg.com/assets/p13351524_b_v8_aa.jpg"
          alt="nav image"
          h="300px"
          w="300px"
          m={{ base: "auto", md: 0 }}
          mt={6}
          objectFit="cover"
          borderRadius={10}
        />
      </Flex>
    </Box>
  );
};

export default Navigate;
