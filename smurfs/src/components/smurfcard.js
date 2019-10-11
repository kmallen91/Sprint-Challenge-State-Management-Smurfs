import React from "react"

const SmurfCard = props => {

    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>
    )
}

export default SmurfCard