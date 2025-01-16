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
    const [deadLanguage, setDeadLanguage] = useState("")

    const wrongGuessCount = guessedChars.reduce((sum, char) => keyWord.includes(char) ? sum += 0 : sum += 1, 0);

    const isGameOver = languages.length - 1 <= wrongGuessCount;
    const isGameWon = guessedChars.length - wrongGuessCount >= new Set(keyWord.split("")).size

    function handleKeyboardClick(char) {
        setDeadLanguage(!keyWord.includes(char) ? languages[wrongGuessCount].name : "")
        setGuessedChars((prevChars) =>
            prevChars.includes(char) ? prevChars : [...prevChars, char]
        );

    }

    return (
        <main>
            <Header />
            <Status
                isGameOver={isGameOver}
                isGameWon={isGameWon}
                deadLanguage={deadLanguage} />
            <ProgrammingLanguages languages={languages} wrongGuessCount={wrongGuessCount} />
            <KeyWord word={keyWord} guessedChars={guessedChars} />
            <KeyBoard
                alphabet={alphabet}
                guessedChars={guessedChars}
                keyWord={keyWord}
                onClick={handleKeyboardClick}
                disabled={isGameOver || isGameWon}
            />
            {isGameOver && <button className="new-game">New Game</button>}
        </main>
    );
}
