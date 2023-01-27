import { useRouter } from "next/router";

const Pokemon = ({pokemon}) => {

    const router = useRouter();
    const {id} = router.query;

    return (
        <h3>POKEMON CARD: {id}</h3>
    )
}

export default Pokemon;