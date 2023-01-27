import { Box, Heading, List, ListItem, Spacer } from "@chakra-ui/react";

const PokemonMoves = ({moves}) => {
    return (
        <Box paddingY={4} minW={300} maxHeight={"80vh"}>
            <Heading size={"md"}>Movimientos</Heading>
            <Spacer height={10} />
            <List overflowY={"scroll"} maxH={"32vh"}>
                { moves.map((item, index) => <ListItem key={index} paddingX={6} paddingY={2} >{item}</ListItem>) }
            </List>
        </Box>
    );
}

export default PokemonMoves;