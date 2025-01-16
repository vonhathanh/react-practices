export default function KeyBoard({alphabet, guessedChars, keyWord, onClick, disabled}) {

    const buttons = alphabet.split("").map(c => {
        let style = {backgroundColor: "#FCBA29"}
        if (guessedChars.includes(c)) {
            style = keyWord.includes(c) ? {backgroundColor: "#10A95B"} : {backgroundColor: "#EC5D49"}
        }
        return <button key={c} style={style} onClick={() => onClick(c)} disabled={disabled}>{c.toUpperCase()}</button>
    })

    return (
        <section className="keyboard">
            {buttons}
        </section>
    )
}