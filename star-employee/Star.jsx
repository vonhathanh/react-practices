import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function Star(props) {

    let starIcon = props.isFavorite ? starFilled : starEmpty

    return (
        <button
            aria-pressed={props.isFavorite}
            aria-label={props.isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
            onClick={props.handleClick}
        >
            <img
                src={starIcon}
                alt={props.isFavorite ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}