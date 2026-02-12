import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";

function PlayGame() {
    // const [ searchParams ]  = useSearchParams();
    // console.log(searchParams.get("text"));

    // const { text } = useParams()

    const { state } = useLocation()
    return (
        <>
            <h1>Play Game {state.wordSelected}</h1>
            <MaskedText text={state.wordSelected} guessedLetters={[]} />
            <Link to="/start">
                <h3 className="text-xl font-bold text-blue-500">
                    Go to Start Page
                </h3>
            </Link>
        </>
    )
}

export default PlayGame