import { useState } from "react";
import Dice from "./Dice"

const NUM_DICES = 10;

function getRandomInteger(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}


function generateAllNewDices() {
    const dices = []
    for (let i = 0; i < NUM_DICES; i++) {
        dices.push(getRandomInteger(1, 6))
    }
    return dices
}

export default function App() {
    const [dices, setDices] = useState(generateAllNewDices())
    const diceElements = dices.map((dice, index) => <Dice value={dice} key={index} />)
    return (
        <main>
            <div className="game-board">
                {diceElements}
            </div>

            <button className="rollButton">Roll</button>
        </main>
    )
}