import React, { useState } from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import ProgrammingLanguages from "./components/ProgrammingLanguages";
import KeyWord from "./components/KeyWord";
import KeyBoard from "./components/KeyBoard";
import { languages } from "./languages";

export default function Hangman() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const [keyWord, setKeytWord] = useState("react");
    const [guessedChars, setGuessedChars] = useState([]);

    const wrongGuessCount = guessedChars.reduce((sum, char) => keyWord.includes(char) ? sum += 0 : sum += 1, 0);

    function handleKeyboardClick(char) {
        setGuessedChars((prevChars) =>
            prevChars.includes(char) ? prevChars : [...prevChars, char]
        );
    }

    return (
        <main>
            <Header />
            <Status />
            <ProgrammingLanguages languages={languages} />
            <KeyWord word={keyWord} guessedChars={guessedChars} />
            <KeyBoard alphabet={alphabet} guessedChars={guessedChars} keyWord={keyWord} onClick={handleKeyboardClick} />
            <button className="new-game">New Game</button>
        </main>
    );
}
