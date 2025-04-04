import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchFollowed } from "../store/opportunitiesSlice";
import OpportunityTable from "../components/OpportunityTable";
import Filters from "../components/Filters";
import { Box, Heading, useColorModeValue, VStack } from "@chakra-ui/react";

export default function FollowedOpportunities() {
  const dispatch = useDispatch<AppDispatch>();
  const { followed } = useSelector((state: RootState) => state.opportunities);
  const [filteredFollowed, setFilteredFollowed] = useState(followed);

  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  useEffect(() => {
    dispatch(fetchFollowed());
  }, [dispatch]);

  useEffect(() => {
    setFilteredFollowed(followed);
  }, [followed]);

  const handleFilter = (dateFrom: string, dateTo: string, type: string) => {
    let filtered = followed;

    if (dateFrom) filtered = filtered.filter((op) => new Date(op.publish_date) >= new Date(dateFrom));
    if (dateTo) filtered = filtered.filter((op) => new Date(op.publish_date) <= new Date(dateTo));
    if (type) filtered = filtered.filter((op) => op.type === type);

    setFilteredFollowed(filtered);
  };

  return (
    <VStack spacing={6} align="stretch">
      <Box 
        p={6} 
        bg={cardBg}
        borderRadius="lg"
        boxShadow="sm"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Heading 
          mb={6} 
          fontSize="2xl" 
          color="blue.700"
          fontWeight="semibold"
        >
          Oportunidades en Seguimiento
        </Heading>
        <Filters onFilter={handleFilter} />
        <Box mt={6}>
          <OpportunityTable 
            opportunities={filteredFollowed} 
            loading={filteredFollowed.length === 0} 
          />
        </Box>
      </Box>
    </VStack>
  );
}
