function LanguageLabel(props) {
    const style = { backgroundColor: props.backgroundColor, color: props.color }
    return (
        <span style={style}>{props.name}</span>
    )
}


export default function ProgrammingLanguages({ languages }) {
    const languageLables = languages.map((language, i) => {
        return <LanguageLabel {...language} key={i} />
    })

    return (
        <section className="languages">
            {languageLables}
        </section>
    )
}