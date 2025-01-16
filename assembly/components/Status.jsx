export default function Status({isGameOver, isGameWon}) {
    let style = {backgroundColor: "#262626"}

    if (isGameOver)
        style = { backgroundColor: "#BA2A2A"}
    else if (isGameWon) 
        style = { backgroundColor: "#10A95B"}

    return (
        <section className="status" style={style} >
            <h3>{isGameOver ? "Game over!" : isGameWon ? "You win": ""}</h3>
            <p>{isGameOver ? "You lose! Better start learning Assembly 😭" : isGameWon ? "Well done! 🎉": ""}</p>
        </section>
    )
}