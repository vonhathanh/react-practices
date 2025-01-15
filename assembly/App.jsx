import React from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import ProgrammingLanguages from "./components/ProgrammingLanguages"
import {languages} from "./languages"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

export default function Hangman() {
    return (
        <main>
            <Header />
            <Status />
            <ProgrammingLanguages languages={languages}/>
        </main>
    )
}
