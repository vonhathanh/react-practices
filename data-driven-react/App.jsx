import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    const entries = data.map((entry) => {
        return <Entry
            key={entry.id}
            entry={entry}
        />
    })

    return (
        <>
            <Header />
            <main className="container">
                {entries}
            </main>
        </>
    )
}