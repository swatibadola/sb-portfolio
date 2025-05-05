import { Box, Heading, Text, VStack} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const About = () => {
    return (
        <Box
            id="about"
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.50"
            px={[4, 6, 8]}
            py={[10, 12, 20]}
        >
            <VStack spacing={8} textAlign="center">
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Heading
                        as="h2"
                        size="2xl"
                        mb={10}
                        fontWeight="bold"
                        color="gray.800"
                    >
                        About Me
                    </Heading>

                    <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="3xl">
                        I'm a data science enthusiast with a passion for transforming complex data into impactful insights.
                        Currently pursuing a B.Tech in Mechatronics Engineering, I focus on building intelligent systems that
                        blend machine learning, real-world data, and business understanding. My journey spans predictive modeling,
                        natural language processing, and creative problem-solving. I’m driven by curiosity, disciplined learning,
                        and a mission to create solutions that matter.
                    </Text>

                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        color="gray.600"
                        mt={6}
                        maxW="3xl"
                    >
                        I am actively seeking opportunities to apply my skills in data science and machine learning,
                        and to collaborate with teams that are shaping the future with data-driven decisions.
                    </Text>
                </MotionBox>
            </VStack>
        </Box>
    );
};

export default About;

