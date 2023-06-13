import React, { Component } from 'react';
import { useEffect } from 'react'

const Favorites = () => {

    useEffect(() => {
        fetch(`/store`)
            .then(((data) => data.json()))
            .then((data)=>{
                console.log(data)
            })
    })

    return (
        <div>
            <h1>Iterate Me!</h1>
        </div>
    )
}

export default Favorites