import { SearchIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const Searchbar = ({onSearch}) => {

    const [input, setInput] = useState('');

    const onKeyUp = (event) => {
        setInput(event.target.value);
        if(event.key === 'Enter'){
            onSearch(event.target.value);
        }
    }

    return (
        <Box>
            <InputGroup>
                <Input placeholder='Buscar pokémons' onKeyUp={onKeyUp} />
                <InputRightElement >
                <IconButton aria-label='Search pokemon' onClick={(e) => onSearch(input)}><SearchIcon /></IconButton>
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}

export default Searchbar;