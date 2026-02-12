import generateMaskingText from "./generateMaskingText";

function MaskedText({ text, guessedLetters }) { // expecting two props original word and word guessed by the user

    const maskedText = generateMaskingText(text, guessedLetters);

    return (
        <>
            {
                maskedText && maskedText.map((letter, index) => {
                    return (
                        <span key={index} className="mx-2">
                            {letter}
                        </span>
                    )
                })
            }
        </>
    );
}

export default MaskedText;