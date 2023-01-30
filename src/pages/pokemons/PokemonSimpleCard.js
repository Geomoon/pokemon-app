const { Box, Card, Image, CardBody, Heading } = require("@chakra-ui/react")

const PokemonSimpleCard = ({nombre, imgSrc}) => {

    return (
        <Box maxW={300} paddingX={4}>
            <Card>
                <Image src={imgSrc} />
                <CardBody>
                    <Heading size={'xl'} textAlign={"end"} >{nombre}</Heading>
                </CardBody>
            </Card>
        </Box>
    )
}

export default PokemonSimpleCard;