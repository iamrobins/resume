import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Profile from './Profile';
import Projects from "./Projects";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading>About Me</Heading>
            <Profile />
            <Heading>My Projects</Heading>
            <Projects />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
