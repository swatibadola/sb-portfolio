
import { Box, Button, Container, Heading, HStack, VStack, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter} from "react-icons/fa";

const MotionBox = motion(Box);

const Connect = () => {
  return (
    <Box
      id="connect"
      bg="blackAlpha.800"
      color="white"
      py={20}
      px={{ base: 6, md: 20 }}
    >
      <Container maxW="container.lg" textAlign="center">
        <VStack spacing={8} mb={12}>
          <Heading as="h2" size="xl" fontWeight="bold">
            Get in Touch
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">
            Let's connect! Whether you have a question, project idea, or opportunity — feel free to reach out.
          </Text>
        </VStack>

        <HStack justify="center" spacing={6}>
          <MotionBox
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              as={Link}
              href="https://www.linkedin.com/in/swati-badola-b28a2722a/"
              target="_blank"
              leftIcon={<FaLinkedin />}
              colorScheme="blue"
              variant="solid"
              size="lg"
            >
              LinkedIn
            </Button>
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              as={Link}
              href="https://github.com/swatibadola"
              target="_blank"
              leftIcon={<FaGithub />}
              colorScheme="gray"
              variant="solid"
              size="lg"
            >
              GitHub
            </Button>
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              as={Link}
              href="mailto:swatibadola39@gmail.com"
              leftIcon={<FaEnvelope />}
              colorScheme="teal"
              variant="solid"
              size="lg"
            >
              Email
            </Button>
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              as={Link}
              href="https://x.com/SwatiBadola3"
              leftIcon={<FaTwitter />}
              colorScheme="blue"
              variant="solid"
              size="lg"
            >
              Twitter
            </Button>
          </MotionBox>
        </HStack>
      </Container>
    </Box>
  );
};

export default Connect;