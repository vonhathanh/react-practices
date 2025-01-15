
export default function KeyWord({word}) {
    const chars = word.split("").map(c => {
        return <div>{c}</div>
    })

    return (
        <section className="keyword">{chars}</section>
    )
}