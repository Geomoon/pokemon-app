import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import PokemonCard from "./PokemonCard/PokemonCard";

const { SimpleGrid, Center, CircularProgress, Box, Flex, IconButton, Spacer } = require("@chakra-ui/react")

const PokemonsList = () => {
    const queryClient = useQueryClient();

    const [actualURL, setActualURL] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const [nextURL, setNextURL] = useState('');
    const [previousURL, setPreviousURL] = useState('');

    const getPokemons = async (url) =>  {
        const result = await fetch(url, { cache: 'no-store'});
        return result.json();
    }

    const {isLoading, data, error} = useQuery({
        queryKey: ["pokemonsList", actualURL],
        queryFn: () => getPokemons(actualURL),
        keepPreviousData: true,
    });

    const toNextPage = () => {
        setPreviousURL(actualURL);
        setActualURL(data.next);
    }

    const toPreviousPage = () => {
        setNextURL(actualURL);
        setActualURL(data.previous);
    }
    

    if (isLoading) {
        return <Center><CircularProgress isIndeterminate /></Center>;
    }
    
    if (error) {
        return <div>ERROR</div>
    }
    
    return (
        <Box padding={2} >
            <SimpleGrid minChildWidth={'260px'} spacing={'20px'}>
                { data && data.results.map((item, index) => <PokemonCard key={index} pokemonURL={item.url} />) }
            </SimpleGrid>
            <PaginationButtons onNext={toNextPage} onPrevious={toPreviousPage} hasNext={data.next !== null} hasPrevious={data.previous !== null}/>
        </Box>
    )
}

const PaginationButtons = ({onNext, onPrevious, hasNext, hasPrevious}) => {
    return (
        <Flex marginTop={10} align={"center"} gap={10} >
            <Spacer />
            <IconButton isDisabled={!hasPrevious} aria-label='Anterior' icon={<ArrowBackIcon />} onClick={onPrevious} />
            <IconButton isDisabled={!hasNext} aria-label='Siguiente' icon={<ArrowForwardIcon />} onClick={onNext} />
            <Spacer />
        </Flex>
    )
}

export default PokemonsList;