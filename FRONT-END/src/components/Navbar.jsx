import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Container maxW="container.xl" px={0} py={6}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing="0.15em"
          as={Link}
          to="/"
          _hover={{ color: "#00FFE0" }}
        >
          PRODUCT STORE
        </Text>
        <HStack spacing={4}>
          <Link to="/create">
            <HStack 
              spacing={2} 
              color="#fff"
              _hover={{ color: "#00FFE0" }}
              transition="color 0.2s"
            >
              <PlusSquareIcon boxSize={6} />
              <Text fontSize="sm" fontWeight="bold" letterSpacing="0.1em">
                NEW
              </Text>
            </HStack>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;