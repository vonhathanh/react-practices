import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        console.log("effect fn ran")
        const url = `https://api.etherscan.io/v2/api?
                        chainid=${count}
                        &module=account
                        &action=balance
                        &address=0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511
                        &tag=latest&apikey=XCUKA5VFUBN9J39Q5DTAA15TY7PJSA5CUC`
        console.log("url ", url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setStarWarsData(data)
            })
    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}