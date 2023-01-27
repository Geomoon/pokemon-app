import { Image } from "@chakra-ui/react";
import Link from "next/link"

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image src={"/pokemon-logo.png"} alt={"logo"} boxSize={"48px"} />
        </Link>
    )
}

export default Logo;