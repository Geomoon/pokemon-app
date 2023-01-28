import Link from "next/link";
import CardSkeleton from "./CardSkeleton";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const { Card, CardBody, Image, Box, Heading, Flex, Tag, Stat, StatNumber, StatHelpText, Center, Divider } = require("@chakra-ui/react")


const PokemonCard = ({pokemonURL}) => {

    const queryClient = useQueryClient();

    const urlSplit = pokemonURL.split("/");
    const pokemonId = urlSplit.slice(-2)[0];

    const getPokemon = async () => {
        const result = await fetch(pokemonURL);
        return result.json();
    }

    const {isLoading, data, error} = useQuery({
        queryKey: ["pokemon", pokemonId],
        queryFn: getPokemon,
    });

    if (isLoading) return <Center><CardSkeleton /></Center>

    if (error) return <>ERROR</>
 
    return (
        <Box maxW={'300px'}>
            <Link href={'/pokemons/' + pokemonId}>
                <Card>
                    <Image src={data.sprites.other["official-artwork"].front_default} />
                    <CardBody>
                        <Heading size={'md'} >{data.name}</Heading>
                        <Divider marginY={2} />
                        <Flex>
                            <Stat>
                                <StatNumber>{data.height}</StatNumber>
                                <StatHelpText>Altura</StatHelpText>
                            </Stat>
                            <Stat>
                                <StatNumber>{data.weight}</StatNumber>
                                <StatHelpText>Peso</StatHelpText>
                            </Stat>
                        </Flex>
                        <Flex gap={'2'}>
                            { data && data.types.map((item, index) => <Tag key={index}>{item.type.name}</Tag>) }
                        </Flex>
                    </CardBody>
                </Card>
            </Link>
        </Box>
    )
}

export default PokemonCard;