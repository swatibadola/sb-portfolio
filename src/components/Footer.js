// Footer.js
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box
      as="footer"
      width="100%"
      bottom={0}
      position='fixed'
      py={4}
      px={[4, 8, 12]}
      textAlign="center"
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={textColor}
      mt="auto"
    >
      <Text fontSize={['sm', 'md']}>Designed & Coded by Swati 🤍 </Text>
    </Box>
  );
};

export default Footer;