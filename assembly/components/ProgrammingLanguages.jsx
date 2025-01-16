function LanguageLabel(props) {
    const style = { backgroundColor: props.backgroundColor, color: props.color }
    return (
        <span style={style} className={props.lost ? "chip lost" : "chip"} >{props.name}</span>
    )
}


export default function ProgrammingLanguages({ languages, wrongGuessCount }) {
    const languageLables = languages.map((language, i) => {
        return <LanguageLabel {...language} key={i} lost={i < wrongGuessCount ? true : false}/>
    })

    return (
        <section className="languages">
            {languageLables}
        </section>
    )
}