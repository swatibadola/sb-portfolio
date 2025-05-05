import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      px={8}
      py={3}
      position="fixed"
      top={0}
      w="100%"
      zIndex={100}
      bgColor={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      boxShadow={colorMode === 'light' ? 'none' : 'lg'}
      transition="background-color 0.3s ease, box-shadow 0.3s ease"
    >
      <Text fontWeight="bold" fontSize="xl">SW<span style={{ color: 'blue' }}>.</span></Text>

      <Flex gap={8} align="center">
        <RouterLink as={RouterLink} to='/' fontWeight='medium'>HOME</RouterLink>
        <RouterLink as={RouterLink} to='/about' fontWeight="medium">ABOUT</RouterLink>
        <RouterLink as={RouterLink} to="/skills" fontWeight="medium">SKILLS</RouterLink>
        <RouterLink as={RouterLink} to='/projects' fontWeight="medium">PROJECTS</RouterLink>
        <RouterLink as={RouterLink} to='/connect' fontWeight="medium">CONNECT</RouterLink>

        <IconButton
          aria-label='Toggle theme'
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant='ghost'
          size='md'
          isRound
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;