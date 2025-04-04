import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpportunitiesList from "./pages/OpportunitiesList";
import FollowedOpportunities from "./pages/FollowedOpportunities";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  const bgColor = useColorModeValue("gray.50", "gray.900")
  return (
    <Router>
      <Box 
        minH="100vh" 
        bg={bgColor}
        p={{ base: 4, md: 8 }}
      >
        <Box maxW="1200px" mx="auto">
          <NavigationBar />
          
          <Box mt={4}>
            <Routes>
              <Route path="/" element={<OpportunitiesList />} />
              <Route path="/followed" element={<FollowedOpportunities />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
