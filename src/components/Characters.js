import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import CharacterInfo from './CharacterInfo';



function Characters() {

    const name = useSelector(state =>  state.name)

    const [ characters, setCharacters] = useState([])
    const [ locations, setLocations ] = useState([])
    const [ selectedCharacter, setSelectedCharacter ] = useState("")

    const  [ page, setPage ] = useState(1)

    const navigate =  useNavigate()

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => setCharacters(res.data.results.map(resident => resident.url)))
    },[])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location")
        .then(res => setLocations(res.data.results))
    },[])


    const filterCharacters = id => {
        const location = locations.find(location => location.id === +id)
        setCharacters(location.residents)
        setPage(1)
    }

    const search = () => {
        navigate(`/characters/${selectedCharacter}`)
    }

    const charactersPerPage = 9;

    const lastIndex = page * charactersPerPage;
    const firstIndex = lastIndex - charactersPerPage;

    const paginatedCharacters = characters.slice(firstIndex,lastIndex);

    const totalPages = Math.ceil(characters.length / charactersPerPage)
    console.log(totalPages)

    const pagesNumbers = []

    for(let i=1; i <= totalPages; i++){
        pagesNumbers.push(i)
    }
    console.log(pagesNumbers)

    return (
        <div>
            Characters
            <h2>welcome {name}</h2>
            <select onChange={e => filterCharacters(e.target.value)}>
                { locations.map(location => <option value={location.id} key={location.id}>{location.name}</option>) }
            </select>
            <input value={selectedCharacter} onChange={e => setSelectedCharacter(e.target.value)} />
            <button onClick={search}> Search </button>
            <ul className='characters-list'>
                { paginatedCharacters.map(character => 
                    <li className='characters-column' key={character}>
                        <CharacterInfo url={character}  />
                    </li>
                )}
            </ul>
            {
                page !== 1 && (<button onClick={() => setPage(page - 1)}>Pagina anterior</button>)
            }
            {page} / {totalPages}
            { pagesNumbers.map(number => <button key={number} onClick={() => setPage(number)}>{number}</button>)}
            {
                page !== totalPages && (<button onClick={() => setPage(page + 1)}>Pagina siguiente</button>)
            }
        </div>
    )
}

export default Characters
