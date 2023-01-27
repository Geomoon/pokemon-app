import { Box, Flex, Heading, Spacer, Tag, Text, WrapItem } from "@chakra-ui/react";
import Logo from "./Logo";

const Header = () => {
    return (
        <Flex alignItems={"center"} borderBottom={"1px"} borderColor={"gray.300"}>
            <Box paddingX={4} paddingY={2}>
                <Logo />
            </Box>
            <Spacer />
            
            <WrapItem>
                <Text>Desarrollado por <Tag>Carlos Luna</Tag></Text>
            </WrapItem>
        </Flex>
    )
}

export default Header;