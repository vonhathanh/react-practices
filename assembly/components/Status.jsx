import { getFarewellText } from "../utils"

export default function Status({ isGameOver, isGameWon, deadLanguage }) {
    let style = { backgroundColor: "#262626" }

    if (deadLanguage)
        style = { backgroundColor: "#7A5EA7" }
    if (isGameOver)
        style = { backgroundColor: "#BA2A2A" }
    if (isGameWon)
        style = { backgroundColor: "#10A95B" }

    function renderStatus() {
        if (isGameOver) {
            return (
                <>
                    <h3>Game over!</h3>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        } else if (isGameWon) {
            return (
                <>
                    <h3>You win</h3>
                    <p>Well done! 🎉</p>
                </>
            )
        }

        if (deadLanguage) {
            return (
                <>
                    <h3>{getFarewellText(deadLanguage)}</h3>
                </>
            )
        } else return null;
    }

    return (
        <section className="status" style={style} >
            {renderStatus()}
        </section>
    )
}