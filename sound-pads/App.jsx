import { useState } from "react"
import pads from "./pads"
import Pad from "./Pad"

export default function App(props) {
    const [soundPads, setSoundPads] = useState(pads)

    function toogle(id) {
        console.log("toolging ", id)
        setSoundPads(oldPads => oldPads.map(item => {
            return item.id == id ? {...item, on: !item.on} : item
        }))
    }

    const padButtons = soundPads.map(pad => {
        return <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} toogle={toogle} />
    })
    return (
        <main>
            <div className="pad-container">
                {padButtons}
            </div>
        </main>
    )
}
