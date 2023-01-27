import { useQuery, useQueryClient } from "@tanstack/react-query";
import PokemonCard from "./PokemonCard/PokemonCard";

const { SimpleGrid, Center, CircularProgress } = require("@chakra-ui/react")

const PokemonsList = () => {
    const queryClient = useQueryClient();

    const getPokemons = async () =>  {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon", { cache: 'no-store'});
        return result.json();
    }

    const {isLoading, data, error} = useQuery({
        queryKey: ["pokemonsList"],
        queryFn: getPokemons,
    });
    

    if (isLoading) {
        return <Center><CircularProgress isIndeterminate /></Center>;
    }
    
    if (error) {
        return <div>ERROR: </div>
    }
    
    return (
        <SimpleGrid minChildWidth={'260px'} spacing={'20px'}>
            { data.results.map((item, index) => <PokemonCard key={index} pokemonURL={item.url} />) }
        </SimpleGrid>
    )
}

export default PokemonsList;