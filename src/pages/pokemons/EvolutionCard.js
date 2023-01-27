import CardSkeleton from "@/components/PokemonsList/PokemonCard/CardSkeleton";
import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const EvolutionCard = ({nombre}) => {

    const queryClient = useQueryClient();
    
    const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
        const result = await fetch(url);
        return result.json();
    }

    const {isLoading, data, error} = useQuery({
        queryKey: ["pokemon-name", nombre],
        queryFn: getPokemon,
    });

    if (isLoading) {
        return  <CardSkeleton />
    }
    if (error) {
        return <>ERROR</>
    }

    return (
        <Box maxW={'300px'}>
            <Card>
                <Image src={data.sprites.other["official-artwork"].front_default} />
                    <CardBody>
                        <Heading size={'md'} >{nombre}</Heading>
                    </CardBody>
            </Card>
        </Box>
    )
}

export default EvolutionCard;