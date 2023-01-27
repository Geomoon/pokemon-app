import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Logo from "./Logo";
import Searchbox from "./Searchbox";

const Header = () => {
    return (
        <Flex alignItems={"center"} borderBottom={"1px"} borderColor={"gray.300"}>
            <Box paddingX={4} paddingY={2}>
                <Logo />
            </Box>
            <Spacer />
            <Box>
                <Searchbox />
            </Box>
            <Spacer />
        </Flex>
    )
}

export default Header;