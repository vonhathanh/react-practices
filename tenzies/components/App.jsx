import { useState } from "react";
import Dice from "./Dice"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

const NUM_DICES = 10;

function getRandomInteger(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function generateAllNewDices() {
    const dices = []
    for (let i = 0; i < NUM_DICES; i++) {
        dices.push({ value: getRandomInteger(1, 6), isHeld: false, id: nanoid() })
    }
    return dices
}


export default function App() {
    const [dices, setDices] = useState(() => generateAllNewDices())
    const [isGameWon, setIsGameWon] = useState(false)

    const diceElements = dices.map((dice) =>
        <Dice value={dice.value}
            id={dice.id}
            isHeld={dice.isHeld}
            onClick={flipDice}
            key={dice.id} />)

    function rollDices() {
        if (!isGameWon)
            setDices(oldDices =>
                oldDices.map(dice => dice.isHeld ? dice : {...dice, value: getRandomInteger(1, 6)}))
        else {
            setDices(generateAllNewDices())
            setIsGameWon(false)
        }
    }

    function flipDice(id) {
        setDices(oldDices => {
            const newDices = oldDices.map(dice => dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice)
            return newDices
        })
    }

    if (dices.every(item => item.isHeld) && dices.every(item => item.value == dices[0].value) && !isGameWon)
        setIsGameWon(true)


    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="game-board">
                {diceElements}
            </div>
            {isGameWon ? <Confetti width={400} height={400} /> : undefined}

            <button className="rollButton" onClick={rollDices}>{isGameWon ? "Start a new Game" : "Roll"}</button>
        </main>
    )
}