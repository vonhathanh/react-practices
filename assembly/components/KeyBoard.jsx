import { KEYBOARD_STATUS } from "../constants"

export default function KeyBoard({alphabet, onClick}) {

    const buttons = alphabet.map(c => {
        let style = {backgroundColor: "#FCBA29"}
        switch (c.status) {
            case KEYBOARD_STATUS.CORRECT_GUESS:
                style = {backgroundColor: "#10A95B"}
                break;
            case KEYBOARD_STATUS.INCORRECT_GUESS:
                style = {backgroundColor: "#EC5D49"}
                break;
        }
        return <button key={c.value} style={style} onClick={() => onClick(c.value)} >{c.value}</button>
    })

    return (
        <section className="keyboard">
            {buttons}
        </section>
    )
}