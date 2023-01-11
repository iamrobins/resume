import * as React from 'react';
import { Container, Box, HStack, useColorModeValue, Center } from '@chakra-ui/react';


import {
  Text,
  Heading,
  Flex,
  Avatar,
  Link,
  VStack,
  IconButton,
  Divider,
  Fade
} from '@chakra-ui/react';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter, FaRegEnvelope } from 'react-icons/fa';
const siteConfig = {
  author: {
    name: 'Robin Singh',
    accounts: [
      {
        url: 'https://github.com/iamrobins',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/robinsingh_t',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://dev.to/robins',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />
      },
      {
        url: 'https://linkedin.com/in/robinsinghid',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
    //   {
    //     url: 'https://www.quora.com/profile/#',
    //     label: 'Quora Account',
    //     type: 'red',
    //     icon: <FaQuora />
    //   }
    ]
  }
};

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const MainScreen = () => {
  return (
    <VStack spacing={5}>
      <motion.div whileHover={{ y: -5, scale: 1.1 }}>
        <Box boxShadow="xl" _hover={{ boxShadow: 'lg' }} borderRadius="full">
          <Avatar
            _groupHover={{ width: '5rem', height: '5rem' }}
            size="xl"
            src="https://robin.asia/images/avatar.jpeg"
          />
        </Box>
      </motion.div>
      <Heading fontSize="xl" fontFamily="body" textTransform="capitalize" noOfLines={2}>
        Robin Singh
      </Heading>
      <Text
        color="gray.500"
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: 'none' }}
        display="block"
      >
        Full-Stack Developer
      </Text>
      <Fade in>
        <Text
          color="gray.500"
          fontSize="lg"
          noOfLines={{ base: 3, md: 4 }}
          _groupHover={{ display: 'block' }}
          display="none"
        >
          Hi there 👋 I'm Robin Singh a Full Stack Software Engineer from India 🇮🇳 but my main area of expertise is Backend development.
        </Text>
      </Fade>
      <Divider />
      <Flex alignItems="center" justify="center" w="100%">
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              rounded="full"
              {...iconProps}
            />
          ))}
          <IconButton
              as={Link}
              isExternal
              href={"mailto:itsrobin4@gmail.com"}
              aria-label={"Email"}
              colorScheme={"email"}
              icon={<FaRegEnvelope />}
              rounded="full"
              {...iconProps}
            />
        </Box>
      </Flex>
    </VStack>
  );
};

const Card = () => {
  const bg = useColorModeValue('white', '#2f3244');

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Box
          maxH="400px"
          minH="354px"
          w="345px"
          boxShadow="lg"
          rounded="md"
          p={6}
          overflow="hidden"
          cursor="pointer"
          _hover={{ boxShadow: 'lg' }}
          bg={bg}
          role="group"
        >
          <MainScreen />
        </Box>
      </Center>
    </Container>
  );
};

export default Card;