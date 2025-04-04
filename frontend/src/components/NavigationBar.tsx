import { Flex, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const NavigationBar = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const activeBg = useColorModeValue("blue.50", "blue.900");
  
  return (
    <Flex 
      mb={8} 
      p={4} 
      bg={bgColor}
      borderRadius="lg"
      boxShadow="sm"
      borderWidth="1px"
      borderColor="gray.100"
    >
      <Flex gap={2}>
        <Link as={RouterLink} to="/" _activeLink={{ fontWeight: "bold" }}>
          <Button 
            variant="ghost"
            colorScheme="blue"
            _active={{ bg: activeBg }}
            px={6}
          >
            Listado de Oportunidades
          </Button>
        </Link>
        <Link as={RouterLink} to="/followed" _activeLink={{ fontWeight: "bold" }}>
          <Button 
            variant="ghost"
            colorScheme="blue"
            _active={{ bg: activeBg }}
            px={6}
          >
            Oportunidades en Seguimiento
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};