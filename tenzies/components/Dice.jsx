export default function Dice(props) {
    const bgStyle = {backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"}
    return (
        <button className="dice" style={bgStyle} onClick={() => props.onClick(props.id)}>{props.value} </button>
    )
}