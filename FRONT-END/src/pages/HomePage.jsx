import { Container, SimpleGrid, Text, VStack, Box, Heading, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Box as='main' bg='#111' minH='100vh'>
      {/* Hero Section */}
      <Box 
        position="relative" 
        py={28} 
        px={4}
        overflow="hidden"
        borderBottom="2px solid #333"
      >
        {/* Geometric background elements */}
        <Box 
          position="absolute" 
          top="-50%" 
          right="-10%" 
          w="60%" 
          h="150%" 
          bgGradient="linear(45deg, #FF6B0030, #B366FF30)"
          transform="rotate(30deg)"
          zIndex="0"
        />
        <Box 
          position="absolute" 
          bottom="-20%" 
          left="-10%" 
          w="40%" 
          h="80%" 
          bgGradient="linear(45deg, #00FFE030, #B366FF30)"
          transform="rotate(-20deg)"
          zIndex="0"
        />
        
        <Container maxW="container.xl" position="relative" zIndex="1">
          <VStack spacing={8} textAlign="center" maxW="3xl" mx="auto">
            <Heading
              as="h1"
              size="2xl"
              fontWeight="black"
              letterSpacing="0.1em"
              lineHeight="1.1"
              bgGradient="linear(45deg, #00FFE0, #B366FF)"
              bgClip="text"
            >
              PREMIUM PRODUCT COLLECTION
            </Heading>
            <Text fontSize="xl" color="#aaa" maxW="2xl">
              Discover our curated selection of high-quality products designed for exceptional performance and style.
            </Text>
            <Button 
              as={Link} 
              to="/create"
              variant="primary"
              size="lg"
              mt={8}
            >
              CREATE PRODUCT
            </Button>
          </VStack>
        </Container>
      </Box>

      <Container maxW='container.xl' py={20}>
        <VStack spacing={16} align='stretch'>
          <Box textAlign="center">
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              letterSpacing="0.15em"
              color="#fff"
              mb={2}
            >
              PRODUCT CATALOG
            </Text>
            <Box w="120px" h="3px" bg="#00FFE0" mx="auto" />
          </Box>
          
          {products.length > 0 ? (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={12}
            >
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </SimpleGrid>
          ) : (
            <VStack spacing={8} py={16} textAlign="center">
              <Text fontSize="2xl" color="#888">
                No products available
              </Text>
              <Button 
                as={Link} 
                to="/create" 
                variant="primary"
              >
                CREATE FIRST PRODUCT
              </Button>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
};
export default HomePage;