import React, { useState } from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import ProgrammingLanguages from "./components/ProgrammingLanguages"
import KeyWord from "./components/KeyWord"
import KeyBoard from "./components/KeyBoard"
import {languages} from "./languages"
import { KEYBOARD_STATUS } from "./constants"

export default function Hangman() {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const [keyWord, setKeytWord] = useState("react")
    const [guessedChars, setGuessedChars] = useState([])
    const [keyPressedStatuses, setkeyStatuses] = useState(alphabet.split("").map(c => {
        return {
            value: c.toUpperCase(),
            status: KEYBOARD_STATUS.UNPRESSED
        }
    }))

    function handleKeyboardClick(char) {
        if (keyWord.includes(char.toLowerCase())) {
            setkeyStatuses(oldStatuses => oldStatuses.map(status => {
                if (status.value == char)
            }))
        }

        const status = keyPressedStatuses.find(element => element.value === char)
        if (keyWord.includes(status.value.toLowerCase())) {

        }
        if (status.KEYBOARD_STATUS)
        setGuessedChars(prevChars => prevChars.includes(char) ? prevChars : [...prevChars, char])

    }

    return (
        <main>
            <Header />
            <Status />
            <ProgrammingLanguages languages={languages}/>
            <KeyWord word={keyWord}/>
            <KeyBoard alphabet={keyPressedStatuses} onClick={handleKeyboardClick} />
            <button className="new-game">New Game</button>
        </main>
    )
}
