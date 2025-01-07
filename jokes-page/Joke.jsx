export default function Joke({ setup, punchline }) {
    return (
        <>
            {setup && <span>Setup: {setup}</span>}
            <p>Punchline: {punchline}</p>
        </>
    )
}