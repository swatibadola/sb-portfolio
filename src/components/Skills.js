// src/components/Skills.js


import { Box, Heading, SimpleGrid, Badge, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    category: "Libraries & Frameworks",
    items: ["TensorFlow", "Scikit-learn", "Pandas", "NLP", "Matplotlib", "Seaborn", "Flask"],
  },
  {
    category: "Tools & Databases",
    items: ["MongoDB", "MySQL", "Git", "AWS", "Neo4j", "Jupyter", "Kaggle"],
  },
  {
    category: "Concepts",
    items: ["Machine Learning", "Deep Learning", "NLP", "Data Engineering", "AI Ethics", "Data Visualization", "Big Data"],
  },
];

const Skills = () => {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      id="skills"
      py={20}
      px={{ base: 6, md: 20 }}
      bg={bgColor}
    >
      <VStack spacing={8} textAlign="center" mb={12}>
        <Heading as="h2" size="2xl" fontWeight="bold">
          Skills
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
          Tools, technologies, and techniques used to solve real-world challenges.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {skills.map((skillCategory, index) => (
          <MotionBox
            key={index}
            p={6}
            bg={cardBg}
            rounded="2xl"
            boxShadow="lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Heading as="h3" size="md" mb={4}>
              {skillCategory.category}
            </Heading>
            <Box>
              {skillCategory.items.map((item, idx) => (
                <Badge
                  key={idx}
                  colorScheme="purple"
                  mr={2}
                  mb={2}
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="0.9em"
                >
                  {item}
                </Badge>
              ))}
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
