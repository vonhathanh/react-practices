
export default function KeyWord({word}) {
    const chars = word.split("").map((c, i) => {
        return <div key={i}>{c}</div>
    })

    return (
        <section className="keyword">{chars}</section>
    )
}