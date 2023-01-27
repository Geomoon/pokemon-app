import PokemonsList from "@/components/PokemonsList/PokemonsList";
import { Box, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box padding={"20"}>
     <PokemonsList/>
    </Box>
  )
}
