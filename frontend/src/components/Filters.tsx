import { Box, Input, Select, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";

interface FilterProps {
  onFilter: (dateFrom: string, dateTo: string, type: string) => void;
}

export default function Filters({ onFilter }: FilterProps) {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [type, setType] = useState("");

  return (
    <Box p={4} borderRadius="lg" mb={4}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} placeholder="Fecha desde" />
        <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} placeholder="Fecha hasta" />
        <Select placeholder="Tipo" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="tender">Tender</option>
          <option value="agile">Agile</option>
        </Select>
        <Button colorScheme="gray" onClick={() => onFilter(dateFrom, dateTo, type)}>
          Filtrar
        </Button>
      </Stack>
    </Box>
  );
}
