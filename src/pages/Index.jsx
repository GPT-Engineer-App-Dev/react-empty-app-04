import { Container, Text, VStack, Box, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg">
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
          <IconButton aria-label="About" icon={<FaInfoCircle />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
        </Box>
      </Flex>
      <Flex direction="column" align="center" justify="center" height="80vh">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">Welcome to MyApp</Text>
          <Text fontSize="xl">Your journey starts here. Explore the features and enjoy your stay.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;