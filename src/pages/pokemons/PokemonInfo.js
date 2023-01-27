const { Box, Flex, Heading, Tag, Spacer, Stat, StatNumber, StatHelpText } = require("@chakra-ui/react")

const PokemonInfo = ({tipos, habilidades, peso, altura}) => {

    return (
        <Box paddingY={4} maxW={300}>
             <Flex direction={"column"} >
                <Stat>
                    <StatNumber>Altura</StatNumber>
                    <StatHelpText>{altura}</StatHelpText>
                </Stat>
                <Stat>
                    <StatNumber>Peso</StatNumber>
                    <StatHelpText>{peso}</StatHelpText>
                </Stat>
            </Flex>
            <Spacer height={6} />
            <Heading size={"md"}>Tipo</Heading>
            <Flex gap={'2'} marginTop={4}>
                { tipos.map((item, index) => <Tag key={index}>{item}</Tag>) }
            </Flex>
            <Spacer height={6} />
            <Heading size={"md"}>Habilidades</Heading>
            <Flex gap={'2'} marginTop={4}>
                { habilidades.map((item, index) => <Tag key={index}>{item}</Tag>) }
            </Flex>
        </Box>
    )
}

export default PokemonInfo;