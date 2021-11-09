import React from "react";

const User=(props)=>{

    // console.warn(props);

    const {data} = props

    return (
        <div>
            <h1>Hi I Am User.</h1>
            <h2>{data.name}</h2>
            <h2>{data.roll}</h2>
        </div>
    )
}

export  default User;