import CardSkeleton from "@/components/PokemonsList/PokemonCard/CardSkeleton";
import { Box, Center, Container, Divider, Heading, SimpleGrid, Spacer, Wrap } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import PokemonEvolution from "./PokemonEvolution";
import PokemonInfo from "./PokemonInfo";
import PokemonMoves from "./PokemonMoves";
import PokemonSimpleCard from "./PokemonSimpleCard";

const Pokemon = ({pokemon}) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const {id} = router.query;

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const getPokemon = async () => {
        const result = await fetch(url);
        return result.json();
    }

    const {isLoading, data, error} = useQuery({
        queryKey: ["pokemon-profile", id],
        queryFn: getPokemon,
    });

    if (isLoading) return <Center><CardSkeleton /></Center>

    if (error) return <>ERROR</>
 
    return (<>
        <Center padding={20} >
            <SimpleGrid minChildWidth={"300px"} columns={3} padding={2} maxW={"80vw"} maxHeight={"80vh"} justifyItems={"center"} >
                <PokemonSimpleCard 
                    nombre={data.name} 
                    imgSrc={data.sprites.other["official-artwork"].front_default} />
                <PokemonInfo 
                    altura={data.height} peso={data.weight} 
                    tipos={data.types.map((item) => item.type.name)} 
                    habilidades={data.abilities.map((item) => item.ability.name)} />
                <PokemonMoves moves={data.moves.map((item) => item.move.name)} />
            </SimpleGrid>
        </Center>
        <Spacer height={10} />
        <Center paddingY={4} >
            <Container height={"80vw"}>

            <Heading size={"md"}>Evoluciones</Heading>
            <PokemonEvolution pokemonId={id} />
            </Container>
        </Center>
        </>
    )
}

export default Pokemon;