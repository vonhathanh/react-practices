import Joke from "./Joke";
import jokesData from "./jokesData"

export default function App() {
    const jokes = jokesData.map((joke) => {
        return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <main>
            {jokes}
        </main>
    )
}