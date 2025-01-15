export default function KeyBoard({alphabet}) {

    const buttons = alphabet.split("").map(c => {
        return <button key={c}>{c.toUpperCase()}</button>
    })

    return (
        <section className="keyboard">
            {buttons}
        </section>
    )
}