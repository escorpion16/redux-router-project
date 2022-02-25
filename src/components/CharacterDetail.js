import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function CharacterDetail() {
    const { id } = useParams()

    const [ character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacter(res.data))
    },[id])

    return (
        <div>
            <h1>Character Detail</h1>
            <div>{ character.name }</div>
            <img src={character.image} alt={character.name} />
            <div>{ character.gender }</div>
            <div>{ character.status }</div>
            <div>{ character.species }</div>
        </div>
    )
}

export default CharacterDetail
