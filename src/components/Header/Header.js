import { Box, Flex, Heading, Spacer, Tag, Text, WrapItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Searchbar from "../Searchbar/Searchbar";
import Logo from "./Logo";

const Header = () => {
    const router = useRouter();

    const onSearchPokemon = (value) => {
        router.push(`/pokemons/${value}`);
    }

    return (
        <Flex alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap-reverse"} borderBottom={"1px"} borderColor={"gray.300"}>
            <Box paddingX={4} paddingY={2}>
                <Logo />
            </Box>
            <Spacer />
            <Searchbar onSearch={onSearchPokemon} />
            <Spacer />
            <WrapItem>
                <Text>Desarrollado por <Tag>Carlos Luna</Tag></Text>
            </WrapItem>
        </Flex>
    )
}

export default Header;