import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Pokemon = ({pokemon}) => {

    const router = useRouter();
    const {id} = router.query;

    return (
        <Box padding={20} >
            <div>{id}</div>
        </Box>
    )
}

export default Pokemon;