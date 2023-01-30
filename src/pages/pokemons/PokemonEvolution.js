import CardSkeleton from "@/components/PokemonsList/PokemonCard/CardSkeleton";
import { Center, SimpleGrid } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import EvolutionCard from "./EvolutionCard";

const PokemonEvolution = ({evolutionId}) => {
    
    const queryClient = useQueryClient();

    const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/evolution-chain/${evolutionId}`;
        const result = await fetch(url);
        return result.json();
    }

    const {isLoading, data, error, isSuccess} = useQuery({
        queryKey: ["pokemon-evolution", evolutionId],
        queryFn: getPokemon,
    });

    const loadNames = () => {
        let list = [];
      
        let evoData = data.chain;

        do {
            list.push(evoData.species.name);

            evoData = evoData['evolves_to'][0];
        } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
        return list;
    }

    if (isLoading) {
        return  <Center><CardSkeleton /></Center>
    }

    return (
            <SimpleGrid minChildWidth={'260px'} spacing={'20px'}>
                {
                    loadNames().map((item, index) => <EvolutionCard key={index} nombre={item}/>)
                }
            </SimpleGrid>
    )
}

export default PokemonEvolution;