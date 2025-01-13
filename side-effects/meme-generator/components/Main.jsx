import { useEffect, useState } from "react"

export default function Main() {
    /**
     * Challenge: move the hardcoded meme info into React
     * state. Use an object with `topText`, `bottomText`,
     * and `image` properties, and set the initial values to
     * the ones hardcoded below.
     */

    let [memeImages, setMemeImages] = useState([])

    const [memeInfo, setMemeInfo] = useState({
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor"
    })

    function handleKeyPressed(e) {
        const { value, name } = e.currentTarget
        setMemeInfo(meme => ({
            ...meme,
            [name]: value
        }))
    }

    function selectNewMeme() {
        const index = Math.floor(Math.random() * memeImages.length)
        setMemeInfo({
            ...memeInfo,
            imageUrl: memeImages[index].url
        })
    }

    useEffect(() => {
        console.log("effect is used")
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(result => {
            setMemeImages(result.data.memes)
        })
    }, [])

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleKeyPressed}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleKeyPressed}
                    />
                </label>
                <button onClick={selectNewMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeInfo.imageUrl} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
        </main>
    )
}