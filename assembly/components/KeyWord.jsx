
export default function KeyWord({word, guessedChars}) {
    const chars = word.split("").map((c, i) => {
        c = guessedChars.includes(c) ? c : ''
        return <div key={i}>{c}</div>
    })

    return (
        <section className="keyword">{chars}</section>
    )
}