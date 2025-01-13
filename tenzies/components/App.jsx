import Dice from "./Dice"

export default function App() {
    return (
        <main>
            <div className="game-board">
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
            </div>
        </main>
    )
}