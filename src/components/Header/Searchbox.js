import { SearchIcon } from "@chakra-ui/icons";

const { Input, InputGroup, InputLeftElement } = require("@chakra-ui/react")

const Searchbox = () => {
    return (<>
        <InputGroup>
            <InputLeftElement children={<SearchIcon />} />
            <Input type={"text"} placeholder={"Buscar"} />
        </InputGroup>
    </>)
}

export default Searchbox;