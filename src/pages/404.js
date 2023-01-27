import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";

const { Center, Text, Stack, Button } = require("@chakra-ui/react")

const NotFound = () => {
    return <Center height={"80vh"}>
        <Stack>
            <Text>Página no encontrada</Text>
            <Link href={'/'}>
            <Button rightIcon={<ArrowBackIcon />} colorScheme='teal' variant='outline'>
                Regresar
            </Button>
            </Link> 
        </Stack>
    </Center>
}

export default NotFound;