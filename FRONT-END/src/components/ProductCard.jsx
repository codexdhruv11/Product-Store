import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    onClose();
    toast({
      title: success ? "Success" : "Error",
      description: success ? "Product updated successfully" : message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      position="relative"
      bg="#181818"
      border="1px solid #333"
      p={6}
      transition="all 0.3s ease"
      _hover={{
        borderColor: "#00FFE0",
        transform: "translateY(-8px)",
        boxShadow: "0 10px 25px rgba(0, 255, 224, 0.15)",
      }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box mb={6} position="relative" pt="80%" overflow="hidden">
        <Image
          src={product.image}
          alt={product.name}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>

      <Box flex="1">
        <Heading
          as="h3"
          size="md"
          mb={2}
          fontWeight="bold"
          letterSpacing="0.05em"
          color="#fff"
        >
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color="#00FFE0" mb={6}>
          ${product.price}
        </Text>
      </Box>

      <HStack spacing={3} justify="flex-end">
        <IconButton
          icon={<EditIcon />}
          onClick={onOpen}
          aria-label="Edit"
          variant="ghost"
          color="#fff"
          _hover={{
            color: "#00FFE0",
            transform: "scale(1.2)",
          }}
          transition="all 0.2s"
        />
        <IconButton
          icon={<DeleteIcon />}
          onClick={() => handleDeleteProduct(product._id)}
          aria-label="Delete"
          variant="ghost"
          color="#fff"
          _hover={{
            color: "#FF6B00",
            transform: "scale(1.2)",
          }}
          transition="all 0.2s"
        />
      </HStack>

      {/* Update Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="#181818" border="1px solid #00FFE0">
          <ModalHeader
            fontWeight="bold"
            letterSpacing="0.05em"
            color="#00FFE0"
            textAlign="center"
          >
            UPDATE PRODUCT
          </ModalHeader>
          <ModalCloseButton color="#fff" />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="PRODUCT NAME"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="PRICE"
                type="number"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="IMAGE URL"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                }
              />
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <HStack spacing={4}>
              <Button
                onClick={onClose}
                color="#fff"
                borderColor="#fff"
                _hover={{ borderColor: "#FF6B00", color: "#FF6B00" }}
              >
                CANCEL
              </Button>
              <Button
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                color="#111"
                bg="#00FFE0"
                borderColor="#00FFE0"
                _hover={{ bg: "#00BFA5", borderColor: "#00BFA5" }}
              >
                UPDATE
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default ProductCard;