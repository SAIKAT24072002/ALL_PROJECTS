//generate Masking Text function will be an utlity function which will help Masked Text react component to achive the desire output --> "HUMBLE"--> ["_", "_", "M", "_", "_","_"]

function generateMaskingText(originalWord, guessedLetter) {
    //"Humble" -->  ["_", "_", "M", "_", "_","_"]
    guessedLetter = guessedLetter.map((letter) => letter.toUpperCase());

    //to get a first search result by using Set Data Strucutre
    const guessedLetterSet = new Set(guessedLetter);

    //to check the original letters is matched with the guessed letters
    const result = originalWord.toUpperCase().split("").map((char) => {
        if (guessedLetterSet.has(char)) {
            return char;
        } else {
            return "_";
        }
    })
    return result;
}

export default generateMaskingText;