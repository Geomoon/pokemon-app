import CardSkeleton from "@/components/PokemonsList/PokemonCard/CardSkeleton";
import { Box, Center, Divider, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Error from "next/error";
import { useRouter } from "next/router";
import { useState } from "react";
import NotFound from "../404";
import PokemonEvolution from "./PokemonEvolution";
import PokemonInfo from "./PokemonInfo";
import PokemonMoves from "./PokemonMoves";
import PokemonSimpleCard from "./PokemonSimpleCard";

const Pokemon = ({pokemon}) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const {id} = router.query;
    const [evolutionId, setEvolutionId] = useState(undefined);

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const getPokemon = async () => {
        const timeout = 3000;
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        const result = await fetch(url, {signal: controller.signal});
        clearTimeout(id);

        return result.json();
    }

    const {isLoading, data, error, isSuccess} = useQuery({
        queryKey: ["pokemon-profile", id],
        queryFn: getPokemon,
    });

    const findEvolutionID = async () => {
        const url = data.species.url;
        const res = await fetch(url);
        res.json()
            .then((value) => {
                const evolutionURL = value.evolution_chain.url;
                const urlSplit = evolutionURL.split("/");
                setEvolutionId(urlSplit.slice(-2)[0]);
            })
    }

    if (isLoading) return <Center><CardSkeleton /></Center>;

    if (error) return <NotFound />;

    if (isSuccess) {
        findEvolutionID();
 
        return (<>
            <Center padding={20} bg={"brand.100"} >
                <SimpleGrid minChildWidth={"300px"} columns={3} padding={2} maxW={"80vw"} justifyItems={"center"} >
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
            <Divider/>
            <Spacer height={10} />
            <Center >
                <Box minW={"80vw"} paddingY={4} >
                    <Heading textAlign={"center"} size={"md"} paddingY={4} >Evoluciones</Heading>
                    {
                        evolutionId !== undefined && <PokemonEvolution evolutionId={evolutionId} />
                    }
                </Box>
            </Center>
            </>
        )
    }
    return <></>;
}

export default Pokemon;