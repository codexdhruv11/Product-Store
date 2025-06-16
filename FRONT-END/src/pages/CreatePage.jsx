import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product.js";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    const { success } = await createProduct(newProduct);
    if (success) {
      navigate("/");
    }
  };

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={10} textAlign="center">
        <Heading
          as="h1"
          size="xl"
          fontWeight="black"
          letterSpacing="0.1em"
          color="#00FFE0"
        >
          CREATE NEW PRODUCT
        </Heading>
        
        <Box w="full" p={8} border="1px solid #333">
          <VStack spacing={6}>
            <Input
              placeholder="PRODUCT NAME"
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder="PRICE"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input
              placeholder="IMAGE URL"
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button
              onClick={handleAddProduct}
              w="full"
              color="#111"
              bg="#FF6B00"
              borderColor="#FF6B00"
              _hover={{
                bg: "#FF8C00",
                borderColor: "#FF8C00",
                transform: "scale(1.02)",
              }}
            >
              CREATE PRODUCT
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
export default CreatePage;