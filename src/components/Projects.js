// src/components/Projects.js

import { Box, Heading, Text, VStack, SimpleGrid, Badge, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const projects = [
  {
    title: "Stock Price Prediction with GenAI Insights",
    description: "Forecasting stock prices by integrating traditional models with generative AI-driven market sentiment analysis.",
    tools: ["OpenAI API", "LangChain", "Prophet", "Darts", "Hugging Face", "PyTorch Lightning"],
  },
  {
    title: "AI-Powered Sponsorship Detection System",
    description: "Detecting sponsorships in social media videos and pages using computer vision and NLP techniques.",
    tools: ["Python", "NLP", "TensorFlow", "Pandas", "Matplotlib"],
  },
  {
    title: "Student Score Predictor",
    description: "Predicting student performance based on study hours and academic behavior with high model accuracy and interpretability.",
    tools: ["Scikit-learn", "EDA", "Linear Regression", "Heroku", "Pandas", "Matplotlib", "NumPy", "Flask"],
  },
];

const Projects = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      id="projects"
      py={20}
      px={{ base: 6, md: 20 }}
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <VStack spacing={8} textAlign="center" mb={12}>
        <Heading as="h2" size="2xl" fontWeight="bold" color={headingColor}>
          Projects
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
          Real-world problems solved with Data Science, Machine Learning, and AI.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            p={6}
            bg={cardBg}
            rounded="2xl"
            boxShadow="lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Heading as="h3" size="md" mb={4} color={headingColor}>
              {project.title}
            </Heading>
            <Text mb={4} color={textColor}>
              {project.description}
            </Text>
            <Box>
              {project.tools.map((tool, idx) => (
                <Badge
                  key={idx}
                  colorScheme="teal"
                  mr={2}
                  mb={2}
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="0.8em"
                >
                  {tool}
                </Badge>
              ))}
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
