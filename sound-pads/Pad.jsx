import { useState } from "react"

export default function Pad({color, on, toogle, id}) {
    console.log(id, on)
    return (
        <button onClick={() => toogle(id)} style={{backgroundColor: color}} className={on? "on" : "button"}></button>
    )
}