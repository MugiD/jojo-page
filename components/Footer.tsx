import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      as="a"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      target="_blank"
      rel="noreferrer"
      _hover={{ bg: "whiteAlpha.200" }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>&copy; 2022 Bek Slambek (MugiD). All rights reserved</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="https://twitter.com/sbek22_">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="Instagram" href="https://instagram.com/sbek22">
            <FaInstagram />
          </SocialButton>
          <SocialButton label="GitHub" href="https://github.com/MugiD">
            <FaGithub />
          </SocialButton>
          <SocialButton label="LinkedIn" href="https://linkedin.com/in/sbek22">
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
