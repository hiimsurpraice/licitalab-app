import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, Spinner, Box } from "@chakra-ui/react";
import { Opportunity } from "../store/opportunitiesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { updateFollowStatus } from "../store/opportunitiesSlice";

interface Props {
  opportunities: Opportunity[];
  loading: boolean;
}

export default function OpportunityTable({ opportunities, loading }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  if (loading) return <Spinner size="xl" />;

  return (
    <Box borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Table variant="striped" size="md">
        <Thead bg="blue.900">
          <Tr>
            <Th color="white">Código</Th>
            <Th color="white">Título</Th>
            <Th color="white">Tipo</Th>
            <Th color="white">Fecha Publicación</Th>
            <Th color="white">Seguir</Th>
          </Tr>
        </Thead>
        <Tbody>
          {opportunities.map((opp) => (
            <Tr key={opp.id}>
              <Td>{opp.code}</Td>
              <Td>{opp.title}</Td>
              <Td>{opp.type}</Td>
              <Td>{new Date(opp.publish_date).toLocaleDateString()}</Td>
              <Td>
                <Checkbox
                  isChecked={opp.is_followed}
                  colorScheme="blue"
                  onChange={() => dispatch(updateFollowStatus({ id: opp.id, isFollowed: !opp.is_followed }))}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
