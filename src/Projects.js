import { Fragment } from 'react';
import {
  chakra,
  Box,
  Stack,
  VStack,
  HStack,
  Flex,
  Text,
  Image,
  Container,
  Icon,
  StackProps,
  Link
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiOutlineHeart, AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaGlobe, FaGithub} from 'react-icons/fa';

// interface ProductCardProps {
//   id: number;
//   title: string;
//   detail: string[];
//   location: string;
//   updated_at: string;
//   price: string;
//   image: string;
//   isFeatured?: boolean;
// }

const productsList = [
  {
    id: 1,
    title: 'Dogefiles - Free Cloud Storage Service',
    // location: 'Paris',
    detail: ['React.js', 'Next.js', 'Express.js', 'MongoDB', 'Node.js', 'JavaScript', 'AWS S3'],
    description: 'Dogefiles is a free cloud storage service I have created as a personal project and later decided to made it public and now it has 80000+ monthly traffic. CHECKOUT TODAY!!',
    // price: '$ 400k',
    isFeatured: true,
    github: "https://github.com/dogefiles",
    url: "https://dogefiles.io",
    image:
      'https://www.dogefiles.io/static/images/dashboard_light.webp'
  },
  {
    id: 2,
    title: 'DigiKeys - Digital Products Marketplace',
    // location: 'New York',
    detail: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'JavaScript', 'Firebase'],
    description: 'DigiKey is an all-in-one payment processing and e-commerce solution. Accept payments, sell digital keys from your own and more, do it all with a single platform.',
    // updated_at: '1 days ago',
    // price: '$ 450k',
    github: "https://github.com/iamrobins/DigiKeys",
    url: "https://www.youtube.com/watch?v=flauF5YODPg",
    image:  
      'https://camo.githubusercontent.com/0b212857df801484496a770c7f3097abc6a287d8f974565b407c42ad032b0da5/68747470733a2f2f692e706f7374696d672e63632f665462684a4342772f646967696b6579732d686f6d652e706e67'
  },
  {
    id: 3,
    title: 'Lyricly - Identify Songs With Lyrics',
    // location: 'New York',
    detail: ['HTML', 'CSS', 'JavaScript', 'Express.js', 'Node.js'],
    description: 'Lyricly gets you any song in the world from any language by singing any line of the song lyrics.',
    // updated_at: '1 days ago',
    // price: '$ 450k',
    github: "https://github.com/iamrobins/lyricly",
    url: "https://twitter.com/i/status/1342478913159630850",
    image:  
      '/lyricly.gif'
  },
  {
    id: 4,
    title: 'GTA San Andreas Multiplayer Flare Gun Mod',
    // location: 'New York',
    detail: ['Pawn Language'],
    description: 'PUBG Flare Gun for GTA San Andreas Multiplayer',
    // updated_at: '1 days ago',
    // price: '$ 450k',
    github: "https://github.com/iamrobins/Flare-Gun-for-GTA-San-Andreas-Multiplayer",
    url: "https://www.youtube.com/watch?v=BMnwGJ3jP_M",
    image:  
      'https://camo.githubusercontent.com/318531f847ddc65909c98d31d9216db6c443c5add4ed2ff8d1be63cc77d812fd/68747470733a2f2f692e706f7374696d672e63632f4b595672334d6b672f53637265656e73686f742d36352e706e67'
  }
];

const Index = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 12 }} margin="0 auto">
      <VStack spacing={4}>
        {productsList.map((product, index) => (
          <Stack
            key={index}
            spacing={{ base: 0, md: 4 }}
            direction={{ base: 'column', md: 'row' }}
            border="1px solid"
            borderColor="gray.400"
            p={2}
            rounded="md"
            w={{ base: 'auto', md: '4xl' }}
            overflow="hidden"
            pos="relative"
          >
            {product.isFeatured && (
              <Flex
                alignItems="center"
                p={1}
                bg="red.400"
                pos="absolute"
                fontSize="xs"
                fontWeight="500"
                color="white"
                top={0}
                left={0}
              >
                <Text>FEATURED</Text> &nbsp; <Icon as={AiOutlineExclamationCircle} h={4} w={4} />
              </Flex>
            )}
            <Flex ml="0 !important">
              <Image
                rounded="md"
                w={{ base: '100%', md: '18rem' }}
                h="auto"
                objectFit="cover"
                src={product.image}
                alt="product image"
              />
            </Flex>
            <Stack direction="column" spacing={2} w="100%" mt={{ base: '5px !important', sm: 0 }}>
              <Flex justify="space-between">
                <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                  {product.title}
                </chakra.h3>
                <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                  {product.price}
                </chakra.h3>
              </Flex>
              <Box>
                <Text fontSize="lg" fontWeight="500">
                  {product.location}
                </Text>
              </Box>
              <Flex alignItems="center" color="gray.500">
                {product.detail.map((data, index) => (
                  <Fragment key={index}>
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>{data}</Text>
                    {product.detail.length - 1 != index && (
                      <chakra.span mx={2} fontSize={{ base: 'sm', sm: 'md' }}>
                        |
                      </chakra.span>
                    )}
                  </Fragment>
                ))}
              </Flex>
              <Text textAlign={"left"} fontSize={{ base: 'sm', sm: 'md' }}>{product.description}</Text>
              <Stack
                direction={{ base: 'column-reverse', sm: 'row' }}
                justify="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
              >
                
                <Stack direction="row" spacing={1} mb="0 !important">
                  <IconButton> 
                    <Icon as={FaGithub} w={4} h={4} />
                    <Link href={product.github} target={"_blank"}>
                        <Text fontSize="sm">Github</Text>
                    </Link>
                  </IconButton>
                  <IconButton spacing={2} bg="green.500" color="white">
                    
                            <Icon as={FaGlobe} w={4} h={4} />
                            <Link href={product.url} target={"_blank"}>
                            <Text fontSize="sm">Visit</Text>
                    </Link>
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </VStack>
    </Container>
  );
};

const IconButton = ({ children, ...props }) => {
  return (
    <HStack
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      px={2}
      py="0.15rem"
      alignItems="center"
      rounded="sm"
      spacing={2}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default Index;
