import { useState } from "react"

export default function Joke({ setup, punchline }) {

    const [isShown, setIsShown] = useState(false)

    function onClick() {
        setIsShown(oldValue => !oldValue)
    }

    return (
        <>
            {setup && <h3>Setup: {setup}</h3>}
            <p>{isShown && punchline}</p>
            <button onClick={onClick}>Show punchline</button>
        </>
    )
}