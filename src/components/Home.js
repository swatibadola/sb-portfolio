// src/components/Hero.js

import { Box, Heading, Text, Button, VStack, useColorModeValue, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Home = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const buttonColorScheme = useColorModeValue("purple", "purple");

  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      color={textColor}
      px={{ base: 6, md: 20 }}
      py={12}
    >
      <VStack spacing={6} textAlign="center">
        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            fontWeight="bold"
          >
            Building Intelligent Systems with Data
          </Heading>

          <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
            Data Scientist in the making | Focused on Machine Learning, NLP, and Real-World Impact
          </Text>

          <Button
            mt={8}
            colorScheme={buttonColorScheme}
            size="lg"
            rounded="full"
            as="a"
            href="#connect"
          >
            Let's Connect
          </Button>

          <ChakraLink href={process.env.PUBLIC_URL + '/SwatiResume.pdf'} download>
            <Button
              mt={8}
              colorScheme={buttonColorScheme}
              size="lg"
              rounded="full"
              as="a"
              ml={5}
            >
              Resume
            </Button>
          </ChakraLink>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default Home;

