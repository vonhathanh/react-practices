
export default function KeyWord({ word, guessedChars, isGameOver }) {
    const gameOverStyle = { color: "red" }

    const chars = word.split("").map((c, i) => {
        if (guessedChars.includes(c))
            return <div key={i}>{c}</div>
        if (isGameOver)
            return <div key={i} style={gameOverStyle}>{c}</div>
        else
            return <div key={i}></div>
    })

    return (
        <section className="keyword">{chars}</section>
    )
}