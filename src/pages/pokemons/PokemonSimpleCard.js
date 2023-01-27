const { Box, Card, Image, CardBody, Heading, Flex, Stat, StatNumber, StatHelpText } = require("@chakra-ui/react")

const PokemonSimpleCard = ({nombre, imgSrc}) => {

    return (
        <Box maxW={300}>
            <Card>
                <Image src={imgSrc} />
                <CardBody>
                    <Heading size={'xl'} >{nombre}</Heading>
                </CardBody>
            </Card>
        </Box>
    )
}

export default PokemonSimpleCard;